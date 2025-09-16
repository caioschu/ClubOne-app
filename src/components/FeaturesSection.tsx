import React from 'react';
import { 
  Monitor, 
  Users, 
  Smartphone, 
  BarChart3,
  Bell,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const FeaturesSection = () => {
  const establishmentFeatures = [
    {
      icon: Monitor,
      title: "Dashboard Gerencial",
      description: "Vendas tempo real, produtos top, clientes ativos"
    },
    {
      icon: Users,
      title: "CRM Avançado",
      description: "Histórico completo, segmentações, campanhas"
    },
    {
      icon: BarChart3,
      title: "Controle de Estoque",
      description: "Básico com alertas de produtos parados"
    },
    {
      icon: Shield,
      title: "Relatórios Fiscais",
      description: "Integração NFCe, exportação contábil"
    }
  ];

  const clientFeatures = [
    {
      icon: Smartphone,
      title: "App Nativo",
      description: "iOS/Android com todas funcionalidades"
    },
    {
      icon: Zap,
      title: "Carteira Digital",
      description: "Saldo, histórico, benefícios"
    },
    {
      icon: Globe,
      title: "Gamificação",
      description: "Pontos, níveis, missions, streaks"
    },
    {
      icon: Bell,
      title: "Notificações",
      description: "Promoções, eventos, lembretes"
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Funcionalidades Completas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ferramentas poderosas para estabelecimentos e experiência excepcional para clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full">
                <Monitor className="w-5 h-5" />
                <span className="font-semibold text-lg">Para Estabelecimentos</span>
              </div>
            </div>

            <div className="space-y-6">
              {establishmentFeatures.map((feature, idx) => (
                <div key={idx} className="glass-card glass-card-hover p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Exemplo de Campanha Automática:</h4>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border-l-4 border-gray-900 dark:border-white">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Trigger:</strong> "Cerveja parada há 30min"<br />
                  <strong>Ação:</strong> Flash 15min: 2 Heineken R$ 25<br />
                  <strong>Público:</strong> Clientes cervejeiros ativos
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full">
                <Users className="w-5 h-5" />
                <span className="font-semibold text-lg">Para Clientes</span>
              </div>
            </div>

            <div className="space-y-6">
              {clientFeatures.map((feature, idx) => (
                <div key={idx} className="glass-card glass-card-hover p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Jornada do Cliente VIP:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Entrada automática - sistema reconhece</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Promoções personalizadas via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Benefícios por fidelidade automáticos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Status nacional em toda rede</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;