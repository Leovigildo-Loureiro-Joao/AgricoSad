import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '@/app/routes/ProtectedRoute';
import DashboardLayout from '@/layouts/DashboardLayout';
import MarketingLayout from '@/layouts/MarketingLayout';
import LoginPage from '@/pages/auth/LoginPage';
import AnalisesPage from '@/pages/dashboard/AnalisesPage';
import ConfiguracoesPage from '@/pages/dashboard/ConfiguracoesPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import PerfilPage from '@/pages/dashboard/PerfilPage';
import AjudaPage from '@/pages/dashboard/AjudaPage';
import MapaRiscosPage from '@/pages/dashboard/MapaRiscosPage';
import RelatoriosPage from '@/pages/dashboard/RelatoriosPage';
import ReportarErrosPage from '@/pages/dashboard/ReportarErrosPage';
import UsuariosPage from '@/pages/dashboard/UsuariosPage';
import HomePage from '@/pages/public/HomePage';
import { useUserType } from '@/shared/hooks/useUserType';
import AgricultorPage from '@/pages/dashboard/Agricultores';

function App() {
  const userType = useUserType();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route element={<HomePage />} path="/" />
        </Route>

        <Route element={<LoginPage />} path="/login" />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            element={<DashboardPage userType={userType} />}
            path="/dashboard"
          />
          <Route element={<MapaRiscosPage />} path="/mapa-riscos" />
          <Route element={<ReportarErrosPage />} path="/reportar-erros" />
          <Route element={<AjudaPage />} path="/ajuda" />
          <Route element={<AnalisesPage />} path="/analises" />
          <Route element={<RelatoriosPage />} path="/relatorios" />
          <Route element={<PerfilPage userType={userType} />} path="/perfil" />
          <Route element={<AgricultorPage userType={userType} />} path="/agricultores" />
          <Route
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <UsuariosPage />
              </ProtectedRoute>
            }
            path="/usuarios"
          />
          <Route
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ConfiguracoesPage />
              </ProtectedRoute>
            }
            path="/configuracoes"
          />
        </Route>

        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
