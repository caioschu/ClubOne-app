import React from 'react';
import LiquidGlassBackground from '../components/ui/LiquidGlassBackground';
import { BarChart3, TrendingUp, Download, RefreshCw } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="min-h-screen relative">
      <LiquidGlassBackground />
      
      <div className="relative z-10 p-6 pt-24">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Análises & Relatórios</h1>
            <p className="text-gray-600 dark:text-gray-300">Insights detalhados sobre performance e vendas</p>
          </div>
          <div className="flex space-x-3">
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white">
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Últimos 90 dias</option>
            </select>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span>Atualizar</span>
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Exportar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+28%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">R$ 892.450</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Receita Total</div>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+15%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">18.247</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Clientes Únicos</div>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">R$ 127</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Ticket Médio</div>
        </div>

        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-red-600">-2%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">23.5%</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Taxa de Conversão</div>
        </div>
      </div>

      <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Gráficos e Relatórios</h3>
        <div className="text-gray-600 dark:text-gray-300">Carregando dados analíticos...</div>
      </div>
      </div>
    </div>
  );
};

export default Analytics;