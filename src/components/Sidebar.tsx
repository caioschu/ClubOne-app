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
  UserCheck,
  Ticket,
  ExternalLink,
  Smartphone,
  Wifi,
  Crown
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, user, establishment } = useStore();

  // Navegação baseada no nível de acesso
  const getNavigationByRole = (role: string) => {
    const baseNavigation = [
      { name: 'PDV', href: '/app/pos', icon: ShoppingCart, roles: ['admin', 'manager', 'operator'] },
      { name: 'Entrada', href: '/app/entry', icon: UserCheck, roles: ['admin', 'manager', 'operator'] },
    ];

    const managerNavigation = [
      { name: 'Dashboard', href: '/app/dashboard', icon: BarChart3, roles: ['admin', 'manager'] },
      { name: 'Campanhas', href: '/app/crm', icon: Target, roles: ['admin', 'manager'] },
      { name: 'Vendas & Estoque', href: '/app/sales', icon: TrendingUp, roles: ['admin', 'manager'] },
      { name: 'Eventos', href: '/app/events', icon: Calendar, roles: ['admin', 'manager'] },
      { name: 'Clientes', href: '/app/customers', icon: Users, roles: ['admin', 'manager'] },
    ];

    const adminNavigation = [
      { name: 'Analytics', href: '/app/analytics', icon: BarChart3, roles: ['admin'] },
      { name: 'Configurações', href: '/app/settings', icon: Settings, roles: ['admin'] },
    ];

    return [...baseNavigation, ...managerNavigation, ...adminNavigation].filter(
      item => item.roles.includes(role)
    );
  };

  const navigation = getNavigationByRole(user?.role || 'operator');

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Glass Sidebar */}
      <div className={`
        fixed left-4 top-4 bottom-4 w-72 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl 
        border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 z-40
        shadow-lg transition-all duration-500 ease-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo com Glow Effect */}
        <div className="flex items-center justify-center mb-6 flex-shrink-0">
          <Logo size="md" showLine={true} />
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1 overflow-y-auto min-h-0 custom-scrollbar">
          {navigation.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center space-x-3 px-4 py-2.5 
                 rounded-2xl transition-all duration-300
                 hover:bg-gray-100/80 dark:hover:bg-gray-800/80
                 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                 ${isActive ? 'bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-700/50' : ''}`
              }
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{item.name}</span>
            </NavLink>
          ))}
          
          {/* Páginas Públicas */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-4">
              Páginas Públicas
            </div>
            <Link
              to="/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-4 py-2.5 
                         rounded-2xl transition-all duration-300
                         hover:bg-gray-100/80 dark:hover:bg-gray-800/80
                         text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
            >
              <Ticket className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Venda de Ingressos</span>
              <ExternalLink className="ml-auto w-3 h-3 opacity-50 flex-shrink-0" />
            </Link>
            
            <Link
              to="/customer-app"
              className="group flex items-center space-x-3 px-4 py-2.5 
                         rounded-2xl transition-all duration-300
                         hover:bg-gray-100/80 dark:hover:bg-gray-800/80
                         text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
            >
              <Smartphone className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">App do Cliente</span>
            </Link>
          </div>
        </nav>

        {/* Status Card */}
        <div className="bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-4 mt-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-900 dark:text-white">{establishment?.name || 'Sua Empresa'}</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Online</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <Wifi className="w-3 h-3" />
            <span>847 pessoas ativas</span>
            <span>•</span>
            <span>{establishment?.capacity || 1500} máx</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;