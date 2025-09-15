import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/formatters';
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
    <div className="p-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Ponto de Venda
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Sistema integrado para vendas em tempo real
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Demo: Voltar para Admin (só para operadores) */}
            {user?.role === 'operator' && (
              <button
                onClick={() => addToCart(products.find(p => p.id === item.id)!)}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:from-red-600 hover:to-pink-600 transition-all flex items-center space-x-1 sm:space-x-2"
              >
                <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Voltar Admin</span>
              </button>
            )}

            <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-2 sm:px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">Online</span>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Horário</div>
              <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="relative mb-4">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Buscar produtos por nome ou categoria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white text-sm sm:text-lg"
              />
            </div>

            {/* Botões Rápidos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {quickAddButtons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addToCart(products.find(p => p.id === item.id)!)}
                  className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 p-2 sm:p-3 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors text-center"
                >
                  <div className="text-xs sm:text-sm font-medium">{item.name}</div>
                  <div className="text-xs sm:text-sm">{formatCurrency(item.price)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Produtos */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Produtos Disponíveis
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 sm:p-4 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer"
                  onClick={() => product.stock > 0 && addToCart(product)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                        {product.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 capitalize">
                        {product.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400">
                        {formatCurrency(product.price)}
                      </div>
                      <div className={`text-xs ${
                        product.stock <= 0 ? 'text-red-500' :
                        product.stock <= (product.minStock || 0) ? 'text-orange-500' :
                        'text-gray-500 dark:text-gray-400'
                      }`}>
                        Estoque: {product.stock}
                        {product.stock <= 0 && ' (Esgotado)'}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    disabled={product.stock <= 0}
                    className={`w-full py-2 rounded-lg transition-colors flex items-center justify-center space-x-1 sm:space-x-2 text-sm ${
                      product.stock <= 0 
                        ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                        : 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Cliente
            </h3>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Mesa, Nome ou CPF do cliente"
                  value={customerInfo}
                  onChange={(e) => setCustomerInfo(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 pr-10 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
                {isValidatingCustomer && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              
              {/* Saldo do Cliente */}
              {customerBalance !== null && (
                <div className={`p-3 rounded-lg border-2 ${
                  customerBalance > 0 
                    ? 'border-green-200 bg-green-50 dark:bg-green-900/20' 
                    : 'border-red-200 bg-red-50 dark:bg-red-900/20'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Saldo Disponível:
                    </span>
                    <span className={`font-bold ${
                      customerBalance > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatCurrency(customerBalance)}
                    </span>
                  </div>
                  {customerBalance <= 0 && (
                    <div className="text-xs text-red-600 mt-1">
                      ⚠️ Cliente precisa adicionar saldo antes da compra
                    </div>
                  )}
                </div>
              )}
              
              {/* Botões de Teste Rápido */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setCustomerInfo('rafael')}
                  className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-2 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40"
                >
                  🎯 Rafael (R$ 127,50)
                </button>
                <button
                  onClick={() => setCustomerInfo('ana')}
                  className="text-xs bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-3 py-2 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40"
                >
                  🎯 Ana (Sem saldo)
                </button>
              </div>
            </div>
          </div>

          {/* Carrinho */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Carrinho ({getTotalItems()})
              </h3>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm flex items-center space-x-1"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Limpar</span>
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Carrinho vazio</p>
                <p className="text-sm">Adicione produtos para começar</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {formatCurrency(item.price)} cada
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      
                      <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-6 h-6 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-900/40 ml-2"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {formatCurrency(getTotalAmount())}
                  </span>
                </div>

                {/* Método de Pagamento */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Método de Pagamento
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  >
                    <option value="cashless">Cashless (Saldo Digital)</option>
                    <option value="card">Cartão de Crédito/Débito</option>
                    <option value="pix">PIX</option>
                    <option value="cash">Dinheiro</option>
                  </select>
                  
                  {paymentMethod === 'cashless' && customerBalance !== null && customerBalance < getTotalAmount() && (
                    <div className="mt-2 text-xs text-red-600 dark:text-red-400">
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
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
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
  );
};

export default POS;