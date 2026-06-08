import {
  MdBugReport,
  MdCloud,
  MdDashboard,
  MdHelp,
  MdLocationOn,
  MdMap,
  MdMoreVert,
  MdNotifications,
  MdPerson,
  MdSearch,
} from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { icon: MdDashboard, label: "Dashboard", to: "/dashboard", end: true },
  { icon: MdPerson, label: "Agricultor", to: "/agricultores" },
  { icon: MdMap, label: "Mapa Riscos", to: "/mapa-riscos" },
  { icon: MdBugReport, label: "Reportar Erros", to: "/reportar-erros" },
  { icon: MdHelp, label: "Ajuda", to: "/ajuda" },
];

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-body">
      {/* Sidebar */}
      <aside className="flex w-64 shrink-0 flex-col bg-slate-900">
        {/* Logo */}
        <div className="flex items-center gap-2.5 border-b border-slate-700/60 px-5 py-5">
          <div className="rounded-lg p-1.5 shadow-lg shadow-emerald-900/40">
            <RiPlantLine className="text-lg text-white" />
          </div>
          <span className="font-title text-lg font-bold tracking-tight text-white">
            AgroDecide
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              end={item.end}
              to={item.to}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-sm px-3 py-2.5 font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-emerald-600 pl-8 text-sm text-white shadow-md shadow-emerald-900/30"
                    : "text-xs text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <item.icon className="shrink-0 text-[2rem]" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User */}
        <div className="flex items-center gap-3 border-t border-slate-700/60 px-4 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
            TE
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Tecnico Extensao
            </p>
            <p className="truncate text-xs text-slate-400">Extensionista</p>
          </div>
          <button className="text-slate-400 transition-colors hover:text-white">
            <MdMoreVert className="text-lg" />
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex shrink-0 items-center gap-4 border-b border-slate-100 bg-white px-6 py-3 shadow-sm">
          <div className="relative flex-1 max-w-sm">
            <MdSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar cenario, praga, cultura"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800">
              <MdCloud className="text-lg text-slate-400" />
              Alertas Climaticos
            </button>
            <button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800">
              <MdLocationOn className="text-lg text-slate-400" />
              Luanda - Morro Bento
            </button>
            <button className="relative rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-800">
              <MdNotifications className="text-xl" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-rose-400" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
