import { motion } from 'framer-motion';
import { FiHelpCircle } from 'react-icons/fi';
import { MdAnalytics, MdDataUsage } from 'react-icons/md';

const steps = [
  {
    color: 'bg-blue-500',
    desc: 'Informe cultura, localizacao e fase atual.',
    icon: MdDataUsage,
    title: '1. Configure a lavoura',
  },
  {
    color: 'bg-purple-500',
    desc: 'Modelos climaticos e dinamica de pragas simulam cenarios.',
    icon: MdAnalytics,
    title: '2. O sistema processa cenarios',
  },
  {
    color: 'bg-emerald-500',
    desc: 'Receba acoes praticas e priorizadas para as proximas 48 horas.',
    icon: FiHelpCircle,
    title: '3. Execute as recomendacoes',
  },
];

function HowItWorksSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Como funciona
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-gray-800 md:text-4xl">
              Do risco a decisao em tres passos
            </h2>
            <p className="mb-8 text-gray-600">
              O SAD integra dados historicos, previsoes em tempo real e modelos
              biologicos de pragas para gerar recomendacoes praticas.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div
                    className={`${step.color} flex h-12 w-12 shrink-0 items-center justify-center rounded-full`}
                  >
                    <step.icon className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-2xl">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img
              alt="Agricultor a usar tablet no campo"
              className="h-auto w-full object-cover"
              src="https://images.unsplash.com/photo-1592982537445-2f6af012a098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
