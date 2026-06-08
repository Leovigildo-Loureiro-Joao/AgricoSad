import { useState } from "react";
import { MapaRealAngola, DetalhesProvincia } from "../../components/MapaRealAngola";

export default function MapaRiscosPage() {
  const [selectedProvinciaId, setSelectedProvinciaId] = useState(null);

  return (
    <div className="space-y-6 p-6 font-body">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Mapa Riscos</h1>
        <p className="mt-2 text-xs text-slate-500">
          Visao geral dos focos de risco e monitoramento por provincia.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <MapaRealAngola
            selectedProvince={selectedProvinciaId}
            onSelectProvince={(prov) => setSelectedProvinciaId(prov.id)}
            onViewRisco={setSelectedProvinciaId}
          />
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <DetalhesProvincia provinciaId={selectedProvinciaId} />
        </div>
      </div>
    </div>
  );
}
