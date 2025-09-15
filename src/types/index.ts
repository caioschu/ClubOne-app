// Tipos globais da aplicação
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'operator';
  avatar?: string;
}

export interface Establishment {
  id: string;
  name: string;
  cnpj: string;
  address: string;
  capacity: number;
  operatingHours: string;
  logo?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  level: 'Bronze' | 'Prata' | 'Ouro' | 'VIP' | 'Diamond';
  totalSpent: number;
  visits: number;
  lastVisit: string;
  avgTicket: number;
  points: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'beer' | 'cocktail' | 'whisky' | 'vodka' | 'other';
  price: number;
  stock: number;
  sales: number;
  quantity: number;
  minStock?: number;
  status?: 'ok' | 'baixo' | 'critico';
}

export interface Sale {
  id: string;
  time: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  customer: string;
  status: 'pago' | 'pendente' | 'cancelado';
  createdAt: string;
}

export interface Campaign {
  id: string;
  title: string;
  message: string;
  trigger: string;
  audience: number;
  sent: number;
  opened: number;
  converted: number;
  revenue: number;
  status: 'active' | 'completed' | 'draft';
  createdAt: string;
  endsAt?: string;
}

export interface Event {
  id: string;
  name: string;
  artist: string;
  date: string;
  time: string;
  genre: string;
  status: 'pre-sale' | 'selling' | 'planning' | 'sold-out';
  ticketsSold: number;
  totalTickets: number;
  revenue: number;
  conversionRate: number;
}

export interface DashboardStats {
  revenue: {
    today: number;
    change: string;
    changeType: 'positive' | 'negative';
  };
  customers: {
    active: number;
    change: string;
    changeType: 'positive' | 'negative';
  };
  avgTicket: {
    value: number;
    change: string;
    changeType: 'positive' | 'negative';
  };
  campaignSuccess: {
    rate: number;
    change: string;
    changeType: 'positive' | 'negative';
  };
}

export interface Alert {
  id: string;
  type: 'warning' | 'info' | 'success';
  title: string;
  message: string;
  action: string;
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
}