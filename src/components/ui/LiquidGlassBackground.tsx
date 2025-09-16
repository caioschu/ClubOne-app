import React from 'react';

const LiquidGlassBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Base - Mais sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white 
                      dark:from-gray-900 dark:to-gray-800 transition-colors duration-1000" />
    </div>
  );
};

export default LiquidGlassBackground;