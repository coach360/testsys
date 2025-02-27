import React, { useState, useEffect } from 'react';
import { BarChart3, Users, Globe, Smartphone, RefreshCw, MapPin } from 'lucide-react';

interface RealTimeStatsProps {
  refreshInterval?: number; // in milliseconds
}

const RealTimeStats: React.FC<RealTimeStatsProps> = ({ refreshInterval = 10000 }) => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    activeUsers: 24,
    newLeads: 12,
    conversionRate: 3.2,
    totalVisits: 1458,
    deviceStats: {
      desktop: 65,
      mobile: 30,
      tablet: 5
    },
    locations: [
      { country: 'United States', count: 850 },
      { country: 'Canada', count: 230 },
      { country: 'United Kingdom', count: 175 },
      { country: 'Germany', count: 95 },
      { country: 'Australia', count: 65 }
    ],
    browsers: {
      chrome: 55,
      safari: 20,
      firefox: 15,
      edge: 8,
      other: 2
    }
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        activeUsers: Math.floor(Math.random() * 10) + 20,
        newLeads: Math.floor(Math.random() * 5) + 10,
        totalVisits: prevStats.totalVisits + Math.floor(Math.random() * 5)
      }));
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  const refreshStats = () => {
    setLoading(true);
    
    // Simulate API call to refresh stats
    setTimeout(() => {
      setStats({
        ...stats,
        activeUsers: Math.floor(Math.random() * 15) + 20,
        newLeads: Math.floor(Math.random() * 8) + 8,
        conversionRate: parseFloat((Math.random() * 2 + 2).toFixed(1)),
        totalVisits: stats.totalVisits + Math.floor(Math.random() * 20),
        deviceStats: {
          desktop: Math.floor(Math.random() * 10) + 60,
          mobile: Math.floor(Math.random() * 10) + 25,
          tablet: Math.floor(Math.random() * 5) + 3
        }
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Real-time Analytics</h1>
          <p className="text-gray-600">Live visitor and conversion statistics</p>
        </div>
        <button 
          onClick={refreshStats}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
          disabled={loading}
        >
          <RefreshCw size={18} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Active Users</h2>
            <Users className="text-indigo-500" size={20} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">{stats.activeUsers}</p>
            <p className="text-gray-600 mt-1">Currently online</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">New Leads Today</h2>
            <BarChart3 className="text-green-500" size={20} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">{stats.newLeads}</p>
            <p className="text-gray-600 mt-1">Conversion rate: {stats.conversionRate}%</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Total Visits</h2>
            <Globe className="text-indigo-500" size={20} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">{stats.totalVisits}</p>
            <p className="text-gray-600 mt-1">Last 30 days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Device Breakdown</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 flex items-center">
                  <Smartphone size={16} className="mr-1" /> Desktop
                </span>
                <span className="text-sm font-semibold text-gray-900">{stats.deviceStats.desktop}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-indigo-600" 
                  style={{ width: `${stats.deviceStats.desktop}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 flex items-center">
                  <Smartphone size={16} className="mr-1" /> Mobile
                </span>
                <span className="text-sm font-semibold text-gray-900">{stats.deviceStats.mobile}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-green-500" 
                  style={{ width: `${stats.deviceStats.mobile}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 flex items-center">
                  <Smartphone size={16} className="mr-1" /> Tablet
                </span>
                <span className="text-sm font-semibold text-gray-900">{stats.deviceStats.tablet}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-purple-500" 
                  style={{ width: `${stats.deviceStats.tablet}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Browser Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Chrome</span>
                <span className="text-sm font-semibold text-gray-900">{stats.browsers.chrome}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-indigo-600" 
                  style={{ width: `${stats.browsers.chrome}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Safari</span>
                <span className="text-sm font-semibold text-gray-900">{stats.browsers.safari}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-blue-500" 
                  style={{ width: `${stats.browsers.safari}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Firefox</span>
                <span className="text-sm font-semibold text-gray-900">{stats.browsers.firefox}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-orange-500" 
                  style={{ width: `${stats.browsers.firefox}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Edge</span>
                <span className="text-sm font-semibold text-gray-900">{stats.browsers.edge}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-green-500" 
                  style={{ width: `${stats.browsers.edge}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Visitor Locations</h2>
          <div className="space-y-4">
            {stats.locations.map((location, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin size={16} className="mr-1" /> {location.country}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{location.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index % 3 === 0 ? 'bg-indigo-600' : 
                      index % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${(location.count / stats.totalVisits) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Real-time Visitor Map</h2>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-2 text-indigo-500" />
              <p className="text-gray-600">World map with visitor locations would appear here</p>
              <p className="text-xs text-gray-500 mt-1">Showing data from the last 24 hours</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>This map shows the geographic distribution of your visitors in real-time. Hover over clusters to see detailed information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeStats;