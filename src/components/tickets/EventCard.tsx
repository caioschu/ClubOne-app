import React from 'react';
import { Calendar, Clock, MapPin, Heart, Ticket, Music } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export interface Event {
  id: string;
  name: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  genre: string;
  image: string;
  tickets: {
    pista: { price: number; available: number; total: number };
    vip: { price: number; available: number; total: number };
    camarote: { price: number; available: number; total: number };
  };
  benefits: {
    pista: string[];
    vip: string[];
    camarote: string[];
  };
}

interface EventCardProps {
  event: Event;
  onSelect: (event: any) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  const getGenreColor = (genre: string) => {
    const colors = {
      sertanejo: 'from-yellow-400 to-orange-500',
      eletronica: 'from-blue-400 to-purple-500',
      funk: 'from-pink-400 to-red-500',
      pop: 'from-purple-400 to-pink-500'
    };
    return colors[genre as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
      <div className="relative h-56">
        <img 
          src={event.image} 
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${getGenreColor(event.genre)}`}>
          <Music className="w-3 h-3 inline mr-1" />
          {event.genre.charAt(0).toUpperCase() + event.genre.slice(1)}
        </div>
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-bold mb-1">{event.artist}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{new Date(event.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{event.time}</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center space-x-1 mb-4">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 text-sm">{event.venue} • {event.city}</span>
        </div>
        
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-600">A partir de</span>
              <div className="text-xl font-bold text-purple-600">
                {formatCurrency(event.tickets.pista.price)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">
                {Math.min(...Object.values(event.tickets).map(t => t.available))} disponíveis
              </div>
              <div className="text-xs text-green-600 font-medium">
                ✓ Confirmado
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onSelect(event)}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"
        >
          <Ticket className="w-5 h-5" />
          <span>Comprar Ingresso</span>
        </button>
      </div>
    </div>
  );
};

export default EventCard;