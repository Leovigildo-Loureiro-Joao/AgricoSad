import { motion } from 'framer-motion';
import { FaBug } from 'react-icons/fa';
import { GiLifeSupport, GiPlantRoots } from 'react-icons/gi';
import { WiDaySunny, WiRain, WiStrongWind } from 'react-icons/wi';

const features = [
  {
    bg: 'bg-orange-50',
    color: 'text-orange-500',
    desc: 'Modelos preditivos para secas, geadas e excesso de chuva com sete dias de antecedencia.',
    icon: WiDaySunny,
    title: 'Previsao climatica avancada',
  },
  {
    bg: 'bg-red-50',
    color: 'text-red-500',
    desc: 'Monitoramento em tempo real do ciclo de pragas como lagarta e ferrugem.',
    icon: FaBug,
    title: 'Mapa de risco de pragas',
  },
  {
    bg: 'bg-emerald-50',
    color: 'text-emerald-500',
    desc: 'O que fazer, quando fazer e com qual prioridade para cada cultura.',
    icon: GiPlantRoots,
    title: 'Recomendacoes personalizadas',
  },
  {
    bg: 'bg-blue-50',
    color: 'text-blue-500',
    desc: 'Calculo da lamina ideal com base em evapotranspiracao e previsoes.',
    icon: WiRain,
    title: 'Irrigacao inteligente',
  },
  {
    bg: 'bg-purple-50',
    color: 'text-purple-500',
    desc: 'Treine estrategias sem risco real. Ideal para escolas e incubadoras.',
    icon: GiLifeSupport,
    title: 'Modo de incubacao e ensino',
  },
  {
    bg: 'bg-teal-50',
    color: 'text-teal-500',
    desc: 'Compare cenarios e veja o impacto financeiro de cada decisao.',
    icon: WiStrongWind,
    title: 'Analise de cenarios',
  },
];

function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Porque usar o AgroDecide SAD?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Tecnologia de apoio a decisao para produtores, tecnicos e equipas
            de gestao agricola.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div
                className={`${feature.bg} mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition group-hover:scale-110`}
              >
                <feature.icon className={`text-3xl ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
