import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hints = [
  {
    title: "COMO FAZER?",
    subtitle: "PREVINITE DE TODO TIPO DE PRAGA AGRÍCOLA",
    bg: [
      /* céu ao entardecer sobre plantação */
      "radial-gradient(ellipse 80% 60% at 50% 0%, #1a3a2a 0%, #0d2218 40%, #111827 100%)",
      /* overlay de folhagem escura */
      "linear-gradient(180deg, transparent 55%, #071510cc 100%)",
    ],
    /* cores do "chão" da ilustração SVG */
    accent: "#059669",
    shimmer: "#71F0C9",
  },
  {
    title: "SERÁ QUE?",
    subtitle: "ALTERAÇÃO É PRODUTIVA!",
    bg: [
      "radial-gradient(ellipse 80% 60% at 50% 0%, #0f2d1f 0%, #0a1e18 40%, #111827 100%)",
      "linear-gradient(180deg, transparent 55%, #04120ecc 100%)",
    ],
    accent: "#059669",
    shimmer: "#ECFDF5",
  },
  {
    title: "SAIBA MAIS",
    subtitle: "COMO REAGIR ÀS ALTERAÇÕES CLIMÁTICAS",
    bg: [
      "radial-gradient(ellipse 80% 60% at 50% 0%, #162b22 0%, #0d2218 40%, #111827 100%)",
      "linear-gradient(180deg, transparent 55%, #071510cc 100%)",
    ],
    accent: "#71F0C9",
    shimmer: "#059669",
  },
];

const floatingDots = [
  { x: "38%", y: "18%" },
  { x: "22%", y: "53%" },
  { x: "34%", y: "72%" },
];

/* ── SVG plantation silhouettes por slide ── */
const PlantationScene = ({ index, accent, shimmer }) => {
  const scenes = [
    /* Slide 0 — fileiras de milho / cana */
    <g key="scene0">
      {/* solo */}
      <rect x="0" y="680" width="660" height="120" fill="#071510" opacity="0.9"/>
      {/* fileiras de terra */}
      {[0,1,2,3,4,5].map(i => (
        <ellipse key={i} cx={55 + i*110} cy="686" rx="48" ry="7" fill="#0a1e14" opacity="0.8"/>
      ))}
      {/* plantas — caules */}
      {[0,1,2,3,4,5].map(i =>
        [0,1,2].map(j => {
          const bx = 30 + i*110 + j*22;
          const h  = 120 + Math.sin(i*3+j)*30;
          return (
            <g key={`${i}-${j}`}>
              <line x1={bx} y1="686" x2={bx} y2={686-h} stroke={accent} strokeWidth="1.5" strokeOpacity="0.5"/>
              {/* folhas */}
              <path d={`M${bx} ${686-h*0.5} Q${bx+18} ${686-h*0.5-22} ${bx+28} ${686-h*0.5-10}`}
                fill="none" stroke={shimmer} strokeWidth="1" strokeOpacity="0.35"/>
              <path d={`M${bx} ${686-h*0.5} Q${bx-18} ${686-h*0.5-18} ${bx-26} ${686-h*0.5-8}`}
                fill="none" stroke={shimmer} strokeWidth="1" strokeOpacity="0.35"/>
              {/* espiga / topo */}
              <ellipse cx={bx} cy={686-h} rx="3" ry="8" fill={accent} opacity="0.5"/>
            </g>
          );
        })
      )}
    </g>,

    /* Slide 1 — horta com canteiros */
    <g key="scene1">
      <rect x="0" y="690" width="660" height="110" fill="#04120e" opacity="0.95"/>
      {/* canteiros */}
      {[0,1,2].map(i => (
        <rect key={i} x={40+i*210} y="668" width="180" height="28" rx="4"
          fill="#071510" stroke={accent} strokeWidth="0.8" strokeOpacity="0.4"/>
      ))}
      {/* plantas baixas — folhas redondas */}
      {[0,1,2].map(row =>
        [0,1,2,3,4,5,6].map(col => {
          const cx = 55 + row*210 + col*26;
          const cy = 658;
          const h  = 40 + Math.sin(row*2+col)*20;
          return (
            <g key={`${row}-${col}`}>
              <line x1={cx} y1={cy+10} x2={cx} y2={cy+10-h} stroke={accent} strokeWidth="1.2" strokeOpacity="0.4"/>
              <ellipse cx={cx} cy={cy+10-h} rx="5" ry="4" fill={shimmer} opacity="0.25"/>
              <path d={`M${cx} ${cy+10-h*0.6} Q${cx+14} ${cy+10-h*0.6-12} ${cx+20} ${cy+10-h*0.6-4}`}
                fill="none" stroke={shimmer} strokeWidth="1" strokeOpacity="0.3"/>
            </g>
          );
        })
      )}
    </g>,

    /* Slide 2 — árvores + termômetro de temperatura */
    <g key="scene2">
      <rect x="0" y="670" width="660" height="130" fill="#071510" opacity="0.9"/>
      {/* árvores */}
      {[0,1,2,3,4].map(i => {
        const bx = 60 + i*130;
        const h  = 160 + Math.sin(i*1.8)*30;
        return (
          <g key={i}>
            <rect x={bx-4} y={670-h} width="8" height={h} fill="#0a1e14" opacity="0.9"/>
            {/* copa em 3 camadas */}
            <ellipse cx={bx} cy={670-h-30} rx={30+i*4} ry={28} fill={accent} opacity="0.18"/>
            <ellipse cx={bx} cy={670-h-20} rx={24+i*3} ry={22} fill={accent} opacity="0.22"/>
            <ellipse cx={bx} cy={670-h-8}  rx={18+i*2} ry={16} fill={shimmer} opacity="0.18"/>
          </g>
        );
      })}
      {/* ondas de calor */}
      {[0,1,2].map(i => (
        <path key={i}
          d={`M${100+i*180} 520 Q${130+i*180} 500 ${160+i*180} 520 Q${190+i*180} 540 ${220+i*180} 520`}
          fill="none" stroke={shimmer} strokeWidth="1" strokeOpacity={0.12+i*0.06} strokeDasharray="4 4"/>
      ))}
    </g>,
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 660 800"
      preserveAspectRatio="xMidYMax slice"
      style={{ zIndex: 0, pointerEvents: "none" }}
    >
      <AnimatePresence mode="wait">
        <motion.g
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {scenes[index]}
        </motion.g>
      </AnimatePresence>
    </svg>
  );
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setHintIndex((i) => (i + 1) % hints.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

    const wave1 = "M 340 0 L 340 800 L 200 800 Q 260 720 230 650 Q 200 580 250 500 Q 290 430 240 360 Q 190 290 250 210 Q 300 140 260 70 Q 240 35 270 0 Z";
    const wave2 = "M 340 0 L 340 800 L 220 800 Q 290 710 250 630 Q 210 550 270 460 Q 310 390 260 310 Q 210 230 275 150 Q 320 80 280 0 Z";
    const wave3 = "M 340 0 L 340 800 L 240 800 Q 310 700 265 610 Q 225 530 290 440 Q 330 365 275 280 Q 225 200 295 115 Q 335 55 295 0 Z";

    const current = hints[hintIndex];

    const navigate=useNavigate()

  return (
    <div
      className="min-h-screen w-full flex overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {/* ════ LEFT PANEL ════ */}
      <div className="relative flex-1 flex flex-col justify-center pl-14 pr-0 overflow-hidden">

        {/* ── Background gradient animado por slide ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${hintIndex}`}
            className="absolute inset-0"
            style={{ background: current.bg[0], zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* overlay escurecedor fixo */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #04120ecc 50%, #04120ecc 100%)",
            zIndex: 1,
          }}
        />

        {/* ── Ilustração SVG da plantação ── */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <PlantationScene
            index={hintIndex}
            accent={current.accent}
            shimmer={current.shimmer}
          />
        </div>

        {/* ── Stars / partículas de luz ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 2, pointerEvents: "none" }}
        >
          {[...Array(18)].map((_, i) => (
            <motion.circle
              key={`star-${i}`}
              cx={`${8 + i * 5.2}%`}
              cy={`${10 + (i % 5) * 9}%`}
              r={i % 3 === 0 ? 1.5 : 1}
              fill="#ECFDF5"
              animate={{ opacity: [0.1, 0.6, 0.1] }}
              transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>

        {/* ── SVG blob divider ── */}
        <svg
          className="absolute inset-y-0 right-0 h-full"
          style={{ width: "340px", zIndex: 5 }}
          viewBox="0 0 340 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path d={wave1} fill="#ECFDF520"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }} />
          <motion.path d={wave2} fill="#05966920"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }} />
          <motion.path d={wave3} fill="#ffffff"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} />
        </svg>

        {/* ── Constellation dots + lines ── */}
        <svg
          className="absolute inset-0 w-full h-full translate-x-10"
          style={{ zIndex: 3, pointerEvents: "none" }}
        >
          {floatingDots.map((d, i) =>
            i < floatingDots.length - 1 ? (
              <motion.line key={`line-${i}`}
                x1={floatingDots[i].x} y1={floatingDots[i].y}
                x2={floatingDots[i + 1].x} y2={floatingDots[i + 1].y}
                stroke="#71F0C9" strokeWidth="1.5" strokeOpacity="0.4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.8 + i * 0.3, duration: 0.9 }} />
            ) : null
          )}
          {floatingDots.map((d, i) => (
            <motion.circle key={`dot-${i}`}
              cx={d.x} cy={d.y} r="5" fill="#71F0C9"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.25, type: "spring", stiffness: 200 }} />
          ))}
        </svg>

        {/* ── Brand ── */}
        <motion.div className="relative mb-10" style={{ zIndex: 6 }}
          initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}>
          <p className="text-2xl font-bold text-agro-teal" style={{ color: "#71F0C9", letterSpacing: "0.15em" }}>
            AgroDecide
          </p>
          <p className="text-4xl font-extrabold text-white tracking-wider mt-1 uppercase"
            style={{ letterSpacing: "0.08em" }}>
            SEU ASSISTENTE<br />VIRTUAL
          </p>
        </motion.div>

        {/* ── Rotating hints ── */}
        <div className="relative h-28 overflow-hidden" style={{ zIndex: 6 }}>
          <AnimatePresence mode="wait">
            <motion.div key={hintIndex}
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute">
              <p className="text-lg font-bold tracking-widest uppercase mb-1"
                style={{ color: current.shimmer, opacity: 0.75 }}>
                {hints[hintIndex].title}
              </p>
              <p className="text-white text-base font-semibold tracking-wide max-w-xs leading-snug">
                {hints[hintIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Dots indicadores do carrossel ── */}
        <div className="flex gap-2 mt-2" style={{ zIndex: 6, position: "relative" }}>
          {hints.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === hintIndex ? 24 : 8,
                background: i === hintIndex ? "#71F0C9" : "#ffffff44",
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full cursor-pointer"
              onClick={() => setHintIndex(i)}
            />
          ))}
        </div>

        {/* ── Watermark ── */}
        <motion.p
          className="absolute bottom-8 left-14 text-sm font-semibold tracking-widest uppercase"
          style={{ opacity: 0.2, color: "#71F0C9", zIndex: 6 }}
          initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.4 }}>
          ALTERAÇÃO É PRODUTIVA!
        </motion.p>
      </div>

      {/* ════ RIGHT PANEL ════ */}
      <div className="relative flex items-center justify-center"
        style={{ width: "520px", minWidth: "420px" }}>
        <motion.div className="w-full max-w-md px-8"
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.75, ease: "easeOut" }}>

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 140 }}>
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
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Agro<span style={{ color: "#059669" }}>Decide</span>
            </span>
          </div>

          <FloatingField label="Insira seu email" value={email} type="email"
            focused={emailFocused} onChange={setEmail}
            onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} delay={0.7} />

          <FloatingField label="Insira sua senha" value={password} type="password"
            focused={passFocused} onChange={setPassword}
            onFocus={() => setPassFocused(true)} onBlur={() => setPassFocused(false)} delay={0.85} accent />

          <motion.button
            className="w-full mt-8 py-4 rounded-xl text-white font-semibold text-xs uppercase"
            style={{ background: "#111827", letterSpacing: "0.12em" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.025, background: "#059669" }}
            whileTap={{ scale: 0.97 }}
            onClick={()=> {
              localStorage.setItem('userType', 'tecnico');
              navigate("/dashboard")
            }}
            >
            Entrar
          </motion.button>

          <motion.p className="text-center mt-5 text-xs text-gray-500 cursor-pointer transition-colors"
            style={{}} onMouseEnter={e => e.target.style.color = "#059669"}
            onMouseLeave={e => e.target.style.color = ""}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
            Criar Conta
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

function FloatingField({ label, value, type, focused, onChange, onFocus, onBlur, delay, accent }) {
  const active = focused || value.length > 0;
  return (
    <motion.div className="relative mb-6"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}>
      <input type={type} value={value} onFocus={onFocus} onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pt-5 pb-2 px-0 bg-transparent border-0 border-b text-gray-900 text-xs outline-none"
        style={{
          borderBottomColor: focused ? (accent ? "#059669" : "#111827") : "#d1d5db",
          borderBottomWidth: "1.5px",
          transition: "border-color 0.25s",
        }} />
      <label className="absolute left-0 pointer-events-none font-medium"
        style={{
          color: accent ? "#059669" : "#9ca3af",
          fontSize: active ? "12px" : "14px",
          top: active ? "0px" : "18px",
          transition: "all 0.2s ease",
        }}>
        {label}
      </label>
      <motion.div className="absolute bottom-0 left-0 h-px"
        style={{ background: accent ? "#059669" : "#111827" }}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.3 }} />
    </motion.div>
  );
}
