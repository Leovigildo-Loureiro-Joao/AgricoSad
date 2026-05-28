import { motion } from 'framer-motion';
import { FiEdit, FiTrash2, FiUserPlus } from 'react-icons/fi';

const users = [
  {
    email: 'joao@agrodecide.com',
    id: 1,
    nome: 'Joao Silva',
    status: 'Ativo',
    tipo: 'Tecnico',
  },
  {
    email: 'maria@agrodecide.com',
    id: 2,
    nome: 'Maria Santos',
    status: 'Ativo',
    tipo: 'Tecnico',
  },
  {
    email: 'pedro@agrodecide.com',
    id: 3,
    nome: 'Pedro Costa',
    status: 'Inativo',
    tipo: 'Tecnico',
  },
];

function UsuariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Usuarios</h1>
          <p className="mt-2 text-gray-500">Gerir utilizadores do sistema</p>
        </div>
        <button
          className="flex items-center gap-2 rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          type="button"
        >
          <FiUserPlus /> Novo utilizador
        </button>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Tipo
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Acoes
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <motion.tr
                key={user.id}
                animate={{ opacity: 1 }}
                className="border-b hover:bg-gray-50"
                initial={{ opacity: 0 }}
              >
                <td className="px-6 py-4 text-gray-800">{user.nome}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    {user.tipo}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      user.status === 'Ativo'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="flex gap-2 px-6 py-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    type="button"
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    type="button"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsuariosPage;
