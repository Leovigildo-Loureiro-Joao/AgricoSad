import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiPlantsAndAnimals, GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <GiPlantsAndAnimals className="text-3xl text-emerald-600" />
            <span className="font-bold text-xl text-gray-800">Agro<span className="text-emerald-600">Decide</span></span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['Início', 'Recursos', 'Como Funciona', 'Demonstração', 'Contato'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">{item}</a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:block bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition"
          >
            Acessar SAD
          </motion.button>

          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t py-4 px-4 flex flex-col space-y-3"
        >
          {['Início', 'Recursos', 'Como Funciona', 'Demonstração', 'Contato'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-emerald-600">{item}</a>
          ))}
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-full">Acessar SAD</button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
