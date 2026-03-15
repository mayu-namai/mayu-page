import { researches } from "@/lib/data";
import { MountainDivider, StarSparkle } from "@/components/Decorations";

export default function ResearchSection() {
  return (
    <div>
      <section id="research" className="relative bg-white overflow-hidden py-16 md:py-24">

        {/* Decorative stars */}
        <StarSparkle className="absolute top-8 right-12 w-4 h-4 text-pink-300 opacity-60" />
        <StarSparkle className="absolute top-16 left-8 w-3 h-3 text-blue-300 opacity-50" />
        <StarSparkle className="absolute bottom-12 right-1/4 w-3 h-3 text-amber-400 opacity-50" />

        {/* ── Centered section heading ── */}
        <div className="text-center mb-14 px-6">
          <h2
            className="text-5xl md:text-6xl font-bold text-slate-800 tracking-widest uppercase mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Research
          </h2>
          <p className="text-sm text-slate-400 tracking-wider">研究テーマ・プロジェクト</p>
          {/* Thin decorative rule */}
          <div className="w-10 h-px bg-pink-300 mx-auto mt-5" />
        </div>

        {/* ── Alternating image/text cards ── */}
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          {researches.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } overflow-hidden bg-slate-50 border border-slate-100`}
            >
              {/* Image half */}
              <div className="md:w-1/2 h-56 md:h-72 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.image ?? "/hero.jpg"}
                  alt={r.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text half */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-start">
                {/* Title — Noto Sans JP for Japanese titles */}
                <h3
                  className="font-bold text-slate-800 text-xl leading-snug mb-3"
                  style={{ fontFamily: "var(--font-noto), sans-serif" }}
                >
                  {r.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-[1.85] mb-5 flex-1">
                  {r.description}
                </p>

                {/* Keyword chips */}
                <div className="flex flex-wrap gap-1.5">
                  {r.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-500 text-xs font-medium border border-rose-100"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Mountain divider → slate-50 Publications */}
      <MountainDivider fill="rgb(248 250 252)" />
    </div>
  );
}
