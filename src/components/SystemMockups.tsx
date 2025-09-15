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
  MessageSquare
} from 'lucide-react';

const SystemMockups = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Veja o <span className="text-purple-600">Sistema em Ação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interfaces reais do Club One funcionando em estabelecimentos parceiros
          </p>
        </div>

        {/* Dashboard Gerencial */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-purple-100 text-purple-800 px-6 py-3 rounded-full mb-4">
              <Monitor className="w-5 h-5" />
              <span className="font-semibold text-lg">Dashboard Gerencial</span>
            </div>
            <p className="text-gray-600">Controle total das operações em tempo real</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
            {/* Header do Dashboard */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mansion Club - Dashboard</h3>
                  <p className="text-gray-600">Sábado, 23:45 - 847 pessoas ativas</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Sistema Online</span>
              </div>
            </div>

            {/* Métricas Principais */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <span className="text-xs font-medium text-green-700 bg-green-200 px-2 py-1 rounded-full">+28%</span>
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">R$ 52.8K</div>
                <div className="text-sm text-green-600">Vendas Hoje</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span className="text-xs font-medium text-blue-700 bg-blue-200 px-2 py-1 rounded-full">847</span>
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-1">1.247</div>
                <div className="text-sm text-blue-600">Clientes Ativos</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                  <span className="text-xs font-medium text-purple-700 bg-purple-200 px-2 py-1 rounded-full">R$ 42</span>
                </div>
                <div className="text-3xl font-bold text-purple-700 mb-1">R$ 42</div>
                <div className="text-sm text-purple-600">Ticket Médio</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-8 h-8 text-orange-600" />
                  <span className="text-xs font-medium text-orange-700 bg-orange-200 px-2 py-1 rounded-full">89%</span>
                </div>
                <div className="text-3xl font-bold text-orange-700 mb-1">12</div>
                <div className="text-sm text-orange-600">Campanhas Ativas</div>
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

            {/* Produtos em Tempo Real */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                  Top Produtos Hoje
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Heineken Long Neck', sales: 'R$ 8.4K', qty: '168 un', color: 'green' },
                    { name: 'Caipirinha', sales: 'R$ 6.2K', qty: '124 un', color: 'blue' },
                    { name: 'Whisky Red Label', sales: 'R$ 4.8K', qty: '24 un', color: 'purple' },
                    { name: 'Vodka Absolut', sales: 'R$ 3.1K', qty: '31 un', color: 'orange' }
                  ].map((product, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-${product.color}-500 rounded-full`}></div>
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{product.sales}</div>
                        <div className="text-xs text-gray-600">{product.qty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-orange-600" />
                  Alertas Inteligentes
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium text-red-800">Produto Parado</span>
                    </div>
                    <p className="text-sm text-red-700">Caipiroska sem venda há 45min</p>
                    <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-full mt-2 hover:bg-red-700">
                      Criar Campanha Flash
                    </button>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium text-yellow-800">Movimento Baixo</span>
                    </div>
                    <p className="text-sm text-yellow-700">Pista com pouco movimento</p>
                    <button className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full mt-2 hover:bg-yellow-700">
                      Ativar Happy Hour
                    </button>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-800">Oportunidade</span>
                    </div>
                    <p className="text-sm text-green-700">47 clientes VIP presentes</p>
                    <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full mt-2 hover:bg-green-700">
                      Oferta Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App do Cliente */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-4">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold text-lg">App do Cliente</span>
            </div>
            <p className="text-gray-600">Experiência premium na palma da mão</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tela Principal */}
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 h-full">
                {/* Header do App */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RC</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Olá, Rafael!</p>
                      <p className="text-sm text-gray-600">Nível Gold • 2.847 pts</p>
                    </div>
                  </div>
                  <Bell className="w-6 h-6 text-gray-400" />
                </div>

                {/* Saldo */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 text-white mb-6">
                  <p className="text-purple-200 text-sm mb-1">Saldo Disponível</p>
                  <p className="text-2xl font-bold mb-3">R$ 127,50</p>
                  <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30">
                    + Adicionar Créditos
                  </button>
                </div>

                {/* Status Atual */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-green-800">Ativo na Mansion Club</span>
                  </div>
                  <p className="text-sm text-green-700">Entrada: 22:15 • Mesa 12</p>
                  <p className="text-sm text-green-700">Gasto hoje: R$ 89,50</p>
                </div>

                {/* Ofertas Personalizadas */}
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Gift className="w-5 h-5 mr-2 text-purple-600" />
                    Só para Você
                  </h4>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-orange-800">🔥 Flash 12min</span>
                      <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full">11:47</span>
                    </div>
                    <p className="text-sm text-orange-700 mb-2">2 Heineken por R$ 25</p>
                    <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                      Resgatar Oferta
                    </button>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <span className="font-medium text-purple-800">🎯 Upgrade VIP</span>
                    <p className="text-sm text-purple-700 mb-2">Mesa premium por +R$ 50</p>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                      Fazer Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tela de Fidelidade */}
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-white fill-current" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Nível Gold</h3>
                  <p className="text-gray-600">2.847 pontos</p>
                </div>

                {/* Progresso para próximo nível */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progresso para VIP</span>
                    <span className="font-medium text-gray-900">2.847 / 5.000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{width: '57%'}}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Faltam 2.153 pontos para VIP</p>
                </div>

                {/* Benefícios Ativos */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold text-gray-900">Seus Benefícios</h4>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="w-4 h-4 text-yellow-600 fill-current" />
                      <span className="font-medium text-yellow-800">Entrada Prioritária</span>
                    </div>
                    <p className="text-xs text-yellow-700">Fila preferencial em todos os eventos</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Gift className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-800">Drink Cortesia</span>
                    </div>
                    <p className="text-xs text-blue-700">1 drink grátis por noite</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-purple-800">Desconto 15%</span>
                    </div>
                    <p className="text-xs text-purple-700">Em todas as bebidas</p>
                  </div>
                </div>

                {/* Histórico Recente */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Atividade Recente</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Hoje • Mansion Club</span>
                      <span className="font-medium text-green-600">+89 pts</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Sex • Villa Mix</span>
                      <span className="font-medium text-green-600">+156 pts</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Qua • Urban Club</span>
                      <span className="font-medium text-green-600">+67 pts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tela de Pagamento */}
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pagamento Rápido</h3>
                  <p className="text-gray-600">Escaneie ou digite o código</p>
                </div>

                {/* QR Code Simulado */}
                <div className="bg-gray-100 rounded-xl p-8 mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({length: 64}).map((_, i) => (
                        <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ou digite o código */}
                <div className="mb-6">
                  <p className="text-center text-gray-600 mb-3">ou digite o código do produto</p>
                  <div className="flex space-x-2">
                    {[1,2,3,4,5,6].map((num) => (
                      <input 
                        key={num}
                        type="text" 
                        className="w-8 h-10 border border-gray-300 rounded-lg text-center font-bold text-lg focus:border-purple-500 focus:outline-none"
                        maxLength={1}
                      />
                    ))}
                  </div>
                </div>

                {/* Últimas Compras */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Compras Recentes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">2x Heineken</span>
                      <span className="font-medium text-gray-900">R$ 25,00</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Caipirinha</span>
                      <span className="font-medium text-gray-900">R$ 18,00</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Whisky Red Label</span>
                      <span className="font-medium text-gray-900">R$ 45,00</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold mt-6 hover:from-green-600 hover:to-blue-600">
                  Pagar com Saldo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CRM Interface */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-orange-100 text-orange-800 px-6 py-3 rounded-full mb-4">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold text-lg">CRM Inteligente</span>
            </div>
            <p className="text-gray-600">Campanhas automáticas que convertem</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Criação de Campanha */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Criar Campanha Flash
                </h4>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trigger Automático</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none">
                      <option>Produto parado há 30min</option>
                      <option>Movimento baixo na pista</option>
                      <option>Cliente inativo há 1h</option>
                      <option>Horário de baixo movimento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Público-Alvo</label>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Clientes Cervejeiros Ativos</span>
                        <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full">234 pessoas</span>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p>• Compraram cerveja nos últimos 30 dias</p>
                        <p>• Presentes no estabelecimento agora</p>
                        <p>• Não compraram nas últimas 2 horas</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Oferta</label>
                    <div className="border border-gray-300 rounded-lg p-3">
                      <input 
                        type="text" 
                        className="w-full border-0 outline-none font-medium text-gray-900 mb-2" 
                        value="🍺 Flash 15min: 2 Heineken por R$ 25"
                      />
                      <p className="text-xs text-gray-600">Válido por 15 minutos • Economia de R$ 15</p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600">
                    Enviar Campanha Agora
                  </button>
                </div>
              </div>

              {/* Resultados em Tempo Real */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                  Resultados ao Vivo
                </h4>

                <div className="space-y-4">
                  {/* Campanha Ativa */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-green-800">🔥 Campanha Ativa</span>
                      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">12:34 restantes</span>
                    </div>
                    <p className="text-sm text-green-700 mb-3">"2 Heineken por R$ 25"</p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-700">234</div>
                        <div className="text-xs text-green-600">Enviados</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-700">208</div>
                        <div className="text-xs text-green-600">Visualizaram</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-700">156</div>
                        <div className="text-xs text-green-600">Compraram</div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-green-600">Taxa de Conversão</span>
                        <span className="font-bold text-green-700">75%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-lg font-bold text-green-700">R$ 3.900</span>
                      <span className="text-xs text-green-600 ml-1">gerados</span>
                    </div>
                  </div>

                  {/* Histórico de Campanhas */}
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Campanhas Recentes</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Caipirinha Happy Hour</p>
                          <p className="text-xs text-gray-600">Há 2 horas • 89% conversão</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">R$ 2.1K</span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Upgrade VIP Flash</p>
                          <p className="text-xs text-gray-600">Ontem • 67% conversão</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">R$ 1.8K</span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Whisky Premium</p>
                          <p className="text-xs text-gray-600">Sex • 45% conversão</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">R$ 3.4K</span>
                      </div>
                    </div>
                  </div>

                  {/* Sugestões IA */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium text-blue-900 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      Sugestão da IA
                    </h5>
                    <p className="text-sm text-blue-800 mb-2">
                      47 clientes VIP presentes. Momento ideal para oferta premium.
                    </p>
                    <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700">
                      Criar Campanha VIP
                    </button>
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