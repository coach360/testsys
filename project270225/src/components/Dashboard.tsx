import React from 'react';
import { 
  Users, 
  FileSpreadsheet, 
  GitBranchPlus, 
  BarChart3, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock
} from 'lucide-react';
import { AnalyticsData } from '../types';

interface DashboardProps {
  analytics: AnalyticsData;
}

const Dashboard: React.FC<DashboardProps> = ({ analytics }) => {
  const statCards = [
    {
      title: 'Total Leads',
      value: analytics.leadsGenerated,
      icon: <FileSpreadsheet className="text-blue-500" />,
      change: '+12.5%',
      isPositive: true
    },
    {
      title: 'Conversion Rate',
      value: `${analytics.conversionRate}%`,
      icon: <TrendingUp className="text-green-500" />,
      change: '+3.2%',
      isPositive: true
    },
    {
      title: 'Active Referrals',
      value: analytics.activeReferrals,
      icon: <GitBranchPlus className="text-purple-500" />,
      change: '+5.0%',
      isPositive: true
    },
    {
      title: 'Total Conversions',
      value: analytics.leadsConverted,
      icon: <BarChart3 className="text-indigo-500" />,
      change: '-2.3%',
      isPositive: false
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your prospecting system.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{card.value}</p>
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                {card.icon}
              </div>
            </div>
            <div className="flex items-center mt-4">
              {card.isPositive ? (
                <ArrowUpRight size={16} className="text-green-500" />
              ) : (
                <ArrowDownRight size={16} className="text-red-500" />
              )}
              <span className={`text-sm ml-1 ${card.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {card.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Referrers */}
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Top Referrers</h2>
            <Users size={20} className="text-gray-500" />
          </div>
          <div className="space-y-4">
            {analytics.topReferrers.map((referrer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                    {referrer.name.charAt(0)}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700">{referrer.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{referrer.leads} leads</span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            View all referrers
          </button>
        </div>

        {/* Leads by Source */}
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Leads by Source</h2>
            <FileSpreadsheet size={20} className="text-gray-500" />
          </div>
          <div className="space-y-4">
            {analytics.leadsBySource.map((source, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                  <span className="text-sm font-semibold text-gray-900">{source.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${(source.count / analytics.leadsGenerated) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            View detailed analytics
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            <Clock size={20} className="text-gray-500" />
          </div>
          <div className="space-y-4">
            {analytics.recentActivity.map((activity, index) => (
              <div key={index} className="border-l-2 border-indigo-500 pl-3 py-1">
                <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">{activity.user}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-xs text-gray-500">
                    {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            View all activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;