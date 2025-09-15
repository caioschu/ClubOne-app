import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
  showMoreFilters: boolean;
  setShowMoreFilters: (show: boolean) => void;
  clearFilters: () => void;
  resultsCount: number;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
  selectedGenre,
  setSelectedGenre,
  selectedPeriod,
  setSelectedPeriod,
  selectedPriceRange,
  setSelectedPriceRange,
  showMoreFilters,
  setShowMoreFilters,
  clearFilters,
  resultsCount
}) => {
  const getActiveFilters = () => {
    const filters = [];
    if (selectedGenre) filters.push({ type: 'genre', value: selectedGenre, label: selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1) });
    if (selectedCity) filters.push({ type: 'city', value: selectedCity, label: selectedCity });
    if (selectedPeriod) {
      const periodLabels = { today: 'Hoje', '7days': '7 dias', '30days': '30 dias', all: 'Todas' };
      filters.push({ type: 'period', value: selectedPeriod, label: periodLabels[selectedPeriod as keyof typeof periodLabels] });
    }
    if (selectedPriceRange) {
      const priceLabels = { low: 'Até R$80', medium: 'R$80-150', high: 'R$150+' };
      filters.push({ type: 'price', value: selectedPriceRange, label: priceLabels[selectedPriceRange as keyof typeof priceLabels] });
    }
    return filters;
  };

  const removeFilter = (type: string) => {
    if (type === 'genre') setSelectedGenre('');
    if (type === 'city') setSelectedCity('');
    if (type === 'period') setSelectedPeriod('');
    if (type === 'price') setSelectedPriceRange('');
  };

  const hasActiveFilters = selectedGenre || selectedCity || selectedPeriod || selectedPriceRange || searchTerm;

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
      {/* Top Row - Search + City + Genre */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {/* Compact Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar artista..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
        </div>

        {/* City Filter */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-w-[140px]"
        >
          <option value="">Todas as cidades</option>
          <option value="São Paulo">São Paulo (3)</option>
          <option value="Rio de Janeiro">Rio de Janeiro (2)</option>
          <option value="Belo Horizonte">Belo Horizonte (1)</option>
        </select>

        {/* Genre Filter */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-w-[120px]"
        >
          <option value="">Todos os gêneros</option>
          <option value="sertanejo">Sertanejo</option>
          <option value="eletronica">Eletrônica</option>
          <option value="funk">Funk</option>
        </select>

        {/* More Filters Button */}
        <button
          onClick={() => setShowMoreFilters(!showMoreFilters)}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Mais filtros</span>
        </button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            Limpar
          </button>
        )}
      </div>

      {/* More Filters (Expandable) */}
      {showMoreFilters && (
        <div className="flex flex-wrap gap-4 p-3 bg-gray-50 rounded-lg">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          >
            <option value="">Todas as datas</option>
            <option value="today">Hoje</option>
            <option value="7days">Próximos 7 dias</option>
            <option value="30days">Próximos 30 dias</option>
          </select>

          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          >
            <option value="">Todos os preços</option>
            <option value="low">Até R$ 80</option>
            <option value="medium">R$ 80 - R$ 150</option>
            <option value="high">Acima de R$ 150</option>
          </select>
        </div>
      )}

      {/* Active Filters Tags */}
      {getActiveFilters().length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {getActiveFilters().map((filter, idx) => (
            <span
              key={idx}
              className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              <span>{filter.label}</span>
              <button
                onClick={() => removeFilter(filter.type)}
                className="hover:bg-purple-200 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-gray-600 mt-2">
        {resultsCount} evento{resultsCount !== 1 ? 's' : ''} encontrado{resultsCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default SearchFilters;