import React from 'react';
import { Play, Star, Users, TrendingUp } from 'lucide-react';
import Logo from './ui/Logo';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                <Star className="w-4 h-4 fill-current" />
                <span>Sistema #1 para Entretenimento Noturno</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
                <Logo size="lg" className="mb-4" />
                <span className="block text-4xl lg:text-6xl text-gray-900 dark:text-white">
                  Revolucione sua Casa Noturna
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-light">
                Plataforma SaaS completa que combina <strong className="text-gray-900 dark:text-white">cashless digital</strong>, <strong className="text-gray-900 dark:text-white">CRM inteligente</strong> e <strong className="text-gray-900 dark:text-white">programa de fidelidade nacional</strong> em uma única solução.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg hover:scale-105 active:scale-95 overflow-hidden">
                Agendar Demonstração
              </button>
              <button className="px-10 py-5 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 hover:scale-105 active:scale-95">
                <Play className="w-5 h-5" />
                <span>Ver Demo (3min)</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-12 pt-8">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">200+</span>
                <span className="font-medium">Estabelecimentos</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">+35%</span>
                <span className="font-medium">Ticket Médio</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 glass-card glass-card-hover p-8 lg:p-10 transform rotate-1 hover:rotate-0 transition-all duration-700 hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Ao Vivo</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Online</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-black text-gray-900 dark:text-white">R$ 45.2K</div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Vendas Hoje</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-black text-gray-900 dark:text-white">1.247</div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Clientes Ativos</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-black text-gray-900 dark:text-white">+28%</div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">vs Último Sábado</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-black text-gray-900 dark:text-white">R$ 36</div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Ticket Médio</div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Campanha Ativa</span>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">89% conversão</span>
                  </div>
                  <div className="text-base font-medium text-gray-600 dark:text-gray-300 mb-3">"Flash 15min: 2 Heineken R$ 25"</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div className="bg-gray-900 dark:bg-white h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '89%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 bg-gray-100/40 dark:bg-gray-800/40 rounded-3xl transform rotate-3 -z-10 blur-sm"></div>
            <div className="absolute inset-0 bg-gray-200/20 dark:bg-gray-700/20 rounded-3xl transform rotate-6 -z-20 blur-md"></div>
            
            {/* Floating Particles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300/30 dark:bg-gray-600/30 rounded-full blur-sm animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300/30 dark:bg-gray-600/30 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gray-300/30 dark:bg-gray-600/30 rounded-full blur-sm animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;