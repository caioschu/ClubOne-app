import React from 'react';
import { AlertTriangle, Clock, TrendingDown, Users, CreditCard, BarChart } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      category: "Para as Casas Noturnas",
      icon: BarChart,
      issues: [
        { icon: AlertTriangle, title: "Gestão ineficiente", desc: "Sistemas desconectados, dados dispersos" },
        { icon: TrendingDown, title: "Baixa conversão", desc: "Marketing genérico, sem segmentação" },
        { icon: Clock, title: "Experiência do cliente", desc: "Filas, cartões físicos, atritos operacionais" },
        { icon: BarChart, title: "Falta de dados", desc: "Não conhecem seus melhores clientes" }
      ]
    },
    {
      category: "Para os Clientes",
      icon: Users,
      issues: [
        { icon: Users, title: "Múltiplos cadastros", desc: "Precisa se cadastrar em cada casa" },
        { icon: CreditCard, title: "Cartões físicos", desc: "Perda de tempo, filas, esquecimento de trocos" },
        { icon: TrendingDown, title: "Falta de benefícios", desc: "Não é reconhecido como cliente fiel" },
        { icon: AlertTriangle, title: "Experiência fragmentada", desc: "Cada casa é um mundo diferente" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Os Desafios do Entretenimento Noturno
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            O setor enfrenta problemas estruturais que afetam tanto estabelecimentos quanto clientes, 
            limitando o crescimento e a satisfação de todos os envolvidos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {problems.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full">
                  <category.icon className="w-5 h-5" />
                  <span className="font-semibold text-lg">{category.category}</span>
                </div>
              </div>

              <div className="space-y-6">
                {category.issues.map((issue, issueIdx) => (
                  <div key={issueIdx} className="glass-card glass-card-hover p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <issue.icon className="w-6 h-6 text-white dark:text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{issue.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{issue.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card glass-card-hover p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white dark:text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Resultado: Oportunidades Perdidas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Estabelecimentos perdem receita por falta de dados e ferramentas adequadas. 
              Clientes têm experiências fragmentadas que reduzem fidelidade e frequência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;