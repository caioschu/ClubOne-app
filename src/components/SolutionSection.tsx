import React from 'react';
import { 
  Smartphone, 
  CreditCard, 
  Users, 
  Target, 
  Award, 
  Ticket,
  Zap,
  CheckCircle
} from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Sistema Cashless Inteligente",
      color: "purple",
      features: [
        "Cadastro único válido em toda rede Club One",
        "Entrada via QR code no app ou CPF + PIN",
        "Pagamento por NFC, QR code ou CPF + senha",
        "Recarga via Pix, cartão, boleto ou parcelamento"
      ]
    },
    {
      icon: Target,
      title: "CRM ao Vivo",
      color: "blue",
      features: [
        "Segmentação por consumo atual e histórico",
        "Campanhas automáticas baseadas em IA",
        "Interface drag & drop super simples",
        "Múltiplos canais: WhatsApp, Push, SMS"
      ]
    },
    {
      icon: Award,
      title: "Programa de Fidelidade Nacional",
      color: "green",
      features: [
        "Score único válido em todos estabelecimentos",
        "Níveis: Bronze → Prata → Ouro → VIP → Diamond",
        "Clubs exclusivos com área física premium",
        "Benefícios cross-network entre toda rede"
      ]
    },
    {
      icon: Ticket,
      title: "Venda de Ingressos Inteligente",
      color: "orange",
      features: [
        "Segmentação musical automática",
        "Pré-vendas exclusivas por gênero",
        "Timing otimizado por perfil de cliente",
        "Campanhas FOMO para clientes fiéis"
      ]
    }
  ];

  return (
    <section id="solucao" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Solução Completa</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Nossa <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Solução</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plataforma integrada que resolve todos os problemas do entretenimento noturno 
            com tecnologia de ponta e experiência premium.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 text-${solution.color}-500 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold">
              Integração Total em Uma Única Plataforma
            </h3>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Todas as funcionalidades trabalham juntas para criar uma experiência 
              excepcional tanto para estabelecimentos quanto para clientes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl font-bold">4 Módulos</div>
                <div className="text-purple-200">Integrados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl font-bold">1 Plataforma</div>
                <div className="text-purple-200">Única</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl font-bold">∞ Possibilidades</div>
                <div className="text-purple-200">Para Crescer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;