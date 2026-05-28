import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { GiPlantsAndAnimals } from 'react-icons/gi';
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
        } w-64 bg-gradient-to-b from-emerald-700 to-emerald-800 text-white shadow-lg md:block`}
        initial={{ x: isOpen ? 0 : -280 }}
      >
        <div className="flex items-center gap-2 border-b border-emerald-600 p-6">
          <GiPlantsAndAnimals className="text-3xl" />
          <span className="text-xl font-bold">AgroDecide</span>
        </div>

        <nav className="mt-8">
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
        <div className="flex items-center justify-between bg-white p-4 shadow-md md:hidden">
          <button
            className="text-2xl text-emerald-600"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <IoClose /> : <FiMenu />}
          </button>
          <span className="font-bold text-gray-800">AgroDecide SAD</span>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
