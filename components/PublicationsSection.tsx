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
          {isBold(a)
            ? <strong className="font-semibold" style={{ color: "#223F59" }}>{a}</strong>
            : a}
        </span>
      ))}
    </span>
  );
}

function PublicationEntry({ pub, index }: { pub: Publication; index: number }) {
  const q = pub.isEnglish ? ["\u201c", "\u201d"] : ["\u300c", "\u300d"];
  return (
    <li className="flex gap-3 py-3.5 border-b last:border-0 text-sm leading-[1.85]"
      style={{ borderColor: "rgba(47,76,115,0.1)", color: "rgba(47,76,115,0.75)" }}>
      {/* 番号 */}
      <span className="shrink-0 font-semibold w-5 text-right tabular-nums pt-px" style={{ color: "#A0B1DD" }}>
        {index + 1}.
      </span>
      {/* 本文 */}
      <div>
        <AuthorList authors={pub.authors} isEnglish={pub.isEnglish} />
        {pub.isEnglish ? ", " : "，"}
        {q[0]}
        <span style={{ color: "#223F59" }}>{pub.title}</span>
        {q[1]},{" "}
        <span style={{ color: "rgba(47,76,115,0.6)" }}>{pub.citation}</span>
        {pub.note && (
          <span
            className="ml-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(217,179,67,0.12)",
              border: "1px solid rgba(217,179,67,0.45)",
              color: "#7A5F15",
            }}
          >
            {pub.note}
          </span>
        )}
        {(pub.doi || pub.arxiv || pub.pdf || pub.link) && (
          <span className="inline-flex gap-2 ml-2">
            {pub.doi && (
              <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                className="text-xs hover:underline" style={{ color: "#2F4C73" }}>DOI</a>
            )}
            {pub.arxiv && (
              <a href={pub.arxiv} target="_blank" rel="noopener noreferrer"
                className="text-xs hover:underline" style={{ color: "#2F4C73" }}>arXiv</a>
            )}
            {pub.pdf && (
              <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
                className="text-xs hover:underline" style={{ color: "#2F4C73" }}>PDF</a>
            )}
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer"
                className="text-xs hover:underline" style={{ color: "#2F4C73" }}>Web</a>
            )}
          </span>
        )}
      </div>
    </li>
  );
}

export default function PublicationsSection() {
  return (
    <div>
      <section id="publications" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#F0EDE5" }}>

        {/* Decorative stars */}
        <StarSparkle className="absolute top-10 right-16 w-3 h-3 opacity-40" style={{ color: "#A0B1DD" }} />
        <StarSparkle className="absolute bottom-16 left-12 w-4 h-4 opacity-35" style={{ color: "#D9B343" }} />

        {/* ── Centered section heading ── */}
        <div className="text-center mb-14 px-6">
          <h2
            className="text-5xl md:text-6xl font-bold tracking-widest uppercase mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#223F59" }}
          >
            Publications
          </h2>
          <p className="text-sm tracking-wider" style={{ color: "#2F4C73", opacity: 0.6 }}>業績リスト</p>
          <div className="w-10 h-px mx-auto mt-5" style={{ background: "#D9B343" }} />
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
                <div className="flex items-center gap-2.5 mb-5 pl-4"
                  style={{ borderLeft: "4px solid #D9B343" }}>
                  <h3 className="text-base font-bold tracking-wide" style={{ color: "#223F59" }}>{label}</h3>
                  {badge && (
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{
                        background: "rgba(217,179,67,0.12)",
                        border: "1px solid rgba(217,179,67,0.5)",
                        color: "#7A5F15",
                      }}
                    >
                      {badge}
                    </span>
                  )}
                </div>
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

      {/* Mountain divider → Midnight Harbor Career section */}
      <MountainDivider fill="#223F59" />
    </div>
  );
}
