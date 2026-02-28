import { publications, Publication } from "@/lib/data";

// 著者名のうち生井を太字にする
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

function PublicationItem({
  pub,
  index,
}: {
  pub: Publication;
  index: number;
}) {
  return (
    <li className="flex gap-3 py-4 border-b border-slate-100 last:border-0">
      <span className="text-slate-300 text-sm font-mono w-5 shrink-0 pt-0.5">
        {index}.
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-slate-800 leading-snug mb-1">
          {pub.title}
        </p>
        <p className="mb-1">
          <AuthorList authors={pub.authors} />
        </p>
        <p className="text-sm text-slate-500 mb-0.5">{pub.venue}</p>
        {pub.detail && (
          <p className="text-xs text-slate-400">{pub.detail}</p>
        )}
        <div className="flex flex-wrap gap-3 mt-2">
          {pub.note && (
            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
              {pub.note}
            </span>
          )}
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

type Group = {
  type: Publication["type"];
  label: string;
};

const groups: Group[] = [
  { type: "journal",    label: "学術誌論文" },
  { type: "conference", label: "発表（査読あり）" },
  { type: "workshop",   label: "発表（査読なし）" },
  { type: "other",      label: "その他" },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Publications</h2>
        <p className="text-slate-500 mb-10 text-sm">業績リスト</p>

        <div className="space-y-12">
          {groups.map(({ type, label }) => {
            const items = publications.filter((p) => p.type === type);
            if (items.length === 0) return null;
            return (
              <div key={type}>
                <h3 className="text-base font-semibold text-slate-700 mb-4 pb-2 border-b border-slate-200">
                  {label}
                </h3>
                <ul>
                  {items.map((pub, i) => (
                    <PublicationItem key={i} pub={pub} index={i + 1} />
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
