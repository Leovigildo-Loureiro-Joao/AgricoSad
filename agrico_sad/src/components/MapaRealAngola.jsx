// ─── components/MapaRealAngola.jsx ──────────────────────────────
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MdLocationOn, MdWarning, MdBugReport, MdWaterDrop, MdHeatPump, MdThunderstorm } from "react-icons/md";
import { WiThermometer, WiRaindrop, WiHurricane } from "react-icons/wi";
import { GiCorn, GiPlantRoots } from "react-icons/gi";

// 🔧 FIX CRÍTICO: Corrigir ícones do Leaflet no React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Cores por nível de risco
const NIVEIS_CONFIG = {
  critico: { label: "Crítico", bg: "bg-red-500", hex: "#ef4444" },
  alto:    { label: "Alto",    bg: "bg-orange-500", hex: "#f97316" },
  medio:   { label: "Médio",   bg: "bg-yellow-500", hex: "#eab308" },
  baixo:   { label: "Baixo",   bg: "bg-green-500", hex: "#22c55e" },
};

// Dados MOCK das províncias (com coordenadas reais)
const PROVINCIAS_MOCK = [
  { id: "luanda", nome: "Luanda", lat: -8.8383, lng: 13.2344, risco: "alto", bairros: ["Kilamba", "Talatona", "Cazenga"] },
  { id: "benguela", nome: "Benguela", lat: -12.5783, lng: 13.4072, risco: "medio", bairros: ["Lobito", "Catumbela"] },
  { id: "huila", nome: "Huíla", lat: -15.0667, lng: 13.4667, risco: "critico", bairros: ["Lubango", "Matala"] },
  { id: "huambo", nome: "Huambo", lat: -12.7667, lng: 15.7333, risco: "alto", bairros: ["Caála", "Bailundo"] },
  { id: "bie", nome: "Bié", lat: -12.3833, lng: 16.9333, risco: "medio", bairros: ["Cuíto", "Chinguar"] },
  { id: "moxico", nome: "Moxico", lat: -13.4000, lng: 20.0000, risco: "baixo", bairros: ["Luena", "Cameia"] },
  { id: "namibe", nome: "Namibe", lat: -15.1961, lng: 12.1522, risco: "critico", bairros: ["Moçâmedes", "Tômbua"] },
  { id: "cunene", nome: "Cunene", lat: -16.7500, lng: 14.9833, risco: "alto", bairros: ["Ondjiva", "Curoca"] },
  { id: "malanje", nome: "Malanje", lat: -9.5333, lng: 16.3500, risco: "medio", bairros: ["Cacuso", "Kalandula"] },
  { id: "uige", nome: "Uíge", lat: -7.6167, lng: 15.0500, risco: "baixo", bairros: ["Negage", "Quitexe"] },
  { id: "zaire", nome: "Zaire", lat: -6.2667, lng: 14.2500, risco: "baixo", bairros: ["Mbanza Kongo", "Soyo"] },
  { id: "cabinda", nome: "Cabinda", lat: -5.5500, lng: 12.2000, risco: "baixo", bairros: ["Cabinda", "Cacongo"] },
  { id: "bengo", nome: "Bengo", lat: -8.7833, lng: 13.5000, risco: "medio", bairros: ["Caxito", "Dande"] },
  { id: "kwanza_sul", nome: "Kwanza Sul", lat: -11.2000, lng: 14.5000, risco: "medio", bairros: ["Sumbe", "Porto Amboim"] },
  { id: "kwanza_norte", nome: "Kwanza Norte", lat: -9.3000, lng: 14.9000, risco: "baixo", bairros: ["Ndalatando", "Cambambe"] },
  { id: "lunda_sul", nome: "Lunda Sul", lat: -10.3000, lng: 20.7000, risco: "baixo", bairros: ["Saurimo", "Muconda"] },
  { id: "lunda_norte", nome: "Lunda Norte", lat: -8.3000, lng: 19.6000, risco: "baixo", bairros: ["Dundo", "Lucapa"] },
];

// Dados de risco por província
const RISCOS_DATA_MOCK = {
  luanda:   { seca: 45, chuva: 55, calor: 78, pragas: 62, lagarta: "alto", alerta: "Onda de calor urbana - risco para hortas" },
  benguela: { seca: 75, chuva: 22, calor: 70, pragas: 45, lagarta: "medio", alerta: "Défice hídrico severo" },
  huila:    { seca: 85, chuva: 15, calor: 65, pragas: 92, lagarta: "critico", alerta: "Surto de lagarta do cartucho" },
  huambo:   { seca: 40, chuva: 72, calor: 35, pragas: 68, lagarta: "alto", alerta: "Excesso de chuva - risco de fungos" },
  bie:      { seca: 50, chuva: 58, calor: 42, pragas: 55, lagarta: "medio", alerta: "Condições favoráveis a fungos" },
  moxico:   { seca: 30, chuva: 70, calor: 35, pragas: 28, lagarta: "baixo", alerta: "Condições estáveis" },
  namibe:   { seca: 95, chuva: 3,  calor: 88, pragas: 12, lagarta: "baixo", alerta: "Seca extrema - risco climático" },
  cunene:   { seca: 88, chuva: 10, calor: 82, pragas: 25, lagarta: "medio", alerta: "Temperaturas acima da média" },
  malanje:  { seca: 42, chuva: 62, calor: 38, pragas: 72, lagarta: "alto", alerta: "Gafanhotos reportados" },
  uige:     { seca: 28, chuva: 78, calor: 32, pragas: 65, lagarta: "alto", alerta: "Erosão do solo por chuva" },
  zaire:    { seca: 32, chuva: 68, calor: 36, pragas: 44, lagarta: "medio", alerta: "Humidade elevada" },
  cabinda:  { seca: 20, chuva: 82, calor: 30, pragas: 40, lagarta: "baixo", alerta: "Chuva intensa" },
  bengo:    { seca: 48, chuva: 52, calor: 50, pragas: 46, lagarta: "medio", alerta: "Condições mistas" },
  kwanza_sul: { seca: 55, chuva: 45, calor: 52, pragas: 42, lagarta: "medio", alerta: "Variação térmica" },
  kwanza_norte: { seca: 42, chuva: 55, calor: 44, pragas: 50, lagarta: "medio", alerta: "Monitorar pragas" },
  lunda_sul: { seca: 35, chuva: 62, calor: 45, pragas: 48, lagarta: "medio", alerta: "Chuvas irregulares" },
  lunda_norte: { seca: 30, chuva: 70, calor: 38, pragas: 52, lagarta: "alto", alerta: "Doenças fúngicas" },
};

// Componente para centralizar o mapa
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center && center.lat && center.lng) {
      map.setView([center.lat, center.lng], zoom);
    }
  }, [center, zoom, map]);
  return null;
}

// Marcador customizado com cor por risco (sem emojis)
const getCustomIcon = (risco) => {
  const colors = {
    critico: "#ef4444",
    alto: "#f97316",
    medio: "#eab308",
    baixo: "#22c55e"
  };
  const color = colors[risco] || "#3b82f6";

  return L.divIcon({
    html: `<div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
      font-weight: bold;
    "></div>`,
    iconSize: [24, 24],
    popupAnchor: [0, -12],
    className: "custom-marker"
  });
};

// Componente principal do mapa
export function MapaRealAngola({ selectedProvince, onSelectProvince, onViewRisco }) {
  const [mapCenter, setMapCenter] = useState({ lat: -11.2027, lng: 17.8739 });
  const [mapZoom, setMapZoom] = useState(6);

  const handleMarkerClick = (prov) => {
    setMapCenter({ lat: prov.lat, lng: prov.lng });
    setMapZoom(10);
    onSelectProvince(prov);
    if (onViewRisco) onViewRisco(prov.id);
  };

  return (
    <div className="relative w-full h-[550px] rounded-lg overflow-hidden border border-gray-200 shadow-xl">
      <MapContainer
        center={[mapCenter.lat, mapCenter.lng]}
        zoom={mapZoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {PROVINCIAS_MOCK.map((prov) => (
          <Marker
            key={prov.id}
            position={[prov.lat, prov.lng]}
            icon={getCustomIcon(prov.risco)}
            eventHandlers={{
              click: () => handleMarkerClick(prov)
            }}
          >
            <Popup>
              <div className="text-center min-w-[180px]">
                <strong className="text-gray-800 text-base">{prov.nome}</strong>
                <div className={`mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${NIVEIS_CONFIG[prov.risco]?.bg || "bg-gray-500"} text-white`}>
                  {NIVEIS_CONFIG[prov.risco]?.label || "Desconhecido"}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <div className="flex items-center justify-center gap-1">
                    <MdLocationOn className="text-xs" />
                    {prov.lat.toFixed(4)}°, {prov.lng.toFixed(4)}°
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <GiPlantRoots className="text-xs" />
                    {prov.bairros.length} bairros monitorados
                  </div>
                </div>
                <button
                  onClick={() => onSelectProvince(prov)}
                  className="mt-2 w-full px-3 py-1 bg-[#2d8c6a] text-white text-xs rounded-lg hover:bg-[#236b4f] transition-colors flex items-center justify-center gap-1"
                >
                  <MdWarning className="text-xs" />
                  Ver detalhes do risco
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        <ChangeView center={mapCenter} zoom={mapZoom} />
      </MapContainer>

      {/* Legenda do mapa */}
      <div className="absolute bottom-4 left-4 z-[1000] rounded-lg border border-gray-200 bg-white/95 p-3 text-xs shadow-md backdrop-blur-sm">
        <p className="font-semibold text-gray-700 mb-2 flex items-center gap-1">
          <MdWarning className="text-sm" />
          Nível de Risco
        </p>
        {Object.entries(NIVEIS_CONFIG).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-2 mb-1.5">
            <div className={`w-3 h-3 rounded-full ${cfg.bg}`} />
            <span className="text-gray-600">{cfg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente de detalhes da província
export function DetalhesProvincia({ provinciaId }) {
  if (!provinciaId) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
        <MdLocationOn className="text-4xl text-gray-300 mx-auto mb-2" />
        <p className="text-gray-400">Clique em uma província no mapa para ver os detalhes</p>
      </div>
    );
  }

  const prov = PROVINCIAS_MOCK.find(p => p.id === provinciaId);
  const riscos = RISCOS_DATA_MOCK[provinciaId];
  const nivel = NIVEIS_CONFIG[prov?.risco];

  if (!prov || !riscos) return null;

  const RiscoBar = ({ label, value, color, icon: Icon }) => {
    const colors = { orange: "bg-orange-400", teal: "bg-teal-400", red: "bg-red-400", yellow: "bg-yellow-400" };
    return (
      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <div className="flex items-center gap-1">
            <Icon className="text-sm" />
            <span>{label}</span>
          </div>
          <span className="font-medium text-gray-700">{value}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${colors[color]}`} style={{ width: `${value}%` }} />
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-1">
            <MdLocationOn className="text-[#2d8c6a]" />
            {prov.nome}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
            <GiPlantRoots className="text-xs" />
            {prov.bairros.length} bairros monitorados
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${nivel?.bg}`}>
          {nivel?.label}
        </span>
      </div>

      <div className="space-y-3">
        <RiscoBar label="Seca" value={riscos.seca} color="orange" icon={MdWaterDrop} />
        <RiscoBar label="Excesso de Chuva" value={riscos.chuva} color="teal" icon={WiRaindrop} />
        <RiscoBar label="Calor Extremo" value={riscos.calor} color="red" icon={WiThermometer} />
        <RiscoBar label="Índice de Pragas" value={riscos.pragas} color="yellow" icon={MdBugReport} />
      </div>

      <div className={`mt-4 rounded-lg border ${nivel?.bg} bg-opacity-20 border-opacity-30 p-3`}>
        <p className="text-sm font-medium text-gray-700 flex items-start gap-1">
          <MdWarning className="text-sm mt-0.5 flex-shrink-0" />
          <span><span className="font-bold">Alerta:</span> {riscos.alerta}</span>
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
          Risco de lagarta: <strong>{riscos.lagarta.toUpperCase()}</strong>
        </p>
      </div>
    </div>
  );
}
