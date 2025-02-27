import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit, 
  Save, 
  X, 
  CheckCircle,
  RefreshCw
} from 'lucide-react';

interface UserProfileProps {
  userName: string;
  userRole: string;
  userEmail?: string;
  userPhone?: string;
  userLocation?: string;
  userJoined?: string;
  userAvatar?: string;
  onUpdateProfile?: (profileData: any) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  userName, 
  userRole, 
  userEmail = 'admin@example.com',
  userPhone = '+1 (555) 123-4567',
  userLocation = 'New York, USA',
  userJoined = '2023-01-01',
  userAvatar,
  onUpdateProfile
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: userName,
    role: userRole,
    email: userEmail,
    phone: userPhone,
    location: userLocation,
    bio: 'Experienced professional with expertise in lead generation and customer relationship management.'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      if (onUpdateProfile) {
        onUpdateProfile(profileData);
      }
      setIsSaving(false);
      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const handleCancel = () => {
    setProfileData({
      name: userName,
      role: userRole,
      email: userEmail,
      phone: userPhone,
      location: userLocation,
      bio: 'Experienced professional with expertise in lead generation and customer relationship management.'
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {saveSuccess && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg m-4 flex items-center text-green-700">
          <CheckCircle size={18} className="mr-2" />
          Profile updated successfully!
        </div>
      )}
      
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
            >
              <Edit size={16} className="mr-1" />
              Edit Profile
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md flex items-center hover:bg-gray-300"
              >
                <X size={16} className="mr-1" />
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-3 py-1 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
                disabled={isSaving}
              >
                {isSaving ? (
                  <RefreshCw size={16} className="mr-1 animate-spin" />
                ) : (
                  <Save size={16} className="mr-1" />
                )}
                Save
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
            <div className="h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold mb-4">
              {userAvatar ? (
                <img 
                  src={userAvatar} 
                  alt={userName} 
                  className="h-32 w-32 rounded-full object-cover"
                />
              ) : (
                profileData.name.charAt(0)
              )}
            </div>
            
            {isEditing && (
              <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm hover:bg-indigo-200">
                Change Photo
              </button>
            )}
            
            <div className="mt-4 text-center">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="text-xl font-semibold text-gray-800 text-center border-b border-gray-300 focus:outline-none focus:border-indigo-500 w-full"
                />
              ) : (
                <h3 className="text-xl font-semibold text-gray-800">{profileData.name}</h3>
              )}
              <p className="text-indigo-600 mt-1">{profileData.role}</p>
              <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
                <Calendar size={14} className="mr-1" />
                Joined {new Date(userJoined).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Bio</h4>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                ) : (
                  <p className="text-gray-700">{profileData.bio}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Mail size={16} className="mr-1" /> Email
                  </h4>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.email}</p>
                  )}
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Phone size={16} className="mr-1" /> Phone
                  </h4>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.phone}</p>
                  )}
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <MapPin size={16} className="mr-1" /> Location
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.location}</p>
                  )}
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <User size={16} className="mr-1" /> Role
                  </h4>
                  <p className="text-gray-700">{profileData.role}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Account Status</h4>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                  <span className="ml-2 text-sm text-gray-600">Last active: Today at 10:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;