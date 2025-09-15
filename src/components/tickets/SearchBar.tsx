import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  placeholder = "Buscar artista..."
}) => {
  return (
    <div className="relative">
      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-64 pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;