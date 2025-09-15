import React, { useState } from 'react';
import { Calendar, Plus, Music, Users, Ticket, X, Save, Star, Clock, MapPin } from 'lucide-react';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';
import { formatCurrency } from '../utils/formatters';

const Events = () => {
  const { events, addEvent } = useStore();
  const [showModal, setShowModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    name: '',
    artist: '',
    date: '',
    time: '',
    genre: 'sertanejo',
    description: '',
    ticketPrice: 80,
    vipPrice: 180,
    camarotePrice: 350,
    capacity: 1500
  });

  const genres = [
    { id: 'sertanejo', name: 'Sertanejo', color: 'yellow', timing: '30 dias' },
    { id: 'funk', name: 'Funk', color: 'pink', timing: '15 dias' },
    { id: 'eletronica', name: 'Eletrônica', color: 'blue', timing: '60 dias' },
    { id: 'pop', name: 'Pop/Rock', color: 'purple', timing: '45 dias' },
    { id: 'forro', name: 'Forró', color: 'orange', timing: '20 dias' }
  ];

  const mockEvents = [
    {
      id: '1',
      name: 'Gusttavo Lima - Turnê Buteco 2025',
      artist: 'Gusttavo Lima',
      date: '2025-02-15',
      time: '22:00',
      genre: 'sertanejo',
      status: 'pre-sale',
      ticketsSold: 847,
      totalTickets: 1500,
      revenue: 89420,
      conversionRate: 56.5
    },
    {
      id: '2', 
      name: 'Alok - Electronic Night',
      artist: 'Alok',
      date: '2025-03-08',
      time: '23:00',
      genre: 'eletronica',
      status: 'selling',
      ticketsSold: 1234,
      totalTickets: 1500,
      revenue: 156780,
      conversionRate: 82.3
    },
    {
      id: '3',
      name: 'MC Hariel - Funk Experience',
      artist: 'MC Hariel',
      date: '2025-02-28',
      time: '22:30',
      genre: 'funk',
      status: 'planning',
      ticketsSold: 0,
      totalTickets: 1200,
      revenue: 0,
      conversionRate: 0
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!eventForm.name || !eventForm.artist || !eventForm.date || !eventForm.time) {
      toast.error('Preencha todos os campos obrigatórios!');
      return;
    }

    const newEvent = {
      id: Math.random().toString(),
      name: eventForm.name,
      artist: eventForm.artist,
      date: eventForm.date,
      time: eventForm.time,
      genre: eventForm.genre,
      status: 'planning' as const,
      ticketsSold: 0,
      totalTickets: eventForm.capacity,
      revenue: 0,
      conversionRate: 0
    };

    addEvent(newEvent);
    toast.success(`🎉 Evento "${eventForm.name}" criado com sucesso!`);
    setShowModal(false);
    setEventForm({
      name: '',
      artist: '',
      date: '',
      time: '',
      genre: 'sertanejo',
      description: '',
      ticketPrice: 80,
      vipPrice: 180,
      camarotePrice: 350,
      capacity: 1500
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pre-sale': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'selling': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'planning': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'sold-out': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pre-sale': return 'Pré-venda';
      case 'selling': return 'Vendendo';
      case 'planning': return 'Planejamento';
      case 'sold-out': return 'Esgotado';
      default: return status;
    }
  };

  const getGenreColor = (genre: string) => {
    const genreData = genres.find(g => g.id === genre);
    return genreData?.color || 'gray';
  };

  const allEvents = [...mockEvents, ...events];

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Eventos & Ingressos</h1>
            <p className="text-gray-600 dark:text-gray-300">Gerencie eventos e acompanhe vendas de ingressos</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Novo Evento</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{allEvents.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Eventos Ativos</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Ticket className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+28%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {allEvents.reduce((sum, event) => sum + event.ticketsSold, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Ingressos Vendidos</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+35%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatCurrency(allEvents.reduce((sum, event) => sum + event.revenue, 0))}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Receita Total</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Music className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {allEvents.length > 0 ? (allEvents.reduce((sum, event) => sum + event.conversionRate, 0) / allEvents.length).toFixed(1) : 0}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Taxa de Conversão</div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Eventos</h3>
        
        {allEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Nenhum evento cadastrado ainda</p>
            <p className="text-sm">Clique em "Novo Evento" para começar!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {allEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{event.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {getStatusText(event.status)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{event.artist}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Music className="w-4 h-4" />
                        <span className="capitalize">{event.genre}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-${getGenreColor(event.genre)}-500`}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {event.ticketsSold}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Ingressos Vendidos</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      de {event.totalTickets} total
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(event.revenue)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Receita</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {event.status === 'planning' ? 'Projetada' : 'Atual'}
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {event.conversionRate.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Conversão</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Taxa de vendas
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round((event.ticketsSold / event.totalTickets) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Ocupação</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Capacidade utilizada
                    </div>
                  </div>
                </div>

                {event.status !== 'planning' && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" 
                        style={{width: `${(event.ticketsSold / event.totalTickets) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Novo Evento */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            
            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Criar Novo Evento</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              {/* Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Informações Básicas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome do Evento *
                    </label>
                    <input
                      type="text"
                      value={eventForm.name}
                      onChange={(e) => setEventForm({...eventForm, name: e.target.value})}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      placeholder="Ex: Gusttavo Lima - Turnê 2025"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Artista/Atração *
                    </label>
                    <input
                      type="text"
                      value={eventForm.artist}
                      onChange={(e) => setEventForm({...eventForm, artist: e.target.value})}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      placeholder="Ex: Gusttavo Lima"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Data *
                    </label>
                    <input
                      type="date"
                      value={eventForm.date}
                      onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Horário *
                    </label>
                    <input
                      type="time"
                      value={eventForm.time}
                      onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                {/* Gênero Musical */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Gênero Musical
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {genres.map((genre) => (
                      <label key={genre.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="genre"
                          value={genre.id}
                          checked={eventForm.genre === genre.id}
                          onChange={(e) => setEventForm({...eventForm, genre: e.target.value})}
                          className="sr-only"
                        />
                        <div className={`p-3 rounded-lg border-2 transition-all text-center ${
                          eventForm.genre === genre.id
                            ? `border-${genre.color}-500 bg-${genre.color}-50 dark:bg-${genre.color}-900/20`
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">
                            {genre.name}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">
                            {genre.timing}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preços dos Ingressos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Preços dos Ingressos
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Pista</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                        <input
                          type="number"
                          value={eventForm.ticketPrice}
                          onChange={(e) => setEventForm({...eventForm, ticketPrice: Number(e.target.value)})}
                          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-8 pr-4 py-2 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">VIP</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                        <input
                          type="number"
                          value={eventForm.vipPrice}
                          onChange={(e) => setEventForm({...eventForm, vipPrice: Number(e.target.value)})}
                          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-8 pr-4 py-2 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Camarote</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                        <input
                          type="number"
                          value={eventForm.camarotePrice}
                          onChange={(e) => setEventForm({...eventForm, camarotePrice: Number(e.target.value)})}
                          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-8 pr-4 py-2 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Capacidade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Capacidade Total
                  </label>
                  <input
                    type="number"
                    value={eventForm.capacity}
                    onChange={(e) => setEventForm({...eventForm, capacity: Number(e.target.value)})}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    placeholder="1500"
                  />
                </div>

                {/* Descrição */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Descrição (Opcional)
                  </label>
                  <textarea
                    value={eventForm.description}
                    onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                    rows={3}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Descreva o evento..."
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Criar Evento</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;