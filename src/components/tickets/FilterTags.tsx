import React from 'react';
import { X } from 'lucide-react';

interface FilterTag {
  type: string;
  value: string;
  label: string;
}

interface FilterTagsProps {
  filters: FilterTag[];
  onRemoveFilter: (type: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ filters, onRemoveFilter }) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {filters.map((filter, idx) => (
        <span
          key={idx}
          className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
        >
          <span>{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.type)}
            className="hover:bg-purple-200 rounded-full p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
    </div>
  );
};

export default FilterTags;