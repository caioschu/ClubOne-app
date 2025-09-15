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
      color: "blue",
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
      color: "purple",
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
      color: "orange",
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
    <section id="precos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Planos Sob <span className="text-purple-600">Medida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o porte do seu estabelecimento. 
            Todos incluem implementação completa e suporte especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center space-y-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 rounded-xl flex items-center justify-center mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                  </div>
                  <div className={`text-${plan.color}-600 font-semibold`}>
                    + {plan.transaction}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 text-${plan.color}-500 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full px-6 py-4 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' : `border-2 border-${plan.color}-500 text-${plan.color}-600 hover:bg-${plan.color}-50`} rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}>
                {plan.popular ? 'Começar Agora' : 'Solicitar Demo'}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Setup Profissional Incluído
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Implementação completa com treinamento da equipe, integração com sistemas existentes 
            e suporte especializado durante os primeiros 30 dias.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">R$ 2K-10K</div>
              <div className="text-purple-200">Setup Único</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15 Dias</div>
              <div className="text-purple-200">Implementação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">30 Dias</div>
              <div className="text-purple-200">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;