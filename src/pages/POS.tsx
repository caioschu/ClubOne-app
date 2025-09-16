import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/formatters';
import LiquidGlassBackground from '../components/ui/LiquidGlassBackground';
import toast from 'react-hot-toast';
import { 
  Search, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  User,
  Clock,
  Check,
  X,
  Calculator,
  Zap,
  Crown
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const POS = () => {
  const { products, user, setUser, addSale, stats } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cashless');
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerBalance, setCustomerBalance] = useState<number | null>(null);
  const [isValidatingCustomer, setIsValidatingCustomer] = useState(false);

  const switchToAdmin = () => {
    setUser({
      id: '1',
      name: 'Roberto Silva',
      email: 'roberto@mansionclub.com',
      role: 'admin'
    });
    toast.success('Voltou para modo Admin!');
  };

  // Validar cliente e buscar saldo
  const validateCustomer = async (customerInput: string) => {
    if (!customerInput.trim()) {
      setCustomerBalance(null);
      return;
    }

    setIsValidatingCustomer(true);
    
    // Simular busca no banco
    setTimeout(() => {
      // Clientes mockados com saldo
      const mockCustomers = [
        { id: 'rafael', name: 'Rafael Costa', balance: 127.50 },
        { id: 'ana', name: 'Ana Silva', balance: 0 },
        { id: 'carlos', name: 'Carlos Oliveira', balance: 89.30 },
        { id: 'mesa12', name: 'Mesa 12', balance: 250.00 },
        { id: '12345678900', name: 'João Santos', balance: 45.80 }
      ];
      
      const found = mockCustomers.find(c => 
        c.id.toLowerCase().includes(customerInput.toLowerCase()) ||
        c.name.toLowerCase().includes(customerInput.toLowerCase())
      );
      
      if (found) {
        setCustomerBalance(found.balance);
        if (found.balance <= 0) {
          toast.error(`⚠️ ${found.name} - Saldo insuficiente!`);
        } else {
          toast.success(`✅ ${found.name} - Saldo: ${formatCurrency(found.balance)}`);
        }
      } else {
        setCustomerBalance(null);
        toast.error('Cliente não encontrado!');
      }
      
      setIsValidatingCustomer(false);
    }, 1000);
  };

  // Debounce para validação do cliente
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (customerInfo.trim()) {
        validateCustomer(customerInfo);
      } else {
        setCustomerBalance(null);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [customerInfo]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: any) => {
    if (product.stock <= 0) {
      toast.error('Produto sem estoque!');
      return;
    }
    
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      if (newQuantity > product.stock) {
        toast.error(`Estoque insuficiente! Apenas ${product.stock} disponíveis`);
        return;
      }
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: newQuantity }
          : item
      ));
    } else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        category: product.category
      }]);
    }
    
    toast.success(`${product.name} adicionado!`);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    const product = products.find(p => p.id === id);
    if (product && newQuantity > product.stock) {
      toast.error(`Estoque insuficiente! Apenas ${product.stock} disponíveis`);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
    toast.success('Item removido do carrinho');
  };

  const clearCart = () => {
    setCart([]);
    setCustomerInfo('');
    toast.success('Carrinho limpo');
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const processSale = async () => {
    if (cart.length === 0) {
      toast.error('Carrinho vazio!');
      return;
    }

    if (!customerInfo.trim()) {
      toast.error('Informe o cliente (mesa, nome ou CPF)');
      return;
    }

    // Validar saldo para cashless
    if (paymentMethod === 'cashless') {
      if (customerBalance === null) {
        toast.error('Cliente não encontrado! Valide o cliente primeiro.');
        return;
      }
      
      const totalAmount = getTotalAmount();
      if (customerBalance < totalAmount) {
        toast.error(`Saldo insuficiente! Disponível: ${formatCurrency(customerBalance)}`);
        return;
      }
    }

    setIsProcessing(true);

    // Simular processamento
    setTimeout(() => {
      // Processar cada item do carrinho
      cart.forEach(item => {
        const sale = {
          id: Math.random().toString(),
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          productId: item.id,
          productName: item.name,
          quantity: item.quantity,
          price: item.price * item.quantity,
          customer: customerInfo,
          status: 'pago' as const,
          createdAt: new Date().toISOString()
        };
        
        addSale(sale);
      });
      
      // Atualizar saldo se cashless
      if (paymentMethod === 'cashless' && customerBalance !== null) {
        const newBalance = customerBalance - getTotalAmount();
        setCustomerBalance(newBalance);
        toast.success(`💰 Novo saldo: ${formatCurrency(newBalance)}`);
      }
      
      setIsProcessing(false);
      toast.success(`✅ Venda processada! ${formatCurrency(getTotalAmount())}`);
      toast.success(`📊 Dashboard e estoque atualizados!`);
      
      // Limpar carrinho após venda
      setCart([]);
      setCustomerInfo('');
    }, 2000);
  };

  const quickAddButtons = [
    { name: 'Heineken', price: 15, id: '1' },
    { name: 'Caipirinha', price: 18, id: '2' },
    { name: 'Água', price: 5, id: '5' },
    { name: 'Refrigerante', price: 8, id: '6' }
  ];

  return (
    <div className="min-h-screen relative">
      <LiquidGlassBackground />
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto pt-24">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Ponto de Venda
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Sistema integrado para vendas em tempo real
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Demo: Voltar para Admin (só para operadores) */}
            {user?.role === 'operator' && (
              <button
                onClick={switchToAdmin}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center space-x-2"
              >
                <Crown className="w-4 h-4 mr-2" />
                <span>Admin</span>
              </button>
            )}

            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
            <div className="text-right hidden sm:block bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl px-4 py-2">
              <div className="text-xs text-gray-600 dark:text-gray-400">Horário</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">
                {new Date().toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Produtos */}
        <div className="lg:col-span-2 space-y-6">
          {/* Busca */}
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg hover:scale-[1.01] transition-all duration-300">
            <div className="relative mb-4">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos por nome ou categoria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white text-lg"
              />
            </div>

            {/* Botões Rápidos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {quickAddButtons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addToCart(products.find(p => p.id === item.id)!)}
                  className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 text-center hover:scale-105 active:scale-95 transition-all duration-200 group min-h-[80px] touch-manipulation"
                >
                  <div className="text-base font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">{item.name}</div>
                  <div className="text-base text-gray-600 dark:text-gray-300 font-semibold">{formatCurrency(item.price)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Produtos */}
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Produtos Disponíveis
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto space-y-0">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group min-h-[120px] touch-manipulation"
                  onClick={() => product.stock > 0 && addToCart(product)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {product.name}
                      </h4>
                      <p className="text-base text-gray-600 dark:text-gray-300 capitalize">
                        {product.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {formatCurrency(product.price)}
                      </div>
                      <div className={`text-sm ${
                        product.stock <= 0 ? 'text-red-400' :
                        product.stock <= (product.minStock || 0) ? 'text-orange-400' :
                        'text-gray-500 dark:text-gray-400'
                      }`}>
                        Estoque: {product.stock}
                        {product.stock <= 0 && ' (Esgotado)'}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    disabled={product.stock <= 0}
                    className={`w-full py-4 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2 text-base font-medium min-h-[48px] touch-manipulation active:scale-95 ${
                      product.stock <= 0 
                        ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed' 
                        : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                    <span>{product.stock <= 0 ? 'Esgotado' : 'Adicionar'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carrinho */}
        <div className="space-y-6">
          {/* Informações do Cliente */}
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <User className="w-5 h-5 mr-3 text-purple-400" />
              Cliente
            </h3>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Mesa, Nome ou CPF do cliente"
                  value={customerInfo}
                  onChange={(e) => setCustomerInfo(e.target.value)}
                  className="w-full pr-12 px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white text-lg touch-manipulation"
                />
                {isValidatingCustomer && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              
              {/* Saldo do Cliente */}
              {customerBalance !== null && (
                <div className={`bg-white/90 dark:bg-gray-800/90 border-2 rounded-xl p-4 ${
                  customerBalance > 0 
                    ? 'border-green-400/50 bg-green-50/50 dark:bg-green-900/20' 
                    : 'border-red-400/50 bg-red-50/50 dark:bg-red-900/20'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Saldo Disponível:
                    </span>
                    <span className={`font-bold ${
                      customerBalance > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {formatCurrency(customerBalance)}
                    </span>
                  </div>
                  {customerBalance <= 0 && (
                    <div className="text-xs text-red-400 mt-2">
                      ⚠️ Cliente precisa adicionar saldo antes da compra
                    </div>
                  )}
                </div>
              )}
              
              {/* Botões de Teste Rápido */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setCustomerInfo('rafael')}
                  className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-lg text-xs px-3 py-2 hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300"
                >
                  🎯 Rafael (R$ 127,50)
                </button>
                <button
                  onClick={() => setCustomerInfo('ana')}
                  className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-lg text-xs px-3 py-2 hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300"
                >
                  🎯 Ana (Sem saldo)
                </button>
              </div>
            </div>
          </div>

          {/* Carrinho */}
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <ShoppingCart className="w-5 h-5 mr-3 text-purple-400" />
                Carrinho ({getTotalItems()})
              </h3>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-lg px-3 py-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Limpar</span>
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-white/50">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">Carrinho vazio</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Adicione produtos para começar</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {formatCurrency(item.price)} cada
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 touch-manipulation"
                      >
                        <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      
                      <span className="w-10 text-center font-medium text-gray-900 dark:text-white text-lg">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 touch-manipulation"
                      >
                        <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 text-red-600 dark:text-red-400 ml-2 touch-manipulation"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            {cart.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(getTotalAmount())}
                  </span>
                </div>

                {/* Método de Pagamento */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Método de Pagamento
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-4 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white text-lg touch-manipulation"
                  >
                    <option value="cashless">Cashless (Saldo Digital)</option>
                    <option value="card">Cartão de Crédito/Débito</option>
                    <option value="pix">PIX</option>
                    <option value="cash">Dinheiro</option>
                  </select>
                  
                  {paymentMethod === 'cashless' && customerBalance !== null && customerBalance < getTotalAmount() && (
                    <div className="mt-3 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-2">
                      ⚠️ Saldo insuficiente para este método de pagamento
                    </div>
                  )}
                </div>

                {/* Botão de Finalizar */}
                <button
                  onClick={processSale}
                  disabled={
                    isProcessing || 
                    cart.length === 0 || 
                    !customerInfo.trim() ||
                    isValidatingCustomer ||
                    (paymentMethod === 'cashless' && (customerBalance === null || customerBalance < getTotalAmount()))
                  }
                  className="w-full bg-green-600 text-white py-5 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 active:scale-95 transition-all duration-200 text-lg min-h-[56px] touch-manipulation"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Processando...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-6 h-6 mr-2" />
                      <span>Finalizar Venda</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default POS;