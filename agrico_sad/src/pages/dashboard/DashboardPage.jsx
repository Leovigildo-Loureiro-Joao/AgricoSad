import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose, MdGrain, MdPeople, MdPestControl, MdPlayCircle, MdSearch } from "react-icons/md";
import { img1, img2, img3 } from "@/assets/AssetsManager";

function MiniBarChart({ bars, barColor }) {
  return (
    <div className="flex h-10 items-end gap-[3px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-2 rounded-sm ${barColor} opacity-75 transition-all`}
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  );
}

function StatCard({ label, sub, icon: Icon, color, border, bars, barColor, onClick, isActive }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-52 w-96 cursor-pointer items-center justify-between rounded-lg border p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${border} ${
        isActive ? "scale-[1.01] ring-1 ring-offset-1 ring-rose-400" : ""
      }`}
    >
      <div className="flex h-32 flex-col justify-between">
        <div className="mb-1 flex items-center gap-2">
          <Icon className={`text-xl ${color}`} />
          <span className={`text-sm font-bold uppercase tracking-widest ${isActive ? "text-rose-600" : ""}`}>
            {label}
          </span>
        </div>
        <div className="flex w-80 justify-between">
          <p className="mt-1 text-xs text-slate-500">{sub}</p>
          <MiniBarChart bars={bars} barColor={barColor} />
        </div>
      </div>
    </button>
  );
}

function ScenarioCard({ title, category }) {
  const getImageAndIcon = () => {
    switch (category) {
      case "Cenarios":
        return {
          bg: "bg-amber-50",
          iconBg: "bg-amber-100",
          icon: MdGrain,
          iconColor: "text-amber-600",
          image: img1,
        };
      case "Agricultores":
        return {
          bg: "bg-emerald-50",
          iconBg: "bg-emerald-100",
          icon: MdPeople,
          iconColor: "text-emerald-600",
          image: img2,
        };
      case "Pragas":
      default:
        return {
          bg: "bg-violet-50",
          iconBg: "bg-violet-100",
          icon: MdPestControl,
          iconColor: "text-violet-600",
          image: img3,
        };
    }
  };

  const { bg, iconBg, icon: Icon, iconColor, image } = getImageAndIcon();

  return (
    <div className="flex min-h-96 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className={`${bg} relative flex h-28 items-center justify-center overflow-hidden`}>
        <img src={image} alt={category} className="h-full w-full object-cover opacity-30" />
        <div className={`${iconBg} absolute rounded-lg p-3`}>
          <Icon className={`${iconColor} text-2xl`} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{category}</span>
        <p className="text-sm font-semibold leading-snug text-slate-700">{title}</p>
        <button className="w-fit text-left text-xs text-rose-400 transition-colors hover:text-rose-500">
          Reportar Erro
        </button>
        <button className="mt-auto mb-5 flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 pt-3 text-sm font-medium text-white transition-all hover:bg-slate-700 active:scale-95">
          <MdPlayCircle className="text-base" />
          Simular cenario
        </button>
      </div>
    </div>
  );
}

function SearchInput({ value, onChange, onClear }) {
  return (
    <div className="relative w-full max-w-xs">
      <MdSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar cenarios..."
        className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-9 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <MdClose className="text-sm" />
        </button>
      )}
    </div>
  );
}

const stats = [
  {
    id: "Cenarios",
    label: "Cenarios",
    sub: "+300 para cada caso",
    icon: MdGrain,
    color: "text-rose-400",
    border: "border-rose-100",
    bars: [0.4, 0.6, 0.9, 0.7],
    barColor: "bg-rose-300",
  },
  {
    id: "Agricultores",
    label: "Agricultores",
    sub: "+50 da sua regiao",
    icon: MdPeople,
    color: "text-emerald-500",
    border: "border-emerald-100",
    bars: [0.3, 0.7, 0.5, 0.9],
    barColor: "bg-emerald-400",
  },
  {
    id: "Pragas",
    label: "Pragas",
    sub: "+100 da sua regiao",
    icon: MdPestControl,
    color: "text-violet-400",
    border: "border-violet-100",
    bars: [0.5, 0.3, 0.8, 0.6],
    barColor: "bg-violet-300",
  },
];

const scenarios = [
  { id: 1, title: "Como posso exterminar o surto de termitas?", category: "Pragas" },
  { id: 2, title: "A lagarta de cartucho esta danificando minhas colheitas?", category: "Pragas" },
  { id: 3, title: "Como aumentar a produtividade da soja?", category: "Cenarios" },
  { id: 4, title: "Manejo sustentavel para pequenos agricultores", category: "Agricultores" },
  { id: 5, title: "Como controlar a ferrugem asiatica?", category: "Pragas" },
  { id: 6, title: "Tecnicas de irrigacao eficientes", category: "Cenarios" },
  { id: 7, title: "Associacao de agricultores familiares", category: "Agricultores" },
  { id: 8, title: "Como eliminar o percevejo marrom?", category: "Pragas" },
  { id: 9, title: "Plantio direto na palha", category: "Cenarios" },
  { id: 10, title: "Cooperativismo agricola", category: "Agricultores" },
];

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredScenarios = scenarios.filter((scenario) => {
    const matchesFilter = activeFilter ? scenario.category === activeFilter : true;
    const matchesSearch = searchTerm
      ? scenario.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="px-8 py-6">
      <h1 className="mb-6 text-xl font-bold text-slate-800">Bem vindo novamente</h1>

      <div className="mb-8 flex gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            {...stat}
            onClick={() => setActiveFilter(activeFilter === stat.id ? null : stat.id)}
            isActive={activeFilter === stat.id}
          />
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-slate-700">
            Lista de Cenarios
            {activeFilter && (
              <span className="ml-2 text-xs font-normal text-rose-500">
                • Filtrando por: {activeFilter}
              </span>
            )}
          </h2>
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm("")}
          />
        </div>

        {activeFilter ? (
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700"
          >
            <MdClose className="text-sm" />
            Limpar filtro
          </button>
        ) : (
          <span />
        )}
      </div>

      {filteredScenarios.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-4"
          >
            {filteredScenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                title={scenario.title}
                category={scenario.category}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="rounded-lg bg-slate-50 px-6 py-12 text-center">
          <p className="text-slate-500">Nenhum cenario encontrado</p>
          <button
            type="button"
            onClick={() => {
              setActiveFilter(null);
              setSearchTerm("");
            }}
            className="mt-2 text-sm text-rose-500 hover:text-rose-600"
          >
            Limpar filtros
          </button>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 px-1 py-3 text-xs text-slate-400">
        <span>
          {filteredScenarios.length} cenario
          {filteredScenarios.length !== 1 ? "s" : ""} encontrado
          {filteredScenarios.length !== 1 ? "s" : ""}
        </span>
        <span className="font-medium text-emerald-600">AgroClima · Auxilio Tecnico</span>
      </div>
    </div>
  );
}
