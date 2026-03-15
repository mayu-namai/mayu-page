import { publications, Publication } from "@/lib/data";
import { MountainDivider, StarSparkle } from "@/components/Decorations";

// ── カテゴリ定義 ──────────────────────────────────────────
type CategoryDef = {
  type: Publication["type"];
  label: string;
  badge?: string;
};

const categories: CategoryDef[] = [
  { type: "journal",             label: "Journal",                 badge: "Peer-reviewed" },
  { type: "intl-conference",     label: "International Conference", badge: "Peer-reviewed" },
  { type: "domestic-conference", label: "Domestic Conference",      badge: "Peer-reviewed" },
  { type: "workshop",            label: "Conference / Workshop" },
  { type: "other",               label: "Other Presentations" },
];

// ── ユーティリティ ─────────────────────────────────────────
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

function PublicationEntry({ pub, index }: { pub: Publication; index: number }) {
  const q = pub.isEnglish ? ["\u201c", "\u201d"] : ["\u300c", "\u300d"];
  return (
    <li className="flex gap-3 py-3 border-b border-slate-100 last:border-0 text-sm text-slate-600 leading-relaxed">
      {/* 番号 */}
      <span className="shrink-0 font-semibold text-slate-700 w-5 text-right">{index + 1}.</span>
      {/* 本文 */}
      <div>
        <AuthorList authors={pub.authors} isEnglish={pub.isEnglish} />
        {pub.isEnglish ? ", " : "，"}
        {q[0]}
        <span className="text-slate-800">{pub.title}</span>
        {q[1]},{" "}
        {pub.citation}
        {/* ノート・受賞バッジ */}
        {pub.note && (
          <span className="ml-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
            {pub.note}
          </span>
        )}
        {/* リンク */}
        {(pub.doi || pub.arxiv || pub.pdf || pub.link) && (
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
        )}
      </div>
    </li>
  );
}

// ── メインコンポーネント ────────────────────────────────────
export default function PublicationsSection() {
  return (
    <div>
      <section id="publications" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">

        {/* Decorative stars */}
        <StarSparkle className="absolute top-10 right-16 w-3 h-3 text-purple-400 opacity-50" />
        <StarSparkle className="absolute bottom-16 left-12 w-4 h-4 text-pink-300 opacity-40" />

        {/* ── Centered section heading ── */}
        <div className="text-center mb-14 px-6">
          <h2
            className="text-5xl md:text-6xl font-bold text-slate-800 tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Publications
          </h2>
          <p className="text-sm text-slate-400 tracking-wider">業績リスト</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {categories.map(({ type, label, badge }) => {
            const items = publications
              .filter((p) => p.type === type)
              .sort((a, b) => b.year - a.year);
            if (items.length === 0) return null;
            return (
              <div key={type}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 pl-4 border-l-4 border-slate-700">
                  <h3 className="text-lg font-bold text-slate-800">{label}</h3>
                  {badge && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-400 text-amber-900">
                      {badge}
                    </span>
                  )}
                </div>
                {/* Publication list */}
                <ul className="ml-4">
                  {items.map((pub, i) => (
                    <PublicationEntry key={i} pub={pub} index={i} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </section>

      {/* Mountain divider → dark Career section */}
      <MountainDivider fill="rgb(3, 10, 26)" />
    </div>
  );
}
