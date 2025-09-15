import React from 'react';
import { Home, Ticket, ShoppingCart, Star, QrCode, User } from 'lucide-react';

interface CustomerNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartItemCount: number;
}

const CustomerNavigation: React.FC<CustomerNavigationProps> = ({ 
  activeTab, 
  onTabChange, 
  cartItemCount 
}) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'tickets', icon: Ticket, label: 'Ingressos' },
    { id: 'menu', icon: ShoppingCart, label: 'Cardápio', badge: cartItemCount },
    { id: 'loyalty', icon: Star, label: 'Fidelidade' },
    { id: 'qr', icon: QrCode, label: 'Pagar' },
    { id: 'profile', icon: User, label: 'Perfil' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center space-y-1 relative min-w-0 flex-1 ${
              activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="text-xs font-medium truncate">{tab.label}</span>
            {tab.badge && tab.badge > 0 && (
              <div className="absolute -top-1 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {tab.badge}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomerNavigation;