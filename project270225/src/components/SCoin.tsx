import React, { useState } from 'react';
import { SCoin } from '../types';
import { Coins, ArrowUpRight, ArrowDownRight, ChevronDown, Plus, Gift } from 'lucide-react';

interface SCoinProps {
  scoin: SCoin;
}

const SCoinComponent: React.FC<SCoinProps> = ({ scoin }) => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [purchaseAmount, setPurchaseAmount] = useState(500);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">S-Coin 360</h1>
          <p className="text-gray-600">Manage your utility tokens and rewards</p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowPurchaseModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
          >
            <Plus size={18} className="mr-2" />
            Purchase S-Coins
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Current Balance</h2>
            <Coins className="text-indigo-500" size={24} />
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 flex items-center justify-center">
              <Coins className="text-indigo-500 mr-2" size={28} />
              {scoin.balance}
            </p>
            <p className="text-gray-600 mt-2">Available S-Coins</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="bg-indigo-100 text-indigo-700 px-4 py-3 rounded-lg font-medium hover:bg-indigo-200 transition-colors">
              Transfer
            </button>
            <button className="bg-indigo-100 text-indigo-700 px-4 py-3 rounded-lg font-medium hover:bg-indigo-200 transition-colors">
              Redeem
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scoin.transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          transaction.type === 'earned' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {transaction.type === 'earned' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                          <div className="text-xs text-gray-500">{transaction.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${
                        transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'earned' ? '+' : '-'}{transaction.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(transaction.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Earning Opportunities</h2>
            <Gift className="text-indigo-500" size={20} />
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Refer a New Member</h3>
                  <p className="text-xs text-gray-500 mt-1">Earn 300 S-Coins for each successful referral</p>
                </div>
                <div className="text-indigo-600 font-semibold">+300</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Lead Conversion</h3>
                  <p className="text-xs text-gray-500 mt-1">Earn 500 S-Coins for each converted lead</p>
                </div>
                <div className="text-indigo-600 font-semibold">+500</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Complete Training</h3>
                  <p className="text-xs text-gray-500 mt-1">Earn 200 S-Coins for completing training modules</p>
                </div>
                <div className="text-indigo-600 font-semibold">+200</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Monthly Challenge</h3>
                  <p className="text-xs text-gray-500 mt-1">Earn 1000 S-Coins for meeting monthly targets</p>
                </div>
                <div className="text-indigo-600 font-semibold">+1000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Rewards Marketplace</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Premium Landing Page Template</h3>
                  <p className="text-xs text-gray-500 mt-1">Access exclusive high-converting templates</p>
                  <button className="mt-3 px-3 py-1 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700">
                    Redeem
                  </button>
                </div>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <Coins size={16} className="mr-1" />
                  <span>500</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">API Access Extension</h3>
                  <p className="text-xs text-gray-500 mt-1">Extend your API access limits</p>
                  <button className="mt-3 px-3 py-1 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700">
                    Redeem
                  </button>
                </div>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <Coins size={16} className="mr-1" />
                  <span>300</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Advanced Analytics Package</h3>
                  <p className="text-xs text-gray-500 mt-1">Unlock detailed performance metrics</p>
                  <button className="mt-3 px-3 py-1 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700">
                    Redeem
                  </button>
                </div>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <Coins size={16} className="mr-1" />
                  <span>800</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-800">AI Assistant Credits</h3>
                  <p className="text-xs text-gray-500 mt-1">Additional AI-powered communication credits</p>
                  <button className="mt-3 px-3 py-1 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700">
                    Redeem
                  </button>
                </div>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <Coins size={16} className="mr-1" />
                  <span>600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Purchase S-Coins</h2>
                <button 
                  onClick={() => setShowPurchaseModal(false)}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    className={`py-2 px-4 rounded-md border ${purchaseAmount === 500 ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-gray-300 text-gray-700'}`}
                    onClick={() => setPurchaseAmount(500)}
                  >
                    500
                  </button>
                  <button 
                    className={`py-2 px-4 rounded-md border ${purchaseAmount === 1000 ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-gray-300 text-gray-700'}`}
                    onClick={() => setPurchaseAmount(1000)}
                  >
                    1,000
                  </button>
                  <button 
                    className={`py-2 px-4 rounded-md border ${purchaseAmount === 2500 ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-gray-300 text-gray-700'}`}
                    onClick={() => setPurchaseAmount(2500)}
                  >
                    2,500
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">S-Coins:</span>
                  <span className="text-sm font-medium text-gray-800">{purchaseAmount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Price per Coin:</span>
                  <span className="text-sm font-medium text-gray-800">$0.10</span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2 flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Total:</span>
                  <span className="text-sm font-bold text-gray-900">${(purchaseAmount * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setShowPurchaseModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SCoinComponent;