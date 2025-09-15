import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useStore } from './store/useStore';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Toast from './components/ui/Toast';
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

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const userRole = user?.role || 'operator';
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex transition-all duration-500">
          <Sidebar />
          <Header />
          
          <main className="flex-1 lg:ml-64 pt-16 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Navigate to={userRole === 'operator' ? '/pos' : '/dashboard'} replace />} />
              
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
              
              {/* Páginas Públicas */}
              <Route path="/tickets" element={<PublicTickets />} />
              
              {/* Validação de Entrada - Todos os níveis */}
              <Route path="/entry" element={<EntryValidation />} />
              
              {/* App do Cliente */}
              <Route path="/customer-app" element={<CustomerApp />} />
            </Routes>
          </main>
        </div>
        <Toast />
      </Router>
    </QueryClientProvider>
  );
}

export default App;