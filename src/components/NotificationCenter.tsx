import React, { useState } from 'react';
import { Bell, X, Check, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { formatRelativeTime } from '../utils/formatters';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'warning',
      title: 'Estoque Baixo',
      message: 'Heineken Long Neck com apenas 15 unidades restantes',
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      read: false,
      action: {
        label: 'Reabastecer',
        onClick: () => console.log('Reabastecendo...')
      }
    },
    {
      id: '2',
      type: 'success',
      title: 'Meta Atingida',
      message: 'Vendas de hoje superaram a meta em 28%!',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      read: false
    },
    {
      id: '3',
      type: 'info',
      title: 'Campanha Finalizada',
      message: 'Flash Heineken teve 89% de conversão',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: true
    },
    {
      id: '4',
      type: 'warning',
      title: 'Cliente VIP',
      message: 'Rafael Costa (Gold) está há 2h sem consumir',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      read: true,
      action: {
        label: 'Enviar Oferta',
        onClick: () => console.log('Enviando oferta...')
      }
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return { icon: CheckCircle, color: 'text-green-600' };
      case 'warning': return { icon: AlertTriangle, color: 'text-yellow-600' };
      case 'error': return { icon: AlertTriangle, color: 'text-red-600' };
      default: return { icon: Info, color: 'text-blue-600' };
    }
  };

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'warning': return 'bg-yellow-50 border-yellow-200';
      case 'error': return 'bg-red-50 border-red-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative transition-all hover:scale-110"
      >
        <Bell className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
            <span className="text-xs text-white font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </div>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="absolute right-0 top-12 w-80 sm:w-96 glass-card z-50 max-h-96 overflow-hidden animate-scaleIn">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-bold text-white">Notificações</h3>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
                  >
                    Marcar todas como lidas
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="glass-card p-2 hover:scale-110 transition-all duration-300"
                >
                  <X className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-white/50">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 opacity-50" />
                  </div>
                  <p>Nenhuma notificação</p>
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {notifications.map((notification) => {
                    const { icon: IconComponent, color } = getNotificationIcon(notification.type);
                    
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 hover:bg-white/5 transition-colors ${
                          !notification.read ? 'bg-purple-500/10' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 glass-card">
                            <IconComponent className={`w-4 h-4 ${color}`} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-white text-sm">
                                  {notification.title}
                                </p>
                                <p className="text-white/70 text-sm mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-white/50 text-xs mt-2">
                                  {formatRelativeTime(notification.timestamp)}
                                </p>
                              </div>
                              
                              <div className="flex items-center space-x-1 ml-2">
                                {!notification.read && (
                                  <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="glass-card p-1 hover:scale-110 transition-all duration-300"
                                    title="Marcar como lida"
                                  >
                                    <Check className="w-3 h-3 text-white/60" />
                                  </button>
                                )}
                                <button
                                  onClick={() => removeNotification(notification.id)}
                                  className="glass-card p-1 hover:scale-110 transition-all duration-300"
                                  title="Remover"
                                >
                                  <X className="w-3 h-3 text-white/60" />
                                </button>
                              </div>
                            </div>
                            
                            {notification.action && (
                              <button
                                onClick={notification.action.onClick}
                                className="mt-3 text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
                              >
                                {notification.action.label}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-4 border-t border-white/10">
                <button className="w-full text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors">
                  Ver todas as notificações
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationCenter;