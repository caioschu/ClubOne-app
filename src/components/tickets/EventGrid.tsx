import React from 'react';
import { Music } from 'lucide-react';
import EventCard, { Event } from './EventCard';

interface EventGridProps {
  events: Event[];
  onEventSelect: (event: Event) => void;
  onClearFilters: () => void;
}

const EventGrid: React.FC<EventGridProps> = ({ events, onEventSelect, onClearFilters }) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-16">
        <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum evento encontrado</h3>
        <p className="text-gray-600 mb-6">Tente ajustar os filtros ou buscar por outros termos</p>
        <button
          onClick={onClearFilters}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
        >
          Limpar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSelect={onEventSelect}
        />
      ))}
    </div>
  );
};

export default EventGrid;