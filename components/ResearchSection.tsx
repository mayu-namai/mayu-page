import { researches } from "@/lib/data";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Research</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mt-2 mb-2" />
        <p className="text-slate-500 mb-8 text-sm">研究テーマ・プロジェクト</p>

        <div className="grid md:grid-cols-2 gap-6">
          {researches.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-200 transition-all"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
