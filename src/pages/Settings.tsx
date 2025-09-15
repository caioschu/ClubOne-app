import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Save, Users, Building2, Upload, Camera, Edit3 } from 'lucide-react';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, setUser, establishment, setEstablishment } = useStore();
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    avatar: ''
  });
  const [companyForm, setCompanyForm] = useState({
    name: establishment?.name || '',
    cnpj: establishment?.cnpj || '',
    address: establishment?.address || '',
    capacity: establishment?.capacity || 0,
    operatingHours: establishment?.operatingHours || '',
    logo: ''
  });

  const tabs = [
    { id: 'profile', name: 'Perfil', icon: User },
    { id: 'company', name: 'Empresa', icon: Building2 },
    { id: 'notifications', name: 'Notificações', icon: Bell },
    { id: 'security', name: 'Segurança', icon: Shield },
    { id: 'users', name: 'Usuários', icon: Users }
  ];

  const handleSaveProfile = () => {
    setUser({
      ...user!,
      name: profileForm.name,
      email: profileForm.email,
      avatar: profileForm.avatar
    });
    toast.success('Perfil atualizado com sucesso!');
  };

  const handleSaveCompany = () => {
    setEstablishment({
      ...establishment!,
      name: companyForm.name,
      cnpj: companyForm.cnpj,
      address: companyForm.address,
      capacity: companyForm.capacity,
      operatingHours: companyForm.operatingHours,
      logo: companyForm.logo
    });
    toast.success('Dados da empresa atualizados!');
  };

  const handleImageUpload = (type: 'avatar' | 'logo') => {
    // Simular upload de imagem
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (type === 'avatar') {
            setProfileForm({ ...profileForm, avatar: result });
          } else {
            setCompanyForm({ ...companyForm, logo: result });
          }
          toast.success(`${type === 'avatar' ? 'Foto' : 'Logo'} carregada!`);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };
  // Simular mudança de usuário para demonstração
  const switchUser = (role: string, name: string) => {
    setUser({
      id: Math.random().toString(),
      name,
      email: `${name.toLowerCase().replace(' ', '.')}@mansionclub.com`,
      role: role as any
    });
    toast.success(`Logado como ${name} (${role})`);
  };
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
        <p className="text-gray-600">Gerencie suas preferências e configurações do sistema</p>
      </div>

      {/* Demo: Trocar Usuário */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 mb-8">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">🎯 Demo: Testar Níveis de Acesso</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => switchUser('admin', 'Roberto Silva')}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 transition-colors text-sm"
          >
            👑 Admin (Acesso Total)
          </button>
          <button
            onClick={() => switchUser('manager', 'Ana Santos')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-sm"
          >
            👨‍💼 Gerente (Sem Analytics)
          </button>
          <button
            onClick={() => switchUser('operator', 'Carlos Oliveira')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-colors text-sm"
          >
            🛒 Operador (Só PDV)
          </button>
        </div>
        <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
          Clique para simular diferentes usuários e ver como o menu muda!
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Perfil Pessoal</h3>
                  <button
                    onClick={handleSaveProfile}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar</span>
                  </button>
                </div>

                {/* Avatar Section */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center overflow-hidden">
                        {profileForm.avatar ? (
                          <img src={profileForm.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <button
                        onClick={() => handleImageUpload('avatar')}
                        className="absolute -bottom-1 -right-1 w-7 h-7 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Camera className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{profileForm.name || 'Seu Nome'}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{profileForm.email}</p>
                      <button
                        onClick={() => handleImageUpload('avatar')}
                        className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-medium mt-1"
                      >
                        Alterar foto
                      </button>
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={profileForm.phone}
                      onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cargo</label>
                    <input
                      type="text"
                      value={user?.role === 'admin' ? 'Administrador' : user?.role === 'manager' ? 'Gerente' : 'Operador'}
                      disabled
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'company' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dados da Empresa</h3>
                  <button
                    onClick={handleSaveCompany}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar</span>
                  </button>
                </div>

                {/* Logo Section */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center overflow-hidden">
                        {companyForm.logo ? (
                          <img src={companyForm.logo} alt="Logo" className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-white text-xs font-bold">LOGO</div>
                        )}
                      </div>
                      <button
                        onClick={() => handleImageUpload('logo')}
                        className="absolute -bottom-1 -right-1 w-7 h-7 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Upload className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{companyForm.name || 'Club One'}</h4>
                      <p className="text-gray-600 dark:text-gray-300">Logo da empresa</p>
                      <button
                        onClick={() => handleImageUpload('logo')}
                        className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-medium mt-1"
                      >
                        Alterar logo
                      </button>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome da Empresa</label>
                    <input
                      type="text"
                      value={companyForm.name}
                      onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CNPJ</label>
                    <input
                      type="text"
                      value={companyForm.cnpj}
                      onChange={(e) => setCompanyForm({ ...companyForm, cnpj: e.target.value })}
                      placeholder="00.000.000/0001-00"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Capacidade</label>
                    <input
                      type="number"
                      value={companyForm.capacity}
                      onChange={(e) => setCompanyForm({ ...companyForm, capacity: parseInt(e.target.value) || 0 })}
                      placeholder="1500"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Endereço</label>
                    <input
                      type="text"
                      value={companyForm.address}
                      onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Horário de Funcionamento</label>
                    <input
                      type="text"
                      value={companyForm.operatingHours}
                      onChange={(e) => setCompanyForm({ ...companyForm, operatingHours: e.target.value })}
                      placeholder="22h às 6h"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Preferências de Notificação</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Notificações por Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Receber alertas importantes por email</p>
                    </div>
                    <input type="checkbox" defaultChecked className="text-purple-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Alertas de Estoque</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Avisar quando produtos estão acabando</p>
                    </div>
                    <input type="checkbox" defaultChecked className="text-purple-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Relatórios Diários</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Resumo das vendas do dia por email</p>
                    </div>
                    <input type="checkbox" className="text-purple-600" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alterar Senha</h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Senha Atual</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nova Senha</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirmar Nova Senha</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gerenciar Usuários</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Novo Usuário</span>
                  </button>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Funcionalidade em desenvolvimento...
                </div>
              </div>
            )}

            {/* Save Button - Only for security tab */}
            {activeTab === 'security' && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <div className="flex justify-end space-x-3">
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Cancelar
                  </button>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Alterar Senha</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;