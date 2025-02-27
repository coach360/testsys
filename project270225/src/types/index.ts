export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'agent';
  referralCode: string;
  apiKey?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source: string;
  assignedTo?: string;
  referredBy?: string;
  createdAt: string;
  notes?: string;
}

export interface ReferralNode {
  id: string;
  name: string;
  referralCode: string;
  level: number;
  children: ReferralNode[];
  leads: number;
  conversions: number;
}

export interface AnalyticsData {
  leadsGenerated: number;
  leadsConverted: number;
  conversionRate: number;
  activeReferrals: number;
  topReferrers: {
    name: string;
    leads: number;
  }[];
  leadsBySource: {
    source: string;
    count: number;
  }[];
  leadsByStatus: {
    status: string;
    count: number;
  }[];
  recentActivity: {
    id: string;
    action: string;
    user: string;
    timestamp: string;
  }[];
}

export interface LandingPage {
  id: string;
  title: string;
  slug: string;
  template: string;
  active: boolean;
  views: number;
  conversions: number;
  createdAt: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
  views: number;
  category: string;
  createdAt: string;
}

export interface SCoin {
  balance: number;
  transactions: {
    id: string;
    amount: number;
    type: 'earned' | 'spent';
    description: string;
    timestamp: string;
  }[];
}