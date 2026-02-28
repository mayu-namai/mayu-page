import { careers, CareerItem } from "@/lib/data";

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
  award: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

const colorMap: Record<CareerItem["type"], string> = {
  education: "bg-blue-100 text-blue-600",
  work: "bg-slate-100 text-slate-600",
  award: "bg-yellow-100 text-yellow-600",
};

const sections: { type: CareerItem["type"]; label: string }[] = [
  { type: "education", label: "学歴" },
  { type: "work", label: "職歴・奨学金" },
  { type: "award", label: "受賞歴" },
];

export default function CareerSection() {
  return (
    <section id="career" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">CV</h2>
        <p className="text-slate-500 mb-10 text-sm">経歴・受賞歴</p>

        <div className="grid md:grid-cols-3 gap-10">
          {sections.map(({ type, label }) => {
            const items = careers.filter((c) => c.type === type);
            if (items.length === 0) return null;
            return (
              <div key={type}>
                <h3 className="font-semibold text-slate-700 mb-5 text-sm uppercase tracking-wider">
                  {label}
                </h3>
                <ol className="relative border-l border-slate-200">
                  {items.map((item, i) => (
                    <li key={i} className="mb-6 ml-6">
                      <span
                        className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ${colorMap[type]}`}
                      >
                        {iconMap[type]}
                      </span>
                      <p className="text-xs text-slate-400 mb-0.5">
                        {item.period}
                      </p>
                      <p className="font-medium text-slate-800 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-500">
                        {item.organization}
                      </p>
                      {item.description && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
