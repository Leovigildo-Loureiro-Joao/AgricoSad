import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { getDashboardMenu } from '@/shared/config/navigation';
import { clearStoredUserType, getRoleLabel } from '@/shared/lib/auth';

function DashboardLayout({ userType }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = getDashboardMenu(userType);

  const handleLogout = () => {
    clearStoredUserType();
    navigate('/login', { replace: true });
  };

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        animate={{ x: 0 }}
        className={`relative ${
          isOpen ? 'block' : 'hidden'
        } w-64 bg-dark-900 text-white shadow-lg md:block`}
        initial={{ x: isOpen ? 0 : -280 }}
      >
          <div className="mb-10 flex items-center justify-center gap-3">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 140 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#ECFDF5" />
                <path d="M20 8 C20 8 12 14 12 22 C12 27 15.5 31 20 31 C24.5 31 28 27 28 22 C28 14 20 8 20 8Z"
                  fill="#059669" opacity="0.25" />
                <path d="M20 10 C20 10 14 16 14 22 C14 26.4 16.7 30 20 30 C23.3 30 26 26.4 26 22 C26 16 20 10 20 10Z"
                  stroke="#059669" strokeWidth="2" fill="none" />
                <line x1="20" y1="18" x2="24" y2="14" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="20" y1="22" x2="16" y2="18" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Agro<span className="text-agro-teal">Decide</span>
            </span>
          </div>

        <nav className="mt-8  bg-dark-900">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                `block border-l-4 px-6 py-3 transition-colors ${
                  isActive
                    ? 'border-white bg-emerald-600'
                    : 'border-transparent hover:border-white hover:bg-emerald-600'
                }`
              }
              onClick={handleNavigate}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-emerald-600 p-4">
          <div className="mb-4 text-sm">
            <p className="font-semibold">{getRoleLabel(userType)}</p>
          </div>
          <button
            className="flex w-full items-center justify-center gap-2 rounded bg-red-600 px-4 py-2 transition-colors hover:bg-red-700"
            onClick={handleLogout}
            type="button"
          >
            <FiLogOut /> Sair
          </button>
        </div>
      </motion.aside>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between bg-agro-dark p-4 text-white shadow-md md:hidden">
          <button
            className="text-2xl text-agro-teal"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <IoClose /> : <FiMenu />}
          </button>
          <span className="font-bold tracking-tight text-white">AgroDecide SAD</span>
        </div>

        <div className="flex-1 overflow-auto p-6  bg-dark-900" >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
