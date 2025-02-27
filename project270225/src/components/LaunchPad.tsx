import React, { useState } from 'react';
import { 
  Rocket, 
  Calendar, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Plus
} from 'lucide-react';

interface LaunchStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  dueDate: string;
}

interface LaunchProject {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'launching' | 'completed';
  progress: number;
  teamMembers: number;
  launchDate: string;
  steps: LaunchStep[];
}

const mockProjects: LaunchProject[] = [
  {
    id: '1',
    title: 'Summer Referral Campaign',
    description: 'Launch of the summer referral program with increased rewards',
    status: 'in-progress',
    progress: 65,
    teamMembers: 4,
    launchDate: '2023-07-15T00:00:00Z',
    steps: [
      {
        id: '1-1',
        title: 'Campaign Strategy',
        description: 'Define target audience, goals, and KPIs',
        status: 'completed',
        dueDate: '2023-06-01T00:00:00Z'
      },
      {
        id: '1-2',
        title: 'Creative Assets',
        description: 'Design landing pages, emails, and social media content',
        status: 'completed',
        dueDate: '2023-06-15T00:00:00Z'
      },
      {
        id: '1-3',
        title: 'Technical Setup',
        description: 'Configure tracking, referral codes, and reward system',
        status: 'in-progress',
        dueDate: '2023-06-30T00:00:00Z'
      },
      {
        id: '1-4',
        title: 'Launch & Promotion',
        description: 'Go live with campaign and promote across channels',
        status: 'pending',
        dueDate: '2023-07-15T00:00:00Z'
      }
    ]
  },
  {
    id: '2',
    title: 'Enterprise Client Portal',
    description: 'New portal for enterprise clients with advanced analytics',
    status: 'planning',
    progress: 25,
    teamMembers: 6,
    launchDate: '2023-08-30T00:00:00Z',
    steps: [
      {
        id: '2-1',
        title: 'Requirements Gathering',
        description: 'Collect and document client requirements',
        status: 'completed',
        dueDate: '2023-06-15T00:00:00Z'
      },
      {
        id: '2-2',
        title: 'UX/UI Design',
        description: 'Create wireframes and design mockups',
        status: 'in-progress',
        dueDate: '2023-07-15T00:00:00Z'
      },
      {
        id: '2-3',
        title: 'Development',
        description: 'Build frontend and backend components',
        status: 'pending',
        dueDate: '2023-08-15T00:00:00Z'
      },
      {
        id: '2-4',
        title: 'Testing & Launch',
        description: 'QA testing and production deployment',
        status: 'pending',
        dueDate: '2023-08-30T00:00:00Z'
      }
    ]
  },
  {
    id: '3',
    title: 'Mobile App Release',
    description: 'Launch of the iOS and Android mobile applications',
    status: 'launching',
    progress: 90,
    teamMembers: 5,
    launchDate: '2023-06-30T00:00:00Z',
    steps: [
      {
        id: '3-1',
        title: 'Feature Finalization',
        description: 'Finalize feature set for initial release',
        status: 'completed',
        dueDate: '2023-05-01T00:00:00Z'
      },
      {
        id: '3-2',
        title: 'Development',
        description: 'Complete app development for both platforms',
        status: 'completed',
        dueDate: '2023-06-01T00:00:00Z'
      },
      {
        id: '3-3',
        title: 'Beta Testing',
        description: 'Conduct beta testing with select users',
        status: 'completed',
        dueDate: '2023-06-15T00:00:00Z'
      },
      {
        id: '3-4',
        title: 'App Store Submission',
        description: 'Submit to Apple App Store and Google Play',
        status: 'in-progress',
        dueDate: '2023-06-25T00:00:00Z'
      }
    ]
  }
];

const LaunchPad: React.FC = () => {
  const [projects, setProjects] = useState<LaunchProject[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<LaunchProject | null>(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  const getStatusColor = (status: LaunchProject['status']) => {
    switch (status) {
      case 'planning':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'launching':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStepStatusIcon = (status: LaunchStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'in-progress':
        return <Clock size={18} className="text-yellow-500" />;
      case 'pending':
        return <AlertCircle size={18} className="text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">LaunchPad</h1>
          <p className="text-gray-600">Plan, manage, and launch your marketing campaigns</p>
        </div>
        <button 
          onClick={() => setShowNewProjectModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
        >
          <Plus size={18} className="mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Active Projects</h2>
            <Rocket className="text-indigo-500" size={20} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">{projects.length}</p>
            <p className="text-gray-600 mt-1">Projects in pipeline</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Launches</h2>
            <Calendar className="text-indigo-500" size={20} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">
              {projects.filter(p => p.status === 'launching').length}
            </p>
            <p className="text-gray-600 mt-1">Launches this month</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Team Members</h2>
            <Users className="text-indigo-500" size={20} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">
              {projects.reduce((sum, project) => sum + project.teamMembers, 0)}
            </p>
            <p className="text-gray-600 mt-1">Assigned to projects</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Launch Projects</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 mr-3">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)} capitalize`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-semibold text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-indigo-600" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>Launch: {new Date(project.launchDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{project.teamMembers} team members</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 size={16} className="mr-1" />
                      <span>{project.steps.filter(s => s.status === 'completed').length}/{project.steps.length} steps completed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold text-gray-800 mr-3">{selectedProject.title}</h2>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedProject.status)} capitalize`}>
                    {selectedProject.status.replace('-', ' ')}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Overview</h3>
                <p className="text-gray-600">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Launch Date</div>
                    <div className="text-base font-medium text-gray-900 flex items-center">
                      <Calendar size={16} className="mr-1 text-indigo-500" />
                      {new Date(selectedProject.launchDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Team Size</div>
                    <div className="text-base font-medium text-gray-900 flex items-center">
                      <Users size={16} className="mr-1 text-indigo-500" />
                      {selectedProject.teamMembers} members
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Completion</div>
                    <div className="text-base font-medium text-gray-900 flex items-center">
                      <BarChart3 size={16} className="mr-1 text-indigo-500" />
                      {selectedProject.progress}% complete
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className="h-2.5 rounded-full bg-indigo-600" 
                    style={{ width: `${selectedProject.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  {selectedProject.steps.filter(s => s.status === 'completed').length} of {selectedProject.steps.length} steps completed
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Launch Steps</h3>
                <div className="space-y-4">
                  {selectedProject.steps.map((step, index) => (
                    <div key={step.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          {getStepStatusIcon(step.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-medium text-gray-800">{index + 1}. {step.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              step.status === 'completed' ? 'bg-green-100 text-green-800' :
                              step.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            } capitalize`}>
                              {step.status.replace('-', ' ')}
                            </span>
                          </div>
                          <div className="mt-2 text-xs text-gray-500 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>Due: {new Date(step.dueDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end space-x-4">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button 
                  className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Edit Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Create New Project</h2>
                <button 
                  onClick={() => setShowNewProjectModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter project title"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter project description"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                      Status *
                    </label>
                    <select
                      id="status"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="planning">Planning</option>
                      <option value="in-progress">In Progress</option>
                      <option value="launching">Launching</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="launchDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Launch Date *
                    </label>
                    <input
                      type="date"
                      id="launchDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700 mb-1">
                      Team Members *
                    </label>
                    <input
                      type="number"
                      id="teamMembers"
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Number of team members"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">
                      Initial Progress (%) *
                    </label>
                    <input
                      type="number"
                      id="progress"
                      min="0"
                      max="100"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Initial progress percentage"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Steps
                  </label>
                  <div className="space-y-3 border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Step 1 Title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Step 2 Title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-500 focus:outline-none"
                    >
                      + Add Another Step
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    type="button"
                    onClick={() => setShowNewProjectModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaunchPad;