import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useStore } from './store/useStore';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Toast from './components/ui/Toast';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import CRM from './pages/CRM';
import Sales from './pages/Sales';
import Events from './pages/Events';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import PublicTickets from './pages/PublicTickets';
import EntryValidation from './pages/EntryValidation';
import CustomerApp from './pages/CustomerApp';
import LiquidGlassBackground from './components/ui/LiquidGlassBackground';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

// Componente para proteger rotas por nível de acesso
const ProtectedRoute: React.FC<{ 
  children: React.ReactNode; 
  allowedRoles: string[];
  userRole?: string;
}> = ({ children, allowedRoles, userRole = 'operator' }) => {
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/pos" replace />;
  }
  return <>{children}</>;
};
function App() {
  const { isAuthenticated, user } = useStore();


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Páginas Públicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tickets" element={<PublicTickets />} />
          <Route path="/customer-app" element={<CustomerApp />} />
          
          {/* Páginas Autenticadas */}
          <Route path="/dashboard" element={
            isAuthenticated ? (
              <Navigate to="/app/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } />
          <Route path="/pos" element={
            isAuthenticated ? (
              <Navigate to="/app/pos" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } />
          <Route path="/app/*" element={
            isAuthenticated ? (
              <AuthenticatedApp />
            ) : (
              <Navigate to="/login" replace />
            )
          } />
        </Routes>
        <Toast />
      </Router>
    </QueryClientProvider>
  );
}

// Componente para app autenticado
const AuthenticatedApp: React.FC = () => {
  const { user } = useStore();
  const userRole = user?.role || 'operator';

  return (
    <div className="min-h-screen flex transition-all duration-500 relative">
      <LiquidGlassBackground />
      <Sidebar />
      <Header />
      
      <main className="flex-1 lg:ml-80 transition-all duration-300 relative z-10">
        <Routes>
          <Route path="/" element={<Navigate to={userRole === 'operator' ? '/app/pos' : '/app/dashboard'} replace />} />
          
          {/* PDV - Todos os níveis */}
          <Route path="/pos" element={<POS />} />
          
          {/* Rotas para Admin e Manager */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['admin', 'manager']} userRole={userRole}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/crm" element={
            <ProtectedRoute allowedRoles={['admin', 'manager']} userRole={userRole}>
              <CRM />
            </ProtectedRoute>
          } />
          <Route path="/sales" element={
            <ProtectedRoute allowedRoles={['admin', 'manager']} userRole={userRole}>
              <Sales />
            </ProtectedRoute>
          } />
          <Route path="/events" element={
            <ProtectedRoute allowedRoles={['admin', 'manager']} userRole={userRole}>
              <Events />
            </ProtectedRoute>
          } />
          <Route path="/customers" element={
            <ProtectedRoute allowedRoles={['admin', 'manager']} userRole={userRole}>
              <Customers />
            </ProtectedRoute>
          } />
          
          {/* Rotas apenas para Admin */}
          <Route path="/analytics" element={
            <ProtectedRoute allowedRoles={['admin']} userRole={userRole}>
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute allowedRoles={['admin']} userRole={userRole}>
              <Settings />
            </ProtectedRoute>
          } />
          
          {/* Validação de Entrada - Todos os níveis */}
          <Route path="/entry" element={<EntryValidation />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;