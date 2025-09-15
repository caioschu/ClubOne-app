import { useMemo } from 'react';
import { Event } from '../components/tickets/EventCard';

interface UseEventFiltersProps {
  events: Event[];
  searchTerm: string;
  selectedCity: string;
  selectedGenre: string;
  selectedPeriod: string;
  selectedPriceRange: string;
}

export const useEventFilters = ({
  events,
  searchTerm,
  selectedCity,
  selectedGenre,
  selectedPeriod,
  selectedPriceRange
}: UseEventFiltersProps) => {
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Search filter
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.artist.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Genre filter
      const matchesGenre = !selectedGenre || event.genre === selectedGenre;
      
      // City filter
      const matchesCity = !selectedCity || event.city === selectedCity;
      
      // Period filter
      const eventDate = new Date(event.date);
      const today = new Date();
      const matchesPeriod = !selectedPeriod || 
        (selectedPeriod === 'today' && eventDate.toDateString() === today.toDateString()) ||
        (selectedPeriod === '7days' && eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) ||
        (selectedPeriod === '30days' && eventDate <= new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000));
      
      // Price filter
      const minPrice = Math.min(...Object.values(event.tickets).map(t => t.price));
      const matchesPrice = !selectedPriceRange ||
        (selectedPriceRange === 'low' && minPrice <= 80) ||
        (selectedPriceRange === 'medium' && minPrice > 80 && minPrice <= 150) ||
        (selectedPriceRange === 'high' && minPrice > 150);
      
      return matchesSearch && matchesGenre && matchesCity && matchesPeriod && matchesPrice;
    });
  }, [events, searchTerm, selectedCity, selectedGenre, selectedPeriod, selectedPriceRange]);

  return filteredEvents;
};