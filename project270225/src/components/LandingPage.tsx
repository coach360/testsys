import React, { useState, useEffect } from 'react';
import { Rocket, Shield, Users, GitBranchPlus, BarChart3, ArrowRight, Globe, MessageSquare, Mail, MapPin, Phone, Video, Calendar, Lock, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface LandingPageProps {
  setAuthView: (view: 'login' | 'register') => void;
  setActivePage: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setAuthView, setActivePage }) => {
  const { t, i18n } = useTranslation();
  const [showWebinarModal, setShowWebinarModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    investmentLevel: '',
    interests: [] as string[]
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleLogin = () => {
    setActivePage('auth');
    setAuthView('login');
  };

  const handleRegister = () => {
    setActivePage('auth');
    setAuthView('register');
  };

  const navigateTo = (page: string) => {
    setActivePage(page);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const interests = [...(prev.interests as string[])];
      if (checked) {
        interests.push(value);
      } else {
        const index = interests.indexOf(value);
        if (index > -1) {
          interests.splice(index, 1);
        }
      }
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend API
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  // Prevent copying content
  useEffect(() => {
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert(t('security.copyProtected'));
    };

    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventViewSource = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'u') || (e.key === 'F12')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('keydown', preventViewSource);

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventViewSource);
    };
  }, [t]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">ProspectPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-indigo-600">
                {t('corporate.aboutUs')}
              </button>
              <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-indigo-600">
                {t('corporate.services')}
              </button>
              <button onClick={() => navigateTo('mission')} className="text-gray-700 hover:text-indigo-600">
                {t('corporate.mission')}
              </button>
              <button onClick={() => navigateTo('vision')} className="text-gray-700 hover:text-indigo-600">
                {t('corporate.vision')}
              </button>
              <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-indigo-600">
                {t('corporate.contact')}
              </button>
              <button onClick={() => navigateTo('blog')} className="text-gray-700 hover:text-indigo-600">
                {t('common.blog')}
              </button>
              <button onClick={() => navigateTo('schedule')} className="flex items-center text-gray-700 hover:text-indigo-600">
                <Calendar size={16} className="mr-1" />
                {t('common.schedule')}
              </button>
              <button 
                onClick={() => navigateTo('webinar')} 
                className="flex items-center text-gray-700 hover:text-indigo-600 relative group"
              >
                <Video size={16} className="mr-1" />
                {t('common.webinar')}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                  ¡HOT!
                </span>
                <div className="absolute hidden group-hover:block w-48 bg-indigo-800 text-white text-xs p-2 rounded shadow-lg -bottom-20 left-0 z-10">
                  {t('webinar.exclusiveAccess')}
                </div>
              </button>
              <LanguageSwitcher />
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleLogin}
                className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-800"
              >
                {t('auth.login')}
              </button>
              <button 
                onClick={handleRegister}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
              >
                {t('auth.register')}
              </button>
            </div>
          </div>
          <div className="md:hidden flex flex-wrap justify-center gap-3 pb-4">
            <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-indigo-600 text-sm">
              {t('corporate.aboutUs')}
            </button>
            <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-indigo-600 text-sm">
              {t('corporate.services')}
            </button>
            <button onClick={() => navigateTo('mission')} className="text-gray-700 hover:text-indigo-600 text-sm">
              {t('corporate.mission')}
            </button>
            <button onClick={() => navigateTo('vision')} className="text-gray-700 hover:text-indigo-600 text-sm">
              {t('corporate.vision')}
            </button>
            <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-indigo-600 text-sm">
              {t('corporate.contact')}
            </button>
            <button onClick={() => navigateTo('blog')} className="text-gray-700 hover:text-indigo-600 text-sm">
              {t('common.blog')}
            </button>
            <button onClick={() => navigateTo('schedule')} className="text-gray-700 hover:text-indigo-600 text-sm flex items-center">
              <Calendar size={14} className="mr-1" />
              {t('common.schedule')}
            </button>
            <button onClick={() => navigateTo('webinar')} className="text-gray-700 hover:text-indigo-600 text-sm flex items-center relative">
              <Video size={14} className="mr-1" />
              {t('common.webinar')}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0 rounded-full animate-pulse">
                ¡HOT!
              </span>
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('corporate.heroTitle')}
              </h1>
              <p className="text-xl mb-8">
                {t('corporate.heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={handleRegister}
                  className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center"
                >
                  {t('corporate.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => setShowWebinarModal(true)}
                  className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 flex items-center justify-center"
                >
                  <Video className="mr-2 h-5 w-5" />
                  {t('corporate.watchDemo')}
                </button>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex -space-x-2">
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="User" />
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="User" />
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="User" />
                </div>
                <div className="ml-3 text-sm text-indigo-100">
                  <span className="font-semibold text-white">+2,500</span> {t('webinar.peopleJoined')}
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <div className="responsive-iframe-container">
                  <iframe 
                    src="https://player.vimeo.com/video/684126177?h=a8e49a9e9b&title=0&byline=0&portrait=0" 
                    className="w-full h-full rounded-lg"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="ProspectPro Demo"
                  ></iframe>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold flex items-center">
                <Lock size={16} className="mr-1" />
                {t('webinar.exclusiveContent')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Promotion Banner */}
      <div className="bg-indigo-800 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Video className="mr-3 h-6 w-6 animate-pulse" />
            <div>
              <p className="font-semibold">{t('webinar.nextWebinar')}: {t('webinar.upcomingTitle')}</p>
              <p className="text-indigo-200 text-sm">{t('webinar.date')}: 15/07/2025 - 18:00 GMT+1</p>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('webinar')}
            className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-colors flex items-center"
          >
            {t('webinar.reserveSpot')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('corporate.featuresTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('corporate.featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('corporate.features.leadManagement')}</h3>
              <p className="text-gray-600">
                {t('corporate.features.leadManagementDesc')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <GitBranchPlus className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('corporate.features.referralNetwork')}</h3>
              <p className="text-gray-600">
                {t('corporate.features.referralNetworkDesc')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('corporate.features.analytics')}</h3>
              <p className="text-gray-600">
                {t('corporate.features.analyticsDesc')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('corporate.features.security')}</h3>
              <p className="text-gray-600">
                {t('corporate.features.securityDesc')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('corporate.features.launchpad')}</h3>
              <p className="text-gray-600">
                {t('corporate.features.launchpadDesc')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('corporate.features.multichannel')}</h3>
              <p className="text-gray-600">
                {t('corporate.features.multichannelDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('corporate.testimonialsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('corporate.testimonialsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">María Rodríguez</h4>
                  <p className="text-sm text-gray-600">CEO, TechSolutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{t('corporate.testimonials.first')}"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Juan Pérez</h4>
                  <p className="text-sm text-gray-600">Marketing Director, GrowthCo</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{t('corporate.testimonials.second')}"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Carlos Mendoza</h4>
                  <p className="text-sm text-gray-600">Founder, StartupHub</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{t('corporate.testimonials.third')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('corporate.ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('corporate.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleRegister}
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 text-lg"
            >
              {t('corporate.ctaButton')}
            </button>
            <button 
              onClick={() => setShowWebinarModal(true)}
              className="px-8 py-4 bg-indigo-800 text-white rounded-lg font-medium hover:bg-indigo-900 text-lg border border-indigo-400 flex items-center justify-center"
            >
              <Video className="mr-2 h-5 w-5" />
              {t('webinar.watchRecorded')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Rocket className="h-6 w-6 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">ProspectPro</span>
              </div>
              <p className="text-gray-400">
                {t('corporate.footerTagline')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('corporate.footerLinks.product')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.features')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.pricing')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.integrations')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.api')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('corporate.footerLinks.resources')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.documentation')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.guides')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.support')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.blog')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('corporate.footerLinks.company')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.about')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.careers')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.privacy')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{t('corporate.footerLinks.terms')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ProspectPro. {t('corporate.allRightsReserved')}</p>
          </div>
        </div>
      </footer>

      {/* Webinar Modal */}
      {showWebinarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{t('webinar.accessExclusiveWebinar')}</h2>
                <button 
                  onClick={() => setShowWebinarModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {formSubmitted ? (
              <div className="p-6 text-center">
                <div className="bg-green-100 text-green-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('webinar.thankYou')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('webinar.accessGranted')}
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                  <p className="text-indigo-800 font-medium">{t('webinar.checkEmail')}</p>
                  <p className="text-indigo-600 text-sm">{formData.email}</p>
                </div>
                <button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setShowWebinarModal(false);
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  {t('webinar.close')}
                </button>
              </div>
            ) : (
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {t('webinar.fillFormBelow')}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.fullName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.phone')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.company')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="investmentLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.investmentLevel')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="investmentLevel"
                      name="investmentLevel"
                      value={formData.investmentLevel}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">{t('webinar.selectOption')}</option>
                      <option value="0-5000">€0 - €5,000</option>
                      <option value="5001-10000">€5,001 - €10,000</option>
                      <option value="10001-25000">€10,001 - €25,000</option>
                      <option value="25001-50000">€25,001 - €50,000</option>
                      <option value="50001+">€50,001+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('webinar.interests')} <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          id="interest-lead-generation"
                          name="interests"
                          type="checkbox"
                          value="lead-generation"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="interest-lead-generation" className="ml-2 block text-sm text-gray-700">
                          {t('webinar.interestLeadGeneration')}
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="interest-referral"
                          name="interests"
                          type="checkbox"
                          value="referral-network"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="interest-referral" className="ml-2 block text-sm text-gray-700">
                          {t('webinar.interestReferral')}
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="interest-automation"
                          name="interests"
                          type="checkbox"
                          value="automation"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="interest-automation" className="ml-2 block text-sm text-gray-700">
                          {t('webinar.interestAutomation')}
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      {t('webinar.privacyConsent')} <a href="#" className="text-indigo-600 hover:text-indigo-800">{t('webinar.privacyPolicy')}</a>
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg- indigo-700 flex items-center justify-center"
                    >
                      <Video size={18} className="mr-2" />
                      {t('webinar.getAccess')}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;