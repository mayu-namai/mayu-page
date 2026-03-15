import { researches } from "@/lib/data";
import { MountainDivider, StarSparkle } from "@/components/Decorations";

export default function ResearchSection() {
  return (
    <div>
      <section id="research" className="relative bg-white overflow-hidden py-16">

        {/* Decorative stars */}
        <StarSparkle className="absolute top-8 right-12 w-4 h-4 text-pink-300 opacity-60" />
        <StarSparkle className="absolute top-16 left-8 w-3 h-3 text-purple-300 opacity-50" />
        <StarSparkle className="absolute bottom-12 right-1/4 w-3 h-3 text-amber-400 opacity-50" />

        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-pink-400 font-medium mb-2 flex items-center gap-2">
            <span className="w-6 h-px bg-pink-400 inline-block" />
            研究テーマ・プロジェクト
          </p>
          <h2
            className="text-5xl font-bold text-slate-900 mb-10"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Research
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {researches.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-200 transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: i % 2 === 0 ? "center 15%" : "center 65%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                </div>
                <div className="p-6 -mt-2">
                  <h3
                    className="font-semibold text-slate-800 mb-3 leading-snug text-xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {r.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs bg-rose-50 text-rose-600 border border-rose-100 px-2 py-0.5 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mountain divider → slate-50 Publications */}
      <MountainDivider fill="rgb(248 250 252)" />
    </div>
  );
}
