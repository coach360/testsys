import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Tag, Calendar, User, MessageSquare, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Mock blog posts data
const mockBlogPosts = [
  {
    id: 1,
    title: "5 Estrategias Avanzadas de Prospección para 2025",
    excerpt: "Descubre las técnicas más efectivas para generar leads de alta calidad en el entorno digital actual.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "María Rodríguez",
    date: "2025-03-15",
    category: "prospecting",
    tags: ["prospección", "leads", "ventas", "digital"],
    comments: 12
  },
  {
    id: 2,
    title: "Integrando WhatsApp en tu Estrategia de CRM",
    excerpt: "Aprende a utilizar WhatsApp Business API para mejorar la comunicación con tus clientes potenciales.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Carlos Méndez",
    date: "2025-03-10",
    category: "crm",
    tags: ["whatsapp", "comunicación", "automatización", "mensajería"],
    comments: 8
  },
  {
    id: 3,
    title: "Seguridad de Datos en Sistemas de Prospección",
    excerpt: "Protege la información de tus clientes con estas prácticas recomendadas de seguridad.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Ana Martínez",
    date: "2025-03-05",
    category: "security",
    tags: ["seguridad", "datos", "privacidad", "GDPR"],
    comments: 5
  },
  {
    id: 4,
    title: "Automatización de Campañas Multicanal",
    excerpt: "Maximiza el impacto de tus campañas con estrategias de automatización en múltiples canales.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Javier López",
    date: "2025-02-28",
    category: "automation",
    tags: ["automatización", "campañas", "multicanal", "marketing"],
    comments: 15
  },
  {
    id: 5,
    title: "El Futuro del Marketing Digital en 2025",
    excerpt: "Tendencias emergentes que definirán el panorama del marketing digital en los próximos años.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Laura Sánchez",
    date: "2025-02-20",
    category: "marketing",
    tags: ["tendencias", "futuro", "marketing digital", "innovación"],
    comments: 20
  }
];

// Popular tags from all posts
const popularTags = ["prospección", "automatización", "marketing digital", "seguridad", "CRM", "leads", "ventas", "whatsapp"];

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');

  // Filter posts based on search term and category
  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a newsletter service
    alert(`Gracias por suscribirte con: ${email}`);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{t('blog.title')} | ProspectPro</title>
        <meta name="description" content="Mantente informado sobre las últimas tendencias en prospección, CRM, automatización y marketing digital." />
        <meta name="keywords" content="blog, prospección, CRM, automatización, marketing digital, leads, ventas, seguridad" />
        <meta property="og:title" content="Blog y Novedades | ProspectPro" />
        <meta property="og:description" content="Artículos, guías y noticias sobre prospección avanzada y gestión de leads." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prospectpro.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-indigo-100">{t('blog.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <input
                type="text"
                placeholder={t('blog.searchPosts')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Category Tabs */}
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'all' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('blog.categoryAll')}
              </button>
              <button
                onClick={() => setSelectedCategory('marketing')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'marketing' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('blog.categoryMarketing')}
              </button>
              <button
                onClick={() => setSelectedCategory('prospecting')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'prospecting' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('blog.categoryProspecting')}
              </button>
              <button
                onClick={() => setSelectedCategory('crm')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'crm' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('blog.categoryCRM')}
              </button>
              <button
                onClick={() => setSelectedCategory('automation')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'automation' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('blog.categoryAutomation')}
              </button>
              <button
                onClick={() => setSelectedCategory('security')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'security' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('blog.categorySecurity')}
              </button>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="h-48 w-full object-cover md:h-full"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare size={14} className="mr-1" />
                            <span>{post.comments} {t('blog.comments')}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <button className="text-indigo-600 font-medium hover:text-indigo-800">
                            {t('blog.readMore')} →
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-600">No se encontraron publicaciones que coincidan con tu búsqueda.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Newsletter Subscription */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('blog.subscribe')}</h3>
              <p className="text-gray-600 mb-4">{t('blog.subscribeText')}</p>
              <form onSubmit={handleSubscribe}>
                <div className="flex">
                  <input
                    type="email"
                    placeholder={t('blog.yourEmail')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
                  >
                    {t('blog.subscribeButton')}
                  </button>
                </div>
              </form>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('blog.popularTags')}</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button 
                    key={index}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800 flex items-center"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Featured post" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Guía Completa: Implementación de un Sistema de Prospección Automatizado</h3>
                <p className="text-gray-600 mb-4">Todo lo que necesitas saber para implementar un sistema de prospección efectivo en tu empresa.</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-800">
                  {t('blog.readMore')} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;