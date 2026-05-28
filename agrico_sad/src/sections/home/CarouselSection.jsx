import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBug } from 'react-icons/fa';
import { GiPlantSeed } from 'react-icons/gi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { WiRainWind, WiThunderstorm } from 'react-icons/wi';

const slides = [
  {
    desc: 'O sistema antecipa eventos de geada com 72 horas de antecedencia.',
    icon: WiRainWind,
    id: 1,
    image:
      'https://images.unsplash.com/photo-1592417817098-9b4d5d5eaf6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    title: 'Alerta de geada',
  },
  {
    desc: 'Monitoramento em tempo real do ciclo da praga para resposta rapida.',
    icon: FaBug,
    id: 2,
    image:
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    title: 'Surto de lagarta',
  },
  {
    desc: 'Recomendacao precisa de irrigacao e manejo para reduzir perdas.',
    icon: WiThunderstorm,
    id: 3,
    image:
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    title: 'Stress hidrico',
  },
  {
    desc: 'Planeamento estrategico para maximizar rendimento e proteger a colheita.',
    icon: GiPlantSeed,
    id: 4,
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    title: 'Colheita protegida',
  },
];

function CarouselSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((previous) => (previous - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const CurrentIcon = slides[current].icon;

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Simulacoes realistas
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Veja como o AgroDecide antecipa eventos climaticos e surtos de
            pragas.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[500px] md:h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0"
                exit={{ opacity: 0, scale: 0.95 }}
                initial={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  alt={slides[current].title}
                  className="h-full w-full object-cover"
                  src={slides[current].image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-12">
              <div className="mb-3 flex items-center gap-3">
                <CurrentIcon className="text-4xl text-emerald-300" />
                <h3 className="text-2xl font-bold md:text-3xl">
                  {slides[current].title}
                </h3>
              </div>
              <p className="max-w-2xl text-lg text-gray-200">
                {slides[current].desc}
              </p>
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition hover:bg-white/30"
              onClick={previousSlide}
              type="button"
            >
              <IoChevronBack className="text-2xl" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition hover:bg-white/30"
              onClick={nextSlide}
              type="button"
            >
              <IoChevronForward className="text-2xl" />
            </button>

            <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'w-8 bg-emerald-400' : 'w-2 bg-white/50'
                  }`}
                  onClick={() => setCurrent(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
