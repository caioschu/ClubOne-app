import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import SearchBar from './SearchBar';
import CityFilter from './CityFilter';
import GenreFilter from './GenreFilter';
import AdvancedFilters from './AdvancedFilters';
import FilterTags from './FilterTags';

interface FiltersContainerProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
  selectedPriceRange: string;
  onPriceRangeChange: (range: string) => void;
  showAdvancedFilters: boolean;
  onToggleAdvancedFilters: () => void;
  onClearFilters: () => void;
  resultsCount: number;
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  searchTerm,
  onSearchChange,
  selectedCity,
  onCityChange,
  selectedGenre,
  onGenreChange,
  selectedPeriod,
  onPeriodChange,
  selectedPriceRange,
  onPriceRangeChange,
  showAdvancedFilters,
  onToggleAdvancedFilters,
  onClearFilters,
  resultsCount
}) => {
  const cities = [
    { value: 'São Paulo', label: 'São Paulo', count: 3 },
    { value: 'Rio de Janeiro', label: 'Rio de Janeiro', count: 2 },
    { value: 'Belo Horizonte', label: 'Belo Horizonte', count: 1 }
  ];

  const genres = [
    { value: 'sertanejo', label: 'Sertanejo' },
    { value: 'eletronica', label: 'Eletrônica' },
    { value: 'funk', label: 'Funk' }
  ];

  const getActiveFilters = () => {
    const filters = [];
    if (selectedGenre) {
      const genre = genres.find(g => g.value === selectedGenre);
      filters.push({ type: 'genre', value: selectedGenre, label: genre?.label || selectedGenre });
    }
    if (selectedCity) {
      filters.push({ type: 'city', value: selectedCity, label: selectedCity });
    }
    if (selectedPeriod) {
      const periodLabels: Record<string, string> = { 
        today: 'Hoje', 
        '7days': '7 dias', 
        '30days': '30 dias' 
      };
      filters.push({ type: 'period', value: selectedPeriod, label: periodLabels[selectedPeriod] });
    }
    if (selectedPriceRange) {
      const priceLabels: Record<string, string> = { 
        low: 'Até R$80', 
        medium: 'R$80-150', 
        high: 'R$150+' 
      };
      filters.push({ type: 'price', value: selectedPriceRange, label: priceLabels[selectedPriceRange] });
    }
    return filters;
  };

  const removeFilter = (type: string) => {
    if (type === 'genre') onGenreChange('');
    if (type === 'city') onCityChange('');
    if (type === 'period') onPeriodChange('');
    if (type === 'price') onPriceRangeChange('');
  };

  const hasActiveFilters = selectedGenre || selectedCity || selectedPeriod || selectedPriceRange || searchTerm;

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
      {/* Main Filters Row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />

        {/* Popular Genres as Pills */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 font-medium">Popular:</span>
          {['sertanejo', 'eletronica', 'funk'].map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(selectedGenre === genre ? '' : genre)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedGenre === genre
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Secondary Filters Row */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <CityFilter
          selectedCity={selectedCity}
          onCityChange={onCityChange}
          cities={cities}
        />

        <select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-w-[120px]"
        >
          <option value="">Todos os gêneros</option>
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.label}
            </option>
          ))}
        </select>

        {/* Date Range Quick Filters */}
        <div className="flex items-center space-x-2">
          {[
            { value: '', label: 'Todas' },
            { value: '7days', label: 'Esta semana' },
            { value: '30days', label: 'Este mês' }
          ].map((period) => (
            <button
              key={period.value}
              onClick={() => onPeriodChange(selectedPeriod === period.value ? '' : period.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === period.value
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Price Range Pills */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Preço:</span>
          {[
            { value: '', label: 'Todos' },
            { value: 'low', label: 'Até R$80' },
            { value: 'medium', label: 'R$80-150' },
            { value: 'high', label: 'R$150+' }
          ].map((price) => (
            <button
              key={price.value}
              onClick={() => onPriceRangeChange(selectedPriceRange === price.value ? '' : price.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedPriceRange === price.value
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {price.label}
            </button>
          ))}
        </div>

        {/* Advanced Filters Toggle - Now smaller */}
        <button
          onClick={onToggleAdvancedFilters}
          className="text-purple-600 hover:text-purple-700 font-medium text-sm"
        >
          {showAdvancedFilters ? 'Menos filtros' : 'Mais filtros'}
        </button>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-red-600 hover:text-red-700 font-medium text-sm"
          >
            Limpar todos
          </button>
        )}
      </div>

      {/* Remove old filters row */}
      <div className="hidden">
        <GenreFilter
          selectedGenre={selectedGenre}
          onGenreChange={onGenreChange}
          genres={genres}
        />

        <button
          onClick={onToggleAdvancedFilters}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Mais filtros</span>
        </button>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            Limpar
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      <AdvancedFilters
        selectedPeriod={selectedPeriod}
        onPeriodChange={onPeriodChange}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={onPriceRangeChange}
        isVisible={showAdvancedFilters}
      />

      {/* Active Filter Tags */}
      <FilterTags
        filters={getActiveFilters()}
        onRemoveFilter={removeFilter}
      />

      {/* Results Count */}
      <div className="text-sm text-gray-600 mt-2">
        {resultsCount} evento{resultsCount !== 1 ? 's' : ''} encontrado{resultsCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default FiltersContainer;