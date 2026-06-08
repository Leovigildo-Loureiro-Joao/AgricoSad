import { motion } from 'framer-motion';
import { FiAlertCircle, FiEdit3, FiSend } from 'react-icons/fi';

const steps = [
  'Descreva o problema com o maximo de detalhe possivel.',
  'Indique em que pagina ou acao o erro aconteceu.',
  'Envie a solicitacao para que a equipa acompanhe o caso.',
];

export default function ReportarErrosPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">Reportar Erros</h1>
        <p className="mt-2 text-gray-500 text-xs">Registe falhas, inconsistencias ou comportamentos inesperados.</p>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 rounded-lg bg-white p-8 shadow-md lg:grid-cols-[1.3fr_0.9fr]"
        initial={{ opacity: 0, y: 16 }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <FiEdit3 className="text-xl" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-800">Formulario rapido</h2>
              <p className="text-xs text-gray-500">Campo visual preparado para receber a descricao do erro.</p>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="h-12 rounded-md border border-gray-200 bg-white" />
            <div className="h-32 rounded-md border border-gray-200 bg-white" />
            <button className="inline-flex items-center gap-2 rounded bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700" type="button">
              <FiSend />
              Enviar erro
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-6">
          <div className="flex items-center gap-3 text-amber-700">
            <FiAlertCircle className="text-xl" />
            <h3 className="text-sm font-semibold">Como reportar</h3>
          </div>
          <ul className="mt-4 space-y-3 text-xs leading-6 text-amber-900/80">
            {steps.map((step) => (
              <li key={step} className="rounded-md bg-white/70 px-3 py-2 shadow-sm">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
