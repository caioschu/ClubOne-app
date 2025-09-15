import React from 'react';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Revolucione sua Casa Noturna
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e veja como o Club One pode 
              transformar seu negócio em 30 dias.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Agendar Demo Gratuita</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-gray-900 transition-all font-semibold text-lg flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Falar com Consultor</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
              <Phone className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-white font-semibold">Fale Conosco</div>
              <div className="text-gray-300 text-sm">(11) 9 9999-9999</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
              <Mail className="w-8 h-8 text-blue-400 mx-auto" />
              <div className="text-white font-semibold">Email</div>
              <div className="text-gray-300 text-sm">contato@clubone.com.br</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
              <MapPin className="w-8 h-8 text-green-400 mx-auto" />
              <div className="text-white font-semibold">São Paulo</div>
              <div className="text-gray-300 text-sm">Expandindo nacionalmente</div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              Join 200+ estabelecimentos que já revolucionaram suas operações com Club One
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;