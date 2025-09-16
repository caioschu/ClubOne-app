import React, { useState } from 'react';
import LiquidGlassBackground from '../components/ui/LiquidGlassBackground';
import { 
  Target, 
  Users, 
  Send, 
  BarChart3, 
  Zap,
  Plus
} from 'lucide-react';
import toast from 'react-hot-toast';

const CRM = () => {
  const [selectedTrigger, setSelectedTrigger] = useState('produto-parado');
  const [campaignMessage, setCampaignMessage] = useState('Flash 15min: 2 Heineken por R$ 25');
  const [isCreating, setIsCreating] = useState(false);

  const triggers = [
    { id: 'produto-parado', name: 'Produto parado há 30min', audience: 234 },
    { id: 'movimento-baixo', name: 'Movimento baixo na pista', audience: 456 },
    { id: 'cliente-inativo', name: 'Cliente inativo há 1h', audience: 89 },
    { id: 'horario-baixo', name: 'Horário de baixo movimento', audience: 678 }
  ];

  const handleCreateCampaign = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
      toast.success('Campanha enviada com sucesso!');
      setCampaignMessage('');
    }, 2000);
  };

  return (
    <div className="min-h-screen relative">
      <LiquidGlassBackground />
      
      <div className="relative z-10 p-6 pt-24">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Campanhas de Marketing</h1>
            <p className="text-gray-600 dark:text-gray-300">Crie e gerencie campanhas automáticas para seus clientes</p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Nova Campanha</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Create Campaign */}
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center text-lg">
            <Target className="w-5 h-5 mr-2 text-purple-600" />
            Criar Campanha Flash
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Gatilho Automático</label>
              <div className="space-y-2">
                {triggers.map((trigger) => (
                  <label key={trigger.id} className="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="trigger"
                      value={trigger.id}
                      checked={selectedTrigger === trigger.id}
                      onChange={(e) => setSelectedTrigger(e.target.value)}
                      className="mr-3 text-purple-600"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">{trigger.name}</div>
                      <div className="text-sm text-purple-600 font-medium">{trigger.audience} pessoas</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem da Campanha</label>
              <textarea
                value={campaignMessage}
                onChange={(e) => setCampaignMessage(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none resize-none"
                rows={2}
                placeholder="Digite sua mensagem..."
              />
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Será enviado via WhatsApp, Push e SMS</p>
            </div>

            <button
              onClick={handleCreateCampaign}
              disabled={isCreating}
              className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>{isCreating ? 'Enviando...' : 'Enviar Campanha Agora'}</span>
            </button>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center text-lg">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
              Campanhas Recentes
            </h3>
            <button className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-medium">Ver Todas</button>
          </div>
          
          <div className="space-y-4">
            {[
              { title: 'Caipirinha Happy Hour', time: 'Há 2 horas', conversion: 89, revenue: 2100, audience: 156 },
              { title: 'Upgrade VIP Flash', time: 'Ontem', conversion: 67, revenue: 1800, audience: 89 },
              { title: 'Whisky Premium', time: 'Sexta-feira', conversion: 45, revenue: 3400, audience: 234 }
            ].map((campaign, idx) => (
              <div key={idx} className="p-4 border border-gray-100 dark:border-gray-600 rounded-lg hover:border-purple-200 dark:hover:border-purple-600 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{campaign.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{campaign.time} • {campaign.audience} pessoas</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Conv: <span className="font-medium text-gray-900 dark:text-white">{campaign.conversion}%</span></span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600 dark:text-purple-400">R$ {campaign.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CRM;