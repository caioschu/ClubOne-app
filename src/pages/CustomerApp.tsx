import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/formatters';
import Logo from '../components/ui/Logo';
import toast from 'react-hot-toast';
import { 
  User, 
  CreditCard, 
  Star, 
  Gift, 
  History, 
  QrCode,
  Plus,
  Minus,
  ShoppingCart,
  Bell,
  Settings,
  LogOut,
  Zap,
  Crown,
  Heart,
  MapPin,
  Clock,
  Ticket,
  TrendingUp,
  Award,
  Target,
  Smartphone,
  Wifi,
  Home,
  Calendar,
  Check
} from 'lucide-react';

const CustomerApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [showQR, setShowQR] = useState(false);

  // Mock customer data
  const customer = {
    id: '1',
    name: 'Rafael Costa',
    email: 'rafael@email.com',
    phone: '(11) 99999-1234',
    level: 'Gold',
    balance: 127.50,
    points: 2847,
    nextLevel: 'VIP',
    pointsToNext: 2153,
    totalSpent: 1250.00,
    visits: 12,
    currentVenue: 'Mansion Club',
    entryTime: '22:15',
    tableNumber: '12'
  };

  const mockProducts = [
    { id: '1', name: 'Heineken Long Neck', price: 15, category: 'Cerveja', available: true },
    { id: '2', name: 'Caipirinha Premium', price: 18, category: 'Drink', available: true },
    { id: '3', name: 'Whisky Red Label', price: 200, category: 'Whisky', available: true },
    { id: '4', name: 'Vodka Absolut', price: 180, category: 'Vodka', available: true },
    { id: '5', name: 'Água Mineral', price: 5, category: 'Bebida', available: true },
    { id: '6', name: 'Energético', price: 12, category: 'Bebida', available: true }
  ];

  const mockOffers = [
    {
      id: '1',
      title: 'Flash 12min',
      description: '2 Heineken por R$ 25',
      originalPrice: 30,
      offerPrice: 25,
      timeLeft: '11:47',
      type: 'flash'
    },
    {
      id: '2',
      title: 'Upgrade VIP',
      description: 'Mesa premium por +R$ 50',
      originalPrice: 100,
      offerPrice: 50,
      type: 'upgrade'
    },
    {
      id: '3',
      title: 'Combo Premium',
      description: 'Whisky + 4 energéticos',
      originalPrice: 248,
      offerPrice: 200,
      type: 'combo'
    }
  ];

  const mockTickets = [
    {
      id: '1',
      eventName: 'Gusttavo Lima - Turnê Buteco 2025',
      venue: 'Mansion Club',
      date: '2025-02-15',
      time: '22:00',
      ticketType: 'VIP',
      price: 180,
      status: 'confirmed',
      qrCode: 'TKT-001-VIP-2025',
      benefits: ['Open bar premium', 'Entrada prioritária', 'Área exclusiva']
    },
    {
      id: '2',
      eventName: 'Alok - Electronic Night',
      venue: 'Mansion Club',
      date: '2025-03-08',
      time: '23:00',
      ticketType: 'Pista',
      price: 120,
      status: 'confirmed',
      qrCode: 'TKT-002-PST-2025',
      benefits: ['Acesso à pista', 'Som profissional']
    }
  ];

  const mockHistory = [
    { id: '1', date: 'Hoje', venue: 'Mansion Club', amount: 89.50, points: 89, items: ['2x Heineken', 'Caipirinha'] },
    { id: '2', date: 'Sex', venue: 'Villa Mix', amount: 156.00, points: 156, items: ['Whisky Red Label', '4x Energético'] },
    { id: '3', date: 'Qua', venue: 'Urban Club', amount: 67.00, points: 67, items: ['3x Heineken', 'Água'] }
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      'Bronze': 'from-orange-400 to-orange-600',
      'Prata': 'from-gray-400 to-gray-600',
      'Gold': 'from-yellow-400 to-yellow-600',
      'VIP': 'from-purple-400 to-purple-600',
      'Diamond': 'from-blue-400 to-blue-600'
    };
    return colors[level as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

  const addToCart = (product: any) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} adicionado!`);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const processOrder = () => {
    if (cart.length === 0) {
      toast.error('Carrinho vazio!');
      return;
    }

    const total = getTotalAmount();
    if (customer.balance < total) {
      toast.error('Saldo insuficiente!');
      return;
    }

    toast.success('Pedido enviado para o bar!');
    toast.success(`Total: ${formatCurrency(total)}`);
    setCart([]);
    setActiveTab('home');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Status Atual */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="font-semibold">Ativo na {customer.currentVenue}</span>
                </div>
                <Wifi className="w-5 h-5" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-green-100">Entrada</div>
                  <div className="font-bold">{customer.entryTime}</div>
                </div>
                <div>
                  <div className="text-green-100">Mesa</div>
                  <div className="font-bold">{customer.tableNumber}</div>
                </div>
                <div>
                  <div className="text-green-100">Gasto hoje</div>
                  <div className="font-bold">R$ 89,50</div>
                </div>
                <div>
                  <div className="text-green-100">Pontos ganhos</div>
                  <div className="font-bold">+89 pts</div>
                </div>
              </div>
            </div>

            {/* Saldo */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Saldo Disponível</h3>
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {formatCurrency(customer.balance)}
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                + Adicionar Créditos
              </button>
            </div>

            {/* Ofertas Personalizadas */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Só para Você</h3>
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              
              {mockOffers.map((offer) => (
                <div key={offer.id} className={`rounded-2xl p-4 border-2 ${
                  offer.type === 'flash' ? 'bg-orange-50 border-orange-200' :
                  offer.type === 'upgrade' ? 'bg-purple-50 border-purple-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {offer.type === 'flash' && <Zap className="w-4 h-4 text-orange-600" />}
                      {offer.type === 'upgrade' && <Crown className="w-4 h-4 text-purple-600" />}
                      {offer.type === 'combo' && <Gift className="w-4 h-4 text-blue-600" />}
                      <span className="font-bold text-gray-900">{offer.title}</span>
                    </div>
                    {offer.timeLeft && (
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-bold">
                        {offer.timeLeft}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-3">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">
                        {formatCurrency(offer.offerPrice)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formatCurrency(offer.originalPrice)}
                      </span>
                    </div>
                    <button className={`px-4 py-2 rounded-lg font-semibold text-white ${
                      offer.type === 'flash' ? 'bg-orange-600 hover:bg-orange-700' :
                      offer.type === 'upgrade' ? 'bg-purple-600 hover:bg-purple-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    }`}>
                      Resgatar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'menu':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Cardápio Digital</h3>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
                <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {mockProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-center mb-3">
                    <div className="text-4xl mb-2">{product.image}</div>
                    <h4 className="font-bold text-gray-900 text-sm">{product.name}</h4>
                    <p className="text-xs text-gray-600">{product.category}</p>
                  </div>
                  <div className="text-center mb-3">
                    <span className="text-lg font-bold text-purple-600">
                      {formatCurrency(product.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                  >
                    Adicionar
                  </button>
                </div>
              ))}
            </div>

            {/* Carrinho */}
            {cart.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Seu Pedido</h4>
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <div className="text-sm text-gray-600">
                          {formatCurrency(item.price)} cada
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {formatCurrency(getTotalAmount())}
                    </span>
                  </div>
                  <button
                    onClick={processOrder}
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                  >
                    Enviar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'tickets':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Meus Ingressos</h3>
              <Ticket className="w-6 h-6 text-purple-600" />
            </div>

            {mockTickets.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Ticket className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Nenhum ingresso encontrado</p>
                <p className="text-sm">Compre ingressos para seus eventos favoritos</p>
              </div>
            ) : (
              <div className="space-y-4">
                {mockTickets.map((ticket) => (
                  <div key={ticket.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    {/* Header do Ticket */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{ticket.eventName}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{ticket.venue}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(ticket.date).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{ticket.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ticket.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {ticket.status === 'confirmed' ? 'Confirmado' :
                         ticket.status === 'pending' ? 'Pendente' : 'Cancelado'}
                      </div>
                    </div>

                    {/* Tipo e Preço */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
                          ticket.ticketType === 'VIP' ? 'bg-purple-100 text-purple-800' :
                          ticket.ticketType === 'Camarote' ? 'bg-amber-100 text-amber-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {ticket.ticketType}
                        </div>
                        <span className="text-lg font-bold text-gray-900">
                          {formatCurrency(ticket.price)}
                        </span>
                      </div>
                      <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        Ver QR Code
                      </button>
                    </div>

                    {/* Benefícios */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Benefícios inclusos:</h5>
                      <div className="space-y-1">
                        {ticket.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* QR Code */}
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="w-24 h-24 bg-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <div className="grid grid-cols-6 gap-px">
                          {Array.from({length: 36}).map((_, i) => (
                            <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 font-mono">{ticket.qrCode}</p>
                      <p className="text-xs text-gray-500 mt-1">Apresente na entrada</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Botão para comprar mais ingressos */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white text-center">
              <h4 className="font-bold text-lg mb-2">Próximos Eventos</h4>
              <p className="text-purple-100 mb-4">Não perca os melhores shows da cidade</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Ver Eventos Disponíveis
              </button>
            </div>
          </div>
        );

      case 'loyalty':
        return (
          <div className="space-y-6">
            {/* Nível Atual */}
            <div className={`bg-gradient-to-r ${getLevelColor(customer.level)} rounded-2xl p-6 text-white text-center`}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Nível {customer.level}</h3>
              <p className="text-white/80">{customer.points.toLocaleString()} pontos</p>
            </div>

            {/* Progresso */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progresso para {customer.nextLevel}</span>
                <span className="font-bold text-gray-900">
                  {customer.points.toLocaleString()} / 5.000
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full" 
                  style={{width: `${(customer.points / 5000) * 100}%`}}
                ></div>
              </div>
              <p className="text-xs text-gray-600">
                Faltam {customer.pointsToNext.toLocaleString()} pontos para {customer.nextLevel}
              </p>
            </div>

            {/* Benefícios Ativos */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Seus Benefícios</h4>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="font-bold text-yellow-800">Entrada Prioritária</span>
                </div>
                <p className="text-sm text-yellow-700">Fila preferencial em todos os eventos</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Gift className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-800">Drink Cortesia</span>
                </div>
                <p className="text-sm text-blue-700">1 drink grátis por noite</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-purple-800">Desconto 15%</span>
                </div>
                <p className="text-sm text-purple-700">Em todas as bebidas</p>
              </div>
            </div>

            {/* Histórico de Pontos */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Atividade Recente</h4>
              <div className="space-y-3">
                {mockHistory.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{item.date} • {item.venue}</div>
                      <div className="text-sm text-gray-600">{formatCurrency(item.amount)}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+{item.points} pts</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'qr':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pagamento Rápido</h3>
              <p className="text-gray-600">Escaneie ou mostre seu QR Code</p>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-48 h-48 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({length: 144}).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Mostre este código para o garçom ou escaneie produtos
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {formatCurrency(customer.balance)}
                </div>
                <div className="text-sm text-gray-600">Saldo disponível</div>
              </div>
            </div>

            {/* Últimas Compras */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Compras Recentes</h4>
              <div className="space-y-3">
                {mockHistory[0].items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">{item}</span>
                    <span className="font-bold text-gray-900">
                      {idx === 0 ? 'R$ 30,00' : 'R$ 18,00'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Perfil */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{customer.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{customer.email}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getLevelColor(customer.level)} text-white mt-2`}>
                    <Crown className="w-4 h-4 mr-1" />
                    {customer.level}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">
                    {formatCurrency(customer.totalSpent)}
                  </div>
                  <div className="text-sm text-gray-600">Total Gasto</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">{customer.visits}</div>
                  <div className="text-sm text-gray-600">Visitas</div>
                </div>
              </div>
            </div>

            {/* Configurações */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">Configurações</h4>
              
              <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Notificações</span>
                </div>
                <div className="w-5 h-5 text-gray-400">›</div>
              </button>

              <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Preferências</span>
                </div>
                <div className="w-5 h-5 text-gray-400">›</div>
              </button>

              <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <History className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Histórico Completo</span>
                </div>
                <div className="w-5 h-5 text-gray-400">›</div>
              </button>

              <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-center space-x-3">
                  <LogOut className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-900 text-sm sm:text-base">Sair</span>
                </div>
                <div className="w-5 h-5 text-red-400">›</div>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="sm" showLine={true} />
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600">Online</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-24">
        {renderTabContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'home' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Início</span>
          </button>

          <button
            onClick={() => setActiveTab('tickets')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'tickets' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <Ticket className="w-6 h-6" />
            <span className="text-xs font-medium">Ingressos</span>
          </button>

          <button
            onClick={() => setActiveTab('menu')}
            className={`flex flex-col items-center space-y-1 relative ${
              activeTab === 'menu' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs font-medium">Cardápio</span>
            {cart.length > 0 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
            )}
          </button>

          <button
            onClick={() => setActiveTab('loyalty')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'loyalty' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <Star className="w-6 h-6" />
            <span className="text-xs font-medium">Fidelidade</span>
          </button>

          <button
            onClick={() => setActiveTab('qr')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'qr' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <QrCode className="w-6 h-6" />
            <span className="text-xs font-medium">Pagar</span>
          </button>

        </div>
        
        {/* Profile button */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
              activeTab === 'profile' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="text-xs font-medium">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerApp;
