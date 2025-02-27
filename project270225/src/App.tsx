import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LeadManagement from './components/LeadManagement';
import ReferralNetwork from './components/ReferralNetwork';
import Analytics from './components/Analytics';
import LandingPages from './components/LandingPages';
import SCoinComponent from './components/SCoin';
import UserManagement from './components/UserManagement';
import VideoLibrary from './components/VideoLibrary';
import LaunchPad from './components/LaunchPad';
import Settings from './components/Settings';
import LandingPage from './components/LandingPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/UserProfile';
import EmailVerification from './components/Auth/EmailVerification';
import RealTimeStats from './components/RealTimeStats';
import AboutPage from './components/CorporatePages/AboutPage';
import MissionPage from './components/CorporatePages/MissionPage';
import VisionPage from './components/CorporatePages/VisionPage';
import ServicesPage from './components/CorporatePages/ServicesPage';
import ContactPage from './components/CorporatePages/ContactPage';
import WebinarPage from './components/WebinarPage';
import { 
  mockAnalytics, 
  mockLeads, 
  mockReferralTree, 
  mockLandingPages, 
  mockSCoin,
  mockUsers,
  mockVideos
} from './data/mockData';

function App() {
  const [activePage, setActivePage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  const [userName, setUserName] = useState('Admin User');
  const [userRole, setUserRole] = useState('Administrator');
  const [registrationError, setRegistrationError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string | null>(null);

  // Mock database of existing users
  const existingUsers = [
    { username: 'admin', email: 'admin@example.com', name: 'Admin User', verified: true, referralCode: 'REF1000001' },
    { username: 'sarah', email: 'sarah@example.com', name: 'Sarah Johnson', verified: true, referralCode: 'REF1000002' },
    { username: 'michael', email: 'michael@example.com', name: 'Michael Chen', verified: true, referralCode: 'REF1000003' },
    { username: 'jessica', email: 'jessica@example.com', name: 'Jessica Williams', verified: true, referralCode: 'REF1000004' },
    { username: 'david', email: 'david@example.com', name: 'David Rodriguez', verified: true, referralCode: 'REF1000005' }
  ];

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would validate credentials against the backend
    const user = existingUsers.find(user => user.email === email);
    if (user) {
      setUserName(user.name);
      setUserRole(user.username === 'admin' ? 'Administrator' : 'Agent');
      setUserEmail(user.email);
      
      if (user.verified) {
        setIsEmailVerified(true);
        setIsAuthenticated(true);
        setActivePage('dashboard');
      } else {
        // User exists but email is not verified
        setIsAuthenticated(true);
        setIsEmailVerified(false);
        setActivePage('verify-email');
        
        // Generate a random verification code
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        setVerificationCode(code);
        console.log(`Verification code for ${email}: ${code}`);
      }
    } else {
      // For demo purposes, we'll show an error
      setRegistrationError('Invalid email or password. Please try again.');
    }
  };

  const handleRegister = (name: string, email: string, password: string, referCode?: string) => {
    // Clear previous errors
    setRegistrationError(null);
    
    // Check if email already exists
    const emailExists = existingUsers.some(user => user.email.toLowerCase() === email.toLowerCase());
    
    if (emailExists) {
      setRegistrationError('This email is already registered. Please use a different email or login to your account.');
      return;
    }
    
    // Check if referral code is valid
    if (referCode) {
      const validReferral = existingUsers.some(user => user.referralCode === referCode);
      if (!validReferral) {
        setRegistrationError('Invalid referral code. Please check and try again.');
        return;
      }
      setReferralCode(referCode);
    } else {
      setRegistrationError('A valid referral code is required to register.');
      return;
    }
    
    // For now, we'll just simulate a successful registration
    setUserName(name);
    setUserEmail(email);
    setUserRole('Agent');
    setIsAuthenticated(true);
    setIsEmailVerified(false); // Email needs verification
    
    // Generate a random verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    console.log(`Verification code for ${email}: ${code}`);
    
    setActivePage('verify-email');
  };

  const handleVerifyEmail = () => {
    // In a real app, this would verify the code against the backend
    // For now, we'll just simulate a successful verification
    setIsEmailVerified(true);
    setActivePage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsEmailVerified(false);
    setActivePage('landing');
    setRegistrationError(null);
  };

  const renderActivePage = () => {
    if (!isAuthenticated) {
      if (activePage === 'landing') {
        return <LandingPage setAuthView={setAuthView} setActivePage={setActivePage} />;
      } else if (activePage === 'auth') {
        return authView === 'login' 
          ? <Login onLogin={handleLogin} switchToRegister={() => setAuthView('register')} error={registrationError} /> 
          : <Register onRegister={handleRegister} switchToLogin={() => setAuthView('login')} error={registrationError} />;
      } else if (activePage === 'about') {
        return <AboutPage />;
      } else if (activePage === 'mission') {
        return <MissionPage />;
      } else if (activePage === 'vision') {
        return <VisionPage />;
      } else if (activePage === 'services') {
        return <ServicesPage />;
      } else if (activePage === 'contact') {
        return <ContactPage />;
      } else if (activePage === 'webinar') {
        return <WebinarPage />;
      } else if (activePage === 'schedule') {
        return <ContactPage />;
      } else if (activePage === 'blog') {
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog</h1>
            <p className="text-gray-600">
              Esta sección está en desarrollo. Por favor, vuelve más tarde.
            </p>
          </div>
        );
      }
    }

    // If authenticated but email not verified, show verification page
    if (isAuthenticated && !isEmailVerified) {
      return <EmailVerification email={userEmail} onVerify={handleVerifyEmail} />;
    }

    // If authenticated and email verified, show requested page
    switch (activePage) {
      case 'dashboard':
        return <Dashboard analytics={mockAnalytics} />;
      case 'leads':
        return <LeadManagement leads={mockLeads} />;
      case 'referrals':
        return <ReferralNetwork referralTree={mockReferralTree} />;
      case 'analytics':
        return <Analytics analytics={mockAnalytics} />;
      case 'real-time-stats':
        return <RealTimeStats />;
      case 'landing-pages':
        return <LandingPages landingPages={mockLandingPages} />;
      case 'scoin':
        return <SCoinComponent scoin={mockSCoin} />;
      case 'users':
        return <UserManagement users={mockUsers} />;
      case 'videos':
        return <VideoLibrary videos={mockVideos} />;
      case 'launchpad':
        return <LaunchPad />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <UserProfile userName={userName} userRole={userRole} userEmail={userEmail} />;
      case 'webinar':
        return <WebinarPage />;
      case 'schedule':
        return <ContactPage />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
            </h1>
            <p className="text-gray-600">
              Esta sección está en desarrollo. Por favor, vuelve más tarde.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {isAuthenticated && isEmailVerified && (
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          onLogout={handleLogout}
        />
      )}
      
      <div className={`flex-1 flex flex-col overflow-hidden ${!isAuthenticated || !isEmailVerified ? 'w-full' : 'lg:ml-64 ml-0'}`}>
        {isAuthenticated && isEmailVerified && (
          <Header 
            userName={userName} 
            userRole={userRole} 
            onLogout={handleLogout}
            setActivePage={setActivePage}
          />
        )}
        
        <main className={`flex-1 overflow-y-auto ${!isAuthenticated && activePage === 'landing' ? 'overflow-x-hidden' : ''}`}>
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
}

export default App;