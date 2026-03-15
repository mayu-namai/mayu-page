// SVG decorative components for organic illustrated layout

/**
 * Sawtooth divider — uniform triangular teeth pointing upward.
 * Use `absolute bottom-0 left-0 right-0` inside a `relative overflow-hidden` container
 * so the teeth visually "bite into" the content above.
 */
export function SawtoothDivider({
  fill = "white",
  count = 14,
  height = 80,
}: {
  fill?: string;
  count?: number;
  height?: number;
}) {
  const W = 1440;
  let d = `M0,${height}`;
  const T = W / count;
  for (let i = 0; i < count; i++) {
    d += ` L${((i + 0.5) * T).toFixed(1)},6 L${((i + 1) * T).toFixed(1)},${height}`;
  }
  d += " Z";
  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 right-0 w-full block"
      style={{ height: "clamp(44px, 6vw, 96px)" }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d={d} fill={fill} />
    </svg>
  );
}

/** Wave divider — placed at BOTTOM of dark section, fills with next section's bg color */
export function WaveDivider({ fill = "white" }: { fill?: string }) {
  return (
    <div className="-mb-1 leading-none">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "clamp(40px, 5vw, 80px)" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,10 720,45 C960,80 1200,15 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/** Mountain divider — placed at BOTTOM of light section, fills with dark section's bg color */
export function MountainDivider({ fill = "#0e0b2e" }: { fill?: string }) {
  return (
    <div className="-mb-1 leading-none">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "clamp(40px, 5vw, 80px)" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 L200,25 L380,58 L560,8 L740,42 L920,4 L1100,32 L1280,12 L1440,28 L1440,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/** Large crescent moon decoration — use `currentColor` for cut-out circle color (must match bg) */
export function MoonDecoration({
  className,
  bgColor = "transparent",
  glowColor = "rgb(244 114 182 / 0.18)",
}: {
  className?: string;
  bgColor?: string;
  glowColor?: string;
}) {
  return (
    <div className={`pointer-events-none select-none ${className ?? ""}`} aria-hidden>
      <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="64" fill={glowColor} />
        <circle cx="94" cy="60" r="58" fill={bgColor} />
      </svg>
    </div>
  );
}

/** 4-point star sparkle */
export function StarSparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current ${className ?? ""}`}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1 L13.8 10.2 L23 12 L13.8 13.8 L12 23 L10.2 13.8 L1 12 L10.2 10.2 Z" />
    </svg>
  );
}

/** Small dot cluster accent */
export function DotCluster({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none ${className ?? ""}`}
      aria-hidden
      style={{
        backgroundImage: "radial-gradient(circle, currentColor 1.2px, transparent 1.2px)",
        backgroundSize: "10px 10px",
      }}
    />
  );
}

/**
 * Full illustrated scene: cherry blossom tree + moon + lunar ground.
 * Dark navy sky, pale blue-white moon, pink blossoms, cool-gray rocky ground.
 * preserveAspectRatio="xMidYMin slice" — crops from top, so landscape containers
 * show moon + blossoms. Portrait 3:4 containers (hero) show the full scene.
 */
export function CosmicSakuraIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className ?? ""}`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="csi-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#010308" />
          <stop offset="45%"  stopColor="#030b1c" />
          <stop offset="100%" stopColor="#081422" />
        </linearGradient>
        <radialGradient id="csi-moon-halo" cx="73%" cy="28%" r="45%">
          <stop offset="0%"   stopColor="#90b8e0" stopOpacity="0.22" />
          <stop offset="50%"  stopColor="#4070b0" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#000820" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="csi-moon-fill" cx="40%" cy="38%" r="60%">
          <stop offset="0%"   stopColor="#eef4fc" />
          <stop offset="65%"  stopColor="#d8e8f4" />
          <stop offset="100%" stopColor="#b8ccde" />
        </radialGradient>
        <linearGradient id="csi-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#a4b2c4" />
          <stop offset="100%" stopColor="#687898" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="300" height="400" fill="url(#csi-sky)" />

      {/* Moon atmospheric halo */}
      <ellipse cx="215" cy="108" rx="95" ry="88" fill="url(#csi-moon-halo)" />

      {/* Clouds behind moon */}
      <ellipse cx="120" cy="148" rx="82" ry="22" fill="#384e68" opacity="0.5" />
      <ellipse cx="105" cy="142" rx="62" ry="16" fill="#4a6080" opacity="0.4" />
      <ellipse cx="260" cy="170" rx="55" ry="18" fill="#384e68" opacity="0.45" />

      {/* Moon */}
      <circle cx="215" cy="108" r="62" fill="url(#csi-moon-fill)" />
      {/* Moon craters */}
      <circle cx="194" cy="90"  r="9"   fill="#c4d4e8" opacity="0.40" />
      <circle cx="228" cy="125" r="6"   fill="#bccede" opacity="0.35" />
      <circle cx="198" cy="124" r="4"   fill="#c4d4e8" opacity="0.30" />
      <circle cx="220" cy="96"  r="3"   fill="#b8c8dc" opacity="0.30" />
      <circle cx="237" cy="110" r="5"   fill="#bccede" opacity="0.25" />
      <circle cx="210" cy="138" r="3.5" fill="#b8c8dc" opacity="0.25" />

      {/* Clouds in front */}
      <ellipse cx="148" cy="155" rx="88" ry="24" fill="#2c4460" opacity="0.6" />
      <ellipse cx="130" cy="150" rx="66" ry="18" fill="#3a5878" opacity="0.45" />
      <ellipse cx="15"  cy="135" rx="50" ry="16" fill="#384e68" opacity="0.5" />
      <ellipse cx="280" cy="140" rx="45" ry="14" fill="#2c4460" opacity="0.45" />

      {/* ═══ TREE ═══ */}
      {/* Trunk outer shadow */}
      <path d="M50,400 C48,368 54,338 58,308 C62,278 66,256 62,228 C58,202 50,182 54,155 C56,142 58,132 56,118"
        stroke="#1c1008" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Trunk mid */}
      <path d="M50,400 C49,368 55,338 59,308 C63,278 67,256 63,228 C59,202 51,182 55,155 C57,142 59,132 57,118"
        stroke="#2e1a10" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Trunk highlight */}
      <path d="M52,380 C51,355 56,330 60,305 C63,280 66,260 63,235 C60,210 55,190 57,162"
        stroke="#3a2415" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Main branch — sweeping right */}
      <path d="M56,118 C68,100 88,86 115,72 C140,59 168,50 195,42"
        stroke="#1c1008" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M56,118 C68,101 88,87 115,73 C140,60 168,51 195,43"
        stroke="#2e1a10" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Upper-left branch */}
      <path d="M56,118 C44,102 32,84 26,62 C20,42 24,24 28,10"
        stroke="#1c1008" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M56,118 C44,103 32,85 26,63 C20,43 24,25 28,11"
        stroke="#2e1a10" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Sub-branches */}
      <path d="M115,72 C118,56 116,40 122,26"  stroke="#1c1008" strokeWidth="5"   fill="none" strokeLinecap="round" />
      <path d="M155,56 C158,40 162,26 168,14"  stroke="#1c1008" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M195,42 C205,34 218,26 226,20"  stroke="#2e1a10" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M195,42 C202,50 212,54 222,56"  stroke="#2e1a10" strokeWidth="3"   fill="none" strokeLinecap="round" />
      <path d="M195,42 C198,36 204,30 210,26"  stroke="#2e1a10" strokeWidth="3"   fill="none" strokeLinecap="round" />
      <path d="M28,10  C22,4   18,-2  20,-12"  stroke="#2e1a10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M28,10  C34,4   42,0   48,-4"   stroke="#2e1a10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M58,230 C70,218 82,212 95,208"  stroke="#2e1a10" strokeWidth="3"   fill="none" strokeLinecap="round" />
      <path d="M60,270 C48,258 42,248 38,235"  stroke="#2e1a10" strokeWidth="3"   fill="none" strokeLinecap="round" />

      {/* ═══ BLOSSOM CLUSTERS ═══ */}

      {/* RIGHT cluster — main branch tip */}
      <circle cx="180" cy="55"  r="10" fill="#e088a0" opacity="0.85" />
      <circle cx="190" cy="45"  r="12" fill="#e890a8" opacity="0.90" />
      <circle cx="202" cy="38"  r="10" fill="#f0a0b8" opacity="0.85" />
      <circle cx="196" cy="58"  r="9"  fill="#d87898" opacity="0.80" />
      <circle cx="212" cy="48"  r="11" fill="#e890a8" opacity="0.90" />
      <circle cx="220" cy="38"  r="9"  fill="#f0a8b8" opacity="0.85" />
      <circle cx="220" cy="56"  r="8"  fill="#d87898" opacity="0.75" />
      <circle cx="226" cy="28"  r="8"  fill="#e890a8" opacity="0.80" />
      <circle cx="208" cy="28"  r="9"  fill="#f0a0b8" opacity="0.85" />
      <circle cx="174" cy="44"  r="8"  fill="#e888a0" opacity="0.80" />
      <circle cx="230" cy="46"  r="7"  fill="#d87090" opacity="0.70" />
      <circle cx="215" cy="65"  r="7"  fill="#e07898" opacity="0.75" />
      <circle cx="196" cy="68"  r="7"  fill="#d87898" opacity="0.70" />
      <circle cx="185" cy="38"  r="8"  fill="#f4b0c4" opacity="0.85" />
      <circle cx="166" cy="54"  r="7"  fill="#e888a0" opacity="0.80" />
      <circle cx="194" cy="42"  r="6"  fill="#f8c8d8" opacity="0.90" />
      <circle cx="210" cy="52"  r="5"  fill="#f8c4d4" opacity="0.85" />
      <circle cx="202" cy="30"  r="5"  fill="#f8c8d8" opacity="0.80" />
      <circle cx="220" cy="42"  r="5"  fill="#f4b8cc" opacity="0.85" />
      <circle cx="182" cy="48"  r="5"  fill="#f8c0d0" opacity="0.80" />

      {/* MIDDLE cluster — mid sub-branch */}
      <circle cx="120" cy="36"  r="10" fill="#e890a8" opacity="0.90" />
      <circle cx="130" cy="28"  r="9"  fill="#f0a0b8" opacity="0.85" />
      <circle cx="112" cy="28"  r="8"  fill="#e078a0" opacity="0.80" />
      <circle cx="122" cy="20"  r="8"  fill="#e890a8" opacity="0.85" />
      <circle cx="132" cy="20"  r="7"  fill="#f0a8b8" opacity="0.80" />
      <circle cx="140" cy="28"  r="7"  fill="#e888a0" opacity="0.80" />
      <circle cx="108" cy="20"  r="7"  fill="#d87898" opacity="0.75" />
      <circle cx="125" cy="14"  r="6"  fill="#f0a0b8" opacity="0.80" />
      <circle cx="118" cy="44"  r="7"  fill="#e07898" opacity="0.75" />
      <circle cx="124" cy="22"  r="5"  fill="#f8c4d4" opacity="0.90" />
      <circle cx="130" cy="34"  r="4"  fill="#f8c8d8" opacity="0.85" />

      {/* FAR RIGHT cluster — second sub-branch */}
      <circle cx="162" cy="22"  r="9"  fill="#e890a8" opacity="0.90" />
      <circle cx="172" cy="14"  r="8"  fill="#f0a0b8" opacity="0.85" />
      <circle cx="154" cy="14"  r="7"  fill="#e080a0" opacity="0.80" />
      <circle cx="164" cy="8"   r="7"  fill="#e890a8" opacity="0.85" />
      <circle cx="172" cy="26"  r="7"  fill="#d87898" opacity="0.75" />
      <circle cx="152" cy="24"  r="7"  fill="#e888a0" opacity="0.80" />
      <circle cx="163" cy="30"  r="5"  fill="#f8c0d0" opacity="0.85" />
      <circle cx="170" cy="18"  r="4"  fill="#f8c8d8" opacity="0.85" />

      {/* LEFT cluster — upper-left branch tip */}
      <circle cx="24"  cy="18"  r="10" fill="#e890a8" opacity="0.90" />
      <circle cx="34"  cy="10"  r="9"  fill="#f0a0b8" opacity="0.85" />
      <circle cx="16"  cy="10"  r="8"  fill="#e080a0" opacity="0.80" />
      <circle cx="26"  cy="4"   r="8"  fill="#e890a8" opacity="0.85" />
      <circle cx="38"  cy="18"  r="7"  fill="#f0a8b8" opacity="0.80" />
      <circle cx="14"  cy="22"  r="7"  fill="#d87898" opacity="0.75" />
      <circle cx="44"  cy="8"   r="7"  fill="#e888a0" opacity="0.80" />
      <circle cx="22"  cy="-2"  r="7"  fill="#e880a0" opacity="0.75" />
      <circle cx="36"  cy="2"   r="6"  fill="#f0a0b8" opacity="0.80" />
      <circle cx="28"  cy="10"  r="5"  fill="#f8c4d4" opacity="0.90" />
      <circle cx="22"  cy="18"  r="4"  fill="#f8c8d8" opacity="0.85" />
      <circle cx="36"  cy="14"  r="4"  fill="#f8c0d0" opacity="0.85" />

      {/* Small mid-trunk cluster */}
      <circle cx="90"  cy="213" r="8"  fill="#e07898" opacity="0.80" />
      <circle cx="100" cy="207" r="7"  fill="#e888a0" opacity="0.75" />
      <circle cx="80"  cy="210" r="7"  fill="#d87090" opacity="0.70" />
      <circle cx="93"  cy="202" r="6"  fill="#f0a0b0" opacity="0.75" />
      <circle cx="104" cy="214" r="6"  fill="#e07090" opacity="0.70" />

      {/* ═══ FLOATING PETALS ═══ */}
      <ellipse cx="245" cy="165" rx="4.5" ry="2.5" fill="#f0a8b8" opacity="0.70" transform="rotate(25,245,165)" />
      <ellipse cx="140" cy="180" rx="4"   ry="2"   fill="#e890a8" opacity="0.65" transform="rotate(-20,140,180)" />
      <ellipse cx="270" cy="220" rx="3.5" ry="2"   fill="#f4b0c0" opacity="0.60" transform="rotate(40,270,220)" />
      <ellipse cx="75"  cy="160" rx="4"   ry="2"   fill="#e880a0" opacity="0.65" transform="rotate(-30,75,160)" />
      <ellipse cx="160" cy="230" rx="3.5" ry="2"   fill="#f0a0b8" opacity="0.60" transform="rotate(15,160,230)" />
      <ellipse cx="210" cy="200" rx="4"   ry="2"   fill="#e88898" opacity="0.55" transform="rotate(-10,210,200)" />
      <ellipse cx="90"  cy="280" rx="3.5" ry="2"   fill="#e07898" opacity="0.50" transform="rotate(35,90,280)" />
      <ellipse cx="250" cy="280" rx="4"   ry="2"   fill="#f0a0b0" opacity="0.50" transform="rotate(-25,250,280)" />
      <ellipse cx="175" cy="310" rx="3"   ry="1.8" fill="#e88898" opacity="0.45" transform="rotate(20,175,310)" />
      <ellipse cx="120" cy="240" rx="3.5" ry="2"   fill="#f4b0c0" opacity="0.55" transform="rotate(-40,120,240)" />

      {/* ═══ GROUND ═══ */}
      <path d="M0,325 C15,312 35,328 60,315 C85,302 110,320 140,308 C165,298 190,314 220,305 C245,296 268,312 300,306 L300,400 L0,400 Z"
        fill="url(#csi-ground)" />
      <path d="M0,338 C25,328 55,342 85,332 C115,322 148,338 178,328 C205,318 235,334 265,326 L300,328 L300,400 L0,400 Z"
        fill="#8090a8" opacity="0.55" />
      <path d="M0,365 C40,358 80,366 120,360 C160,354 200,364 240,358 L300,362 L300,400 L0,400 Z"
        fill="#5a6878" opacity="0.50" />

      {/* Rocks */}
      <ellipse cx="55"  cy="325" rx="22" ry="9"   fill="#9aa8bc" opacity="0.85" />
      <ellipse cx="55"  cy="323" rx="18" ry="7"   fill="#a8b8cc" opacity="0.70" />
      <ellipse cx="170" cy="315" rx="18" ry="7"   fill="#9aa8bc" opacity="0.80" />
      <ellipse cx="170" cy="313" rx="14" ry="5.5" fill="#a8b8cc" opacity="0.65" />
      <ellipse cx="240" cy="320" rx="20" ry="8"   fill="#9aa8bc" opacity="0.80" />
      <ellipse cx="240" cy="318" rx="16" ry="6"   fill="#a8b8cc" opacity="0.65" />
      <ellipse cx="115" cy="332" rx="14" ry="5.5" fill="#9298ac" opacity="0.70" />
      <ellipse cx="280" cy="328" rx="16" ry="6"   fill="#9298ac" opacity="0.75" />

      {/* Stars */}
      <circle cx="100" cy="30"  r="1.2" fill="#c8ddf0" opacity="0.80" />
      <circle cx="150" cy="20"  r="1"   fill="#b8d0e8" opacity="0.70" />
      <circle cx="270" cy="45"  r="1.5" fill="#c8ddf0" opacity="0.85" />
      <circle cx="285" cy="20"  r="1"   fill="#b8d0e8" opacity="0.75" />
      <circle cx="235" cy="55"  r="1.2" fill="#c0d4ec" opacity="0.70" />
      <circle cx="10"  cy="55"  r="1"   fill="#b8d0e8" opacity="0.70" />
      <circle cx="68"  cy="70"  r="1.2" fill="#c8ddf0" opacity="0.75" />
      <circle cx="255" cy="68"  r="1"   fill="#b8d0e8" opacity="0.65" />
      <circle cx="180" cy="100" r="1"   fill="#c0d4ec" opacity="0.60" />
    </svg>
  );
}

/** Simple sakura/cherry blossom branch SVG */
export function CherryBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      className={`${className ?? ""}`}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main branch */}
      <path
        d="M20 140 Q60 100 100 80 Q140 60 180 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Sub branch 1 */}
      <path
        d="M80 95 Q95 75 110 55"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Sub branch 2 */}
      <path
        d="M120 72 Q130 55 145 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Blossoms */}
      {[
        [110, 53], [147, 38], [182, 18], [96, 73], [60, 98],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="5"
          fill="currentColor"
          opacity="0.55"
        />
      ))}
      {/* Blossom petals (small surrounding dots) */}
      {[
        [110, 53], [147, 38], [182, 18],
      ].map(([cx, cy], i) => (
        <g key={`p${i}`}>
          <circle cx={cx - 8} cy={cy} r="3" fill="currentColor" opacity="0.3" />
          <circle cx={cx + 8} cy={cy} r="3" fill="currentColor" opacity="0.3" />
          <circle cx={cx} cy={cy - 8} r="3" fill="currentColor" opacity="0.3" />
          <circle cx={cx} cy={cy + 8} r="3" fill="currentColor" opacity="0.3" />
        </g>
      ))}
    </svg>
  );
}
