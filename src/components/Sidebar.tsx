import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import Logo from './ui/Logo';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  Target, 
  TrendingUp, 
  Settings,
  ShoppingCart,
  Zap,
  X,
  Menu,
  UserCheck,
  Ticket,
  ExternalLink
} from 'lucide-react';
import { Smartphone } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, user, establishment } = useStore();

  // Navegação baseada no nível de acesso
  const getNavigationByRole = (role: string) => {
    const baseNavigation = [
      { name: 'PDV', href: '/pos', icon: ShoppingCart, roles: ['admin', 'manager', 'operator'] },
      { name: 'Entrada', href: '/entry', icon: UserCheck, roles: ['admin', 'manager', 'operator'] },
    ];

    const managerNavigation = [
      { name: 'Dashboard', href: '/dashboard', icon: BarChart3, roles: ['admin', 'manager'] },
      { name: 'Campanhas', href: '/crm', icon: Target, roles: ['admin', 'manager'] },
      { name: 'Vendas & Estoque', href: '/sales', icon: TrendingUp, roles: ['admin', 'manager'] },
      { name: 'Eventos', href: '/events', icon: Calendar, roles: ['admin', 'manager'] },
      { name: 'Clientes', href: '/customers', icon: Users, roles: ['admin', 'manager'] },
    ];

    const adminNavigation = [
      { name: 'Analytics', href: '/analytics', icon: BarChart3, roles: ['admin'] },
      { name: 'Configurações', href: '/settings', icon: Settings, roles: ['admin'] },
    ];

    return [...baseNavigation, ...managerNavigation, ...adminNavigation].filter(
      item => item.roles.includes(role)
    );
  };

  const navigation = getNavigationByRole(user?.role || 'operator');

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
      >
        {sidebarOpen ? <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-xl border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 overflow-y-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center h-24 px-6 flex-shrink-0">
          <Logo size="lg" showLine={true} />
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4 flex-1">
          <div className="space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white hover:transform hover:scale-102'
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setSidebarOpen(false);
                  }
                }}
              >
                <item.icon className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* Link para Página Pública de Tickets */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-4">
              Página Pública
            </div>
            <Link
              to="/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
            >
              <Ticket className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
              Venda de Ingressos
              <ExternalLink className="ml-auto h-4 w-4 opacity-50" />
            </Link>
            
            <Link
              to="/customer-app"
              className="group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-300"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
            >
              <Smartphone className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
              App do Cliente
            </Link>
          </div>
        </nav>

        {/* Status */}
        <div className="mt-8 mx-4 mb-6 flex-shrink-0">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-900 dark:text-white">{establishment?.name || 'Sua Empresa'}</div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 dark:text-gray-300 hidden sm:inline">Online</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <span className="hidden sm:inline">Sistema ativo • </span>{establishment?.capacity || 1500} pessoas máx
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;