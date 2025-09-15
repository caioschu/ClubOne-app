import React from 'react';
import { Play, Star, Users, TrendingUp } from 'lucide-react';
import Logo from './ui/Logo';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Sistema #1 para Entretenimento Noturno</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <Logo size="lg" className="mb-4" />
                <span className="block text-4xl lg:text-5xl">
                  Revolucione sua Casa Noturna
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Plataforma SaaS completa que combina <strong>cashless digital</strong>, <strong>CRM inteligente</strong> e <strong>programa de fidelidade nacional</strong> em uma única solução.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg">
                Agendar Demonstração
              </button>
              <button className="px-8 py-4 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Ver Demo (3min)</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">200+</span>
                <span>Estabelecimentos</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold">+35%</span>
                <span>Ticket Médio</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Dashboard Ao Vivo</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Online</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-600">R$ 45.2K</div>
                    <div className="text-sm text-gray-600">Vendas Hoje</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600">1.247</div>
                    <div className="text-sm text-gray-600">Clientes Ativos</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600">+28%</div>
                    <div className="text-sm text-gray-600">vs Último Sábado</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-600">R$ 36</div>
                    <div className="text-sm text-gray-600">Ticket Médio</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Campanha Ativa</span>
                    <span className="text-xs text-green-600 font-medium">89% conversão</span>
                  </div>
                  <div className="text-sm text-gray-600">"Flash 15min: 2 Heineken R$ 25"</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl transform rotate-6 opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-300 rounded-2xl transform rotate-12 opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;