import { motion } from 'framer-motion';

function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Configuracoes</h1>
        <p className="mt-2 text-gray-500">Parametros gerais do sistema</p>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 rounded-lg bg-white p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
      >
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Configuracoes do sistema
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded bg-gray-50 p-4">
              <span className="text-gray-700">Modo de demonstracao</span>
              <input className="h-5 w-5" defaultChecked type="checkbox" />
            </div>
            <div className="flex items-center justify-between rounded bg-gray-50 p-4">
              <span className="text-gray-700">Notificacoes por email</span>
              <input className="h-5 w-5" defaultChecked type="checkbox" />
            </div>
            <div className="flex items-center justify-between rounded bg-gray-50 p-4">
              <span className="text-gray-700">Logs de auditoria</span>
              <input className="h-5 w-5" defaultChecked type="checkbox" />
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Backup e seguranca
          </h3>
          <div className="space-y-3">
            <button
              className="w-full rounded border-2 border-emerald-600 p-3 text-emerald-600 transition hover:bg-emerald-50"
              type="button"
            >
              Fazer backup agora
            </button>
            <button
              className="w-full rounded border-2 border-blue-600 p-3 text-blue-600 transition hover:bg-blue-50"
              type="button"
            >
              Restaurar backup
            </button>
          </div>
        </div>

        <button
          className="w-full rounded bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          type="button"
        >
          Guardar configuracoes
        </button>
      </motion.div>
    </div>
  );
}

export default ConfiguracoesPage;
