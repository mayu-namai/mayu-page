import { researches } from "@/lib/data";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Research</h2>
        <p className="text-slate-500 mb-8 text-sm">研究テーマ・プロジェクト</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researches.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-3 leading-snug">
                {r.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {r.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
