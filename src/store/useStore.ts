import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { User, Establishment, Customer, Product, Campaign, Event, DashboardStats, Alert, Sale } from '../types';

interface AppState {
  // User & Auth
  user: User | null;
  establishment: Establishment | null;
  isAuthenticated: boolean;
  
  // UI State
  sidebarOpen: boolean;
  loading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setAuthenticated: (authenticated: boolean) => void;
  logout: () => void;
  
  // Dashboard
  stats: DashboardStats | null;
  alerts: Alert[];
  topProducts: Product[];
  activeCampaign: Campaign | null;
  
  // Sales & Inventory
  products: Product[];
  sales: Sale[];
  
  // Customers
  customers: Customer[];
  customerFilters: {
    search: string;
    level: string;
  };
  
  // Campaigns
  campaigns: Campaign[];
  campaignForm: {
    trigger: string;
    message: string;
    audience: number;
  };
  
  // Events
  events: Event[];
  eventForm: {
    name: string;
    date: string;
    time: string;
    genre: string;
    artist: string;
  };
  
  // UI State
  sidebarOpen: boolean;
  loading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setEstablishment: (establishment: Establishment) => void;
  setSidebarOpen: (open: boolean) => void;
  setLoading: (loading: boolean) => void;
  
  // Dashboard Actions
  setStats: (stats: DashboardStats) => void;
  setAlerts: (alerts: Alert[]) => void;
  setTopProducts: (products: Product[]) => void;
  setActiveCampaign: (campaign: Campaign | null) => void;
  
  // Sales & Inventory Actions
  setProducts: (products: Product[]) => void;
  setSales: (sales: Sale[]) => void;
  addSale: (sale: Sale) => void;
  updateProductStock: (productId: string, quantity: number) => void;
  
  // Customer Actions
  setCustomers: (customers: Customer[]) => void;
  setCustomerFilters: (filters: Partial<typeof customerFilters>) => void;
  addCustomerEntry: (customerId: string, eventId: string) => void;
  
  // Campaign Actions
  setCampaigns: (campaigns: Campaign[]) => void;
  setCampaignForm: (form: Partial<typeof campaignForm>) => void;
  addCampaign: (campaign: Campaign) => void;
  
  // Event Actions
  setEvents: (events: Event[]) => void;
  setEventForm: (form: Partial<typeof eventForm>) => void;
  addEvent: (event: Event) => void;
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial State
        user: {
          id: '1',
          name: 'Roberto Silva',
          email: 'roberto@mansionclub.com',
          role: 'admin'
        },
        establishment: {
          id: '1',
          name: 'Mansion Club',
          cnpj: '12.345.678/0001-90',
          address: 'Rua Augusta, 1234 - Consolação, São Paulo - SP',
          capacity: 1500,
          operatingHours: '22h às 6h'
        },
        isAuthenticated: true,
        
        stats: {
          revenue: { today: 52847, change: '+28%', changeType: 'positive' },
          customers: { active: 1247, change: '847', changeType: 'positive' },
          avgTicket: { value: 42, change: '+15%', changeType: 'positive' },
          campaignSuccess: { rate: 89, change: '+12%', changeType: 'positive' }
        },
        
        alerts: [
          {
            id: '1',
            type: 'warning',
            title: 'Produto Parado',
            message: 'Caipiroska não vende há 45min - hora de fazer promoção!',
            action: 'Criar Promoção Flash',
            priority: 'medium',
            createdAt: new Date().toISOString()
          },
          {
            id: '2',
            type: 'info',
            title: 'Oportunidade VIP',
            message: '47 clientes VIP na casa - momento ideal para oferta especial!',
            action: 'Enviar Oferta Premium',
            priority: 'high',
            createdAt: new Date().toISOString()
          }
        ],
        
        topProducts: [
          { id: '1', name: 'Heineken Long Neck', category: 'beer', price: 15, stock: 200, sales: 8420, quantity: 168, minStock: 50, status: 'ok' },
          { id: '2', name: 'Caipirinha Premium', category: 'cocktail', price: 18, stock: 50, sales: 6240, quantity: 124, minStock: 30, status: 'ok' },
          { id: '3', name: 'Whisky Red Label', category: 'whisky', price: 200, stock: 30, sales: 4800, quantity: 24, minStock: 10, status: 'ok' },
          { id: '4', name: 'Vodka Absolut', category: 'vodka', price: 180, stock: 25, sales: 3150, quantity: 31, minStock: 20, status: 'ok' }
        ],
        
        products: [
          { id: '1', name: 'Heineken Long Neck', category: 'beer', price: 15, stock: 200, sales: 168, quantity: 0, minStock: 50, status: 'ok' },
          { id: '2', name: 'Caipirinha Premium', category: 'cocktail', price: 18, stock: 50, sales: 124, quantity: 0, minStock: 30, status: 'ok' },
          { id: '3', name: 'Whisky Red Label', category: 'whisky', price: 200, stock: 30, sales: 24, quantity: 0, minStock: 10, status: 'ok' },
          { id: '4', name: 'Vodka Absolut', category: 'vodka', price: 180, stock: 25, sales: 31, quantity: 0, minStock: 20, status: 'ok' },
          { id: '5', name: 'Água Mineral', category: 'bebida', price: 5, stock: 200, sales: 67, quantity: 0, minStock: 100, status: 'ok' },
          { id: '6', name: 'Refrigerante', category: 'bebida', price: 8, stock: 150, sales: 45, quantity: 0, minStock: 50, status: 'ok' },
          { id: '7', name: 'Energético', category: 'bebida', price: 12, stock: 80, sales: 23, quantity: 0, minStock: 30, status: 'ok' },
          { id: '8', name: 'Tequila José Cuervo', category: 'tequila', price: 220, stock: 15, sales: 8, quantity: 0, minStock: 5, status: 'ok' },
          { id: '9', name: 'Gin Tanqueray', category: 'gin', price: 250, stock: 12, sales: 6, quantity: 0, minStock: 5, status: 'ok' },
          { id: '10', name: 'Cerveja Stella Artois', category: 'beer', price: 18, stock: 120, sales: 34, quantity: 0, minStock: 40, status: 'ok' }
        ],
        
        sales: [],
        
        activeCampaign: {
          id: '1',
          title: 'Flash 15min: 2 Heineken R$ 25',
          message: '2 Heineken por R$ 25',
          trigger: 'produto-parado',
          audience: 234,
          sent: 234,
          opened: 208,
          converted: 156,
          revenue: 3900,
          status: 'active',
          createdAt: new Date().toISOString(),
          endsAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        },
        
        customers: [],
        customerFilters: { search: '', level: 'all' },
        campaigns: [],
        campaignForm: { trigger: 'produto-parado', message: '', audience: 0 },
        events: [],
        eventForm: { name: '', date: '', time: '', genre: 'sertanejo', artist: '' },
        
        sidebarOpen: false,
        loading: false,
        
        // Actions
        setUser: (user) => set({ user, isAuthenticated: !!user }),
        setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
        logout: () => set({ user: null, isAuthenticated: false }),
        setEstablishment: (establishment) => set({ establishment }),
        setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
        setLoading: (loading) => set({ loading }),
        
        setStats: (stats) => set({ stats }),
        setAlerts: (alerts) => set({ alerts }),
        setTopProducts: (topProducts) => set({ topProducts }),
        setActiveCampaign: (activeCampaign) => set({ activeCampaign }),
        
        setProducts: (products) => set({ products }),
        setSales: (sales) => set({ sales }),
        addSale: (sale) => set((state) => {
          const newSales = [sale, ...state.sales];
          
          // Atualizar estoque dos produtos
          const updatedProducts = state.products.map(product => {
            if (product.id === sale.productId) {
              const newStock = product.stock - sale.quantity;
              const newSales = product.sales + sale.quantity;
              const status = newStock <= product.minStock! ? 
                (newStock <= product.minStock! * 0.5 ? 'critico' : 'baixo') : 'ok';
              
              return {
                ...product,
                stock: newStock,
                sales: newSales,
                status
              };
            }
            return product;
          });
          
          // Atualizar topProducts também
          const updatedTopProducts = state.topProducts.map(product => {
            if (product.id === sale.productId) {
              const newStock = product.stock - sale.quantity;
              const newSales = product.sales + (sale.price * sale.quantity);
              const newQuantity = product.quantity + sale.quantity;
              
              return {
                ...product,
                stock: newStock,
                sales: newSales,
                quantity: newQuantity
              };
            }
            return product;
          });
          
          // Atualizar stats do dashboard
          const updatedStats = state.stats ? {
            ...state.stats,
            revenue: {
              ...state.stats.revenue,
              today: state.stats.revenue.today + (sale.price * sale.quantity)
            }
          } : state.stats;
          
          return { 
            sales: newSales, 
            products: updatedProducts, 
            topProducts: updatedTopProducts,
            stats: updatedStats
          };
        }),
        updateProductStock: (productId, quantity) => set((state) => ({
          products: state.products.map(product =>
            product.id === productId
              ? { ...product, stock: product.stock - quantity }
              : product
          )
        })),
        
        setCustomers: (customers) => set({ customers }),
        setCustomerFilters: (filters) => set((state) => ({ 
          customerFilters: { ...state.customerFilters, ...filters } 
        })),
        addCustomerEntry: (customerId, eventId) => {
          // Simular registro de entrada
          console.log(`Cliente ${customerId} entrou no evento ${eventId}`);
        },
        
        setCampaigns: (campaigns) => set({ campaigns }),
        setCampaignForm: (form) => set((state) => ({ 
          campaignForm: { ...state.campaignForm, ...form } 
        })),
        addCampaign: (campaign) => set((state) => ({ 
          campaigns: [campaign, ...state.campaigns] 
        })),
        
        setEvents: (events) => set({ events }),
        setEventForm: (form) => set((state) => ({ 
          eventForm: { ...state.eventForm, ...form } 
        })),
        addEvent: (event) => set((state) => ({ 
          events: [event, ...state.events] 
        }))
      }),
      {
        name: 'club-one-storage',
        partialize: (state) => ({ 
          user: state.user, 
          establishment: state.establishment,
          isAuthenticated: state.isAuthenticated 
        })
      }
    )
  )
);