import { publications, Publication } from "@/lib/data";

const typeBadge: Record<Publication["type"], { label: string; color: string }> = {
  journal:    { label: "Journal",    color: "bg-emerald-100 text-emerald-700" },
  conference: { label: "Conference", color: "bg-blue-100 text-blue-700" },
  workshop:   { label: "Conference", color: "bg-blue-100 text-blue-700" },
  other:      { label: "Other",      color: "bg-slate-100 text-slate-600" },
};

const reviewBadge: Partial<Record<Publication["type"], { label: string; color: string }>> = {
  conference: { label: "査読あり", color: "bg-blue-50 text-blue-600" },
  workshop:   { label: "査読なし", color: "bg-slate-50 text-slate-500" },
};

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <span className="text-sm text-slate-600">
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && ", "}
          {a.includes("Namai") || a.includes("生井") ? (
            <strong className="font-semibold text-slate-800">{a}</strong>
          ) : (
            a
          )}
        </span>
      ))}
    </span>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  const badge = typeBadge[pub.type];
  const review = reviewBadge[pub.type];
  return (
    <li className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {/* 1. 種別バッジ */}
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.color}`}>
            {badge.label}
          </span>
          {/* 2. 年 */}
          <span className="text-xs text-slate-400">{pub.year}</span>
          {/* 3. 査読あり/なし */}
          {review && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${review.color}`}>
              {review.label}
            </span>
          )}
          {/* 4. 受賞など */}
          {pub.note && (
            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
              {pub.note}
            </span>
          )}
        </div>
        <p className="font-medium text-slate-800 leading-snug mb-1">
          {pub.title}
        </p>
        <p className="mb-1">
          <AuthorList authors={pub.authors} />
        </p>
        {pub.presentedAt ? (
          <div className="text-sm text-slate-500 space-y-0.5">
            <p>
              <span className="text-xs text-slate-400 mr-1">発表：</span>
              {pub.presentedAt}
            </p>
            <p>
              <span className="text-xs text-slate-400 mr-1">掲載：</span>
              {pub.venue}
            </p>
          </div>
        ) : (
          <p className="text-sm text-slate-500">{pub.venue}</p>
        )}
        {pub.detail && (
          <p className="text-xs text-slate-400 mt-0.5">{pub.detail}</p>
        )}
        <div className="flex gap-3 mt-2">
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
        <p className="text-slate-500 mb-8 text-sm">業績リスト</p>
        <ul>
          {sorted.map((pub, i) => (
            <PublicationCard key={i} pub={pub} />
          ))}
        </ul>
      </div>
    </section>
  );
}
