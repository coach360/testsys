import React, { useState } from 'react';
import { AnalyticsData } from '../types';
import { Calendar, ChevronDown, Download, RefreshCw, MapPin } from 'lucide-react';

interface AnalyticsProps {
  analytics: AnalyticsData;
}

const Analytics: React.FC<AnalyticsProps> = ({ analytics }) => {
  const [dateRange, setDateRange] = useState('last30');
  const [showMap, setShowMap] = useState(false);

  // Mock data for organization members on map
  const organizationMembers = [
    { id: 1, name: 'Sarah Johnson', location: { lat: 40.7128, lng: -74.0060 }, city: 'New York, USA', role: 'Manager' },
    { id: 2, name: 'Michael Chen', location: { lat: 34.0522, lng: -118.2437 }, city: 'Los Angeles, USA', role: 'Agent' },
    { id: 3, name: 'Jessica Williams', location: { lat: 51.5074, lng: -0.1278 }, city: 'London, UK', role: 'Agent' },
    { id: 4, name: 'David Rodriguez', location: { lat: 19.4326, lng: -99.1332 }, city: 'Mexico City, Mexico', role: 'Agent' },
    { id: 5, name: 'Maria Rodriguez', location: { lat: -34.6037, lng: -58.3816 }, city: 'Buenos Aires, Argentina', role: 'Agent' }
  ];

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
          <p className="text-gray-600">Track and analyze your prospecting performance</p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-700 pl-3 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="last7">Last 7 days</option>
              <option value="last30">Last 30 days</option>
              <option value="last90">Last 90 days</option>
              <option value="year">This year</option>
              <option value="custom">Custom range</option>
            </select>
            <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={18} />
          </div>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50 transition-colors">
            <Download size={18} className="mr-2" />
            Export
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors">
            <RefreshCw size={18} className="mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Leads</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.leadsGenerated}</p>
            <div className="flex items-center mt-2">
              <span className="text-green-500 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 -7m0 0l7 7m-7-7v18" />
                </svg>
                12.5%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Conversions</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.leadsConverted}</p>
            <div className="flex items-center mt-2">
              <span className="text-green-500 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                8.2%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.conversionRate}%</p>
            <div className="flex items-center mt-2">
              <span className="text-red-500 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                2.3%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Referrals</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.activeReferrals}</p>
            <div className="flex items-center mt-2">
              <span className="text-green-500 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                5.0%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs last period</span>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Map */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Organization Members Map</h2>
          <button 
            onClick={toggleMap}
            className="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <MapPin size={18} className="mr-1" />
            {showMap ? 'Hide Map' : 'Show Map'}
          </button>
        </div>
        {showMap && (
          <div className="p-6">
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative">
              {/* This would be replaced with an actual Google Maps integration */}
              <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="World Map" 
                  className="w-full h-full object-cover opacity-50"
                />
                
                {/* Mock map pins */}
                {organizationMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="absolute w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-indigo-700 hover:z-10"
                    style={{ 
                      left: `${(member.location.lng + 180) * (100 / 360)}%`, 
                      top: `${(90 - member.location.lat) * (100 / 180)}%`,
                      zIndex: 5
                    }}
                    title={`${member.name} - ${member.city}`}
                  >
                    {member.name.charAt(0)}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-lg p-2 text-gray-800 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                      <p className="font-semibold">{member.name}</p>
                      <p>{member.role}</p>
                      <p>{member.city}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md z-10 absolute bottom-4 left-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Team Members</h3>
                <div className="space-y-2">
                  {organizationMembers.map((member) => (
                    <div key={member.id} className="flex items-center text-xs">
                      <div className="w-4 h-4 bg-indigo-600 rounded-full flex items-center justify-center text-white mr-2">
                        {member.name.charAt(0)}
                      </div>
                      <span className="text-gray-700">{member.name}</span>
                      <span className="text-gray-500 ml-2">({member.city})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This map shows the geographic distribution of your organization members. Click on a pin to see more details.
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Leads by Status */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Leads by Status</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {analytics.leadsByStatus.map((status, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{status.status}</span>
                    <span className="text-sm font-semibold text-gray-900">{status.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        status.status === 'New' ? 'bg-blue-500' :
                        status.status === 'Contacted' ? 'bg-yellow-500' :
                        status.status === 'Qualified' ? 'bg-purple-500' :
                        status.status === 'Converted' ? 'bg-green-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${(status.count / analytics.leadsGenerated) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leads by Source */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Leads by Source</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {analytics.leadsBySource.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{source.source}</span>
                    <span className="text-sm font-semibold text-gray-900">{source.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        source.source === 'Facebook' ? 'bg-blue-500' :
                        source.source === 'WhatsApp' ? 'bg-green-500' :
                        source.source === 'Instagram' ? 'bg-pink-500' :
                        'bg-indigo-500'
                      }`}
                      style={{ width: `${(source.count / analytics.leadsGenerated) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Referrers */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Top Referrers</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <ChevronDown size={20} />
          </button>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leads Generated
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversion Rate
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analytics.topReferrers.map((referrer, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                          {referrer.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{referrer.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{referrer.leads}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {Math.round((index + 1) * 5 + 20)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: `${(referrer.leads / analytics.topReferrers[0].leads) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <ChevronDown size={20} />
          </button>
        </div>
        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              {analytics.recentActivity.map((activity, index) => (
                <li key={index}>
                  <div className="relative pb-8">
                    {index !== analytics.recentActivity.length - 1 && (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center ring-8 ring-white">
                          <span className="text-indigo-600 font-medium text-sm">{activity.user.charAt(0)}</span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-800">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.user}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;