import React from 'react';
import { 
  Ticket, 
  Music, 
  Users, 
  Calendar, 
  TrendingUp, 
  Target,
  Clock,
  Star,
  Gift,
  Zap,
  BarChart3,
  Heart,
  Share2
} from 'lucide-react';

const TicketSalesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
            <Ticket className="w-4 h-4" />
            <span>Venda de Ingressos Inteligente</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Venda Ingressos como <span className="text-indigo-600">Nunca Antes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema completo de venda de ingressos com segmentação automática por perfil musical, 
            campanhas personalizadas e pré-vendas exclusivas para clientes fiéis.
          </p>
        </div>

        {/* Funcionalidades Principais */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Segmentação Musical</h3>
            <p className="text-gray-600 text-sm">Identifica automaticamente preferências por histórico de consumo</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Pré-vendas Exclusivas</h3>
            <p className="text-gray-600 text-sm">Acesso antecipado para clientes fiéis por gênero musical</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Timing Otimizado</h3>
            <p className="text-gray-600 text-sm">Sertanejo 30 dias antes, funk 15 dias, eletrônica 60 dias</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Campanhas FOMO</h3>
            <p className="text-gray-600 text-sm">Últimos ingressos para clientes fiéis, urgência personalizada</p>
          </div>
        </div>

        {/* Interface de Criação de Eventos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Criação de Eventos Inteligente
            </h3>
            <p className="text-gray-600">Configure eventos com segmentação automática e campanhas personalizadas</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Formulário de Criação */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Novo Evento</h4>
                    <p className="text-gray-600">Mansion Club - Sábado</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Evento</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none font-medium"
                      value="Gusttavo Lima - Turnê Buteco 2025"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                      <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none"
                        value="2025-02-15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                      <input 
                        type="time" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none"
                        value="22:00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gênero Musical</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none">
                      <option>Sertanejo</option>
                      <option>Funk</option>
                      <option>Eletrônica</option>
                      <option>Pop/Rock</option>
                      <option>Forró</option>
                    </select>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-indigo-600" />
                      <span className="font-medium text-indigo-900">IA Detectou</span>
                    </div>
                    <p className="text-sm text-indigo-800 mb-3">
                      1.247 clientes sertanejos na base • Timing ideal: 30 dias de pré-venda
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-indigo-700">Potencial de vendas</span>
                        <span className="font-bold text-indigo-900">R$ 89K - R$ 156K</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-indigo-700">Taxa de conversão esperada</span>
                        <span className="font-bold text-indigo-900">12-18%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview da Página de Venda */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Share2 className="w-5 h-5 mr-2 text-purple-600" />
                  Preview da Página de Venda
                </h4>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  {/* Header do Evento */}
                  <div className="relative mb-4">
                    <div className="h-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <Music className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-bold text-lg">Gusttavo Lima</p>
                        <p className="text-sm opacity-90">Turnê Buteco 2025</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      PRÉ-VENDA
                    </div>
                  </div>

                  {/* Informações do Evento */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Sábado, 15 de Fevereiro • 22h</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Mansion Club • São Paulo</span>
                    </div>
                  </div>

                  {/* Tipos de Ingresso */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Pista</p>
                        <p className="text-xs text-gray-600">Acesso à pista</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">R$ 80</p>
                        <p className="text-xs text-green-600">Pré-venda</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">VIP</p>
                        <p className="text-xs text-gray-600">Open bar premium</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">R$ 180</p>
                        <p className="text-xs text-yellow-600">Exclusivo Gold+</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Camarote</p>
                        <p className="text-xs text-gray-600">Mesa + open premium</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">R$ 350</p>
                        <p className="text-xs text-purple-600">Apenas Diamond</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600">
                    Comprar Ingresso
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard de Vendas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Dashboard de Vendas em Tempo Real
            </h3>
            <p className="text-gray-600">Acompanhe vendas, conversões e performance por segmento</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div>
                <h4 className="text-xl font-bold text-gray-900">Gusttavo Lima - Vendas</h4>
                <p className="text-gray-600">Pré-venda iniciada há 5 dias</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">847</div>
                  <div className="text-xs text-gray-600">Ingressos Vendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">R$ 89K</div>
                  <div className="text-xs text-gray-600">Receita Total</div>
                </div>
              </div>
            </div>

            {/* Métricas por Segmento */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-bold text-green-900">Clientes Sertanejos</h5>
                  <Music className="w-6 h-6 text-green-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Enviados</span>
                    <span className="font-bold text-green-900">1.247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Compraram</span>
                    <span className="font-bold text-green-900">623 (50%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Receita</span>
                    <span className="font-bold text-green-900">R$ 67K</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-bold text-blue-900">Clientes Gerais</h5>
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Enviados</span>
                    <span className="font-bold text-blue-900">3.456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Compraram</span>
                    <span className="font-bold text-blue-900">189 (5.5%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Receita</span>
                    <span className="font-bold text-blue-900">R$ 18K</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-bold text-purple-900">Clientes VIP+</h5>
                  <Star className="w-6 h-6 text-purple-600 fill-current" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-purple-700">Enviados</span>
                    <span className="font-bold text-purple-900">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-purple-700">Compraram</span>
                    <span className="font-bold text-purple-900">67 (75%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-purple-700">Receita</span>
                    <span className="font-bold text-purple-900">R$ 23K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campanhas Ativas */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Campanhas Ativas
                </h5>
                
                <div className="space-y-3">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-orange-800">🔥 Últimos 100 Ingressos</span>
                      <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full">ATIVA</span>
                    </div>
                    <p className="text-sm text-orange-700 mb-2">Para clientes fiéis sertanejos</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-orange-600">Conversão</span>
                      <span className="font-bold text-orange-800">67%</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-purple-800">💎 Upgrade VIP</span>
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">ATIVA</span>
                    </div>
                    <p className="text-sm text-purple-700 mb-2">Para quem já comprou pista</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-600">Conversão</span>
                      <span className="font-bold text-purple-800">23%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                  Performance por Tipo
                </h5>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Pista</p>
                      <p className="text-xs text-gray-600">623 vendidos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">R$ 49.8K</p>
                      <p className="text-xs text-green-600">+15% vs meta</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">VIP</p>
                      <p className="text-xs text-gray-600">156 vendidos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">R$ 28.1K</p>
                      <p className="text-xs text-green-600">+28% vs meta</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Camarote</p>
                      <p className="text-xs text-gray-600">32 vendidos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">R$ 11.2K</p>
                      <p className="text-xs text-green-600">+5% vs meta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exemplos de Campanhas */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Campanhas Inteligentes por Gênero
            </h3>
            <p className="text-indigo-100 text-lg">
              Cada gênero musical tem sua estratégia otimizada de vendas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Sertanejo</span>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-indigo-100">• Pré-venda 30 dias antes</p>
                <p className="text-indigo-100">• "Gusttavo Lima confirmado!"</p>
                <p className="text-indigo-100">• Fãs sertanejos first access</p>
                <p className="text-indigo-100">• Conversão: 45-60%</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Funk</span>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-indigo-100">• Pré-venda 15 dias antes</p>
                <p className="text-indigo-100">• "MC Hariel exclusive set"</p>
                <p className="text-indigo-100">• Stories + influencers</p>
                <p className="text-indigo-100">• Conversão: 25-35%</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Eletrônica</span>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-indigo-100">• Pré-venda 60 dias antes</p>
                <p className="text-indigo-100">• "Alok exclusive - early bird"</p>
                <p className="text-indigo-100">• Lovers eletrônica only</p>
                <p className="text-indigo-100">• Conversão: 35-50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSalesSection;