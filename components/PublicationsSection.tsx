import { publications, Publication } from "@/lib/data";

const typeBadge: Record<Publication["type"], { label: string; color: string }> =
  {
    journal: { label: "Journal", color: "bg-emerald-100 text-emerald-700" },
    conference: { label: "Conference", color: "bg-blue-100 text-blue-700" },
    preprint: { label: "Preprint", color: "bg-yellow-100 text-yellow-700" },
    workshop: { label: "Workshop", color: "bg-purple-100 text-purple-700" },
  };

function PublicationCard({ pub }: { pub: Publication }) {
  const badge = typeBadge[pub.type];
  return (
    <li className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.color}`}
          >
            {badge.label}
          </span>
          <span className="text-xs text-slate-400">{pub.year}</span>
          {pub.note && (
            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
              {pub.note}
            </span>
          )}
        </div>
        <p className="font-medium text-slate-800 leading-snug mb-1">
          {pub.title}
        </p>
        {pub.titleEn && (
          <p className="text-sm text-slate-500 italic mb-1">{pub.titleEn}</p>
        )}
        <p className="text-sm text-slate-600 mb-1">
          {pub.authors.join(", ")}
        </p>
        <p className="text-sm font-medium text-slate-500">{pub.venue}</p>
        <div className="flex gap-3 mt-2">
          {pub.doi && (
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              DOI
            </a>
          )}
          {pub.arxiv && (
            <a
              href={pub.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              arXiv
            </a>
          )}
          {pub.pdf && (
            <a
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              PDF
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function PublicationsSection() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Publications</h2>
        <p className="text-slate-500 mb-8 text-sm">論文・出版物リスト</p>
        <ul>
          {sorted.map((pub, i) => (
            <PublicationCard key={i} pub={pub} />
          ))}
        </ul>
      </div>
    </section>
  );
}
