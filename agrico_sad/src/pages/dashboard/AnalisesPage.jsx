import { motion } from 'framer-motion';

const analyses = [
  {
    data: '20 Jan 2026',
    id: 1,
    resultado: 'Otimo',
    status: 'Completa',
    title: 'Analise de solo',
  },
  {
    data: '18 Jan 2026',
    id: 2,
    resultado: 'Positiva',
    status: 'Completa',
    title: 'Previsao de rendimento',
  },
  {
    data: '15 Jan 2026',
    id: 3,
    resultado: 'Pendente',
    status: 'Em analise',
    title: 'Analise de pragas',
  },
];

function AnalisesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Analises</h1>
        <p className="mt-2 text-gray-500">
          Historico de analises do sistema SAD
        </p>
      </div>

      <div className="grid gap-4">
        {analyses.map((analysis, index) => (
          <motion.div
            key={analysis.id}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {analysis.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{analysis.data}</p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    analysis.status === 'Completa'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {analysis.status}
                </span>
                <p className="mt-2 text-gray-600">{analysis.resultado}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AnalisesPage;
