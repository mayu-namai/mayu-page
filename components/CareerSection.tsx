import { careers, CareerItem } from "@/lib/data";
import { WaveDivider, MoonDecoration, StarSparkle, DotCluster } from "@/components/Decorations";

const iconMap: Record<CareerItem["type"], React.ReactNode> = {
  education: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13v6M3 11l9 5 9-5" />
    </svg>
  ),
  work: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  research: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  award: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  scholarship: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const colorMap: Record<CareerItem["type"], string> = {
  education:   "bg-violet-800/60 text-violet-200",
  work:        "bg-slate-700/60 text-slate-200",
  research:    "bg-purple-800/60 text-purple-200",
  award:       "bg-amber-700/60 text-amber-200",
  scholarship: "bg-rose-800/60 text-rose-200",
};

const leftGroups: { type: CareerItem["type"]; label: string }[] = [
  { type: "education", label: "学歴" },
  { type: "research",  label: "研究活動" },
  { type: "work",      label: "職歴" },
];

const rightGroups: { type: CareerItem["type"]; label: string }[] = [
  { type: "award",       label: "受賞歴" },
  { type: "scholarship", label: "奨学金" },
];

function Timeline({ type }: { type: CareerItem["type"] }) {
  const items = careers.filter((c) => c.type === type);
  if (items.length === 0) return null;
  return (
    <ol className="relative border-l border-purple-700/40">
      {items.map((item, i) => (
        <li key={i} className="mb-6 ml-6">
          <span
            className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ${colorMap[type]}`}
          >
            {iconMap[type]}
          </span>
          <p className="text-xs text-purple-400 mb-0.5">{item.period}</p>
          <p className="font-medium text-white leading-snug">{item.title}</p>
          <p className="text-sm text-slate-400">{item.organization}</p>
          {item.description && (
            <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function CareerSection() {
  return (
    <div>
      <section id="career" className="relative bg-indigo-950 overflow-hidden py-16">

        {/* Decorative elements */}
        <MoonDecoration
          className="absolute -top-10 right-0 w-72 h-72 opacity-30"
          bgColor="rgb(14 11 46)"
          glowColor="rgb(167 139 250 / 0.2)"
        />
        <StarSparkle className="absolute top-12 left-16 w-4 h-4 text-pink-400 opacity-60" />
        <StarSparkle className="absolute top-24 right-40 w-3 h-3 text-amber-400 opacity-50" />
        <StarSparkle className="absolute bottom-20 left-1/3 w-3 h-3 text-purple-300 opacity-50" />
        <StarSparkle className="absolute bottom-32 right-20 w-5 h-5 text-pink-300 opacity-40" />
        <DotCluster className="absolute bottom-12 left-8 w-28 h-28 text-purple-400/15" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-xs uppercase tracking-widest text-pink-400 font-medium mb-2 flex items-center gap-2">
            <span className="w-6 h-px bg-pink-400 inline-block" />
            経歴・受賞・奨学金
          </p>
          <h2
            className="text-5xl font-bold text-white mb-10"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            CV
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-10">
              {leftGroups.map(({ type, label }) => (
                <div key={type}>
                  <h3 className="font-semibold text-purple-300 mb-5 text-sm uppercase tracking-wider">
                    {label}
                  </h3>
                  <Timeline type={type} />
                </div>
              ))}
            </div>

            <div className="space-y-10">
              {rightGroups.map(({ type, label }) => (
                <div key={type}>
                  <h3 className="font-semibold text-purple-300 mb-5 text-sm uppercase tracking-wider">
                    {label}
                  </h3>
                  <Timeline type={type} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Wave divider → white Contact section */}
        <WaveDivider fill="white" />
      </section>
    </div>
  );
}
