import React, { useState } from 'react';
import LiquidGlassBackground from '../components/ui/LiquidGlassBackground';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/formatters';
import toast from 'react-hot-toast';
import { 
  QrCode, 
  User, 
  Check, 
  X, 
  Search,
  CreditCard,
  Star,
  Gift,
  AlertTriangle,
  UserPlus,
  Smartphone,
  Clock,
  Users,
  ArrowUpRight
} from 'lucide-react';

const EntryValidation = () => {
  const [searchMethod, setSearchMethod] = useState('qr'); // qr, cpf, phone
  const [searchValue, setSearchValue] = useState('');
  const [customerFound, setCustomerFound] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showAddBalance, setShowAddBalance] = useState(false);
  const [balanceAmount, setBalanceAmount] = useState('');

  // Dados mockados de clientes
  const mockCustomers = [
    {
      id: '1',
      name: 'Rafael Costa',
      email: 'rafael@email.com',
      phone: '(11) 99999-1234',
      cpf: '123.456.789-00',
      level: 'Gold',
      balance: 127.50,
      points: 2847,
      hasTicket: true,
      ticketType: 'VIP',
      eventName: 'Gusttavo Lima - Turnê Buteco',
      entryTime: null,
      totalSpent: 1250.00,
      visits: 12,
      lastVisit: '2025-01-10'
    },
    {
      id: '2',
      name: 'Ana Silva',
      email: 'ana@email.com',
      phone: '(11) 98888-5678',
      cpf: '987.654.321-00',
      level: 'VIP',
      balance: 0,
      points: 5420,
      hasTicket: true,
      ticketType: 'Pista',
      eventName: 'Gusttavo Lima - Turnê Buteco',
      entryTime: null,
      totalSpent: 3200.00,
      visits: 28,
      lastVisit: '2025-01-08'
    }
  ];

  const handleSearch = () => {
    if (!searchValue.trim()) {
      toast.error('Digite um valor para buscar!');
      return;
    }

    setIsSearching(true);
    
    setTimeout(() => {
      // Simular busca
      let found = null;
      
      if (searchMethod === 'cpf') {
        found = mockCustomers.find(c => c.cpf.includes(searchValue));
      } else if (searchMethod === 'phone') {
        found = mockCustomers.find(c => c.phone.includes(searchValue));
      } else {
        // QR Code sempre encontra o primeiro cliente
        found = mockCustomers[0];
      }
      
      setCustomerFound(found);
      setIsSearching(false);
      
      if (found) {
        toast.success(`Cliente encontrado: ${found.name}`);
      } else {
        toast.error('Cliente não encontrado!');
      }
    }, 1500);
  };

  const handleEntry = () => {
    if (!customerFound) return;
    
    if (!customerFound.hasTicket) {
      toast.error('Cliente não possui ingresso válido!');
      return;
    }
    
    // Registrar entrada
    setCustomerFound({
      ...customerFound,
      entryTime: new Date().toLocaleTimeString('pt-BR')
    });
    
    toast.success(`✅ Entrada liberada para ${customerFound.name}!`);
    toast.success(`🎫 ${customerFound.ticketType} - ${customerFound.eventName}`);
    
    // Reset após 3 segundos
    setTimeout(() => {
      setCustomerFound(null);
      setSearchValue('');
    }, 3000);
  };

  const handleAddBalance = () => {
    if (!balanceAmount || parseFloat(balanceAmount) <= 0) {
      toast.error('Digite um valor válido!');
      return;
    }
    
    const amount = parseFloat(balanceAmount);
    setCustomerFound({
      ...customerFound,
      balance: customerFound.balance + amount
    });
    
    toast.success(`💰 R$ ${amount.toFixed(2)} adicionado ao saldo!`);
    setShowAddBalance(false);
    setBalanceAmount('');
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Bronze': 'text-orange-600 bg-orange-100',
      'Prata': 'text-gray-600 bg-gray-100', 
      'Gold': 'text-yellow-600 bg-yellow-100',
      'VIP': 'text-purple-600 bg-purple-100',
      'Diamond': 'text-blue-600 bg-blue-100'
    };
    return colors[level as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen relative">
      <LiquidGlassBackground />
      
      <div className="relative z-10 p-6 pt-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Validação de Entrada
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Valide ingressos e gerencie entrada de clientes
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>+12</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">847</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Pessoas Dentro</div>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20">
              <QrCode className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-blue-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>+156</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1.247</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Ingressos Válidos</div>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-purple-600">
              <span>Média</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2.3min</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Tempo de Entrada</div>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-red-600">
              <span>3</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">12</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Ingressos Inválidos</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Search Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Buscar Cliente
          </h3>

          {/* Search Method */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Método de Busca
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setSearchMethod('qr')}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  searchMethod === 'qr'
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <QrCode className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-medium">QR Code</div>
              </button>

              <button
                onClick={() => setSearchMethod('cpf')}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  searchMethod === 'cpf'
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <User className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-medium">CPF</div>
              </button>

              <button
                onClick={() => setSearchMethod('phone')}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  searchMethod === 'phone'
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <Smartphone className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-medium">Telefone</div>
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {searchMethod === 'qr' ? 'Escaneie o QR Code' :
               searchMethod === 'cpf' ? 'Digite o CPF' : 'Digite o Telefone'}
            </label>
            <div className="flex space-x-3">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={
                  searchMethod === 'qr' ? 'QR Code será lido automaticamente' :
                  searchMethod === 'cpf' ? '123.456.789-00' : '(11) 99999-9999'
                }
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                disabled={searchMethod === 'qr'}
              />
              <button
                onClick={handleSearch}
                disabled={isSearching || (searchMethod !== 'qr' && !searchValue.trim())}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Search className="w-5 h-5" />
                )}
                <span>{isSearching ? 'Buscando...' : 'Buscar'}</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setSearchValue('123.456.789-00');
                setSearchMethod('cpf');
                setTimeout(handleSearch, 100);
              }}
              className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              🎯 Teste: Rafael Costa
            </button>
            <button
              onClick={() => {
                setSearchValue('(11) 98888-5678');
                setSearchMethod('phone');
                setTimeout(handleSearch, 100);
              }}
              className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              🎯 Teste: Ana Silva
            </button>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Informações do Cliente
          </h3>

          {!customerFound ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nenhum cliente selecionado</p>
              <p className="text-sm">Use a busca ao lado para encontrar um cliente</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Customer Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {customerFound.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {customerFound.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(customerFound.level)}`}>
                        {customerFound.level}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {customerFound.points} pontos
                      </span>
                    </div>
                  </div>
                </div>
                
                {customerFound.entryTime && (
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">✅ Entrada Liberada</div>
                    <div className="text-xs text-gray-500">{customerFound.entryTime}</div>
                  </div>
                )}
              </div>

              {/* Ticket Info */}
              <div className={`p-4 rounded-lg border-2 ${
                customerFound.hasTicket 
                  ? 'border-green-200 bg-green-50 dark:bg-green-900/20' 
                  : 'border-red-200 bg-red-50 dark:bg-red-900/20'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">Status do Ingresso</span>
                  {customerFound.hasTicket ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </div>
                {customerFound.hasTicket ? (
                  <div>
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      {customerFound.ticketType} - {customerFound.eventName}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Ingresso válido para hoje
                    </p>
                  </div>
                ) : (
                  <p className="text-red-800 dark:text-red-300">
                    Nenhum ingresso válido encontrado
                  </p>
                )}
              </div>

              {/* Balance Info */}
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900 dark:text-white">Saldo Disponível</span>
                  <button
                    onClick={() => setShowAddBalance(true)}
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 text-sm font-medium"
                  >
                    + Adicionar
                  </button>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {formatCurrency(customerFound.balance)}
                </div>
                {customerFound.balance <= 0 && (
                  <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                    ⚠️ Saldo insuficiente para compras
                  </div>
                )}
              </div>

              {/* Customer Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {formatCurrency(customerFound.totalSpent)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Total Gasto</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {customerFound.visits}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Visitas</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!customerFound.entryTime ? (
                  <button
                    onClick={handleEntry}
                    disabled={!customerFound.hasTicket}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>
                      {customerFound.hasTicket ? 'Liberar Entrada' : 'Ingresso Inválido'}
                    </span>
                  </button>
                ) : (
                  <div className="w-full bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 py-3 rounded-lg font-semibold text-center">
                    ✅ Entrada já liberada às {customerFound.entryTime}
                  </div>
                )}
                
                <button
                  onClick={() => {
                    setCustomerFound(null);
                    setSearchValue('');
                  }}
                  className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Limpar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Balance Modal */}
      {showAddBalance && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={() => setShowAddBalance(false)} />
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Adicionar Saldo
              </h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Valor a adicionar
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                  <input
                    type="number"
                    value={balanceAmount}
                    onChange={(e) => setBalanceAmount(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-8 pr-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    placeholder="0,00"
                    step="0.01"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAddBalance(false)}
                  className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddBalance}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default EntryValidation;