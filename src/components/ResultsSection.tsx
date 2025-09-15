import React from 'react';
import { TrendingUp, Users, Clock, Heart, DollarSign, Zap } from 'lucide-react';

const ResultsSection = () => {
  const establishmentResults = [
    {
      icon: TrendingUp,
      metric: "+25-40%",
      title: "Conversão em Campanhas",
      description: "vs marketing tradicional",
      color: "green"
    },
    {
      icon: DollarSign,
      metric: "+15-30%",
      title: "Ticket Médio",
      description: "por melhor segmentação",
      color: "blue"
    },
    {
      icon: Users,
      metric: "+20-35%",
      title: "Frequência de Clientes",
      description: "por gamificação",
      color: "purple"
    },
    {
      icon: Clock,
      metric: "-50%",
      title: "Tempo Operacional",
      description: "eliminando filas e cartões",
      color: "orange"
    },
    {
      icon: Heart,
      metric: "+90%",
      title: "Satisfação do Cliente",
      description: "por experiência fluida",
      color: "red"
    },
    {
      icon: Zap,
      metric: "24/7",
      title: "Operação Automatizada",
      description: "campanhas inteligentes",
      color: "indigo"
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            Resultados <span className="text-yellow-400">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Métricas reais de estabelecimentos que já utilizam nossa plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {establishmentResults.map((result, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${result.color}-500 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <result.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{result.metric}</div>
                  <div className="font-semibold text-gray-200 mb-1">{result.title}</div>
                  <div className="text-sm text-gray-400">{result.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Case de Sucesso Real
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Casa noturna em São Paulo, 800 pessoas/noite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Implementação completa em 15 dias</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">ROI positivo no primeiro mês</span>
                </div>
              </div>
              <blockquote className="italic text-gray-300 border-l-4 border-purple-400 pl-6">
                "O Club One transformou nosso negócio. Aumentamos 40% as vendas com as campanhas automáticas 
                e nossos clientes adoram a praticidade do sistema cashless."
              </blockquote>
              <div className="text-sm text-gray-400">
                — Roberto Silva, Proprietário da Mansion Club
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 space-y-4">
              <h4 className="font-bold text-xl text-white mb-6">Métricas Mensais</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Receita Digital</span>
                  <span className="font-bold text-green-400">R$ 180K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Campanhas Enviadas</span>
                  <span className="font-bold text-blue-400">247</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-3/4"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Clientes Ativos</span>
                  <span className="font-bold text-purple-400">3.2K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full w-5/6"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Satisfação NPS</span>
                  <span className="font-bold text-yellow-400">89</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;