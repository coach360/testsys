import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Video, Play, CheckCircle, Download, Lock, User, Mail, Building, Phone, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

const WebinarPage: React.FC = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPreRecordedForm, setShowPreRecordedForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    investmentLevel: '',
    interests: [] as string[]
  });

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

  // Upcoming webinars data
  const upcomingWebinars = [
    {
      id: 1,
      title: "Estrategias Avanzadas de Prospección para 2025",
      date: "2025-04-15T18:00:00",
      duration: "60 min",
      presenter: "Carlos Rodríguez",
      description: "Descubre las técnicas más efectivas para generar leads de alta calidad en el entorno digital actual."
    },
    {
      id: 2,
      title: "Maximizando el Potencial de tu Red de Referidos",
      date: "2025-04-22T17:00:00",
      duration: "45 min",
      presenter: "Ana Martínez",
      description: "Aprende a construir y gestionar una red de referidos efectiva que multiplique tus resultados."
    },
    {
      id: 3,
      title: "Seguridad y Cumplimiento en la Prospección Digital",
      date: "2025-04-29T18:30:00",
      duration: "60 min",
      presenter: "David López",
      description: "Conoce las mejores prácticas para mantener la seguridad y el cumplimiento normativo en tus estrategias de prospección."
    }
  ];

  // Past webinars data
  const pastWebinars = [
    {
      id: 4,
      title: "Automatización Multicanal: WhatsApp, Facebook e Instagram",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      views: 1250,
      duration: "55 min"
    },
    {
      id: 5,
      title: "Cómo Convertir Leads en Clientes Fieles",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      views: 980,
      duration: "48 min"
    },
    {
      id: 6,
      title: "El Poder del S-Coin en tu Estrategia de Fidelización",
      thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      views: 1450,
      duration: "52 min"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{t('webinar.pageTitle')} | ProspectPro</title>
        <meta name="description" content="Webinars exclusivos sobre estrategias avanzadas de prospección, automatización y marketing digital." />
        <meta name="keywords" content="webinar, prospección, marketing digital, automatización, leads, conversión" />
        <meta property="og:title" content="Webinars Exclusivos | ProspectPro" />
        <meta property="og:description" content="Aprende de los expertos y descubre estrategias avanzadas para maximizar tus resultados." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prospectpro.com/webinar" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('webinar.title')}</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            {t('webinar.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => window.scrollTo({top: document.getElementById('upcoming-webinars')?.offsetTop || 0 - 100, behavior: 'smooth'})}
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              {t('webinar.viewUpcoming')}
            </button>
            <button 
              onClick={() => setShowPreRecordedForm(true)}
              className="px-6 py-3 bg-indigo-800 text-white rounded-lg font-medium hover:bg-indigo-900 flex items-center justify-center border border-indigo-400"
            >
              <Video size={20} className="mr-2" />
              {t('webinar.accessRecorded')}
            </button>
          </div>
        </div>
      </div>

      {/* Featured Webinar with Video */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('webinar.featuredWebinar')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('webinar.featuredDescription')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="responsive-iframe-container">
                <iframe 
                  src="https://player.vimeo.com/video/684126177?h=a8e49a9e9b&title=0&byline=0&portrait=0" 
                  className="w-full h-full"
                  style={{ aspectRatio: '16/9' }}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title="ProspectPro Featured Webinar"
                ></iframe>
              </div>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {t('webinar.featured')}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('webinar.featuredTitle')}</h3>
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{t('webinar.featuredPresenter')}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>60 {t('webinar.minutes')}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{t('webinar.recordedOn')}: 15/03/2025</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {t('webinar.featuredSummary')}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="flex -space-x-2 mr-3">
                    <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="User" />
                    <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="User" />
                    <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="User" />
                  </div>
                  <span className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">+2,500</span> {t('webinar.peopleWatched')}
                  </span>
                </div>
                <button 
                  onClick={() => setShowPreRecordedForm(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
                >
                  <Lock size={16} className="mr-2" />
                  {t('webinar.unlockAccess')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming-webinars" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('webinar.upcomingWebinars')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map(webinar => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-indigo-600 p-4 text-white">
                  <h3 className="text-xl font-semibold">{webinar.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar size={18} className="text-indigo-600 mr-2" />
                    <span className="text-gray-700">
                      {new Date(webinar.date).toLocaleDateString()} - {new Date(webinar.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Clock size={18} className="text-indigo-600 mr-2" />
                    <span className="text-gray-700">{webinar.duration}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <User size={18} className="text-indigo-600 mr-2" />
                    <span className="text-gray-700">{webinar.presenter}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    <Calendar size={18} className="mr-2" />
                    {t('webinar.reserveSpot')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-recorded Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('webinar.recordedWebinars')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pastWebinars.map(webinar => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="relative">
                  <img 
                    src={webinar.thumbnail} 
                    alt={webinar.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setShowPreRecordedForm(true)}
                      className="bg-indigo-600 text-white p-3 rounded-full"
                    >
                      <Play size={24} />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Clock size={12} className="mr-1" />
                    {webinar.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Video size={16} className="mr-1" />
                      <span className="text-sm">{webinar.views} {t('webinar.views')}</span>
                    </div>
                    <button 
                      onClick={() => setShowPreRecordedForm(true)}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                    >
                      <Lock size={14} className="mr-1" />
                      {t('webinar.access')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setShowPreRecordedForm(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              <Video size={20} className="mr-2" />
              {t('webinar.accessAllRecorded')}
            </button>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('webinar.whyAttend')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('webinar.industryExperts')}</h3>
              <p className="text-gray-600">
                {t('webinar.expertsDescription')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('webinar.provenStrategies')}</h3>
              <p className="text-gray-600">
                {t('webinar.strategiesDescription')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('webinar.exclusiveResources')}</h3>
              <p className="text-gray-600">
                {t('webinar.resourcesDescription')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('webinar.valuableNetworking')}</h3>
              <p className="text-gray-600">
                {t('webinar.networkingDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('webinar.testimonials')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Laura García</h4>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{t('webinar.testimonial1')}"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Carlos Mendoza</h4>
                  <p className="text-sm text-gray-600">Sales Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{t('webinar.testimonial2')}"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Ana Martínez</h4>
                  <p className="text-sm text-gray-600">CEO</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{t('webinar.testimonial3')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('webinar.ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('webinar.ctaText')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => window.scrollTo({top: document.getElementById('upcoming-webinars')?.offsetTop || 0 - 100, behavior: 'smooth'})}
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 text-lg"
            >
              {t('webinar.reserveNow')}
            </button>
            <button 
              onClick={() => setShowPreRecordedForm(true)}
              className="px-8 py-4 bg-indigo-800 text-white rounded-lg font-medium hover:bg-indigo-900 text-lg border border-indigo-400 flex items-center justify-center"
            >
              <Video className="mr-2 h-5 w-5" />
              {t('webinar.accessLibrary')}
            </button>
          </div>
        </div>
      </section>

      {/* Pre-recorded Webinar Access Form Modal */}
      {showPreRecordedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{t('webinar.accessExclusiveWebinar')}</h2>
                <button 
                  onClick={() => setShowPreRecordedForm(false)}
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
                    setShowPreRecordedForm(false);
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
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.email')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.phone')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('webinar.company')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
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
                      <div className="flex items-start">
                        <input
                          id="interest-security"
                          name="interests"
                          type="checkbox"
                          value="security"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="interest-security" className="ml-2 block text-sm text-gray-700">
                          {t('webinar.interestSecurity')}
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
                      className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center justify-center"
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

export default WebinarPage;