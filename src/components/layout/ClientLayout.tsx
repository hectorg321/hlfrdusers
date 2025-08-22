import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserIcon 
} from '@heroicons/react/24/outline';
import { useClientAuthStore } from '@/store/useClientAuthStore';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { id: 'home', label: 'Inicio', icon: HomeIcon, path: '/' },
  { id: 'services', label: 'Servicios', icon: WrenchScrewdriverIcon, path: '/services' },
  { id: 'appointments', label: 'Citas', icon: CalendarIcon, path: '/appointments' },
  { id: 'history', label: 'Historial', icon: ClockIcon, path: '/history' },
  { id: 'profile', label: 'Perfil', icon: UserIcon, path: '/profile' },
];

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customer, logout } = useClientAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-light-200">
      {/* Header */}
      <header className="bg-light-50 shadow-sm border-b border-light-300 sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-sm">
                <WrenchScrewdriverIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-primary">Centro Automotriz HLFRD</h1>
                <p className="text-sm text-secondary">Cliente</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-light-200 transition-colors"
              >
                <UserIcon className="w-6 h-6 text-light-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú desplegable del usuario */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-light-50 rounded-lg shadow-lg border border-light-300 z-50 min-w-48">
          <div className="p-4 border-b border-light-200">
            <p className="font-medium text-primary">
              {customer?.firstName} {customer?.lastName}
            </p>
            <p className="text-sm text-secondary">{customer?.email}</p>
          </div>
          <div className="p-2">
            <button
              onClick={() => handleNavigation('/profile')}
              className="w-full text-left px-3 py-2 text-sm text-primary hover:bg-light-200 rounded-md transition-colors"
            >
              Editar Perfil
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <main className="pb-20">
        {children}
      </main>

      {/* Navegación inferior */}
      <nav className="fixed bottom-0 left-0 right-0 bg-light-50 border-t border-light-300 z-40 shadow-lg">
        <div className="flex items-center justify-around py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-primary-500 bg-primary-100' 
                    : 'text-light-500 hover:text-light-700 hover:bg-light-200'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default ClientLayout;
