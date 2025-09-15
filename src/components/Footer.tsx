import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="sm" showLine={false} />
            <p className="text-gray-400 text-sm">
              Sistema SaaS completo para entretenimento noturno. 
              Revolucionando casas noturnas em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Cashless</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM Inteligente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programa de Fidelidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Venda de Ingressos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Club One. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;