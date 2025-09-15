import React from 'react';

interface AdvancedFiltersProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
  selectedPriceRange: string;
  onPriceRangeChange: (range: string) => void;
  isVisible: boolean;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  selectedPeriod,
  onPeriodChange,
  selectedPriceRange,
  onPriceRangeChange,
  isVisible
}) => {
  if (!isVisible) return null;

  const periods = [
    { value: '', label: 'Todas as datas' },
    { value: 'today', label: 'Hoje' },
    { value: '7days', label: 'Próximos 7 dias' },
    { value: '30days', label: 'Próximos 30 dias' }
  ];

  const priceRanges = [
    { value: '', label: 'Todos os preços' },
    { value: 'low', label: 'Até R$ 80' },
    { value: 'medium', label: 'R$ 80 - R$ 150' },
    { value: 'high', label: 'Acima de R$ 150' }
  ];

  return (
    <div className="flex flex-wrap gap-4 p-3 bg-gray-50 rounded-lg">
      <select
        value={selectedPeriod}
        onChange={(e) => onPeriodChange(e.target.value)}
        className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
      >
        {periods.map((period) => (
          <option key={period.value} value={period.value}>
            {period.label}
          </option>
        ))}
      </select>

      <select
        value={selectedPriceRange}
        onChange={(e) => onPriceRangeChange(e.target.value)}
        className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
      >
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AdvancedFilters;