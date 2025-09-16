import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Pequeno",
      description: "Até 500 pessoas/noite",
      price: "R$ 500",
      period: "/mês",
      transaction: "1% por transação",
      icon: Zap,
      features: [
        "Sistema cashless completo",
        "CRM básico com segmentações",
        "Campanhas manuais ilimitadas",
        "App para clientes",
        "Relatórios fiscais",
        "Suporte por WhatsApp",
        "Setup incluído"
      ],
      popular: false
    },
    {
      name: "Médio",
      description: "500-1500 pessoas/noite",
      price: "R$ 1.200",
      period: "/mês",
      transaction: "1.5% por transação",
      icon: Star,
      features: [
        "Tudo do plano Pequeno",
        "CRM avançado com IA",
        "Campanhas automáticas",
        "Programa de fidelidade",
        "Integrações personalizadas",
        "Suporte telefônico",
        "Gerente de sucesso",
        "Treinamento presencial"
      ],
      popular: true
    },
    {
      name: "Grande",
      description: "1500+ pessoas/noite",
      price: "R$ 2.500",
      period: "/mês",
      transaction: "2% por transação",
      icon: Crown,
      features: [
        "Tudo do plano Médio",
        "Personalização completa",
        "IA avançada e preditiva",
        "Múltiplas unidades",
        "API dedicada",
        "Suporte 24/7 dedicado",
        "Consultoria estratégica",
        "Implementação enterprise"
      ],
      popular: false
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Planos Sob Medida
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para o porte do seu estabelecimento. 
            Todos incluem implementação completa e suporte especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative glass-card glass-card-hover p-8 ${plan.popular ? 'border-2 border-gray-900 dark:border-white transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center space-y-4 mb-8">
                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mx-auto">
                  <plan.icon className="w-8 h-8 text-white dark:text-gray-900" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-300">{plan.period}</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-semibold">
                    + {plan.transaction}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100' 
                  : 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}>
                {plan.popular ? 'Começar Agora' : 'Solicitar Demo'}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-white text-center border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">
            Setup Profissional Incluído
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Implementação completa com treinamento da equipe, integração com sistemas existentes 
            e suporte especializado durante os primeiros 30 dias.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">R$ 2K-10K</div>
              <div className="text-gray-400">Setup Único</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15 Dias</div>
              <div className="text-gray-400">Implementação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">30 Dias</div>
              <div className="text-gray-400">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;