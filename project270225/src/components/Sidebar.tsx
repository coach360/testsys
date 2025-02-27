import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileSpreadsheet, 
  GitBranchPlus, 
  BarChart3, 
  FileVideo, 
  Globe, 
  Rocket, 
  Coins, 
  Settings, 
  LogOut,
  Menu,
  X,
  MapPin
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { id: 'dashboard', label: 'Panel Principal', icon: <LayoutDashboard size={20} /> },
    { id: 'leads', label: 'Gestión de Leads', icon: <FileSpreadsheet size={20} /> },
    { id: 'users', label: 'Gestión de Usuarios', icon: <Users size={20} /> },
    { id: 'referrals', label: 'Red de Referidos', icon: <GitBranchPlus size={20} /> },
    { id: 'analytics', label: 'Analíticas', icon: <BarChart3 size={20} /> },
    { id: 'real-time-stats', label: 'Estadísticas en Tiempo Real', icon: <MapPin size={20} /> },
    { id: 'videos', label: 'Biblioteca de Videos', icon: <FileVideo size={20} /> },
    { id: 'landing-pages', label: 'Páginas de Aterrizaje', icon: <Globe size={20} /> },
    { id: 'launchpad', label: 'Plataforma de Lanzamiento', icon: <Rocket size={20} /> },
    { id: 'scoin', label: 'S-Coin 360', icon: <Coins size={20} /> },
    { id: 'settings', label: 'Configuración', icon: <Settings size={20} /> },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleMobileSidebar}
          className="p-2 rounded-md bg-indigo-600 text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 z-50
                   ${collapsed ? 'w-20' : 'w-64'} 
                   ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className={`flex items-center ${collapsed ? 'justify-center w-full' : ''}`}>
            <Rocket className="text-indigo-500" size={collapsed ? 28 : 24} />
            {!collapsed && <span className="ml-2 text-xl font-semibold">ProspectPro</span>}
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white lg:block hidden"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
          <button 
            onClick={toggleMobileSidebar}
            className="text-gray-400 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => {
                    setActivePage(item.id);
                    if (mobileOpen) setMobileOpen(false);
                  }}
                  className={`flex items-center w-full p-3 ${
                    collapsed ? 'justify-center' : 'px-6'
                  } ${
                    activePage === item.id
                      ? 'bg-indigo-700 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  } transition-colors duration-200`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="ml-4">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
          <button
            onClick={onLogout}
            className={`flex items-center text-gray-400 hover:text-white transition-colors duration-200 ${
              collapsed ? 'justify-center w-full' : ''
            }`}
          >
            <LogOut size={20} />
            {!collapsed && <span className="ml-4">Cerrar Sesión</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;