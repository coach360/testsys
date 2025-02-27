import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  GitBranchPlus, 
  BarChart3, 
  Shield, 
  Rocket, 
  MessageSquare, 
  Globe, 
  Zap, 
  Database, 
  CheckCircle 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Soluciones integrales para optimizar tu estrategia de prospección</p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Servicios Principales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestión de Leads</h3>
              <p className="text-gray-600 mb-4">
                Sistema completo para capturar, organizar, calificar y convertir leads de manera eficiente.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Captura multicanal de leads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Calificación automática basada en comportamiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Seguimiento y gestión del ciclo de vida completo</span>
                </li>
              </ul>
              <button className="text-indigo-600 font-medium hover:text-indigo-800">
                Saber más →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <GitBranchPlus className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Red de Referidos</h3>
              <p className="text-gray-600 mb-4">
                Plataforma para crear y gestionar un sistema de referidos que multiplique tu alcance.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Códigos de referencia únicos y seguimiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sistema de recompensas personalizable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Análisis de rendimiento de la red</span>
                </li>
              </ul>
              <button className="text-indigo-600 font-medium hover:text-indigo-800">
                Saber más →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analíticas Avanzadas</h3>
              <p className="text-gray-600 mb-4">
                Herramientas de análisis para medir, interpretar y optimizar tus resultados de prospección.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dashboards personalizables en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Informes detallados de conversión y ROI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Predicciones basadas en IA</span>
                </li>
              </ul>
              <button className="text-indigo-600 font-medium hover:text-indigo-800">
                Saber más →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comunicación Multicanal</h3>
              <p className="text-gray-600 mb-4">
                Integración con múltiples canales para conectar con tus prospectos donde estén.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integración con WhatsApp, Facebook e Instagram</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatización de mensajes y seguimiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Personalización avanzada de comunicaciones</span>
                </li>
              </ul>
              <button className="text-indigo-600 font-medium hover:text-indigo-800">
                Saber más →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguridad y Cumplimiento</h3>
              <p className="text-gray-600 mb-4">
                Protección robusta de datos y cumplimiento con normativas internacionales.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Encriptación de nivel empresarial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cumplimiento con GDPR, CCPA y otras normativas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Auditorías y monitoreo continuo</span>
                </li>
              </ul>
              <button className="text-indigo-600 font-medium hover:text-indigo-800">
                Saber más →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plataforma de Lanzamiento</h3>
              <p className="text-gray-600 mb-4">
                Herramientas para lanzar y gestionar campañas de marketing efectivas.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Creación de landing pages optimizadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatización de campañas multicanal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Análisis de rendimiento en tiempo real</span>
                </li>
              </ul>
              <button className="text-indigo-600 font-medium hover:text-indigo-800">
                Saber más →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">¿Por qué elegirnos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Eficiencia Operativa</h3>
                    <p className="mt-2 text-gray-600">
                      Nuestras soluciones automatizan tareas repetitivas, permitiéndote enfocarte en lo que realmente importa: construir relaciones con tus clientes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Integración Perfecta</h3>
                    <p className="mt-2 text-gray-600">
                      Nos integramos con tus herramientas existentes, creando un ecosistema cohesivo que maximiza tu productividad.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <Database className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Escalabilidad Garantizada</h3>
                    <p className="mt-2 text-gray-600">
                      Nuestras soluciones crecen contigo, adaptándose a tus necesidades a medida que tu negocio se expande.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg object-cover h-full"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Casos de Éxito</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  E
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Empresa ABC</h4>
                  <p className="text-sm text-gray-600">Sector Inmobiliario</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "ProspectPro transformó nuestra estrategia de captación de clientes. Aumentamos nuestras conversiones en un 250% en solo tres meses."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-indigo-600">
                  <span className="font-bold text-lg">+250%</span>
                  <span className="ml-1 text-sm">aumento en leads</span>
                </div>
                <button className="text-indigo-600 text-sm hover:text-indigo-800">
                  Leer caso completo →
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  T
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Tech Solutions</h4>
                  <p className="text-sm text-gray-600">Tecnología</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "La integración multicanal nos permitió estar presentes donde están nuestros clientes. El ROI ha superado todas nuestras expectativas."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-indigo-600">
                  <span className="font-bold text-lg">+180%</span>
                  <span className="ml-1 text-sm">aumento en conversiones</span>
                </div>
                <button className="text-indigo-600 text-sm hover:text-indigo-800">
                  Leer caso completo →
                 </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  G
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Global Marketing</h4>
                  <p className="text-sm text-gray-600">Marketing Digital</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "La plataforma de análisis nos ha proporcionado insights invaluables para optimizar nuestras campañas y maximizar nuestros resultados."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-indigo-600">
                  <span className="font-bold text-lg">+320%</span>
                  <span className="ml-1 text-sm">aumento en ROI</span>
                </div>
                <button className="text-indigo-600 text-sm hover:text-indigo-800">
                  Leer caso completo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu estrategia de prospección?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos hoy mismo para descubrir cómo nuestras soluciones pueden ayudarte a alcanzar tus objetivos comerciales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 text-lg">
              Solicitar Demo
            </button>
            <button className="px-8 py-4 bg-indigo-800 text-white rounded-lg font-medium hover:bg-indigo-900 text-lg border border-indigo-400">
              Contactar Ventas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;