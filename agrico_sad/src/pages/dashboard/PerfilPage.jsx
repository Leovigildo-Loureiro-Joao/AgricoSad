import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';

function PerfilPage({ userType }) {
  const userData = {
    departamento: userType === 'tecnico' ? 'Analises' : 'Gestao',
    email: 'utilizador@AgroClima.com',
    nome: userType === 'tecnico' ? 'Joao Silva' : 'Carlos Admin',
    telefone: '+244 900 000 000',
    tipo: userType === 'tecnico' ? 'Tecnico' : 'Administrador',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Perfil</h1>
        <p className="mt-2 text-gray-500">Informacoes da conta</p>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg bg-white p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
      >
        <div className="mb-8 flex items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white">
            <FiUser />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-800">{userData.nome}</h2>
            <p className="text-gray-500">{userData.tipo}</p>
          </div>
        </div>

        <div className="space-y-6 border-t pt-6">
          <div className="flex items-center gap-4">
            <FiMail className="text-xl text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiPhone className="text-xl text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Telefone</p>
              <p className="font-medium text-gray-800">{userData.telefone}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Departamento</p>
            <p className="font-medium text-gray-800">{userData.departamento}</p>
          </div>
        </div>

        <button
          className="mt-8 rounded bg-emerald-600 px-6 py-2 text-white transition hover:bg-emerald-700"
          type="button"
        >
          Editar perfil
        </button>
      </motion.div>
    </div>
  );
}

export default PerfilPage;
