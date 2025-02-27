import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Award, Target, Rocket } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Conoce quiénes somos y nuestra misión de transformar la prospección digital</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nuestra Historia</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-4">
                ProspectPro nació en 2020 con una visión clara: revolucionar la forma en que las empresas captan y gestionan sus leads. Fundada por un equipo de expertos en marketing digital y desarrollo de software, nuestra plataforma combina tecnología avanzada con un enfoque centrado en el usuario.
              </p>
              <p className="text-gray-600 mb-4">
                Desde nuestros inicios, hemos crecido hasta convertirnos en un referente en el sector, ayudando a miles de empresas a optimizar sus procesos de prospección y multiplicar sus resultados comerciales.
              </p>
              <p className="text-gray-600">
                Hoy, continuamos innovando y expandiendo nuestras soluciones para adaptarnos a un mercado en constante evolución, manteniendo siempre nuestro compromiso con la excelencia, la seguridad y el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por ofrecer soluciones de la más alta calidad que superen las expectativas de nuestros clientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Colaboración</h3>
              <p className="text-gray-600">
                Creemos en el poder del trabajo en equipo y la colaboración para lograr resultados extraordinarios.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovación</h3>
              <p className="text-gray-600">
                Constantemente buscamos nuevas formas de mejorar y evolucionar nuestras soluciones.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y ética en todas nuestras operaciones y relaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestro Equipo Directivo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="CEO" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Carlos Rodríguez</h3>
              <p className="text-indigo-600 mb-2">CEO y Fundador</p>
              <p className="text-gray-600 text-sm">
                Con más de 15 años de experiencia en marketing digital y desarrollo de software, Carlos lidera la visión estratégica de ProspectPro.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="CTO" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ana Martínez</h3>
              <p className="text-indigo-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Ingeniera de software con experiencia en empresas líderes del sector tecnológico, Ana dirige el desarrollo tecnológico de nuestra plataforma.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="CMO" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Laura Sánchez</h3>
              <p className="text-indigo-600 mb-2">CMO</p>
              <p className="text-gray-600 text-sm">
                Especialista en marketing digital con un historial probado en estrategias de generación de leads y conversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres formar parte de nuestra historia?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete a nosotros y sé parte de la revolución en la prospección digital.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 text-lg">
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;