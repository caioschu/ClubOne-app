import React from 'react';
import { useStore } from '../store/useStore';
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from './ui/Logo';
import NotificationCenter from './NotificationCenter';
import { 
  Settings, 
  User, 
  Sun,
  Moon,
  Wifi,
  Crown,
  Menu,
  X
} from 'lucide-react';

const Header: React.FC = () => {
  const { user, establishment, setUser, sidebarOpen, setSidebarOpen } = useStore();
  const { isDark, toggleDarkMode } = useDarkMode();

  const switchToAdmin = () => {
    setUser({
      id: '1',
      name: 'Roberto Silva',
      email: 'roberto@mansionclub.com',
      role: 'admin'
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 glass-card p-3 transition-all duration-300 hover:scale-110"
      >
        {sidebarOpen ? 
          <X className="w-5 h-5 text-white" /> : 
          <Menu className="w-5 h-5 text-white" />
        }
      </button>

      {/* Glass Header */}
      <header className="fixed top-4 left-4 lg:left-80 right-4 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl 
                         border border-gray-200/50 dark:border-gray-700/50 rounded-3xl px-6 z-30
                         shadow-lg flex items-center justify-between">
        {/* Estabelecimento Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {/* Logo da Empresa */}
            <div className="w-10 h-10 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
              {establishment?.logo ? (
                <img 
                  src={establishment.logo} 
                  alt={establishment.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-600 dark:text-gray-300 text-xs font-bold">LOGO</div>
              )}
            </div>
            
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold text-gray-900 dark:text-white text-base">
              {establishment?.name || 'Club One'}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-xl border border-green-200/50 dark:border-green-700/50 rounded-full px-3 py-1 text-xs font-medium text-green-800 dark:text-green-300">
            <Wifi className="w-3 h-3" />
            <span>847 pessoas ativas</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Demo: Voltar para Admin */}
          {user?.role !== 'admin' && (
            <button
              onClick={switchToAdmin}
              className="px-4 py-2 rounded-xl font-semibold text-white text-sm
                         bg-gradient-to-r from-purple-600 to-blue-600
                         hover:from-purple-700 hover:to-blue-700
                         active:scale-95 transition-all duration-300
                         flex items-center space-x-2"
              title="Voltar para Admin (Demo)"
            >
              <Crown className="w-4 h-4 mr-2" />
              <span>Admin</span>
            </button>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-3 transition-all duration-300 hover:scale-105"
            title={isDark ? 'Modo Claro' : 'Modo Escuro'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-3 transition-all duration-300 hover:scale-105">
            <NotificationCenter />
          </div>

          {/* Settings */}
          <button className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-3 transition-all duration-300 hover:scale-105 hidden sm:block">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl px-4 py-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center overflow-hidden">
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name || 'Usuário'} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name || 'Usuário'}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                {user?.role === 'admin' ? 'Administrador' : 
                 user?.role === 'manager' ? 'Gerente' : 
                 'Operador'}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;