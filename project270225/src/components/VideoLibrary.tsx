import React, { useState } from 'react';
import { Video } from '../types';
import { 
  FileVideo, 
  Search, 
  Filter, 
  Play, 
  Clock, 
  Eye, 
  Plus,
  X
} from 'lucide-react';

interface VideoLibraryProps {
  videos: Video[];
}

const VideoLibrary: React.FC<VideoLibraryProps> = ({ videos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

  const categories = ['all', ...Array.from(new Set(videos.map(video => video.category)))];

  const filteredVideos = videos.filter(video => 
    (selectedCategory === 'all' || video.category === selectedCategory) &&
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVideoClick = (video: Video) => {
    setCurrentVideo(video);
    setShowVideoModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Video Library</h1>
          <p className="text-gray-600">Training and educational resources</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors">
          <Plus size={18} className="mr-2" />
          Upload Video
        </button>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="h-16 w-16 rounded-full bg-indigo-600 bg-opacity-90 flex items-center justify-center">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{new Date(video.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                  {video.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideoModal && currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{currentVideo.title}</h2>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-black mb-4">
                <div className="w-full h-0 pb-[56.25%] relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="text-center">
                      <Play size={64} className="text-white mx-auto mb-2 opacity-50" />
                      <p className="text-white text-sm">Video player would load here</p>
                      <p className="text-gray-400 text-xs mt-1">URL: {currentVideo.url}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{currentVideo.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Eye size={14} className="mr-1" />
                    <span>{currentVideo.views} views</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock size={14} className="mr-1" />
                    <span>{currentVideo.duration}</span>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                      {currentVideo.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  This video provides valuable information about {currentVideo.title.toLowerCase()}. 
                  Watch it to learn more about our platform and how to maximize your results.
                </p>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowVideoModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;