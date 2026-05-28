import { motion } from 'framer-motion';
import { FiArrowRight, FiVideo } from 'react-icons/fi';

function CTASection() {
  return (
    <section className="bg-emerald-50 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Pronto para proteger a lavoura?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Comece agora a tomar decisoes mais assertivas com o AgroDecide SAD.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
              type="button"
            >
              Experimentar o SAD <FiArrowRight />
            </button>
            <button
              className="flex items-center gap-2 rounded-full border-2 border-emerald-600 px-8 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              type="button"
            >
              <FiVideo /> Ver demonstracao
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
