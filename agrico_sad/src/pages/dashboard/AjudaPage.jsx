import { motion } from 'framer-motion';
import { FiBookOpen, FiHelpCircle, FiMessageSquare } from 'react-icons/fi';

const ajudaItems = [
  {
    description: 'Consulte orientacoes rapidas sobre navegacao, filtros e acompanhamento de agricultores.',
    icon: FiBookOpen,
    title: 'Guia rapido',
  },
  {
    description: 'Tire duvidas mais comuns sobre o uso do painel e as rotinas do tecnico.',
    icon: FiHelpCircle,
    title: 'Perguntas frequentes',
  },
  {
    description: 'Entre em contacto com a equipa de suporte quando precisar de acompanhamento.',
    icon: FiMessageSquare,
    title: 'Suporte',
  },
];

export default function AjudaPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-lg font-bold text-gray-800">Ajuda</h1>
        <p className="mt-2 text-gray-500 text-xs">Centro de apoio rapido para utilizacao da plataforma.</p>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 md:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
      >
        {ajudaItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <Icon className="text-xl" />
              </div>
              <h2 className="text-sm font-semibold text-gray-800">{item.title}</h2>
              <p className="mt-2 text-xs leading-6 text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
