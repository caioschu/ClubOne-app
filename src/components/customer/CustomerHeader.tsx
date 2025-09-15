import React from 'react';
import Logo from '../ui/Logo';

interface CustomerHeaderProps {
  isOnline?: boolean;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ isOnline = true }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo size="sm" showLine={true} />
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-xs text-gray-600">{isOnline ? 'Online' : 'Offline'}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;