import React from 'react';
import { Users, Search, Plus, Star } from 'lucide-react';

const Customers = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Clientes</h1>
            <p className="text-gray-600 dark:text-gray-300">Gerencie sua base de clientes e programa de fidelidade</p>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Buscar clientes..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Novo Cliente</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">3.247</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Total de Clientes</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Star className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1.856</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Clientes Ativos</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+15%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">R$ 127</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Ticket Médio</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Star className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-green-600">+5%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2.3x</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Frequência Média</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Lista de Clientes</h3>
        <div className="text-gray-600 dark:text-gray-300">Carregando clientes...</div>
      </div>
    </div>
  );
};

export default Customers;