import { motion } from 'framer-motion';

const reports = [
  { id: 1, periodo: 'Janeiro 2026', titulo: 'Relatorio mensal' },
  { id: 2, periodo: '4 Trimestre 2025', titulo: 'Relatorio trimestral' },
  { id: 3, periodo: '2025', titulo: 'Analise anual' },
];

function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Relatorios</h1>
        <p className="mt-2 text-gray-500">
          Documentos e analises geradas pelo sistema
        </p>
      </div>

      <div className="grid gap-4">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            animate={{ opacity: 1, y: 0 }}
            className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {report.titulo}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{report.periodo}</p>
              </div>
              <button
                className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
                type="button"
              >
                Baixar PDF
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RelatoriosPage;
