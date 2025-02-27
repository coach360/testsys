import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Database, 
  CreditCard,
  Save,
  CheckCircle,
  MapPin
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200">
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'profile' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    <span>Profile</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'notifications' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Bell size={18} className="mr-3" />
                    <span>Notifications</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'security' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Shield size={18} className="mr-3" />
                    <span>Security</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('api')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'api' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Globe size={18} className="mr-3" />
                    <span>API Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('database')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'database' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Database size={18} className="mr-3" />
                    <span>Database</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'billing' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <CreditCard size={18} className="mr-3" />
                    <span>Billing</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('system')}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                      activeTab === 'system' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <SettingsIcon size={18} className="mr-3" />
                    <span>System</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {saveSuccess && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
                <CheckCircle size={18} className="mr-2" />
                Settings saved successfully!
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile Settings</h2>
                <form onSubmit={handleSave}>
                  <div className="mb-6">
                    <div className="flex items-center">
                      <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                        A
                      </div>
                      <div className="ml-4">
                        <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                          Change Avatar
                        </button>
                        <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. Max size 2MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        defaultValue="Admin"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        defaultValue="User"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue="admin@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="Administrator with full system access."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
                    >
                      <Save size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Security Settings</h2>
                <form onSubmit={handleSave}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Enable Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600 mt-1">Add an extra layer of security to your account</p>
                      </div>
                      <div className="relative">
                        <input type="checkbox" id="tfa" className="sr-only" />
                        <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Session Management</h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">Current Session</p>
                            <p className="text-sm text-gray-600 mt-1">Windows 10 • Chrome • United States</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">Previous Session</p>
                            <p className="text-sm text-gray-600 mt-1">macOS • Safari • United States</p>
                          </div>
                          <button className="text-red-600 text-sm hover:text-red-800">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
                    >
                      <Save size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'api' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">API Settings</h2>
                <form onSubmit={handleSave}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">API Keys</h3>
                    <div className="mb-4">
                      <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                        Your API Key
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="apiKey"
                          value="api_key_12345"
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                        />
                        <button 
                          type="button"
                          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
                        >
                          Copy
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">This key provides full access to the API. Keep it secure!</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <button 
                        type="button"
                        className="px-3 py-1 border border-red-300 text-red-700 rounded-md text-sm hover:bg-red-50"
                      >
                        Regenerate Key
                      </button>
                      <button 
                        type="button"
                        className="px-3 py-1 border border-indigo-300 text-indigo-700 rounded-md text-sm hover:bg-indigo-50"
                      >
                        Create Additional Key
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Social Media Integration</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="facebookApiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          Facebook API Key
                        </label>
                        <input
                          type="text"
                          id="facebookApiKey"
                          placeholder="Enter your Facebook API key"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="instagramApiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          Instagram API Key
                        </label>
                        <input
                          type="text"
                          id="instagramApiKey"
                          placeholder="Enter your Instagram API key"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="whatsappApiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          WhatsApp Business API Key
                        </label>
                        <input
                          type="text"
                          id="whatsappApiKey"
                          placeholder="Enter your WhatsApp Business API key"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">CRM Integration</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="hubspotApiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          HubSpot API Key
                        </label>
                        <input
                          type="text"
                          id="hubspotApiKey"
                          placeholder="Enter your HubSpot API key"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="salesforceApiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          Salesforce API Key
                        </label>
                        <input
                          type="text"
                          id="salesforceApiKey"
                          placeholder="Enter your Salesforce API key"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="zapierApiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          Zapier API Key
                        </label>
                        <input
                          type="text"
                          id="zapierApiKey"
                          placeholder="Enter your Zapier API key"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Webhook Configuration</h3>
                    <div className="mb-4">
                      <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        Webhook URL
                      </label>
                      <input
                        type="url"
                        id="webhookUrl"
                        placeholder="https://your-domain.com/webhook"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="leadCreated"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="leadCreated" className="ml-2 block text-sm text-gray-700">
                          Lead Created
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="leadConverted"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="leadConverted" className="ml-2 block text-sm text-gray-700">
                          Lead Converted
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="referralCreated"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="referralCreated" className="ml-2 block text-sm text-gray-700">
                          Referral Created
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Rate Limits</h3>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Current Plan Limit</span>
                        <span className="text-sm font-semibold text-gray-900">10,000 requests / day</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        3,500 / 10,000 requests used today
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
                    >
                      <Save size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'database' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Database Settings</h2>
                <form onSubmit={handleSave}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Database Connection</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="dbHost" className="block text-sm font-medium text-gray-700 mb-1">
                          Host
                        </label>
                        <input
                          type="text"
                          id="dbHost"
                          defaultValue="localhost"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="dbPort" className="block text-sm font-medium text-gray-700 mb-1">
                          Port
                        </label>
                        <input
                          type="text"
                          id="dbPort"
                          defaultValue="3306"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="dbName" className="block text-sm font-medium text-gray-700 mb-1">
                          Database Name
                        </label>
                        <input
                          type="text"
                          id="dbName"
                          defaultValue="prospectpro"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="dbUser" className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <input
                          type="text"
                          id="dbUser"
                          defaultValue="root"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="dbPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          id="dbPassword"
                          defaultValue="********"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex items-end">
                        <button
                          type="button"
                          className="px-4 py-2 border border-indigo-300 text-indigo-700 rounded-md text-sm hover:bg-indigo-50"
                        >
                          Test Connection
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Backup Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">Automatic Backups</p>
                          <p className="text-sm text-gray-600 mt-1">Schedule regular database backups</p>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="autoBackup" className="sr-only" defaultChecked />
                          <div className="block bg-indigo-600 w-14 h-8 rounded-full"></div>
                          <div className="dot absolute left-7 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="backupFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                          Backup Frequency
                        </label>
                        <select
                          id="backupFrequency"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          defaultValue="weekly"
                        >
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="backupRetention" className="block text-sm font-medium text-gray-700 mb-1">
                          Retention Period (days)
                        </label>
                        <input
                          type="number"
                          id="backupRetention"
                          defaultValue="30"
                          min="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex justify-between">
                        <button
                          type="button"
                          className="px-4 py-2 border border-indigo-300 text-indigo-700 rounded-md text-sm hover:bg-indigo-50"
                        >
                          Backup Now
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 border border-indigo-300 text-indigo-700 rounded-md text-sm hover:bg-indigo-50"
                        >
                          View Backups
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
                    >
                      <Save size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Analytics Settings</h2>
                <form onSubmit={handleSave}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Tracking Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">Enable User Tracking</p>
                          <p className="text-sm text-gray-600 mt-1">Track user behavior and interactions</p>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="userTracking" className="sr-only" defaultChecked />
                          <div className="block bg-indigo-600 w-14 h-8 rounded-full"></div>
                          <div className="dot absolute left-7 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">Collect Device Information</p>
                          <p className="text-sm text-gray-600 mt-1">Gather data about user devices and browsers</p>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="deviceInfo" className="sr-only" defaultChecked />
                          <div className="block bg-indigo-600 w-14 h-8 rounded-full"></div>
                          <div className="dot absolute left-7 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">Geolocation Tracking</p>
                          <p className="text-sm text-gray-600 mt-1">Track user geographic locations</p>
                        </div>
                        <div className="relative">
                          <input type="checkbox" id="geoTracking" className="sr-only" defaultChecked />
                          <div className="block bg-indigo-600 w-14 h-8 rounded-full"></div>
                          <div className="dot absolute left-7 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Data Retention</h3>
                    <div>
                      <label htmlFor="dataRetention" className="block text-sm font-medium text-gray-700 mb-1">
                        Analytics Data Retention Period
                      </label>
                      <select
                        id="dataRetention"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        defaultValue="90"
                      >
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                        <option value="180">180 days</option>
                        <option value="365">1 year</option>
                        <option value="730">2 years</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Real-time Analytics</h3>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Enable Real-time Dashboard</p>
                        <p className="text-sm text-gray-600 mt-1">Show live visitor data on your dashboard</p>
                      </div>
                      <div className="relative">
                        <input type="checkbox" id="realTimeAnalytics" className="sr-only" defaultChecked />
                        <div className="block bg-indigo-600 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-7 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Real-time Visitor Map</h3>
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

                  <div className="flex justify-end mt-6">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700"
                    >
                      <Save size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab !== 'profile' && 
             activeTab !== 'api' && 
             activeTab !== 'notifications' && 
             activeTab !== 'security' && 
             activeTab !== 'database' &&
             activeTab !== 'analytics' && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <SettingsIcon size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
                  </h3>
                  <p className="text-gray-600">
                    This section is under development. Please check back later.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;