import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import toast from 'react-hot-toast';
import { 
  Building2, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin,
  ArrowRight,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    // Dados pessoais
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    password: '',
    confirmPassword: '',
    
    // Dados da empresa
    companyName: '',
    cnpj: '',
    address: '',
    capacity: '',
    operatingHours: '',
    
    // Configurações
    acceptTerms: false,
    acceptMarketing: false
  });

  const steps = [
    { number: 1, title: 'Dados Pessoais', description: 'Informações do responsável' },
    { number: 2, title: 'Dados da Empresa', description: 'Informações do estabelecimento' },
    { number: 3, title: 'Finalização', description: 'Confirmar e criar conta' }
  ];

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.ownerName || !formData.ownerEmail || !formData.password) {
        toast.error('Preencha todos os campos obrigatórios!');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error('Senhas não conferem!');
        return;
      }
      if (formData.password.length < 6) {
        toast.error('Senha deve ter pelo menos 6 caracteres!');
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.companyName || !formData.cnpj || !formData.capacity) {
        toast.error('Preencha todos os campos obrigatórios!');
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = async () => {
    if (!formData.acceptTerms) {
      toast.error('Aceite os termos de uso para continuar!');
      return;
    }

    setIsLoading(true);
    
    // Simular criação de conta
    setTimeout(() => {
      setIsLoading(false);
      toast.success('🎉 Conta criada com sucesso!');
      toast.success('📧 Verifique seu email para ativar a conta');
      navigate('/login');
    }, 2500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={formData.ownerEmail}
                  onChange={(e) => setFormData({ ...formData, ownerEmail: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
              <div className="relative">
                <Phone className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={formData.ownerPhone}
                  onChange={(e) => setFormData({ ...formData, ownerPhone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha *</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Mínimo 6 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Senha *</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Digite a senha novamente"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Estabelecimento *</label>
              <div className="relative">
                <Building2 className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Ex: Mansion Club"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CNPJ *</label>
              <input
                type="text"
                value={formData.cnpj}
                onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="00.000.000/0001-00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Endereço Completo</label>
              <div className="relative">
                <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Rua, número, bairro, cidade"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacidade *</label>
                <input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="1500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                <input
                  type="text"
                  value={formData.operatingHours}
                  onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="22h às 6h"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            {/* Resumo */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Resumo da Conta</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Responsável:</span>
                  <span className="font-medium text-gray-900">{formData.ownerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">{formData.ownerEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estabelecimento:</span>
                  <span className="font-medium text-gray-900">{formData.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacidade:</span>
                  <span className="font-medium text-gray-900">{formData.capacity} pessoas</span>
                </div>
              </div>
            </div>

            {/* Termos */}
            <div className="space-y-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="mt-1 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">
                  Aceito os <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Termos de Uso</a> e 
                  a <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Política de Privacidade</a> *
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptMarketing}
                  onChange={(e) => setFormData({ ...formData, acceptMarketing: e.target.checked })}
                  className="mt-1 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">
                  Aceito receber comunicações sobre novidades e promoções
                </span>
              </label>
            </div>

            {/* Próximos Passos */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3">🚀 Próximos Passos</h4>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Verificação de email automática</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Agendamento de onboarding (30min)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Setup completo em 15 dias</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Treinamento da equipe incluído</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo size="lg" showLine={true} />
          <p className="text-white/80 mt-4 text-lg">Cadastre seu Estabelecimento</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step.number 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/20 text-white/60'
                }`}>
                  {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`font-medium ${currentStep >= step.number ? 'text-white' : 'text-white/60'}`}>
                    {step.title}
                  </div>
                  <div className="text-white/40 text-sm">{step.description}</div>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-purple-600' : 'bg-white/20'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-gray-600">{steps[currentStep - 1].description}</p>
          </div>

          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : navigate('/login')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              {currentStep > 1 ? 'Voltar' : 'Já tenho conta'}
            </button>

            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium flex items-center space-x-2"
              >
                <span>Próximo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading || !formData.acceptTerms}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Criando conta...</span>
                  </>
                ) : (
                  <>
                    <span>Criar Conta</span>
                    <Check className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm">
            Já tem uma conta?{' '}
            <Link 
              to="/login"
              className="text-purple-300 hover:text-purple-200 font-medium"
            >
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;