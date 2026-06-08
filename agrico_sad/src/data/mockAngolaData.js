// ─── data/mockAngolaData.js ─────────────────────────────────────

// Cores por nível de risco
export const NIVEIS_CONFIG = {
  critico: { label: "Crítico", bg: "bg-red-500", bgLight: "bg-red-100", text: "text-red-700", border: "border-red-200", dot: "bg-red-500", hex: "#ef4444" },
  alto:    { label: "Alto",    bg: "bg-orange-500", bgLight: "bg-orange-100", text: "text-orange-700", border: "border-orange-200", dot: "bg-orange-500", hex: "#f97316" },
  medio:   { label: "Médio",   bg: "bg-yellow-500", bgLight: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200", dot: "bg-yellow-500", hex: "#eab308" },
  baixo:   { label: "Baixo",   bg: "bg-green-500", bgLight: "bg-green-100", text: "text-green-700", border: "border-green-200", dot: "bg-green-500", hex: "#22c55e" },
};

// Províncias com coordenadas reais para o mapa
export const PROVINCIAS_MOCK = [
  { id: "luanda", nome: "Luanda", lat: -8.8383, lng: 13.2344, risco: "alto", bairros: ["Kilamba", "Talatona", "Cazenga", "Viana", "Belas", "Cacuaco"] },
  { id: "benguela", nome: "Benguela", lat: -12.5783, lng: 13.4072, risco: "medio", bairros: ["Lobito", "Catumbela", "Baía Farta", "Ganda"] },
  { id: "huila", nome: "Huíla", lat: -15.0667, lng: 13.4667, risco: "critico", bairros: ["Lubango", "Matala", "Chibia", "Chicomba"] },
  { id: "huambo", nome: "Huambo", lat: -12.7667, lng: 15.7333, risco: "alto", bairros: ["Caála", "Bailundo", "Londuimbali", "Ekunha"] },
  { id: "bie", nome: "Bié", lat: -12.3833, lng: 16.9333, risco: "medio", bairros: ["Cuíto", "Chinguar", "Catabola", "Camacupa"] },
  { id: "moxico", nome: "Moxico", lat: -13.4000, lng: 20.0000, risco: "baixo", bairros: ["Luena", "Cameia", "Léua", "Luchazes"] },
  { id: "namibe", nome: "Namibe", lat: -15.1961, lng: 12.1522, risco: "critico", bairros: ["Tômbua", "Camucuio", "Virei"] },
  { id: "cunene", nome: "Cunene", lat: -16.7500, lng: 14.9833, risco: "alto", bairros: ["Ondjiva", "Curoca", "Cuvelai", "Namacunde"] },
  { id: "malanje", nome: "Malanje", lat: -9.5333, lng: 16.3500, risco: "medio", bairros: ["Cacuso", "Kalandula", "Massango", "Marimba"] },
  { id: "uige", nome: "Uíge", lat: -7.6167, lng: 15.0500, risco: "baixo", bairros: ["Negage", "Quitexe", "Sanza Pombo", "Mucaba"] },
];

// Dados detalhados de riscos por província
export const RISCOS_DATA_MOCK = {
  luanda:   { seca: 45, chuva: 55, calor: 78, pragas: 62, lagarta: "alto", alerta: "Onda de calor urbana - risco para hortas periurbanas" },
  benguela: { seca: 75, chuva: 22, calor: 70, pragas: 45, lagarta: "medio", alerta: "Défice hídrico severo — irrigação urgente" },
  huila:    { seca: 85, chuva: 15, calor: 65, pragas: 92, lagarta: "critico", alerta: "Seca severa + surto de lagarta do cartucho" },
  huambo:   { seca: 40, chuva: 72, calor: 35, pragas: 68, lagarta: "alto", alerta: "Excesso de chuva — risco de encharcamento e fungos" },
  bie:      { seca: 50, chuva: 58, calor: 42, pragas: 55, lagarta: "medio", alerta: "Condições favoráveis a fungos foliares" },
  moxico:   { seca: 30, chuva: 70, calor: 35, pragas: 28, lagarta: "baixo", alerta: "Chuvas regulares - condições estáveis" },
  namibe:   { seca: 95, chuva: 3,  calor: 88, pragas: 12, lagarta: "baixo", alerta: "Seca extrema — zona de alto risco climático" },
  cunene:   { seca: 88, chuva: 10, calor: 82, pragas: 25, lagarta: "medio", alerta: "Temperaturas acima da média histórica" },
  malanje:  { seca: 42, chuva: 62, calor: 38, pragas: 72, lagarta: "alto", alerta: "Presença de gafanhotos reportada em 3 comunas" },
  uige:     { seca: 28, chuva: 78, calor: 32, pragas: 65, lagarta: "alto", alerta: "Excesso de precipitação — erosão do solo" },
};

// Dados de bairros por província (com coordenadas aproximadas)
export const BAIRROS_DATA = {
  luanda: [
    { nome: "Kilamba", lat: -9.001, lng: 13.187, risco: "alto", populacao: 120000 },
    { nome: "Talatona", lat: -8.887, lng: 13.222, risco: "medio", populacao: 85000 },
    { nome: "Cazenga", lat: -8.836, lng: 13.278, risco: "alto", populacao: 95000 },
    { nome: "Viana", lat: -8.899, lng: 13.373, risco: "critico", populacao: 150000 },
    { nome: "Belas", lat: -8.994, lng: 13.164, risco: "medio", populacao: 110000 },
  ],
  huila: [
    { nome: "Lubango", lat: -14.917, lng: 13.492, risco: "critico", populacao: 250000 },
    { nome: "Matala", lat: -14.733, lng: 15.033, risco: "alto", populacao: 45000 },
    { nome: "Chibia", lat: -15.183, lng: 13.683, risco: "medio", populacao: 32000 },
  ],
  namibe: [
    { nome: "Moçâmedes", lat: -15.196, lng: 12.152, risco: "critico", populacao: 180000 },
    { nome: "Tômbua", lat: -15.800, lng: 11.850, risco: "critico", populacao: 28000 },
  ],
};