import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  height?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  count = 1,
  height = 'h-4'
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div 
          key={idx} 
          className={`bg-gray-200 dark:bg-gray-700 rounded ${height} ${idx > 0 ? 'mt-2' : ''}`}
        />
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
      <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="space-y-3">
    {Array.from({ length: 5 }).map((_, idx) => (
      <div key={idx} className="animate-pulse flex space-x-4 p-4">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
        <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;