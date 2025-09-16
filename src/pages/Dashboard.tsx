import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';
import { formatCurrency, formatNumber } from '../utils/formatters';
import LiquidGlassBackground from '../components/ui/LiquidGlassBackground';
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Target,
  Zap,
  AlertTriangle,
  BarChart3,
  ArrowUpRight,
  Sparkles,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { stats, alerts, topProducts, activeCampaign, establishment } = useStore();
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);

  if (!stats) return null;

  const statsData = [
    {
      name: 'Faturamento',
      value: formatCurrency(stats.revenue.today),
      change: stats.revenue.change,
      changeType: stats.revenue.changeType,
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-600',
      glowColor: 'shadow-[0_0_40px_rgba(16,185,129,0.5)]'
    },
    {
      name: 'Pessoas Ativas',
      value: formatNumber(stats.customers.active),
      change: stats.customers.change,
      changeType: stats.customers.changeType,
      icon: Users,
      color: 'from-blue-400 to-cyan-600',
      glowColor: 'shadow-[0_0_40px_rgba(59,130,246,0.5)]'
    },
    {
      name: 'Ticket Médio',
      value: formatCurrency(stats.avgTicket.value),
      change: stats.avgTicket.change,
      changeType: stats.avgTicket.changeType,
      icon: CreditCard,
      color: 'from-purple-400 to-violet-600',
      glowColor: 'shadow-[0_0_40px_rgba(124,58,237,0.5)]'
    },
    {
      name: 'Taxa Conversão',
      value: `${stats.campaignSuccess.rate}%`,
      change: stats.campaignSuccess.change,
      changeType: stats.campaignSuccess.changeType,
      icon: Target,
      color: 'from-orange-400 to-red-600',
      glowColor: 'shadow-[0_0_40px_rgba(249,115,22,0.5)]'
    }
  ];

  const handleCreateCampaign = (alert: any) => {
    setIsCreatingCampaign(true);
    setTimeout(() => {
      setIsCreatingCampaign(false);
      toast.success('Campanha criada com sucesso!');
      if (alert.type === 'warning') {
        navigate('/app/crm');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen relative">
      <LiquidGlassBackground />
      
      <div className="relative z-10 p-6 pt-24">
        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Visão Geral</h2>
          <p className="text-gray-600 dark:text-gray-300">Acompanhe as métricas em tempo real</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div 
              key={stat.name} 
              className="glass-card glass-card-hover p-6 group animate-scaleIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 ${
                  stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                }`}>
                  <ArrowUpRight className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Campaign */}
        {activeCampaign && (
          <div className="glass-card glass-card-hover p-8 mb-8 animate-slideUp">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Campanha Ativa</h3>
                    <p className="text-gray-600 dark:text-gray-300">Resultados em tempo real</p>
                  </div>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full px-3 py-1 text-xs font-medium text-orange-800 dark:text-orange-300 flex items-center">
                  <Activity className="w-4 h-4 mr-2" />
                  <span>Termina em 12:34</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">"{activeCampaign.message}"</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Enviado para {activeCampaign.audience} clientes</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 dark:text-gray-400">Taxa de Conversão</span>
                      <span className="font-bold text-2xl text-gray-900 dark:text-white">
                        {Math.round((activeCampaign.converted / activeCampaign.sent) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 ease-out" 
                        style={{width: `${(activeCampaign.converted / activeCampaign.sent) * 100}%`}}
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      {activeCampaign.converted} de {activeCampaign.sent} compraram • {formatCurrency(activeCampaign.revenue)}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Products */}
          <div className="glass-card glass-card-hover p-8 animate-slideIn">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-purple-600" />
                  Top Produtos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mais vendidos hoje</p>
              </div>
              <BarChart3 className="w-6 h-6 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="space-y-4">
              {topProducts.map((product, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-100 dark:bg-purple-900/30">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{product.quantity} unidades</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">{formatCurrency(product.sales)}</p>
                      <div className="flex items-center space-x-1 text-sm text-green-400">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>+12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Alerts */}
          <div className="glass-card glass-card-hover p-8 animate-slideIn" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                  Alertas Inteligentes
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Oportunidades detectadas pela IA</p>
              </div>
            </div>
            <div className="space-y-4">
              {alerts.map((alert, idx) => (
                <div 
                  key={idx} 
                  className={`bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 border ${
                    alert.type === 'warning' ? 'border-amber-400/30' :
                    alert.type === 'info' ? 'border-blue-400/30' :
                    'border-green-400/30'
                  }`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        alert.type === 'warning' ? 'bg-amber-400' :
                        alert.type === 'info' ? 'bg-blue-400' :
                        'bg-green-400'
                      }`}></div>
                      <span className="font-medium text-sm text-gray-900 dark:text-white">
                        {alert.title}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.priority === 'high' ? 'text-red-300 border-red-400/30' :
                      alert.priority === 'medium' ? 'text-amber-300 border-amber-400/30' :
                      'text-gray-300 border-gray-400/30'
                    }`}>
                      {alert.priority === 'high' ? 'Alta' : alert.priority === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                  </div>
                  <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">{alert.message}</p>
                  <button
                    onClick={() => handleCreateCampaign(alert)}
                    disabled={isCreatingCampaign}
                    className={`px-4 py-2 rounded-xl font-semibold text-white text-sm w-full
                               bg-gradient-to-r from-purple-600 to-blue-600
                               hover:shadow-lg active:scale-95 transition-all duration-300 ${
                      isCreatingCampaign ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isCreatingCampaign ? 'Criando...' : alert.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;