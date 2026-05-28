import { motion } from 'framer-motion';
import { FiBarChart2, FiPieChart, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    color: 'blue',
    icon: FiBarChart2,
    label: 'Analises realizadas',
    value: '124',
  },
  {
    color: 'green',
    icon: FiTrendingUp,
    label: 'Recomendacoes',
    value: '32',
  },
  {
    color: 'purple',
    icon: FiPieChart,
    label: 'Taxa de sucesso',
    value: '87%',
  },
];

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 border-blue-200',
  green: 'bg-green-50 text-green-600 border-green-200',
  purple: 'bg-purple-50 text-purple-600 border-purple-200',
};

function DashboardPage({ userType }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard {userType === 'tecnico' ? 'tecnico' : 'administrativo'}
        </h1>
        <p className="mt-2 text-gray-500">Bem-vindo ao AgroDecide SAD</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              animate={{ opacity: 1, y: 0 }}
              className={`${colorClasses[stat.color]} rounded-lg border-2 p-6`}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>
                <Icon className="text-4xl opacity-20" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {userType === 'admin' && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Acoes de administrador
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>Gerir utilizadores do sistema</li>
            <li>Configurar parametros do SAD</li>
            <li>Visualizar logs do sistema</li>
            <li>Gerir permissoes</li>
          </ul>
        </motion.div>
      )}

      {userType === 'tecnico' && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Ultimas analises
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded bg-gray-50 p-3">
              <span className="text-gray-700">Analise de cultivo - milho</span>
              <span className="font-semibold text-green-600">Completa</span>
            </div>
            <div className="flex items-center justify-between rounded bg-gray-50 p-3">
              <span className="text-gray-700">Optimizacao de recursos</span>
              <span className="font-semibold text-yellow-600">Em progresso</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DashboardPage;
