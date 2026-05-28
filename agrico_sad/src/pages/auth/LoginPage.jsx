import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLock, FiUser } from 'react-icons/fi';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { useUserType } from '@/shared/hooks/useUserType';
import { setStoredUserType } from '@/shared/lib/auth';

function LoginPage() {
  const navigate = useNavigate();
  const userType = useUserType();

  const handleLogin = (role) => {
    setStoredUserType(role);
    navigate('/dashboard', { replace: true });
  };

  if (userType) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-4">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
      >
        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-8 flex flex-col items-center">
            <motion.div
              animate={{ scale: 1 }}
              className="mb-4 rounded-full bg-emerald-100 p-4"
              initial={{ scale: 0 }}
              transition={{ stiffness: 100, type: 'spring' }}
            >
              <GiPlantsAndAnimals className="text-4xl text-emerald-600" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800">AgroDecide</h1>
            <p className="mt-2 text-gray-500">Sistema de apoio a decisao</p>
          </div>

          <div className="mb-8 space-y-4">
            <p className="mb-6 text-center font-semibold text-gray-600">
              Selecione o tipo de acesso
            </p>

            <motion.button
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700"
              onClick={() => handleLogin('tecnico')}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiUser className="text-xl" />
              <div className="text-left">
                <p className="font-semibold">Tecnico</p>
                <p className="text-sm opacity-90">Acesso as analises</p>
              </div>
            </motion.button>

            <motion.button
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-purple-600 p-4 text-white transition-colors hover:bg-purple-700"
              onClick={() => handleLogin('admin')}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLock className="text-xl" />
              <div className="text-left">
                <p className="font-semibold">Administrador</p>
                <p className="text-sm opacity-90">Acesso completo ao sistema</p>
              </div>
            </motion.button>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              Versao 1.0 • AgroDecide © 2026
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
