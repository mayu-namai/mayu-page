import { researches } from "@/lib/data";

export default function ResearchSection() {
  return (
    <section id="research" className="overflow-hidden">

      {/* ── Image banner header ── */}
      <div className="relative h-52 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-purple-950/75 to-indigo-950/90" />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-white mb-2">Research</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400" />
            <p className="text-pink-200/80 mt-2 text-sm">研究テーマ・プロジェクト</p>
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {researches.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-200 transition-all"
              >
                {/* Thumbnail */}
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
                {/* Content */}
                <div className="p-6 -mt-2">
                  <h3 className="font-semibold text-slate-800 mb-3 leading-snug text-lg">
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
      </div>

    </section>
  );
}
