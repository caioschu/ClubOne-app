import { Event } from '../components/tickets/EventCard';

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Gusttavo Lima - Turnê Buteco 2025',
    artist: 'Gusttavo Lima',
    date: '2025-02-15',
    time: '22:00',
    venue: 'Mansion Club',
    address: 'Rua Augusta, 1234 - São Paulo',
    genre: 'sertanejo',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    city: 'São Paulo',
    tickets: {
      pista: { price: 80, available: 653, total: 1000 },
      vip: { price: 180, available: 344, total: 400 },
      camarote: { price: 350, available: 68, total: 100 }
    },
    benefits: {
      pista: ['Acesso à pista', 'Ambiente climatizado'],
      vip: ['Acesso VIP', 'Open bar premium', 'Entrada prioritária'],
      camarote: ['Mesa reservada', 'Open bar premium', 'Garçom exclusivo', 'Vista privilegiada']
    }
  },
  {
    id: '2',
    name: 'Alok - Electronic Night',
    artist: 'Alok',
    date: '2025-03-08',
    time: '23:00',
    venue: 'Mansion Club',
    address: 'Rua Augusta, 1234 - São Paulo',
    genre: 'eletronica',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    city: 'São Paulo',
    tickets: {
      pista: { price: 120, available: 266, total: 1000 },
      vip: { price: 250, available: 156, total: 400 },
      camarote: { price: 450, available: 32, total: 100 }
    },
    benefits: {
      pista: ['Acesso à pista', 'Som profissional'],
      vip: ['Acesso VIP', 'Open bar premium', 'Área exclusiva'],
      camarote: ['Mesa reservada', 'Open bar premium', 'Vista do palco', 'Serviço exclusivo']
    }
  },
  {
    id: '3',
    name: 'Henrique & Juliano - Ao Vivo',
    artist: 'Henrique & Juliano',
    date: '2025-02-22',
    time: '22:30',
    venue: 'Villa Mix',
    address: 'Av. Paulista, 567 - Rio de Janeiro',
    genre: 'sertanejo',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    city: 'Rio de Janeiro',
    tickets: {
      pista: { price: 75, available: 800, total: 1200 },
      vip: { price: 160, available: 200, total: 300 },
      camarote: { price: 320, available: 45, total: 80 }
    },
    benefits: {
      pista: ['Acesso à pista', 'Ambiente climatizado', 'Bar liberado'],
      vip: ['Acesso VIP', 'Open bar premium', 'Entrada prioritária', 'Área exclusiva'],
      camarote: ['Mesa reservada', 'Open bar premium', 'Garçom exclusivo', 'Vista privilegiada', 'Estacionamento VIP']
    }
  },
  {
    id: '4',
    name: 'MC Kevinho - Funk Experience',
    artist: 'MC Kevinho',
    date: '2025-02-28',
    time: '23:30',
    venue: 'Urban Club',
    address: 'Centro, 890 - Rio de Janeiro',
    genre: 'funk',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    city: 'Rio de Janeiro',
    tickets: {
      pista: { price: 60, available: 900, total: 1500 },
      vip: { price: 140, available: 250, total: 400 },
      camarote: { price: 280, available: 60, total: 100 }
    },
    benefits: {
      pista: ['Acesso à pista', 'Som de alta qualidade'],
      vip: ['Acesso VIP', 'Open bar', 'Área exclusiva', 'Entrada prioritária'],
      camarote: ['Mesa reservada', 'Open bar premium', 'Serviço exclusivo', 'Vista do palco']
    }
  },
  {
    id: '5',
    name: 'Vintage Culture - House Session',
    artist: 'Vintage Culture',
    date: '2025-03-15',
    time: '23:00',
    venue: 'Espaço das Américas',
    address: 'Barra Funda - São Paulo',
    genre: 'eletronica',
    image: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg',
    city: 'São Paulo',
    tickets: {
      pista: { price: 100, available: 700, total: 1200 },
      vip: { price: 220, available: 180, total: 350 },
      camarote: { price: 400, available: 25, total: 50 }
    },
    benefits: {
      pista: ['Acesso à pista', 'Sistema de som premium'],
      vip: ['Acesso VIP', 'Open bar premium', 'Área climatizada', 'Entrada prioritária'],
      camarote: ['Mesa reservada', 'Open bar premium', 'Vista privilegiada', 'Serviço personalizado']
    }
  },
  {
    id: '6',
    name: 'Jorge & Mateus - Turnê Nacional',
    artist: 'Jorge & Mateus',
    date: '2025-03-22',
    time: '22:00',
    venue: 'Arena BH',
    address: 'Savassi - Belo Horizonte',
    genre: 'sertanejo',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    city: 'Belo Horizonte',
    tickets: {
      pista: { price: 85, available: 600, total: 1000 },
      vip: { price: 190, available: 150, total: 300 },
      camarote: { price: 380, available: 40, total: 80 }
    },
    benefits: {
      pista: ['Acesso à pista', 'Ambiente climatizado'],
      vip: ['Acesso VIP', 'Open bar premium', 'Entrada prioritária', 'Área exclusiva'],
      camarote: ['Mesa reservada', 'Open bar premium', 'Garçom exclusivo', 'Vista privilegiada']
    }
  }
];