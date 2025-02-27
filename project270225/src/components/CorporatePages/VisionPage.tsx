import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Lightbulb, Compass, BarChart } from 'lucide-react';

const VisionPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestra Visión</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Construyendo el futuro de la prospección digital</p>
        </div>
      </div>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-indigo-100 mb-6">
              <Eye className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Declaración de Visión</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-600 mb-6 italic font-medium">
                "Aspiramos a ser el referente global en soluciones de prospección, redefiniendo los estándares de la industria a través de la innovación, la seguridad y los resultados excepcionales."
              </p>
              <p className="text-gray-600 mb-4">
                En ProspectPro, visualizamos un futuro donde la prospección digital no solo sea eficiente y segura, sino también personalizada, ética y centrada en el valor real para todos los involucrados.
              </p>
              <p className="text-gray-600">
                Nuestra visión es crear un ecosistema donde las empresas puedan conectar con sus clientes potenciales de manera auténtica y significativa, construyendo relaciones duraderas basadas en la confianza y el valor mutuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Objetivos Futuros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovación Continua</h3>
              <p className="text-gray-600">
                Mantenernos a la vanguardia de la tecnología, incorporando inteligencia artificial, aprendizaje automático y otras tecnologías emergentes para ofrecer soluciones cada vez más potentes y eficientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expansión Global</h3>
              <p className="text-gray-600">
                Ampliar nuestra presencia internacional, adaptando nuestras soluciones a las necesidades específicas de diferentes mercados y culturas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BarChart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto Positivo</h3>
              <p className="text-gray-600">
                Contribuir a la transformación digital de las empresas, ayudándolas a prosperar en un entorno cada vez más competitivo y tecnológico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hoja de Ruta Estratégica</h2>
            
            <div className="space-y-12 mt-12">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fase 1: Consolidación y Mejora (2023-2024)</h3>
                <p className="text-gray-600 mb-2">
                  Fortalecer nuestra plataforma actual y expandir nuestras capacidades de integración.
                </p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Optimización de la experiencia de usuario y rendimiento del sistema.</li>
                  <li>Ampliación de integraciones con CRMs y plataformas de marketing.</li>
                  <li>Desarrollo de nuevas funcionalidades basadas en feedback de clientes.</li>
                </ul>
              </div>
              
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fase 2: Expansión e Innovación (2024-2025)</h3>
                <p className="text-gray-600 mb-2">
                  Ampliar nuestra presencia global e incorporar tecnologías avanzadas.
                </p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Expansión a nuevos mercados internacionales.</li>
                  <li>Implementación de soluciones avanzadas de IA para personalización y predicción.</li>
                  <li>Lanzamiento de nuevas líneas de productos complementarios.</li>
                </ul>
              </div>
              
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fase 3: Transformación y Liderazgo (2025-2026)</h3>
                <p className="text-gray-600 mb-2">
                  Redefinir los estándares de la industria y consolidar nuestro liderazgo global.
                </p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Desarrollo de un ecosistema completo de prospección y conversión.</li>
                  <li>Establecimiento de alianzas estratégicas con líderes de la industria.</li>
                  <li>Inversión en investigación para anticipar las tendencias futuras del mercado.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres ser parte de nuestro futuro?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete a nosotros y contribuye a dar forma al futuro de la prospección digital.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 text-lg">
            Descubre Más
          </button>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;