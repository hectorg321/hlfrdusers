import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useClientAuthStore } from '@/store/useClientAuthStore';
import ClientLayout from '@/components/layout/ClientLayout';
import ClientLoginPage from '@/pages/ClientLoginPage';
import ClientRegisterPage from '@/pages/ClientRegisterPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AppointmentsPage from '@/pages/AppointmentsPage';
import BookServicePage from '@/pages/BookServicePage';
import ServiceHistoryPage from '@/pages/ServiceHistoryPage';
import ProfilePage from '@/pages/ProfilePage';

// Componente de ruta protegida para clientes
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useClientAuthStore();
  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated);
  
  if (!isAuthenticated) {
    console.log('Usuario no autenticado, redirigiendo a login');
    return <Navigate to="/login" replace />;
  }
  
  console.log('Usuario autenticado, mostrando contenido protegido');
  return <>{children}</>;
};

function App() {
  return (
    <Router>
             <div className="min-h-screen bg-light-200">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<ClientLoginPage />} />
          <Route path="/register" element={<ClientRegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/test-book" element={<BookServicePage />} />
          
          {/* Rutas protegidas */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/book-service" element={<BookServicePage />} />
                    <Route path="/appointments" element={<AppointmentsPage />} />
                    <Route path="/history" element={<ServiceHistoryPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </ClientLayout>
              </ProtectedRoute>
            }
          />
          
          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
