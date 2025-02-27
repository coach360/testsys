import React, { useState } from 'react';
import { ReferralNode } from '../types';
import { Users, GitBranch, ChevronRight, ChevronDown, Share2 } from 'lucide-react';

interface ReferralNetworkProps {
  referralTree: ReferralNode;
}

const ReferralNetwork: React.FC<ReferralNetworkProps> = ({ referralTree }) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set([referralTree.id]));
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentReferralCode, setCurrentReferralCode] = useState('');

  const toggleNode = (nodeId: string) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(nodeId)) {
      newExpandedNodes.delete(nodeId);
    } else {
      newExpandedNodes.add(nodeId);
    }
    setExpandedNodes(newExpandedNodes);
  };

  const handleShare = (referralCode: string) => {
    setCurrentReferralCode(referralCode);
    setShowShareModal(true);
  };

  const renderTreeNode = (node: ReferralNode, depth: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    
    return (
      <div key={node.id} className="mb-2">
        <div 
          className={`flex items-center p-3 rounded-lg ${depth === 0 ? 'bg-indigo-50 border border-indigo-200' : 'hover:bg-gray-50'}`}
        >
          <div className="flex-1 flex items-center">
            {hasChildren && (
              <button 
                onClick={() => toggleNode(node.id)}
                className="mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
            )}
            {!hasChildren && <div className="w-[18px] mr-2"></div>}
            
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold mr-3">
              {node.name.charAt(0)}
            </div>
            
            <div>
              <div className="text-sm font-medium text-gray-900">{node.name}</div>
              <div className="text-xs text-gray-500">Code: {node.referralCode}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-gray-500">Leads</div>
              <div className="text-sm font-medium text-gray-900">{node.leads}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Conversions</div>
              <div className="text-sm font-medium text-gray-900">{node.conversions}</div>
            </div>
            <button 
              onClick={() => handleShare(node.referralCode)}
              className="p-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-full"
              title="Share referral link"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
        
        {isExpanded && hasChildren && (
          <div className="ml-8 pl-4 border-l border-gray-200 mt-2">
            {node.children.map(childNode => renderTreeNode(childNode, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Referral Network</h1>
          <p className="text-gray-600">Manage and track your referral tree and performance</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50 transition-colors">
            <GitBranch size={18} className="mr-2" />
            Export Tree
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors">
            <Users size={18} className="mr-2" />
            Invite New Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Total Network Size</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">10</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Total Leads Generated</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{referralTree.leads}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Total Conversions</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{referralTree.conversions}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {referralTree.leads > 0 ? ((referralTree.conversions / referralTree.leads) * 100).toFixed(1) : 0}%
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Referral Tree</h2>
        </div>
        <div className="p-6">
          {renderTreeNode(referralTree)}
        </div>
      </div>

      {/* Share Referral Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Share Referral Link</h2>
                <button 
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Share this referral link with potential members. You'll earn rewards for each successful signup and conversion.
              </p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Referral Link
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={`https://prospectpro.com/join?ref=${currentReferralCode}`}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  />
                  <button 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
                    onClick={() => {
                      navigator.clipboard.writeText(`https://prospectpro.com/join?ref=${currentReferralCode}`);
                      // Show copied notification
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share via
                </label>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Facebook
                  </button>
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    WhatsApp
                  </button>
                  <button className="flex-1 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                    Instagram
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowShareModal(false)}
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

export default ReferralNetwork;