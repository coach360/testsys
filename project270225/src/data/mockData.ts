import { User, Lead, ReferralNode, AnalyticsData, LandingPage, Video, SCoin } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    referralCode: 'REF1000001',
    apiKey: 'api_key_12345',
    createdAt: '2023-01-01T00:00:00Z',
    lastLogin: '2023-06-15T14:30:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'manager',
    referralCode: 'REF1000002',
    apiKey: 'api_key_67890',
    createdAt: '2023-01-15T00:00:00Z',
    lastLogin: '2023-06-14T09:45:00Z'
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@example.com',
    role: 'agent',
    referralCode: 'REF1000003',
    createdAt: '2023-02-01T00:00:00Z',
    lastLogin: '2023-06-15T11:20:00Z'
  },
  {
    id: '4',
    name: 'Jessica Williams',
    email: 'jessica@example.com',
    role: 'agent',
    referralCode: 'REF1000004',
    createdAt: '2023-02-15T00:00:00Z',
    lastLogin: '2023-06-13T16:10:00Z'
  },
  {
    id: '5',
    name: 'David Rodriguez',
    email: 'david@example.com',
    role: 'agent',
    referralCode: 'REF1000005',
    createdAt: '2023-03-01T00:00:00Z',
    lastLogin: '2023-06-12T10:30:00Z'
  }
];

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1-555-123-4567',
    status: 'qualified',
    source: 'Facebook',
    assignedTo: '3',
    referredBy: 'REF1000002',
    createdAt: '2023-05-01T10:30:00Z',
    notes: 'Interested in enterprise package'
  },
  {
    id: '2',
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '+1-555-987-6543',
    status: 'contacted',
    source: 'WhatsApp',
    assignedTo: '4',
    referredBy: 'REF1000003',
    createdAt: '2023-05-05T14:45:00Z',
    notes: 'Follow up next week'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert@example.com',
    phone: '+1-555-456-7890',
    status: 'new',
    source: 'Instagram',
    assignedTo: '5',
    createdAt: '2023-05-10T09:15:00Z'
  },
  {
    id: '4',
    name: 'Lisa Wong',
    email: 'lisa@example.com',
    phone: '+1-555-789-0123',
    status: 'converted',
    source: 'Referral',
    assignedTo: '3',
    referredBy: 'REF1000004',
    createdAt: '2023-04-15T11:20:00Z',
    notes: 'Signed up for premium plan'
  },
  {
    id: '5',
    name: 'James Miller',
    email: 'james@example.com',
    phone: '+1-555-321-6547',
    status: 'lost',
    source: 'Facebook',
    assignedTo: '4',
    createdAt: '2023-04-20T16:30:00Z',
    notes: 'Not interested at this time'
  },
  {
    id: '6',
    name: 'Patricia Garcia',
    email: 'patricia@example.com',
    phone: '+1-555-654-9870',
    status: 'qualified',
    source: 'WhatsApp',
    assignedTo: '5',
    referredBy: 'REF1000002',
    createdAt: '2023-05-12T13:45:00Z',
    notes: 'Scheduled demo for next week'
  },
  {
    id: '7',
    name: 'Thomas Wilson',
    email: 'thomas@example.com',
    phone: '+1-555-147-2583',
    status: 'contacted',
    source: 'Instagram',
    assignedTo: '3',
    createdAt: '2023-05-15T10:10:00Z',
    notes: 'Interested in learning more'
  },
  {
    id: '8',
    name: 'Jennifer Lee',
    email: 'jennifer@example.com',
    phone: '+1-555-369-8520',
    status: 'new',
    source: 'Referral',
    referredBy: 'REF1000005',
    createdAt: '2023-05-18T15:20:00Z'
  }
];

export const mockReferralTree: ReferralNode = {
  id: '1',
  name: 'Admin User',
  referralCode: 'REF1000001',
  level: 0,
  children: [
    {
      id: '2',
      name: 'Sarah Johnson',
      referralCode: 'REF1000002',
      level: 1,
      children: [
        {
          id: '6',
          name: 'Alex Thompson',
          referralCode: 'REF1000006',
          level: 2,
          children: [],
          leads: 3,
          conversions: 1
        },
        {
          id: '7',
          name: 'Maria Rodriguez',
          referralCode: 'REF1000007',
          level: 2,
          children: [
            {
              id: '10',
              name: 'Chris Evans',
              referralCode: 'REF1000010',
              level: 3,
              children: [],
              leads: 2,
              conversions: 0
            }
          ],
          leads: 5,
          conversions: 2
        }
      ],
      leads: 8,
      conversions: 3
    },
    {
      id: '3',
      name: 'Michael Chen',
      referralCode: 'REF1000003',
      level: 1,
      children: [
        {
          id: '8',
          name: 'Daniel Kim',
          referralCode: 'REF1000008',
          level: 2,
          children: [],
          leads: 4,
          conversions: 1
        }
      ],
      leads: 6,
      conversions: 2
    },
    {
      id: '4',
      name: 'Jessica Williams',
      referralCode: 'REF1000004',
      level: 1,
      children: [
        {
          id: '9',
          name: 'Sophia Martinez',
          referralCode: 'REF1000009',
          level: 2,
          children: [],
          leads: 3,
          conversions: 1
        }
      ],
      leads: 5,
      conversions: 2
    },
    {
      id: '5',
      name: 'David Rodriguez',
      referralCode: 'REF1000005',
      level: 1,
      children: [],
      leads: 4,
      conversions: 1
    }
  ],
  leads: 25,
  conversions: 10
};

export const mockAnalytics: AnalyticsData = {
  leadsGenerated: 125,
  leadsConverted: 42,
  conversionRate: 33.6,
  activeReferrals: 10,
  topReferrers: [
    { name: 'Sarah Johnson', leads: 28 },
    { name: 'Michael Chen', leads: 22 },
    { name: 'Jessica Williams', leads: 18 },
    { name: 'David Rodriguez', leads: 15 },
    { name: 'Maria Rodriguez', leads: 12 }
  ],
  leadsBySource: [
    { source: 'Facebook', count: 45 },
    { source: 'WhatsApp', count: 35 },
    { source: 'Instagram', count: 25 },
    { source: 'Referral', count: 20 }
  ],
  leadsByStatus: [
    { status: 'New', count: 30 },
    { status: 'Contacted', count: 40 },
    { status: 'Qualified', count: 25 },
    { status: 'Converted', count: 20 },
    { status: 'Lost', count: 10 }
  ],
  recentActivity: [
    { id: '1', action: 'New lead created', user: 'Sarah Johnson', timestamp: '2023-06-15T14:30:00Z' },
    { id: '2', action: 'Lead status updated to Qualified', user: 'Michael Chen', timestamp: '2023-06-15T13:45:00Z' },
    { id: '3', action: 'New referral registered', user: 'Jessica Williams', timestamp: '2023-06-15T12:20:00Z' },
    { id: '4', action: 'Lead converted to customer', user: 'David Rodriguez', timestamp: '2023-06-15T11:10:00Z' },
    { id: '5', action: 'New landing page created', user: 'Admin User', timestamp: '2023-06-15T10:05:00Z' }
  ]
};

export const mockLandingPages: LandingPage[] = [
  {
    id: '1',
    title: 'Enterprise Solutions',
    slug: 'enterprise-solutions',
    template: 'corporate',
    active: true,
    views: 1250,
    conversions: 45,
    createdAt: '2023-04-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Small Business Package',
    slug: 'small-business',
    template: 'modern',
    active: true,
    views: 980,
    conversions: 32,
    createdAt: '2023-04-15T00:00:00Z'
  },
  {
    id: '3',
    title: 'Summer Promotion',
    slug: 'summer-promo',
    template: 'seasonal',
    active: true,
    views: 750,
    conversions: 28,
    createdAt: '2023-05-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'Referral Program',
    slug: 'referral-program',
    template: 'minimal',
    active: true,
    views: 620,
    conversions: 40,
    createdAt: '2023-05-15T00:00:00Z'
  },
  {
    id: '5',
    title: 'Product Launch',
    slug: 'product-launch',
    template: 'corporate',
    active: false,
    views: 0,
    conversions: 0,
    createdAt: '2023-06-01T00:00:00Z'
  }
];

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Getting Started with Our Platform',
    url: 'https://example.com/videos/getting-started',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '5:32',
    views: 1250,
    category: 'Tutorial',
    createdAt: '2023-03-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Advanced Lead Generation Techniques',
    url: 'https://example.com/videos/lead-generation',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '12:45',
    views: 980,
    category: 'Strategy',
    createdAt: '2023-03-15T00:00:00Z'
  },
  {
    id: '3',
    title: 'Maximizing Your Referral Network',
    url: 'https://example.com/videos/referral-network',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '8:20',
    views: 750,
    category: 'Strategy',
    createdAt: '2023-04-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'Using Analytics to Improve Conversion',
    url: 'https://example.com/videos/analytics-conversion',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '10:15',
    views: 620,
    category: 'Analytics',
    createdAt: '2023-04-15T00:00:00Z'
  },
  {
    id: '5',
    title: 'Introduction to S-Coin 360',
    url: 'https://example.com/videos/scoin-intro',
    thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '6:50',
    views: 890,
    category: 'Tutorial',
    createdAt: '2023-05-01T00:00:00Z'
  }
];

export const mockSCoin: SCoin = {
  balance: 2500,
  transactions: [
    {
      id: '1',
      amount: 500,
      type: 'earned',
      description: 'Lead conversion bonus',
      timestamp: '2023-06-01T10:30:00Z'
    },
    {
      id: '2',
      amount: 300,
      type: 'earned',
      description: 'Referral signup reward',
      timestamp: '2023-06-05T14:45:00Z'
    },
    {
      id: '3',
      amount: 200,
      type: 'spent',
      description: 'Premium template purchase',
      timestamp: '2023-06-08T09:15:00Z'
    },
    {
      id: '4',
      amount: 1000,
      type: 'earned',
      description: 'Monthly performance bonus',
      timestamp: '2023-06-10T11:20:00Z'
    },
    {
      id: '5',
      amount: 100,
      type: 'spent',
      description: 'API access extension',
      timestamp: '2023-06-12T16:30:00Z'
    }
  ]
};