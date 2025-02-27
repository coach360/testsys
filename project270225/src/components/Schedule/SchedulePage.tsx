import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Building, Users, Globe, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const SchedulePage: React.FC = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '',
    industry: '',
    currentCRM: '',
    meetingDate: '',
    meetingTime: '',
    timezone: 'Europe/Madrid',
    meetingType: 'video',
    additionalNotes: '',
    referralSource: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend API
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      companySize: '',
      industry: '',
      currentCRM: '',
      meetingDate: '',
      meetingTime: '',
      timezone: 'Europe/Madrid',
      meetingType: 'video',
      additionalNotes: '',
      referralSource: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{t('schedule.title')} | ProspectPro</title>
        <meta name="description" content="Agenda una demostración personalizada para descubrir cómo ProspectPro puede transformar tu estrategia de prospección y gestión de leads." />
        <meta name="keywords" content="demo, demostración, agenda, cita, prospección, CRM, leads" />
        <meta property="og:title" content="Agenda una Demostración | ProspectPro" />
        <meta property="og:description" content="Descubre cómo ProspectPro puede transformar tu estrategia de prospección con una demostración personalizada." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prospectpro.com/schedule" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('schedule.title')}</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">{t('schedule.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {formSubmitted ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle size={32} className="text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('schedule.thankYou')}</h2>
            <p className="text-gray-600 mb-6">{t('schedule.confirmationMessage')}</p>
            <button 
              onClick={() => setFormSubmitted(false)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Agendar otra demostración
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Users size={20} className="mr-2 text-indigo-600" />
                  {t('schedule.yourInfo')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.firstName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.lastName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.email')} <span className="text-red-500">*</span>
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
                      {t('schedule.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Building size={20} className="mr-2 text-indigo-600" />
                  {t('schedule.companyInfo')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.companyName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.companySize')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">Seleccionar...</option>
                      <option value="small">{t('schedule.companySizes.small')}</option>
                      <option value="medium">{t('schedule.companySizes.medium')}</option>
                      <option value="large">{t('schedule.companySizes.large')}</option>
                      <option value="enterprise">{t('schedule.companySizes.enterprise')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.industry')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="currentCRM" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.currentCRM')}
                    </label>
                    <input
                      type="text"
                      id="currentCRM"
                      name="currentCRM"
                      value={formData.currentCRM}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Meeting Preferences */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Calendar size={20} className="mr-2 text-indigo-600" />
                  {t('schedule.meetingPreferences')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="meetingDate" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.meetingDate')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="meetingDate"
                      name="meetingDate"
                      value={formData.meetingDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="meetingTime" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.meetingTime')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      id="meetingTime"
                      name="meetingTime"
                      value={formData.meetingTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.timezone')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="timezone"
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="Europe/Madrid">Madrid (GMT+1)</option>
                      <option value="Europe/London">Londres (GMT)</option>
                      <option value="America/New_York">Nueva York (GMT-5)</option>
                      <option value="America/Los_Angeles">Los Ángeles (GMT-8)</option>
                      <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
                      <option value="America/Bogota">Bogotá (GMT-5)</option>
                      <option value="America/Santiago">Santiago (GMT-4)</option>
                      <option value="America/Buenos_Aires">Buenos Aires (GMT-3)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="meetingType" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.meetingType')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="meetingType"
                      name="meetingType"
                      value={formData.meetingType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="video">{t('schedule.meetingTypes.video')}</option>
                      <option value="phone">{t('schedule.meetingTypes.phone')}</option>
                      <option value="inPerson">{t('schedule.meetingTypes.inPerson')}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.additionalNotes')}
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.howDidYouHear')}
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="search">{t('schedule.referralSources.search')}</option>
                      <option value="social">{t('schedule.referralSources.social')}</option>
                      <option value="referral">{t('schedule.referralSources.referral')}</option>
                      <option value="event">{t('schedule.referralSources.event')}</option>
                      <option value="other">{t('schedule.referralSources.other')}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  {t('schedule.scheduleDemo')}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;