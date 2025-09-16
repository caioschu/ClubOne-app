import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import Logo from '../components/ui/Logo';
import toast from 'react-hot-toast';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Building2, 
  User,
  ArrowRight,
  Shield,
  Zap,
  Star
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const demoUsers = [
    { 
      email: 'admin@mansionclub.com', 
      password: 'admin123',
      user: { id: '1', name: 'Roberto Silva', email: 'admin@mansionclub.com', role: 'admin' as const }
    },
    { 
      email: 'gerente@mansionclub.com', 
      password: 'gerente123',
      user: { id: '2', name: 'Ana Santos', email: 'gerente@mansionclub.com', role: 'manager' as const }
    },
    { 
      email: 'operador@mansionclub.com', 
      password: 'operador123',
      user: { id: '3', name: 'Carlos Oliveira', email: 'operador@mansionclub.com', role: 'operator' as const }
    }
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Preencha todos os campos!');
      return;
    }

    setIsLoading(true);

    // Simular autenticação
    setTimeout(() => {
      const foundUser = demoUsers.find(u => 
        u.email === formData.email && u.password === formData.password
      );

      if (foundUser) {
        setUser(foundUser.user);
        toast.success(`Bem-vindo, ${foundUser.user.name}!`);
        navigate(foundUser.user.role === 'operator' ? '/pos' : '/dashboard');
      } else {
        toast.error('Email ou senha incorretos!');
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const quickLogin = (userType: string) => {
    const user = demoUsers.find(u => u.user.role === userType);
    if (user) {
      setFormData({ email: user.email, password: user.password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <LiquidGlassBackground />

      <div className="relative z-10 w-full max-w-md animate-scaleIn">
        {/* Logo */}
        <div className="text-center mb-8 glow-effect">
          <Logo size="lg" showLine={true} className="shimmer-effect" />
          <p className="text-white/80 mt-6 text-lg font-medium">Sistema SaaS para Entretenimento Noturno</p>
        </div>

        {/* Login Form */}
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Fazer Login</h1>
            <p className="text-white/70">Acesse sua conta do Club One</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Email</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass-input w-full pl-12"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">Senha</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="glass-input w-full pl-12 pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full glass-button-primary py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="relative z-10">Entrando...</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Entrar</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <button className="text-purple-300 hover:text-purple-200 font-medium text-sm transition-colors">
              Esqueceu sua senha?
            </button>
          </div>

          {/* Demo Accounts */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-sm text-white/70 mb-4">🎯 Contas de Demonstração:</p>
            <div className="space-y-2">
              <button
                onClick={() => quickLogin('admin')}
                className="w-full flex items-center justify-between p-3 glass-card hover:scale-[1.02] transition-all duration-300 border border-red-400/30"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-red-400" />
                  <div className="text-left">
                    <div className="font-medium text-white">Admin - Roberto Silva</div>
                    <div className="text-xs text-white/60">Acesso total ao sistema</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>

              <button
                onClick={() => quickLogin('manager')}
                className="w-full flex items-center justify-between p-3 glass-card hover:scale-[1.02] transition-all duration-300 border border-purple-400/30"
              >
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-purple-400" />
                  <div className="text-left">
                    <div className="font-medium text-white">Gerente - Ana Santos</div>
                    <div className="text-xs text-white/60">Dashboard, CRM, vendas, eventos</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </button>

              <button
                onClick={() => quickLogin('operator')}
                className="w-full flex items-center justify-between p-3 glass-card hover:scale-[1.02] transition-all duration-300 border border-green-400/30"
              >
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-green-400" />
                  <div className="text-left">
                    <div className="font-medium text-white">Operador - Carlos Oliveira</div>
                    <div className="text-xs text-white/60">Apenas PDV e validação</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-green-400" />
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Não tem uma conta?{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-purple-300 hover:text-purple-200 font-medium transition-colors"
              >
                Cadastre seu estabelecimento
              </button>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-6 text-white/50 text-sm glass-card px-6 py-3 mx-auto w-fit">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Seguro</span>
            </div>
            <div className="flex items-center space-x-1">
              <Building2 className="w-4 h-4" />
              <span>200+ Estabelecimentos</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>1M+ Usuários</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adicionar import
import LiquidGlassBackground from '../components/ui/LiquidGlassBackground';

export default Login;