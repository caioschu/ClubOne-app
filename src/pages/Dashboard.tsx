import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';
import { formatCurrency, formatNumber } from '../utils/formatters';
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Target,
  Zap,
  AlertTriangle,
  BarChart3,
  ArrowUpRight
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
      color: 'green'
    },
    {
      name: 'Pessoas Ativas',
      value: formatNumber(stats.customers.active),
      change: stats.customers.change,
      changeType: stats.customers.changeType,
      icon: Users,
      color: 'blue'
    },
    {
      name: 'Ticket Médio',
      value: formatCurrency(stats.avgTicket.value),
      change: stats.avgTicket.change,
      changeType: stats.avgTicket.changeType,
      icon: CreditCard,
      color: 'purple'
    },
    {
      name: 'Taxa Conversão',
      value: `${stats.campaignSuccess.rate}%`,
      change: stats.campaignSuccess.change,
      changeType: stats.campaignSuccess.changeType,
      icon: Target,
      color: 'orange'
    }
  ];

  const handleCreateCampaign = (alert: any) => {
    setIsCreatingCampaign(true);
    setTimeout(() => {
      setIsCreatingCampaign(false);
      toast.success('Campanha criada com sucesso!');
      if (alert.type === 'warning') {
        navigate('/crm');
      }
    }, 2000);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Visão Geral</h2>
        <p className="text-gray-600 dark:text-gray-300">Acompanhe as métricas em tempo real</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat) => (
          <div key={stat.name} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-${stat.color}-100 to-${stat.color}-200 dark:from-${stat.color}-900/20 dark:to-${stat.color}-800/20`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                <ArrowUpRight className="w-4 h-4" />
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Campaign */}
      {activeCampaign && (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Campanha Ativa</h3>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              Termina em 12:34
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-medium mb-2">"{activeCampaign.message}"</p>
              <p className="text-purple-200 text-sm">Enviado para {activeCampaign.audience} clientes</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-200">Taxa de Conversão</span>
                <span className="font-bold text-2xl">
                  {Math.round((activeCampaign.converted / activeCampaign.sent) * 100)}%
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full" 
                  style={{width: `${(activeCampaign.converted / activeCampaign.sent) * 100}%`}}
                ></div>
              </div>
              <p className="text-purple-200 text-sm">
                {activeCampaign.converted} de {activeCampaign.sent} compraram • {formatCurrency(activeCampaign.revenue)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Products */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Produtos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mais vendidos hoje</p>
            </div>
            <BarChart3 className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>
          <div className="space-y-4">
            {topProducts.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-all hover:transform hover:scale-102">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 text-purple-600 dark:text-purple-400">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{product.quantity} unidades</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">{formatCurrency(product.sales)}</p>
                  <div className="flex items-center space-x-1 text-sm text-green-600">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+12%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Alerts */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alertas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Oportunidades detectadas</p>
            </div>
            <AlertTriangle className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>
          <div className="space-y-4">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`rounded-xl p-4 transition-all hover:transform hover:scale-102 ${
                alert.type === 'warning' ? 'border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20' :
                alert.type === 'info' ? 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20' :
                'border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.type === 'warning' ? 'bg-amber-500' :
                      alert.type === 'info' ? 'bg-blue-500' :
                      'bg-green-500'
                    }`}></div>
                    <span className={`font-medium text-sm ${
                      alert.type === 'warning' ? 'text-amber-800 dark:text-amber-200' :
                      alert.type === 'info' ? 'text-blue-800 dark:text-blue-200' :
                      'text-green-800 dark:text-green-200'
                    }`}>{alert.title}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    alert.priority === 'high' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300' :
                    alert.priority === 'medium' ? 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {alert.priority === 'high' ? 'Alta' : alert.priority === 'medium' ? 'Média' : 'Baixa'}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${
                  alert.type === 'warning' ? 'text-amber-700 dark:text-amber-300' :
                  alert.type === 'info' ? 'text-blue-700 dark:text-blue-300' :
                  'text-green-700 dark:text-green-300'
                }`}>{alert.message}</p>
                <button
                  onClick={() => handleCreateCampaign(alert)}
                  disabled={isCreatingCampaign}
                  className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
                    alert.type === 'warning' ? 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 text-white' :
                    alert.type === 'info' ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white' :
                    'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white'
                  } ${isCreatingCampaign ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isCreatingCampaign ? 'Criando...' : alert.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;