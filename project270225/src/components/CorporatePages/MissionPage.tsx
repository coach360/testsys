import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, TrendingUp, Users, Globe } from 'lucide-react';

const MissionPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestra Misión</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Transformando la prospección digital con innovación, seguridad y resultados</p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-indigo-100 mb-6">
              <Target className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Declaración de Misión</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-600 mb-6 italic font-medium">
                "Nuestra misión es empoderar a las empresas con herramientas de prospección innovadoras, seguras y efectivas que maximicen su potencial de crecimiento."
              </p>
              <p className="text-gray-600 mb-4">
                En ProspectPro, nos dedicamos a transformar la forma en que las empresas captan, gestionan y convierten leads. Creemos que la prospección efectiva es la base del crecimiento sostenible, y nos comprometemos a proporcionar las herramientas y el soporte necesarios para que nuestros clientes alcancen y superen sus objetivos comerciales.
              </p>
              <p className="text-gray-600">
                Nuestra plataforma combina tecnología avanzada, seguridad robusta y una experiencia de usuario excepcional para ofrecer soluciones que no solo satisfacen las necesidades actuales de nuestros clientes, sino que también anticipan los desafíos futuros del mercado digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Objetivos Clave</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Impulsar el Crecimiento</h3>
              </div>
              <p className="text-gray-600">
                Proporcionar herramientas que permitan a nuestros clientes multiplicar su base de leads y mejorar sus tasas de conversión de manera sostenible.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Empoderar a los Equipos</h3>
              </div>
              <p className="text-gray-600">
                Facilitar a los equipos de ventas y marketing las herramientas necesarias para optimizar sus procesos y maximizar su eficiencia.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Liderar la Innovación</h3>
              </div>
              <p className="text-gray-600">
                Mantenernos a la vanguardia de la tecnología de prospección, incorporando continuamente nuevas funcionalidades y mejoras.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Garantizar la Excelencia</h3>
              </div>
              <p className="text-gray-600">
                Mantener los más altos estándares de calidad, seguridad y rendimiento en todos nuestros productos y servicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nuestro Compromiso</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-4">
                Nos comprometemos a ser más que un proveedor de software; aspiramos a ser un socio estratégico para nuestros clientes, acompañándolos en cada etapa de su viaje de crecimiento.
              </p>
              <p className="text-gray-600 mb-4">
                Priorizamos la seguridad y la privacidad de los datos, implementando las medidas más avanzadas para proteger la información de nuestros clientes y garantizar el cumplimiento de las normativas internacionales.
              </p>
              <p className="text-gray-600">
                Creemos en la mejora continua y la adaptación constante a un entorno digital en evolución, por lo que invertimos continuamente en investigación y desarrollo para ofrecer soluciones que se anticipen a las necesidades del mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Compartes nuestra misión?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete a nosotros y sé parte de la revolución en la prospección digital.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 text-lg">
            Comenzar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;