import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  User, 
  ChevronDown, 
  Settings, 
  LogOut, 
  UserCircle,
  Calendar,
  Video,
  Book,
  CreditCard,
  Users,
  MessageSquare,
  Target,
  Eye,
  ExternalLink
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  userName: string;
  userRole: string;
  onLogout?: () => void;
  setActivePage?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ userName, userRole, onLogout, setActivePage }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { t } = useTranslation();

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (showNotifications) setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showUserMenu) setShowUserMenu(false);
  };

  const handleProfileClick = () => {
    if (setActivePage) {
      setActivePage('profile');
    }
    setShowUserMenu(false);
  };

  const handleSettingsClick = () => {
    if (setActivePage) {
      setActivePage('settings');
    }
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setShowUserMenu(false);
  };

  const navigateTo = (page: string) => {
    if (setActivePage) {
      setActivePage(page);
    }
  };

  // Definición de los elementos del menú principal
  const mainNavItems = [
    { id: 'about', label: 'Sobre Nosotros', icon: <Users size={16} />, page: 'about' },
    { id: 'services', label: 'Servicios', icon: <Target size={16} />, page: 'services' },
    { id: 'mission', label: 'Misión', icon: <Target size={16} />, page: 'mission' },
    { id: 'vision', label: 'Visión', icon: <Eye size={16} />, page: 'vision' },
    { id: 'contact', label: 'Contacto', icon: <MessageSquare size={16} />, page: 'contact' },
    { id: 'blog', label: 'Blog', icon: <Book size={16} />, page: 'blog' },
    { id: 'pricing', label: 'Precios', icon: <CreditCard size={16} />, page: 'pricing' },
    { 
      id: 'schedule', 
      label: 'Agendar Demo', 
      icon: <Calendar size={16} />, 
      page: 'schedule',
      highlight: true 
    },
    { 
      id: 'webinar', 
      label: 'Webinar', 
      icon: <Video size={16} />, 
      page: 'webinar',
      badge: '¡HOT!',
      tooltip: 'Acceso exclusivo a webinars y contenido premium'
    }
  ];

  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          {/* Menú de navegación principal */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.page)}
                className={`
                  group relative flex items-center px-3 py-2 rounded-lg text-sm font-medium
                  transition duration-300 ease-in-out
                  ${item.highlight 
                    ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                  }
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                `}
                aria-label={item.label}
              >
                <span className={`
                  flex items-center transition-transform duration-300 ease-in-out
                  group-hover:transform group-hover:scale-105
                `}>
                  {item.icon && <span className="mr-1.5">{item.icon}</span>}
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-xs font-semibold text-white bg-red-500 rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </span>

                {/* Línea de subrayado animada */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Tooltip */}
                {item.tooltip && (
                  <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg z-50">
                    {item.tooltip}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                  </div>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {/* Notificaciones */}
          <div className="relative">
            <button 
              onClick={toggleNotifications}
              className="p-2 rounded-full hover:bg-gray-100 relative transition duration-300 ease-in-out"
              aria-label="Notificaciones"
            >
              <Bell size={20} className="transform transition-transform duration-300 hover:scale-110" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            
            {/* Panel de notificaciones */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notificaciones</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">Nuevo lead asignado</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 10 minutos</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">Referido convertido</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 1 hora</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50">
                    <p className="text-sm font-medium text-gray-800">Nuevas recompensas</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 3 horas</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    Ver todas las notificaciones
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Menú de usuario */}
          <div className="relative">
            <button 
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 focus:outline-none group"
              aria-expanded={showUserMenu}
              aria-haspopup="true"
            >
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-105">
                <User size={20} />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-800">{userName}</p>
                <p className="text-xs text-gray-500">{userRole}</p>
              </div>
              <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Panel del menú de usuario */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200">
                <button 
                  onClick={handleProfileClick}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <UserCircle size={16} className="mr-2" />
                  Mi Perfil
                </button>
                <button 
                  onClick={handleSettingsClick}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings size={16} className="mr-2" />
                  Configuración
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <LogOut size={16} className="mr-2" />
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;