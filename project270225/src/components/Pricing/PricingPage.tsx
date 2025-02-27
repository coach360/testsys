import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, X, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se ajustará el cobro de forma prorrateada."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las principales tarjetas de crédito (Visa, Mastercard, American Express), PayPal y transferencias bancarias para planes anuales."
    },
    {
      question: "¿Ofrecen un período de prueba?",
      answer: "Sí, ofrecemos una prueba gratuita de 14 días para todos nuestros planes. No se requiere tarjeta de crédito para comenzar."
    },
    {
      question: "¿Cómo funciona la facturación anual?",
      answer: "Con la facturación anual, se te cobrará por un año completo por adelantado, lo que te permite ahorrar un 20% en comparación con la facturación mensual."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. No hay contratos a largo plazo ni penalizaciones por cancelación."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{t('pricing.title')} | ProspectPro</title>
        <meta name="description" content="Planes flexibles para cada etapa de tu negocio. Elige el plan que mejor se adapte a tus necesidades de prospección y gestión de leads." />
        <meta name="keywords" content="precios, planes, suscripción, prospección, CRM, leads, automatización" />
        <meta property="og:title" content="Planes y Precios | ProspectPro" />
        <meta property="og:description" content="Soluciones flexibles para optimizar tu estrategia de prospección y gestión de leads." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prospectpro.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('pricing.title')}</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                !isYearly ? 'bg-indigo-600 text-white' : 'text-gray-700'
              }`}
            >
              {t('pricing.monthlyBilling')}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                isYearly ? 'bg-indigo-600 text-white' : 'text-gray-700'
              }`}
            >
              {t('pricing.yearlyBilling')} <span className="text-xs font-normal bg-green-100 text-green-800 px-2 py-0.5 rounded-full ml-1">{t('pricing.savePercent', { percent: 20 })}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{t('pricing.plans.starter.name')}</h2>
              <p className="text-gray-600 mt-1">{t('pricing.plans.starter.description')}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{t('pricing.currency')}{t('pricing.plans.starter.price')}</span>
                <span className="text-gray-600">{t('pricing.perMonth')}</span>
                {isYearly && <p className="text-sm text-gray-500 mt-1">{t('pricing.billedAnnually')}</p>}
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {t('pricing.plans.starter.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                {t('pricing.getStarted')}
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform scale-105 border-2 border-indigo-500 relative">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 text-sm font-medium">
              {t('pricing.mostPopular')}
            </div>
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{t('pricing.plans.professional.name')}</h2>
              <p className="text-gray-600 mt-1">{t('pricing.plans.professional.description')}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{t('pricing.currency')}{t('pricing.plans.professional.price')}</span>
                <span className="text-gray-600">{t('pricing.perMonth')}</span>
                {isYearly && <p className="text-sm text-gray-500 mt-1">{t('pricing.billedAnnually')}</p>}
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {t('pricing.plans.professional.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                {t('pricing.getStarted')}
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{t('pricing.plans.enterprise.name')}</h2>
              <p className="text-gray-600 mt-1">{t('pricing.plans.enterprise.description')}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{t('pricing.currency')}{t('pricing.plans.enterprise.price')}</span>
                <span className="text-gray-600">{t('pricing.perMonth')}</span>
                {isYearly && <p className="text-sm text-gray-500 mt-1">{t('pricing.billedAnnually')}</p>}
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {t('pricing.plans.enterprise.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                {t('pricing.contactSales')}
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('pricing.comparePlans')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Características</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{t('pricing.plans.starter.name')}</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{t('pricing.plans.professional.name')}</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{t('pricing.plans.enterprise.name')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Número de leads</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">2,500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{t('pricing.unlimitedFeature')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Usuarios</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{t('pricing.unlimitedFeature')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Páginas de aterrizaje</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{t('pricing.unlimitedFeature')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Integraciones multicanal</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">WhatsApp</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">WhatsApp, Facebook, Instagram</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Todas las integraciones</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Red de referidos</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <X size={20} className="text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <Check size={20} className="text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Avanzada</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Soporte</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Email</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Prioritario</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">24/7 + Gerente dedicado</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">API completa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <X size={20} className="text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <X size={20} className="text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <Check size={20} className="text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('pricing.faq')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Custom Plan CTA */}
        <div className="bg-indigo-700 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">{t('pricing.customPlan')}</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">{t('pricing.customPlanText')}</p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
            {t('pricing.contactUs')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;