import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLine?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showLine = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const lineClasses = {
    sm: 'w-8 h-0.5',
    md: 'w-12 h-0.5',
    lg: 'w-16 h-1',
    xl: 'w-24 h-1'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`font-black leading-none ${sizeClasses[size]} text-center`}>
        <div className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent text-center">
          CLUB
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent -mt-1 text-center">
          ONE
        </div>
      </div>
      {showLine && (
        <div className={`bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 ${lineClasses[size]}`}></div>
      )}
    </div>
  );
};

export default Logo;