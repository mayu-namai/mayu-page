import { researches } from "@/lib/data";
import { MountainDivider, StarSparkle } from "@/components/Decorations";

export default function ResearchSection() {
  return (
    <div>
      <section id="research" className="relative overflow-hidden py-16 md:py-24" style={{ background: "#D9B343" }}>

        {/* Decorative stars */}
        <StarSparkle className="absolute top-8 right-12 w-4 h-4 opacity-50" style={{ color: "#D9B343" }} />
        <StarSparkle className="absolute top-16 left-8 w-3 h-3 opacity-40" style={{ color: "#A0B1DD" }} />
        <StarSparkle className="absolute bottom-12 right-1/4 w-3 h-3 opacity-40" style={{ color: "#D9B343" }} />

        {/* ── Centered section heading ── */}
        <div className="text-center mb-14 px-6">
          <h2
            className="text-5xl md:text-6xl font-bold tracking-widest uppercase mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#FFFFFF" }}
          >
            Research
          </h2>
          <p className="text-sm tracking-wider" style={{ color: "rgba(255,255,255,0.75)" }}>研究テーマ・プロジェクト</p>
          <div className="w-10 h-px mx-auto mt-5" style={{ background: "rgba(255,255,255,0.5)" }} />
        </div>

        {/* ── Alternating image/text cards ── */}
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          {researches.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} overflow-hidden`}
              style={{ background: "#FFFFFF", border: "1px solid rgba(217,179,67,0.2)" }}
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
                <h3
                  className="font-bold text-xl leading-snug mb-3"
                  style={{ fontFamily: "var(--font-noto), sans-serif", color: "#223F59" }}
                >
                  {r.title}
                </h3>
                <p className="text-sm leading-[1.85] mb-5 flex-1" style={{ color: "#2F4C73", opacity: 0.75 }}>
                  {r.description}
                </p>
                {/* Keyword chips */}
                <div className="flex flex-wrap gap-1.5">
                  {r.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium"
                      style={{
                        background: "rgba(160,177,221,0.15)",
                        border: "1px solid rgba(160,177,221,0.4)",
                        color: "#2F4C73",
                      }}
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

      {/* Mountain divider — golden bg → Ivory Dust Publications */}
      <MountainDivider fill="#F0EDE5" />
    </div>
  );
}
