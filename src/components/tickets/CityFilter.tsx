import React from 'react';

interface CityFilterProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  cities: Array<{ value: string; label: string; count: number }>;
}

const CityFilter: React.FC<CityFilterProps> = ({
  selectedCity,
  onCityChange,
  cities
}) => {
  return (
    <select
      value={selectedCity}
      onChange={(e) => onCityChange(e.target.value)}
      className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-w-[140px]"
    >
      <option value="">Todas as cidades</option>
      {cities.map((city) => (
        <option key={city.value} value={city.value}>
          {city.label} ({city.count})
        </option>
      ))}
    </select>
  );
};

export default CityFilter;