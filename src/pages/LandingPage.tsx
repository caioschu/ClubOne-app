import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from '../components/ui/Logo';
import Hero from '../components/Hero';
import ProblemsSection from '../components/ProblemsSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import SystemMockups from '../components/SystemMockups';
import TicketSalesSection from '../components/TicketSalesSection';
import ResultsSection from '../components/ResultsSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Preços', href: '#precos' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 glass-card shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo size="sm" showLine={true} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 dark:hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
                title={isDark ? 'Modo Claro' : 'Modo Escuro'}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 dark:hover:bg-white/10"
              >
                Entrar
              </Link>
              <Link
                to="/login"
                className="glass-button-primary flex items-center space-x-2 hover:scale-105"
              >
                <span>Demo Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-white/10 rounded-b-2xl">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-3 px-4 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
                <Link
                  to="/login"
                  className="block text-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-3 px-4 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  to="/login"
                  className="block glass-button-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demo Grátis
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <div id="inicio" className="pt-20">
        <Hero />
      </div>
      
      <ProblemsSection />
      
      <div id="solucao">
        <SolutionSection />
      </div>
      
      <div id="funcionalidades">
        <FeaturesSection />
      </div>
      
      <SystemMockups />
      
      <TicketSalesSection />
      
      <div id="resultados">
        <ResultsSection />
      </div>
      
      <div id="precos">
        <PricingSection />
      </div>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default LandingPage;