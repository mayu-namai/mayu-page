import { publications, Publication } from "@/lib/data";

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
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Publications</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mt-2 mb-2" />
        <p className="text-slate-500 mb-10 text-sm">業績リスト</p>

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
  );
}
