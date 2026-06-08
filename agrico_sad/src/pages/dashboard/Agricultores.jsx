import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdPerson, MdPhone, MdLocationOn, MdAgriculture, MdEdit,
  MdInfo, MdSearch, MdFilterList, MdGridOn, MdTableRows,
  MdAdd, MdClose, MdHelp, MdVisibility
} from "react-icons/md";
import { GiCorn, GiPlantSeed, GiWheat } from "react-icons/gi";
import { agrico1, agrico2, agrico3 } from "@/assets/AssetsManager";

// ─── Mock Data ────────────────────────────────────────────────────────────────
const AGRICULTORES = [
  { id: 1, nome: "Augusto Souza", telefone: "+244 955363238", cultura: "Milho", localidade: "Huila", endereco: "Rua Z no Porto", talhoes: 50 },
  { id: 3, nome: "Maria Domingos", telefone: "+244 912000111", cultura: "Soja", localidade: "Huila", endereco: "Bairro Central", talhoes: 18 },
  { id: 4, nome: "José Capitão", telefone: "+244 923456789", cultura: "Mandioca", localidade: "Malanje", endereco: "Av. Principal", talhoes: 74 },
  { id: 5, nome: "Rosa Antunes", telefone: "+244 934567890", cultura: "Milho", localidade: "Huambo", endereco: "Rua do Mercado", talhoes: 29 },
  { id: 6, nome: "António Figueira", telefone: "+244 945678901", cultura: "Soja", localidade: "Malanje", endereco: "Travessa B", talhoes: 61 },
];

// Imagens de campos agrícolas por cultura
const getCampoImage = (cultura) => {
  switch(cultura) {
    case "Milho":
      return "https://images.unsplash.com/photo-1627511843687-82808e5053ce?w=800&h=400&fit=crop"; // Campo de milho
    case "Soja":
      return "https://images.unsplash.com/photo-1607022059991-1efdfa17648d?w=800&h=400&fit=crop"; // Plantação de soja
    case "Mandioca":
      return "https://images.unsplash.com/photo-1578910611486-bfd79e18a8ac?w=800&h=400&fit=crop"; // Plantação de mandioca
    case "Kwanza-Norte":
      return "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=400&fit=crop"; // Campo agrícola
    default:
      return "https://images.unsplash.com/photo-1523348837708-15d4a6a25f8d?w=800&h=400&fit=crop";
  }
};

// Ícones por cultura
const getCulturaIcon = (cultura) => {
  switch(cultura) {
    case "Milho": return <GiCorn className="text-sm" />;
    case "Soja": return <GiPlantSeed className="text-sm" />;
    case "Mandioca": return <GiCorn className="text-sm" />;
    case "Kwanza-Norte": return <GiWheat className="text-sm" />;
    default: return <MdAgriculture className="text-sm" />;
  }
};

const CULTURAS = ["Milho", "Soja", "Mandioca", "Kwanza-Norte"];
const LOCALIDADES = ["Huila", "Huambo", "Malanje"];

// ─── Farmer Card (com bordas reduzidas) ───────────────────────────────────────
function FarmerCard({ agricultor, index }) {
  const culturaIcon = getCulturaIcon(agricultor.cultura);
  const campoImage = [agrico1, agrico2, agrico3][index % 3] || getCampoImage(agricultor.cultura);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
      style={{ borderRadius: "8px" }}
    >
      {/* Card Banner com imagem do campo agrícola */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={campoImage}
          alt={agricultor.cultura}
          className="w-full h-full object-cover"
        />
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Ícone do agricultor sobreposto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/30">
            <MdPerson className="text-white text-4xl" />
          </div>
        </div>

        {/* Badge de localidade */}
        <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white font-semibold text-xs px-2.5 py-1 shadow-sm flex items-center gap-1" style={{ borderRadius: "4px" }}>
          <MdLocationOn className="text-xs" />
          {agricultor.localidade}
        </span>

        {/* Badge de talhões */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 flex items-center gap-1" style={{ borderRadius: "4px" }}>
          <MdAgriculture className="text-white text-xs" />
          <span className="text-white text-xs font-medium">{agricultor.talhoes} talhões</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-gray-900 text-base flex items-center gap-1">
          <MdPerson className="text-[#2d8c6a] text-sm" />
          {agricultor.nome}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="bg-[#2d8c6a]/10 text-[#2d8c6a] text-xs font-semibold px-2 py-0.5 flex items-center gap-1" style={{ borderRadius: "4px" }}>
            {culturaIcon}
            {agricultor.cultura}
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
          <MdLocationOn className="text-xs" />
          {agricultor.endereco}
        </p>
        <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
          <MdPhone className="text-xs" />
          {agricultor.telefone}
        </p>
      </div>

      {/* Card Actions */}
      <div className="px-4 pb-4 flex gap-2">
        <button className="flex-1 py-2 bg-[#1a2535] text-white text-sm font-medium hover:bg-[#243045] transition-colors flex items-center justify-center gap-1" style={{ borderRadius: "6px" }}>
          <MdHelp className="text-sm" />
          Auxiliar
        </button>
        <button className="flex-1 py-2 bg-[#2d8c6a] text-white text-sm font-medium hover:bg-[#246e54] transition-colors flex items-center justify-center gap-1" style={{ borderRadius: "6px" }}>
          <MdVisibility className="text-sm" />
          Ver perfil
        </button>
      </div>
    </motion.div>
  );
}

// ─── Table Row ────────────────────────────────────────────────────────────────
function TableRow({ agricultor, index }) {
  const culturaIcon = getCulturaIcon(agricultor.cultura);

  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <td className="px-5 py-3 text-sm text-gray-700 flex items-center gap-1">
        <MdPhone className="text-xs text-gray-400" />
        {agricultor.telefone}
      </td>
      <td className="px-5 py-3 text-sm font-medium text-gray-900 flex items-center gap-1">
        <MdPerson className="text-xs text-[#2d8c6a]" />
        {agricultor.nome}
      </td>
      <td className="px-5 py-3 text-sm text-gray-700 flex items-center gap-1">
        {culturaIcon}
        {agricultor.cultura}
      </td>
      <td className="px-5 py-3 text-sm text-gray-700 flex items-center gap-1">
        <MdLocationOn className="text-xs text-gray-400" />
        {agricultor.endereco}
      </td>
      <td className="px-5 py-3 text-sm">
        <button className="text-[#2d8c6a] hover:underline font-medium flex items-center gap-1">
          <MdEdit className="text-sm" />
          Editar Perfil
        </button>
      </td>
      <td className="px-5 py-3 text-sm">
        <button className="text-[#2d8c6a] hover:underline font-medium flex items-center gap-1">
          <MdInfo className="text-sm" />
          Saiba mais
        </button>
      </td>
    </motion.tr>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AgricultorPage() {
  const [viewMode, setViewMode] = useState("card");
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
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MdPerson className="text-[#2d8c6a]" />
            Agricultor
          </h1>
          <p className="text-[#2d8c6a] text-sm font-medium mt-0.5 flex items-center gap-1">
            <MdAgriculture className="text-xs" />
            Auxílio Técnico
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button className="px-5 py-2.5 bg-[#1a2535] text-white text-xs font-semibold hover:bg-[#243045] transition-colors shadow-sm flex items-center gap-1" style={{ borderRadius: "6px" }}>
            <MdAdd className="text-sm" />
            Adicionar agricultor
          </button>

          {/* Search by phone */}
          <div className="relative">
            <input
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
              placeholder="Pesquisar por número de telemóvel"
              className="pl-10 pr-4 py-2.5 border border-gray-200 bg-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#2d8c6a]/30 shadow-sm"
              style={{ borderRadius: "6px" }}
            />
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        </div>
      </div>

      {/* ── Section header (bordas reduzidas) ── */}
      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden" style={{ borderRadius: "8px" }}>
        <div className="px-5 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-gray-900">Lista de agricultores</span>

            {/* View toggle */}
            <div className="flex items-center gap-1 bg-gray-100 p-1" style={{ borderRadius: "6px" }}>
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 transition-colors ${viewMode === "table" ? "bg-white shadow-sm text-[#2d8c6a]" : "text-gray-400 hover:text-gray-600"}`}
                style={{ borderRadius: "4px" }}
                title="Vista lista"
              >
                <MdTableRows className="text-base" />
              </button>
              <button
                onClick={() => setViewMode("card")}
                className={`p-1.5 transition-colors ${viewMode === "card" ? "bg-white shadow-sm text-[#2d8c6a]" : "text-gray-400 hover:text-gray-600"}`}
                style={{ borderRadius: "4px" }}
                title="Vista grelha"
              >
                <MdGridOn className="text-base" />
              </button>
            </div>
          </div>

          {/* Toggle filters */}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#2d8c6a] transition-colors"
          >
            <MdFilterList className="text-sm" />
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
                    className="appearance-none pl-3 pr-8 py-2 border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2d8c6a]/30 cursor-pointer"
                    style={{ borderRadius: "6px" }}
                  >
                    <option value="">Seleciona a cultura</option>
                    {CULTURAS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <MdFilterList className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
                </div>

                {/* Localidade filter */}
                <div className="relative">
                  <select
                    value={localidadeSel}
                    onChange={(e) => setLocalidadeSel(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2d8c6a]/30 cursor-pointer"
                    style={{ borderRadius: "6px" }}
                  >
                    <option value="">Seleciona a Localidade</option>
                    {LOCALIDADES.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                  <MdFilterList className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
                </div>

                {/* Clear */}
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-gray-200 text-sm text-gray-600 hover:border-[#2d8c6a] hover:text-[#2d8c6a] bg-white transition-colors"
                  style={{ borderRadius: "6px" }}
                >
                  Limpar Filtro
                </button>

                {/* Active filter chips */}
                {(culturaSel || localidadeSel) && (
                  <div className="flex gap-2 flex-wrap">
                    {culturaSel && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#e8f5ef] text-[#2d8c6a] text-xs font-medium" style={{ borderRadius: "4px" }}>
                        {culturaSel}
                        <button onClick={() => setCulturaSel("")} className="hover:text-[#1a5c43]">
                          <MdClose className="text-xs" />
                        </button>
                      </span>
                    )}
                    {localidadeSel && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#e8f5ef] text-[#2d8c6a] text-xs font-medium" style={{ borderRadius: "4px" }}>
                        {localidadeSel}
                        <button onClick={() => setLocalidadeSel("")} className="hover:text-[#1a5c43]">
                          <MdClose className="text-xs" />
                        </button>
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
              <MdSearch className="text-4xl" />
              <p className="text-sm">Nenhum agricultor encontrado com os filtros actuais.</p>
              <button onClick={clearFilters} className="text-[#2d8c6a] text-sm hover:underline">
                Limpar filtros
              </button>
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
                  className="overflow-x-auto border border-gray-200"
                  style={{ borderRadius: "6px" }}
                >
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1a2535] text-white">
                        <th className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">Número telefone</th>
                        <th className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">Nome</th>
                        <th className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">Cultura</th>
                        <th className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">Localidade</th>
                        <th className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">Editar Perfil</th>
                        <th className="px-5 py-3 text-sm font-semibold tracking-wide whitespace-nowrap">Gerar Simulado</th>
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
          <span>
            {filtered.length} agricultor{filtered.length !== 1 ? "es" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </span>
          <span className="text-[#2d8c6a] font-medium flex items-center gap-1">
            <MdAgriculture className="text-xs" />
            AgroClima · Auxílio Técnico
          </span>
        </div>
      </div>
    </div>
  );
}
