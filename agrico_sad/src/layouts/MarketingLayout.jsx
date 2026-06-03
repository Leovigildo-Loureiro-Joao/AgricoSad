import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { marketingMenuItems } from '@/shared/config/navigation';

function MarketingLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href, id) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="bg-white">
      <nav className="fixed z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
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

          <div className="hidden space-x-8 md:flex">
            {marketingMenuItems.map((item) => (
              <a
                key={item.id}
                className="text-gray-600 transition-colors hover:text-emerald-600"
                href={item.href}
                onClick={() => handleNavClick(item.href, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <Link to="/login">
            <motion.button
              animate={{ opacity: 1, scale: 1 }}
              className="hidden rounded-full bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700 md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              type="button"
            >
              Aceder ao SAD
            </motion.button>
          </Link>

          <button
            className="text-2xl md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-3 border-t bg-white px-4 py-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
          >
            {marketingMenuItems.map((item) => (
              <a
                key={item.id}
                className="text-gray-600 hover:text-emerald-600"
                href={item.href}
                onClick={() => handleNavClick(item.href, item.id)}
              >
                {item.label}
              </a>
            ))}
            <Link className="w-full" to="/login">
              <button
                className="w-full rounded-full bg-emerald-600 px-5 py-2 text-white"
                type="button"
              >
                Aceder ao SAD
              </button>
            </Link>
          </motion.div>
        )}
      </nav>

      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default MarketingLayout;
