import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Mock Data ────────────────────────────────────────────────────────────────
const AGRICULTORES = [
  { id: 1, nome: "Augusto Souza", telefone: "+244 955363238", cultura: "Milho", localidade: "Huila", endereco: "Rua Z no Porto", talhoes: 50 },
  { id: 2, nome: "Leovigildo João", telefone: "+244 955363238", cultura: "Kwanza-Norte", localidade: "Huambo", endereco: "Porto, Rua Z", talhoes: 32 },
  { id: 3, nome: "Maria Domingos", telefone: "+244 912000111", cultura: "Soja", localidade: "Huila", endereco: "Bairro Central", talhoes: 18 },
  { id: 4, nome: "José Capitão", telefone: "+244 923456789", cultura: "Mandioca", localidade: "Malanje", endereco: "Av. Principal", talhoes: 74 },
  { id: 5, nome: "Rosa Antunes", telefone: "+244 934567890", cultura: "Milho", localidade: "Huambo", endereco: "Rua do Mercado", talhoes: 29 },
  { id: 6, nome: "António Figueira", telefone: "+244 945678901", cultura: "Soja", localidade: "Malanje", endereco: "Travessa B", talhoes: 61 },
];

const CULTURAS = ["Milho", "Soja", "Mandioca", "Kwanza-Norte"];
const LOCALIDADES = ["Huila", "Huambo", "Malanje"];

// ─── Farmer Card ──────────────────────────────────────────────────────────────
function FarmerCard({ agricultor, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      {/* Card Banner */}
      <div className="relative h-36 bg-gradient-to-br from-[#4caf88] to-[#2d8c6a] flex items-center justify-center overflow-hidden">
        {/* subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "14px 14px" }}
        />
        {/* farmer icon */}
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="relative z-10 text-white opacity-90">
          <circle cx="26" cy="14" r="8" fill="currentColor" />
          <path d="M10 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
          <line x1="18" y1="28" x2="14" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="28" x2="38" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        {/* Province badge */}
        <span className="absolute bottom-3 right-4 text-white font-semibold text-sm tracking-wide drop-shadow">
          {agricultor.localidade}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-semibold text-gray-900 text-base">{agricultor.nome}</h3>
        <p className="text-[#2d8c6a] text-sm font-medium">{agricultor.talhoes} talhões</p>
        <p className="text-[#2d8c6a] text-sm">{agricultor.cultura}</p>
        <p className="text-gray-500 text-sm">{agricultor.endereco}</p>
        <button className="text-[#2d8c6a] text-xs mt-1 self-end hover:underline">Ver no mapa →</button>
      </div>

      {/* Card Actions */}
      <div className="px-4 pb-4 flex gap-2">
        <button className="flex-1 py-2 rounded-xl bg-[#1a2535] text-white text-sm font-medium hover:bg-[#243045] transition-colors">
          Auxiliar
        </button>
        <button className="flex-1 py-2 rounded-xl bg-[#2d8c6a] text-white text-sm font-medium hover:bg-[#246e54] transition-colors">
          Ver perfil
        </button>
      </div>
    </motion.div>
  );
}

// ─── Table Row ────────────────────────────────────────────────────────────────
function TableRow({ agricultor, index }) {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <td className="px-5 py-3 text-sm text-gray-700">{agricultor.telefone}</td>
      <td className="px-5 py-3 text-sm font-medium text-gray-900">{agricultor.nome}</td>
      <td className="px-5 py-3 text-sm text-gray-700">{agricultor.cultura}</td>
      <td className="px-5 py-3 text-sm text-gray-700">{agricultor.endereco}</td>
      <td className="px-5 py-3 text-sm">
        <button className="text-[#2d8c6a] hover:underline font-medium">Editar Perfil</button>
      </td>
      <td className="px-5 py-3 text-sm">
        <button className="text-[#2d8c6a] hover:underline font-medium">Saiba mais</button>
      </td>
    </motion.tr>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AgricultorPage() {
  const [viewMode, setViewMode] = useState("card"); // "card" | "table"
  const [showFilters, setShowFilters] = useState(true);
  const [culturaSel, setCulturaSel] = useState("");
  const [localidadeSel, setLocalidadeSel] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const filtered = AGRICULTORES.filter((a) => {
    const matchCultura = culturaSel ? a.cultura === culturaSel : true;
    const matchLocal = localidadeSel ? a.localidade === localidadeSel : true;
    const matchPhone = searchPhone ? a.telefone.includes(searchPhone) : true;
    return matchCultura && matchLocal && matchPhone;
  });

  const clearFilters = () => {
    setCulturaSel("");
    setLocalidadeSel("");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6 font-sans">
      {/* ── Top bar ── */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agricultor</h1>
          <p className="text-[#2d8c6a] text-sm font-medium mt-0.5">Auxilio Tecnico</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-xl bg-[#1a2535] text-white text-sm font-semibold hover:bg-[#243045] transition-colors shadow-sm">
            + Adicionar agricultor
          </button>
          {/* Search by phone */}
          <div className="relative">
            <input
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
              placeholder="Pesquisar por numero de telemovel"
              className="pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 bg-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#2d8c6a]/30 shadow-sm"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Section header ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-gray-900">Lista de agricultores</span>
            {/* View toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-md transition-colors ${viewMode === "table" ? "bg-white shadow-sm text-[#2d8c6a]" : "text-gray-400 hover:text-gray-600"}`}
                title="Vista lista"
              >
                {/* list icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                  <circle cx="3" cy="6" r="1.5" fill="currentColor" /><circle cx="3" cy="12" r="1.5" fill="currentColor" /><circle cx="3" cy="18" r="1.5" fill="currentColor" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("card")}
                className={`p-1.5 rounded-md transition-colors ${viewMode === "card" ? "bg-white shadow-sm text-[#2d8c6a]" : "text-gray-400 hover:text-gray-600"}`}
                title="Vista grelha"
              >
                {/* grid icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Toggle filters */}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#2d8c6a] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
          </button>
        </div>

        {/* ── Filters ── */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 py-3 flex flex-wrap items-center gap-3 border-b border-gray-100 bg-gray-50/50">
                {/* Cultura filter */}
                <div className="relative">
                  <select
                    value={culturaSel}
                    onChange={(e) => setCulturaSel(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2d8c6a]/30 cursor-pointer"
                  >
                    <option value="">Seleciona a cultura</option>
                    {CULTURAS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>

                {/* Localidade filter */}
                <div className="relative">
                  <select
                    value={localidadeSel}
                    onChange={(e) => setLocalidadeSel(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2d8c6a]/30 cursor-pointer"
                  >
                    <option value="">Seleciona a Localidade</option>
                    {LOCALIDADES.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>

                {/* Clear */}
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-[#2d8c6a] hover:text-[#2d8c6a] bg-white transition-colors"
                >
                  Limpar Filtro
                </button>

                {/* Active filter chips */}
                {(culturaSel || localidadeSel) && (
                  <div className="flex gap-2 flex-wrap">
                    {culturaSel && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#e8f5ef] text-[#2d8c6a] text-xs font-medium rounded-full">
                        {culturaSel}
                        <button onClick={() => setCulturaSel("")} className="hover:text-[#1a5c43]">×</button>
                      </span>
                    )}
                    {localidadeSel && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#e8f5ef] text-[#2d8c6a] text-xs font-medium rounded-full">
                        {localidadeSel}
                        <button onClick={() => setLocalidadeSel("")} className="hover:text-[#1a5c43]">×</button>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Content ── */}
        <div className="p-5">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 flex flex-col items-center gap-3 text-gray-400"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <p className="text-sm">Nenhum agricultor encontrado com os filtros actuais.</p>
              <button onClick={clearFilters} className="text-[#2d8c6a] text-sm hover:underline">Limpar filtros</button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              {viewMode === "card" ? (
                <motion.div
                  key="cards"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {filtered.map((a, i) => (
                    <FarmerCard key={a.id} agricultor={a} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="table"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-x-auto rounded-xl border border-gray-200"
                >
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1a2535] text-white">
                        {["Numero telefone", "Nome", "Cultura", "Localidade", "Editar Perfil", "Gerar Simulado"].map((h) => (
                          <th key={h} className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {filtered.map((a, i) => (
                          <TableRow key={a.id} agricultor={a} index={i} />
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Footer count */}
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
          <span>{filtered.length} agricultor{filtered.length !== 1 ? "es" : ""} encontrado{filtered.length !== 1 ? "s" : ""}</span>
          <span className="text-[#2d8c6a] font-medium">AgroDecide · Auxilio Tecnico</span>
        </div>
      </div>
    </div>
  );
}