import React from 'react';
import { useStore } from '../store/useStore';
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from './ui/Logo';
import { 
  Bell, 
  Settings, 
  User, 
  Sun,
  Moon,
  Wifi,
  Crown
} from 'lucide-react';

const Header: React.FC = () => {
  const { user, establishment, setUser } = useStore();
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
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl h-16">
      <div className="flex items-center justify-between h-full px-6">
        {/* Estabelecimento Info */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
            {/* Logo da Empresa */}
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-black flex items-center justify-center flex-shrink-0 hidden sm:flex">
              {establishment?.logo ? (
                <img 
                  src={establishment.logo} 
                  alt={establishment.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-white text-xs font-bold">LOGO</div>
              )}
            </div>
            
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-sm"></div>
            <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
              {establishment?.name || 'Club One'}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <Wifi className="w-3 h-3" />
            <span>847 pessoas ativas</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Demo: Voltar para Admin (só aparece se não for admin) */}
          {user?.role !== 'admin' && (
            <button
              onClick={switchToAdmin}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 sm:px-3 py-1.5 rounded-lg text-xs font-medium hover:from-red-600 hover:to-pink-600 transition-all flex items-center space-x-1"
              title="Voltar para Admin (Demo)"
            >
              <Crown className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Admin</span>
            </button>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all hover:scale-110"
            title={isDark ? 'Modo Claro' : 'Modo Escuro'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all hover:scale-110">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </button>

          {/* Settings */}
          <button className="p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all hover:scale-110 hidden sm:block">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-1 sm:space-x-2 pl-2 sm:pl-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-sm overflow-hidden">
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name || 'Usuário'} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              )}
            </div>
            <div className="hidden md:block">
              <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                {user?.name || 'Usuário'}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                {user?.role === 'admin' ? 'Administrador' : 
                 user?.role === 'manager' ? 'Gerente' : 
                 'Operador'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;