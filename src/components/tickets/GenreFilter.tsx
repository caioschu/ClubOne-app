import React from 'react';

interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: Array<{ value: string; label: string }>;
}

const GenreFilter: React.FC<GenreFilterProps> = ({
  selectedGenre,
  onGenreChange,
  genres
}) => {
  return (
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
  );
};

export default GenreFilter;