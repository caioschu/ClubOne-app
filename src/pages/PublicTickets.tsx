import React, { useState } from 'react';
import { formatCurrency } from '../utils/formatters';
import toast from 'react-hot-toast';
import Logo from '../components/ui/Logo';
import { Calendar, Clock, MapPin, CreditCard, Smartphone, Search, Users, Star, Heart, Ticket, Music, Check } from 'lucide-react';

// Components
import { Event } from '../components/tickets/EventCard';

// Hooks
import { useEventFilters } from '../hooks/useEventFilters';

// Data
import { mockEvents } from '../data/mockEvents';

const PublicTickets = () => {
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  // Purchase states
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedTicketType, setSelectedTicketType] = useState('pista');
  const [quantity, setQuantity] = useState(1);
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);

  // Filter events
  const filteredEvents = useEventFilters({
    events: mockEvents,
    searchTerm,
    selectedCity,
    selectedGenre,
    selectedPeriod: '',
    selectedPriceRange: ''
  });

  const handlePurchase = () => {
    if (!customerData.name || !customerData.email || !customerData.phone) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Ingresso adquirido com sucesso');
      toast.success('QR Code enviado por email');
      
      // Reset form
      setSelectedEvent(null);
      setCustomerData({ name: '', email: '', phone: '', cpf: '' });
      setQuantity(1);
    }, 2500);
  };

  const getTicketTypeColor = (type: string) => {
    const colors = {
      pista: 'border-blue-500 bg-blue-50',
      vip: 'border-purple-500 bg-purple-50',
      camarote: 'border-amber-500 bg-amber-50'
    };
    return colors[type as keyof typeof colors] || 'border-gray-500 bg-gray-50';
  };

  const getGenreColor = (genre: string) => {
    const colors = {
      sertanejo: 'from-amber-500 to-orange-600',
      eletronica: 'from-blue-500 to-indigo-600',
      funk: 'from-pink-500 to-rose-600',
      pop: 'from-purple-500 to-violet-600'
    };
    return colors[genre as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  // Purchase flow
  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="text-purple-600 hover:text-purple-700 mb-6 font-medium"
            >
              ← Voltar para eventos
            </button>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="relative h-80">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h1 className="text-4xl font-bold mb-3">{selectedEvent.name}</h1>
                  <div className="flex items-center space-x-6 text-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(selectedEvent.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>{selectedEvent.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ticket Selection */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Selecione seu ingresso</h3>
                
                <div className="space-y-6">
                  {Object.entries(selectedEvent.tickets).map(([type, ticket]: [string, any]) => (
                    <label key={type} className="cursor-pointer block">
                      <input
                        type="radio"
                        name="ticketType"
                        value={type}
                        checked={selectedTicketType === type}
                        onChange={(e) => setSelectedTicketType(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                        selectedTicketType === type 
                          ? getTicketTypeColor(type)
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 capitalize mb-1">{type}</h4>
                            <p className="text-2xl font-bold text-purple-600">{formatCurrency(ticket.price)}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600 mb-1">Disponível</div>
                            <div className="text-sm text-gray-500">{ticket.available} restantes</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {selectedEvent.benefits[type as keyof typeof selectedEvent.benefits].map((benefit: string, idx: number) => (
                            <div key={idx} className="flex items-center space-x-3 text-gray-700">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Customer Data */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Dados pessoais</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo *</label>
                    <input
                      type="text"
                      value={customerData.name}
                      onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={customerData.email}
                      onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp *</label>
                    <input
                      type="tel"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CPF</label>
                    <input
                      type="text"
                      value={customerData.cpf}
                      onChange={(e) => setCustomerData({...customerData, cpf: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Resumo da compra</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tipo de ingresso</span>
                    <span className="font-medium capitalize">{selectedTicketType}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quantidade</span>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Valor unitário</span>
                    <span className="font-medium">
                      {formatCurrency(selectedEvent.tickets[selectedTicketType as keyof typeof selectedEvent.tickets].price)}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total</span>
                      <span className="text-purple-600">
                        {formatCurrency(selectedEvent.tickets[selectedTicketType as keyof typeof selectedEvent.tickets].price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Forma de pagamento</label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="credit"
                        checked={paymentMethod === 'credit'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3 text-purple-600"
                      />
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="font-medium">Cartão de crédito</span>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="pix"
                        checked={paymentMethod === 'pix'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3 text-purple-600"
                      />
                      <Smartphone className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="font-medium">PIX</span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      <span>Finalizar compra</span>
                    </>
                  )}
                </button>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  Compra segura • QR Code por email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main events listing page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] bg-black overflow-hidden flex items-center">
        {/* Background Video Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
          {/* Main Title */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-xs sm:text-sm font-medium">Eventos ao vivo</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 leading-none">
              <Logo size={window.innerWidth < 640 ? "lg" : "xl"} />
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 font-light px-4">
            A nova era do entretenimento noturno chegou. 
            <span className="text-white font-medium"> Tecnologia cashless</span>, 
            <span className="text-purple-300 font-medium"> experiências exclusivas</span> e 
            <span className="text-blue-300 font-medium"> fidelidade nacional</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 px-4">
            <button className="group px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 font-semibold flex items-center space-x-2 sm:space-x-3 transform hover:scale-105 text-sm sm:text-base">
              <Ticket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              <span>Explorar Eventos</span>
            </button>
            <button className="px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold text-sm sm:text-base">
              Como Funciona
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto px-4">
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">Estabelecimentos</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">1M+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">Cidades</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden sm:flex">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20 mb-8 sm:mb-12 -mt-8 sm:-mt-16 relative z-20">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Encontre seu próximo evento</h2>
            <p className="text-sm sm:text-base text-gray-600">Filtre por cidade, gênero musical ou artista</p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por artista ou evento"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 pl-12 pr-4 py-3 sm:py-4 border-0 bg-gray-50 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm sm:text-lg"
              />
            </div>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 border-0 bg-gray-50 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 min-w-[180px] text-sm sm:text-lg font-medium"
            >
              <option value="">Todas as cidades</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
            </select>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 border-0 bg-gray-50 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 min-w-[160px] text-sm sm:text-lg font-medium"
            >
              <option value="">Todos os gêneros</option>
              <option value="sertanejo">Sertanejo</option>
              <option value="eletronica">Eletrônica</option>
              <option value="funk">Funk</option>
            </select>

            <div className="bg-purple-100 text-purple-800 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base">
              {filteredEvents.length} eventos disponíveis
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-12 sm:mb-20">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 group">
              <div className="relative h-48 sm:h-80">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className={`absolute top-3 sm:top-6 left-3 sm:left-6 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white text-xs sm:text-sm font-bold bg-gradient-to-r ${getGenreColor(event.genre)} shadow-lg`}>
                  {event.genre.charAt(0).toUpperCase() + event.genre.slice(1)}
                </div>
                
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                  <h3 className="text-lg sm:text-2xl font-black mb-1 sm:mb-2">{event.artist}</h3>
                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                <button className="absolute top-3 sm:top-6 right-3 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 sm:p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-900 font-bold text-sm sm:text-lg">{event.venue}</span>
                  <span className="text-gray-500 font-medium text-sm">• {event.city}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-1 font-medium">A partir de</div>
                    <div className="text-xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {formatCurrency(event.tickets.pista.price)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-bold text-green-600 mb-1">✓ Disponível</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      {Math.min(...Object.values(event.tickets).map(t => t.available))} ingressos
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Comprar ingresso</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-16 shadow-2xl border-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher o Club One
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada para uma experiência única em eventos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sistema Cashless</h4>
              <p className="text-gray-600 leading-relaxed">
                Pagamentos sem contato físico. Tudo integrado no seu smartphone para máxima praticidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Programa de Fidelidade</h4>
              <p className="text-gray-600 leading-relaxed">
                Acumule pontos e ganhe benefícios exclusivos em toda a rede nacional de estabelecimentos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Experiência Premium</h4>
              <p className="text-gray-600 leading-relaxed">
                Ofertas personalizadas e atendimento diferenciado baseado no seu perfil e preferências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicTickets;