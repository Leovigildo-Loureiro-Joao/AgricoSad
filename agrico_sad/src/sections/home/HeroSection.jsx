import { motion } from 'framer-motion';
import { FiCloudRain, FiShield, FiTrendingUp } from 'react-icons/fi';

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center 30%',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl px-2 text-white sm:px-4 lg:px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
            Sistema de apoio a decisao
          </span>
          <h1 className="mb-6 text-3xl font-bold text-white leading-tight md:text-4xl">
            Decisoes agricolas
            <br />
            <span className="text-emerald-300">
              inteligentes contra o clima e pragas
            </span>
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-gray-200 md:text-lg">
            Simule cenarios climaticos extremos e surtos de pragas. Receba
            recomendacoes precisas para proteger a lavoura e aumentar a
            produtividade.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold transition hover:bg-emerald-500"
              type="button"
            >
              <FiCloudRain /> Simular agora
            </button>
            <button
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-8 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/30"
              type="button"
            >
              <FiTrendingUp /> Ver demonstracao
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-xs">
            <div className="flex text-xs items-center gap-2">
              <FiShield /> Prevencao de riscos
            </div>
            <div className="flex text-xs items-center gap-2">
              <FiTrendingUp /> +32% produtividade media
            </div>
            <div className="flex text-xs items-center gap-2">
              <FiCloudRain /> Alertas climaticos em 7 dias
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
