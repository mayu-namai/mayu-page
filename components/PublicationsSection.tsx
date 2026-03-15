import { publications, Publication } from "@/lib/data";
import { MountainDivider, StarSparkle } from "@/components/Decorations";

const categories: { type: Publication["type"]; label: string }[] = [
  { type: "journal",             label: "Peer-reviewed journal articles" },
  { type: "intl-conference",     label: "Peer-reviewed international conference papers" },
  { type: "domestic-conference", label: "Peer-reviewed domestic conference papers" },
  { type: "workshop",            label: "Non-peer-reviewed conference presentations" },
  { type: "other",               label: "Other presentations" },
];

function isBold(name: string) {
  return name.includes("Namai") || name.includes("生井");
}

function AuthorList({ authors, isEnglish }: { authors: string[]; isEnglish: boolean }) {
  const sep = isEnglish ? ", " : "，";
  return (
    <span>
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && sep}
          {isBold(a) ? <strong className="font-semibold text-slate-800">{a}</strong> : a}
        </span>
      ))}
    </span>
  );
}

function PublicationEntry({ pub }: { pub: Publication }) {
  const q = pub.isEnglish ? ['"', '"'] : ["「", "」"];
  return (
    <li className="py-3 border-b border-slate-100 last:border-0 text-sm text-slate-600 leading-relaxed">
      <AuthorList authors={pub.authors} isEnglish={pub.isEnglish} />
      {pub.isEnglish ? "，" : "，"}
      {q[0]}
      <span className="text-slate-800">{pub.title}</span>
      {q[1]}，
      {pub.citation}
      {pub.note && (
        <span className="ml-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
          {pub.note}
        </span>
      )}
      <span className="inline-flex gap-2 ml-2">
        {pub.doi && (
          <a href={pub.doi} target="_blank" rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline">DOI</a>
        )}
        {pub.arxiv && (
          <a href={pub.arxiv} target="_blank" rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline">arXiv</a>
        )}
        {pub.pdf && (
          <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline">PDF</a>
        )}
        {pub.link && (
          <a href={pub.link} target="_blank" rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline">Web</a>
        )}
      </span>
    </li>
  );
}

export default function PublicationsSection() {
  return (
    <div>
    <section id="publications" className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Decorative stars */}
      <StarSparkle className="absolute top-10 right-16 w-3 h-3 text-purple-400 opacity-50" />
      <StarSparkle className="absolute bottom-16 left-12 w-4 h-4 text-pink-300 opacity-40" />

      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-pink-400 font-medium mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-pink-400 inline-block" />
          業績リスト
        </p>
        <h2
          className="text-5xl font-bold text-slate-900 mb-10"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Publications
        </h2>

        <div className="space-y-10">
          {categories.map(({ type, label }) => {
            const items = publications
              .filter((p) => p.type === type)
              .sort((a, b) => b.year - a.year);
            if (items.length === 0) return null;
            return (
              <div key={type}>
                <h3 className="text-base font-semibold text-slate-700 mb-3 pl-3 border-l-4 border-pink-400">
                  {label}
                </h3>
                <ul>
                  {items.map((pub, i) => (
                    <PublicationEntry key={i} pub={pub} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    {/* Mountain divider → dark Career section */}
    <MountainDivider fill="rgb(14 11 46)" />
    </div>
  );
}
