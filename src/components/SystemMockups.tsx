import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  Users, 
  TrendingUp, 
  Bell, 
  CreditCard,
  BarChart3,
  Target,
  Zap,
  Star,
  Gift,
  MessageSquare,
  Calendar,
  ShoppingCart,
  QrCode,
  UserCheck,
  Crown,
  Music,
  Ticket,
  Heart,
  Clock,
  MapPin
} from 'lucide-react';

const SystemMockups = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Veja o <span className="text-purple-600">Sistema em Ação</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interfaces reais do Club One funcionando em estabelecimentos parceiros
          </p>
        </div>

        {/* Dashboard Gerencial */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full mb-4">
              <Monitor className="w-5 h-5" />
              <span className="font-semibold text-lg">Dashboard Gerencial</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Controle total das operações em tempo real</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            {/* Header do Dashboard */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mansion Club - Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300">Sábado, 23:45 - 847 pessoas ativas</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Sistema Online</span>
              </div>
            </div>

            {/* Métricas Principais */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <span className="text-xs font-medium text-green-700 dark:text-green-300 bg-green-200 dark:bg-green-800 px-2 py-1 rounded-full">+28%</span>
                </div>
                <div className="text-3xl font-bold text-green-700 dark:text-green-300 mb-1">R$ 52.8K</div>
                <div className="text-sm text-green-600 dark:text-green-400">Vendas Hoje</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded-full">847</span>
                </div>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-1">1.247</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Clientes Ativos</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded-full">R$ 42</span>
                </div>
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-1">R$ 42</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Ticket Médio</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-8 h-8 text-orange-600" />
                  <span className="text-xs font-medium text-orange-700 dark:text-orange-300 bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded-full">89%</span>
                </div>
                <div className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-1">12</div>
                <div className="text-sm text-orange-600 dark:text-orange-400">Campanhas Ativas</div>
              </div>
            </div>

            {/* Campanha em Destaque */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold">🔥 Campanha Flash Ativa</h4>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Termina em 12:34
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-purple-100 mb-2">"2 Heineken por R$ 25 - Válido por 15min"</p>
                  <p className="text-sm text-purple-200">Enviado para: Clientes cervejeiros ativos (234 pessoas)</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Taxa de Conversão</span>
                    <span className="font-bold">89%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                  <p className="text-xs text-purple-200">208 de 234 clientes compraram</p>
                </div>
              </div>
            </div>

            {/* Telas do Sistema */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* PDV */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-purple-600" />
                  PDV em Tempo Real
                </h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">Cliente: Rafael Costa</span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">R$ 127,50</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">2x Heineken</span>
                        <span className="font-medium text-gray-900 dark:text-white">R$ 30,00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">1x Caipirinha</span>
                        <span className="font-medium text-gray-900 dark:text-white">R$ 18,00</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-gray-900 dark:text-white">Total:</span>
                        <span className="text-purple-600">R$ 48,00</span>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium mt-3">
                      ✅ Finalizar Venda
                    </button>
                  </div>
                </div>
              </div>

              {/* CRM */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  CRM Inteligente
                </h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="font-medium text-orange-800 dark:text-orange-300 text-sm">Produto Parado</span>
                    </div>
                    <p className="text-xs text-orange-700 dark:text-orange-400">Caipiroska sem venda há 45min</p>
                    <button className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full mt-2 hover:bg-orange-700">
                      Criar Campanha Flash
                    </button>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-800 dark:text-green-300 text-sm">Oportunidade VIP</span>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-400">47 clientes VIP presentes</p>
                    <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full mt-2 hover:bg-green-700">
                      Oferta Premium
                    </button>
                  </div>
                </div>
              </div>

              {/* Validação de Entrada */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                  Validação de Entrada
                </h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RC</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">Rafael Costa</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Gold • R$ 127,50</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-green-800 dark:text-green-300">✅ Ingresso VIP Válido</span>
                        <span className="text-xs text-green-600 dark:text-green-400">Gusttavo Lima</span>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium mt-2">
                      Liberar Entrada
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venda de Ingressos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full mb-4">
              <Ticket className="w-5 h-5" />
              <span className="font-semibold text-lg">Sistema de Ingressos</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Venda inteligente com segmentação automática</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Página Pública de Ingressos */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                <h4 className="font-bold text-lg mb-2">🎫 Página Pública de Ingressos</h4>
                <p className="text-purple-100 text-sm">Experiência otimizada para conversão</p>
              </div>
              
              <div className="p-6">
                {/* Event Card */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
                  <div className="relative h-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Music className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-bold">Gusttavo Lima</p>
                      <p className="text-sm opacity-90">Turnê Buteco 2025</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      PRÉ-VENDA
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>15 Fev • 22h</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Mansion Club</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Pista</span>
                        <span className="font-bold text-purple-600">R$ 80</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">VIP</span>
                        <span className="font-bold text-purple-600">R$ 180</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold text-sm">
                      Comprar Ingresso
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard de Eventos */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                  Dashboard de Eventos
                </h4>
                <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">+ Novo</button>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Gusttavo Lima</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">15 Fev • 22h</p>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs">Pré-venda</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">847</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Vendidos</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">R$ 89K</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Receita</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">56%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Ocupação</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '56%'}}></div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Alok</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">8 Mar • 23h</p>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs">Vendendo</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">1.234</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Vendidos</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">R$ 157K</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Receita</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">82%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Ocupação</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Site Público de Vendas de Ingressos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Site Público de Vendas de Ingressos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Página pública otimizada para conversão com filtros inteligentes, 
              múltiplos tipos de ingresso e checkout simplificado
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Browser Frame */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-t-xl p-3 mb-0">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-600 rounded-md px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                  clubone.com.br/tickets
                </div>
              </div>
            </div>

            {/* Site Content */}
            <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-b-xl overflow-hidden">
              {/* Hero Section */}
              <div className="relative p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-2xl font-black text-white mb-2">CLUB ONE</div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-4">
                    Os Melhores Eventos da Cidade
                  </h1>
                  <p className="text-white/80 mb-6">
                    Tecnologia cashless • Fidelidade nacional • Experiências exclusivas
                  </p>
                  <div className="flex justify-center space-x-6 text-white/60 text-sm">
                    <div>200+ Estabelecimentos</div>
                    <div>1M+ Clientes</div>
                    <div>50+ Cidades</div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white/10 backdrop-blur-sm p-6 border-b border-white/10">
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-gray-50 rounded-xl px-4 py-2 flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">🔍 Buscar artista</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl px-4 py-2">
                    <span className="text-gray-600 text-sm">📍 São Paulo</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2">
                    <span className="text-sm font-medium">🎵 Sertanejo</span>
                  </div>
                  <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2">
                    <span className="text-sm font-medium">6 eventos encontrados</span>
                  </div>
                </div>
              </div>

              {/* Events Grid */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Evento 1 - Gusttavo Lima */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-32">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
                      <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Sertanejo
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="font-bold">Gusttavo Lima</h3>
                        <p className="text-xs opacity-90">15 Fev • 22h</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="text-xs text-gray-500">A partir de</div>
                          <div className="text-lg font-bold text-purple-600">R$ 80</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-green-600 font-medium">✓ Disponível</div>
                          <div className="text-xs text-gray-500">653 ingressos</div>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-xl font-semibold text-sm">
                        Comprar Ingresso
                      </button>
                    </div>
                  </div>

                  {/* Evento 2 - Alok */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-32">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                      <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Eletrônica
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="font-bold">Alok</h3>
                        <p className="text-xs opacity-90">8 Mar • 23h</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="text-xs text-gray-500">A partir de</div>
                          <div className="text-lg font-bold text-purple-600">R$ 120</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-green-600 font-medium">✓ Disponível</div>
                          <div className="text-xs text-gray-500">266 ingressos</div>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-xl font-semibold text-sm">
                        Comprar Ingresso
                      </button>
                    </div>
                  </div>
                </div>

                {/* Trust Section */}
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="flex justify-center space-x-6 text-white/80 text-sm">
                    <div>🔒 Compra Segura</div>
                    <div>📱 QR Code por Email</div>
                    <div>🎫 Entrada Garantida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App do Cliente */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-6 py-3 rounded-full mb-4">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold text-lg">App do Cliente</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Experiência premium na palma da mão</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 justify-center">
            {/* iPhone 1 - Home */}
            <div className="mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 py-3 text-white text-sm relative z-10">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="px-6 pb-6 text-white">
                    {/* Header do App */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold">RC</span>
                        </div>
                        <div>
                          <p className="font-bold text-white">Olá, Rafael!</p>
                          <p className="text-sm text-gray-300">Nível Gold • 2.847 pts</p>
                        </div>
                      </div>
                      <Bell className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Status Atual */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white mb-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span className="font-semibold">Ativo na Mansion Club</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-green-100">Entrada</div>
                          <div className="font-bold">22:15</div>
                        </div>
                        <div>
                          <div className="text-green-100">Mesa</div>
                          <div className="font-bold">12</div>
                        </div>
                      </div>
                    </div>

                    {/* Saldo */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-white">Saldo Disponível</span>
                        <CreditCard className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-3">R$ 127,50</div>
                      <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold">
                        + Adicionar Créditos
                      </button>
                    </div>

                    {/* Ofertas */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-white flex items-center">
                        <Gift className="w-4 h-4 mr-2 text-purple-400" />
                        Só para Você
                      </h4>
                      
                      <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-orange-200">🔥 Flash 12min</span>
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-bold">11:47</span>
                        </div>
                        <p className="text-sm text-orange-100 mb-3">2 Heineken por R$ 25</p>
                        <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium">
                          Resgatar Oferta
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone 2 - Fidelidade */}
            <div className="mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 py-3 text-white text-sm relative z-10">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 text-white">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Star className="w-10 h-10 text-white fill-current" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Nível Gold</h3>
                      <p className="text-gray-300">2.847 pontos</p>
                    </div>

                    {/* Progresso */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Progresso para VIP</span>
                        <span className="font-medium text-white">2.847 / 5.000</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{width: '57%'}}></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Faltam 2.153 pontos</p>
                    </div>

                    {/* Benefícios */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-white text-sm">Seus Benefícios</h4>
                      
                      <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-yellow-200 text-sm">Entrada Prioritária</span>
                        </div>
                        <p className="text-xs text-yellow-100">Fila preferencial</p>
                      </div>

                      <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Gift className="w-4 h-4 text-blue-400" />
                          <span className="font-medium text-blue-200 text-sm">Drink Cortesia</span>
                        </div>
                        <p className="text-xs text-blue-100">1 drink grátis/noite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone 3 - Pagamento */}
            <div className="mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 py-3 text-white text-sm relative z-10">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 text-white">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <QrCode className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Pagamento Rápido</h3>
                      <p className="text-gray-300">Escaneie ou mostre o código</p>
                    </div>

                    {/* QR Code */}
                    <div className="bg-gray-800 rounded-2xl p-6 mb-6 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <div className="grid grid-cols-8 gap-1">
                          {Array.from({length: 64}).map((_, i) => (
                            <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Últimas Compras */}
                    <div>
                      <h4 className="font-bold text-white mb-3 text-sm">Compras Recentes</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 bg-gray-800 rounded-xl">
                          <span className="text-sm text-gray-300">2x Heineken</span>
                          <span className="font-medium text-white">R$ 25,00</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-800 rounded-xl">
                          <span className="text-sm text-gray-300">Caipirinha</span>
                          <span className="font-medium text-white">R$ 18,00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone 4 - Cardápio */}
            <div className="mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 py-3 text-white text-sm relative z-10">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-2 h-full overflow-hidden text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Cardápio Digital</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 text-purple-400">🛒</div>
                        <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
                      </div>
                    </div>

                    {/* Produtos Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-700">
                        <div className="text-center mb-2">
                          <div className="text-2xl mb-1">🍺</div>
                          <h4 className="font-bold text-white text-xs">Heineken</h4>
                          <p className="text-xs text-gray-400">Cerveja</p>
                        </div>
                        <div className="text-center mb-2">
                          <span className="text-sm font-bold text-purple-400">R$ 15</span>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-1.5 rounded-lg font-semibold text-xs">
                          Adicionar
                        </button>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-700">
                        <div className="text-center mb-2">
                          <div className="text-2xl mb-1">🍹</div>
                          <h4 className="font-bold text-white text-xs">Caipirinha</h4>
                          <p className="text-xs text-gray-400">Drink</p>
                        </div>
                        <div className="text-center mb-2">
                          <span className="text-sm font-bold text-purple-400">R$ 18</span>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-1.5 rounded-lg font-semibold text-xs">
                          Adicionar
                        </button>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-700">
                        <div className="text-center mb-2">
                          <div className="text-2xl mb-1">🥃</div>
                          <h4 className="font-bold text-white text-xs">Whisky</h4>
                          <p className="text-xs text-gray-400">Premium</p>
                        </div>
                        <div className="text-center mb-2">
                          <span className="text-sm font-bold text-purple-400">R$ 200</span>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-1.5 rounded-lg font-semibold text-xs">
                          Adicionar
                        </button>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-700">
                        <div className="text-center mb-2">
                          <div className="text-2xl mb-1">🍾</div>
                          <h4 className="font-bold text-white text-xs">Vodka</h4>
                          <p className="text-xs text-gray-400">Premium</p>
                        </div>
                        <div className="text-center mb-2">
                          <span className="text-sm font-bold text-purple-400">R$ 180</span>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-1.5 rounded-lg font-semibold text-xs">
                          Adicionar
                        </button>
                      </div>
                    </div>

                    {/* Carrinho */}
                    <div className="bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-700">
                      <h4 className="font-bold text-white mb-3 text-sm">Seu Pedido</h4>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between items-center text-xs">
                          <span>2x Heineken</span>
                          <span className="font-bold">R$ 30</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span>1x Caipirinha</span>
                          <span className="font-bold">R$ 18</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-600 pt-2 mb-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-sm">Total:</span>
                          <span className="text-lg font-bold text-purple-400">R$ 48</span>
                        </div>
                      </div>
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg font-bold text-sm">
                        Enviar Pedido
                      </button>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 py-2">
                    <div className="flex justify-around items-center">
                      <div className="flex flex-col items-center space-y-1 text-gray-400">
                        <div className="w-5 h-5">🏠</div>
                        <span className="text-xs">Home</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1 text-gray-400">
                        <div className="w-5 h-5">🎫</div>
                        <span className="text-xs">Ingressos</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1 text-purple-400 relative">
                        <div className="w-5 h-5">🛒</div>
                        <span className="text-xs">Cardápio</span>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 text-gray-400">
                        <div className="w-5 h-5">⭐</div>
                        <span className="text-xs">Fidelidade</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1 text-gray-400">
                        <div className="w-5 h-5">📱</div>
                        <span className="text-xs">Pagar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gestão de Clientes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-6 py-3 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="font-semibold text-lg">Gestão de Clientes</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">CRM completo com programa de fidelidade nacional</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Lista de Clientes */}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-indigo-600" />
                  Base de Clientes
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Rafael Costa</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Gold • 12 visitas • R$ 1.250 gasto</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">R$ 127,50</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Saldo atual</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-white fill-current" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Ana Silva</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">VIP • 28 visitas • R$ 3.200 gasto</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-red-600">R$ 0,00</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Sem saldo</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">CO</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Carlos Oliveira</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Prata • 8 visitas • R$ 680 gasto</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">R$ 89,30</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Saldo atual</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segmentação Automática */}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  Segmentação Inteligente
                </h4>

                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-purple-800 dark:text-purple-300">🍺 Amantes de Cerveja</span>
                      <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full">234 pessoas</span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-400 mb-3">
                      Clientes que compraram cerveja nos últimos 30 dias
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-600 dark:text-purple-400">Última campanha</span>
                      <span className="font-bold text-purple-800 dark:text-purple-300">89% conversão</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-yellow-800 dark:text-yellow-300">🎵 Fãs de Sertanejo</span>
                      <span className="text-sm bg-yellow-600 text-white px-2 py-1 rounded-full">1.247 pessoas</span>
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
                      Compraram ingressos de eventos sertanejos
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-600 dark:text-yellow-400">Pré-venda Gusttavo Lima</span>
                      <span className="font-bold text-yellow-800 dark:text-yellow-300">56% conversão</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-blue-800 dark:text-blue-300">💎 Clientes VIP+</span>
                      <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-full">89 pessoas</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">
                      Nível VIP e Diamond com alto valor
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-600 dark:text-blue-400">Ofertas premium</span>
                      <span className="font-bold text-blue-800 dark:text-blue-300">75% conversão</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Avançado */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-6 py-3 rounded-full mb-4">
              <BarChart3 className="w-5 h-5" />
              <span className="font-semibold text-lg">Analytics Avançado</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Insights profundos para tomada de decisão</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Gráfico de Vendas */}
              <div className="lg:col-span-2">
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Vendas por Hora
                </h4>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <div className="flex items-end justify-between h-32 space-x-2">
                    {[20, 35, 45, 60, 80, 95, 85, 70, 55, 40, 25, 15].map((height, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t"
                          style={{height: `${height}%`}}
                        ></div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                          {22 + idx}h
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Pico: 2h-3h da manhã</p>
                  </div>
                </div>
              </div>

              {/* Métricas Detalhadas */}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                  Métricas Chave
                </h4>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Receita Mensal</span>
                      <span className="text-xs text-green-600 font-medium">+28%</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">R$ 892K</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Clientes Ativos</span>
                      <span className="text-xs text-blue-600 font-medium">+15%</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">3.247</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">NPS Score</span>
                      <span className="text-xs text-purple-600 font-medium">+12</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">89</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemMockups;