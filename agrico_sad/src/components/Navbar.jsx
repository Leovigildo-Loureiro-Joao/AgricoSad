import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
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

<motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 140 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#e6faf7" />
                <path
                  d="M20 8 C20 8 12 14 12 22 C12 27 15.5 31 20 31 C24.5 31 28 27 28 22 C28 14 20 8 20 8Z"
                  fill="#14b8a6"
                  opacity="0.25"
                />
                <path
                  d="M20 10 C20 10 14 16 14 22 C14 26.4 16.7 30 20 30 C23.3 30 26 26.4 26 22 C26 16 20 10 20 10Z"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  fill="none"
                />
                <line x1="20" y1="18" x2="24" y2="14" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="20" y1="22" x2="16" y2="18" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </motion.div>


            <span className="text-xl font-bold text-gray-800">
              Agro<span className="text-emerald-600">Decide</span>
            </span>
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
