import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/formatters';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  Plus,
  Search,
  Filter,
  BarChart3,
  DollarSign,
  Clock,
  Users
} from 'lucide-react';

const Sales = () => {
  const [activeTab, setActiveTab] = useState('vendas');
  const [searchTerm, setSearchTerm] = useState('');
  const { products, sales } = useStore();

  // Calcular estatísticas em tempo real
  const totalSales = sales.reduce((sum, sale) => sum + sale.price, 0);
  const totalItems = sales.reduce((sum, sale) => sum + sale.quantity, 0);
  const lowStockProducts = products.filter(p => p.status === 'baixo' || p.status === 'critico').length;
  const criticalStockProducts = products.filter(p => p.status === 'critico').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ok': return 'text-green-600 bg-green-100';
      case 'baixo': return 'text-yellow-600 bg-yellow-100';
      case 'critico': return 'text-red-600 bg-red-100';
      case 'pago': return 'text-green-600 bg-green-100';
      case 'pendente': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ok': return 'Normal';
      case 'baixo': return 'Baixo';
      case 'critico': return 'Crítico';
      case 'pago': return 'Pago';
      case 'pendente': return 'Pendente';
      default: return status;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Vendas & Estoque</h1>
            <p className="text-gray-600 dark:text-gray-300">Gerencie vendas em tempo real e controle de estoque</p>
          </div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Novo Produto</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <span className="text-sm font-medium text-green-600">+28%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatCurrency(totalSales)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Vendas Hoje</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">+15%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{totalItems}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Itens Vendidos</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Package className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-red-600">-3</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{products.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Produtos Ativos</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">{criticalStockProducts}</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{lowStockProducts}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Estoque Baixo</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('vendas')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'vendas'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Vendas em Tempo Real</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('estoque')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'estoque'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Controle de Estoque</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={activeTab === 'vendas' ? 'Buscar vendas...' : 'Buscar produtos...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span>Relatório</span>
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'vendas' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Vendas de Hoje</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Atualizando em tempo real</span>
                </div>
              </div>
              
              {sales.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Nenhuma venda registrada ainda</p>
                  <p className="text-sm">Use o PDV para fazer vendas e veja aqui em tempo real!</p>
                </div>
              ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Horário</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Produto</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Qtd</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Valor</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Cliente</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.slice(0, 10).map((sale) => (
                      <tr key={sale.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-900 dark:text-white">{sale.time}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-900 dark:text-white">{sale.productName}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-700 dark:text-gray-300">{sale.quantity}x</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-green-600">R$ {sale.price}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{sale.customer}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                            {getStatusText(sale.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Controle de Estoque</h3>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{lowStockProducts} produtos com estoque baixo</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Produto</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Categoria</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Estoque</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Preço</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Vendas Hoje</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-700 dark:text-gray-300 capitalize">{item.category}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${
                              item.stock <= (item.minStock || 0) ? 'text-red-600' : 'text-gray-900 dark:text-white'
                            }`}>
                              {item.stock}
                            </span>
                            <span className="text-xs text-gray-500">/ {item.minStock || 0} min</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-900 dark:text-white">R$ {item.price}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 font-medium">{item.sales}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {getStatusText(item.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sales;