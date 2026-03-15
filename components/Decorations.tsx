// SVG decorative components for organic illustrated layout

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
