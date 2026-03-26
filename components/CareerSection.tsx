"use client";

import { useState, useRef } from "react";
import { profile, careers, publications, researches } from "@/lib/data";
import { useLang } from "@/contexts/LanguageContext";

type SectionId = "profile" | "interests" | "education" | "experience" | "publications" | "presentations" | "projects" | "awards" | "scholarships" | "skills";

const sections: { id: SectionId; ja: string; en: string }[] = [
  { id: "profile",       ja: "プロフィール",  en: "Profile" },
  { id: "interests",     ja: "研究興味",      en: "Research Interests" },
  { id: "education",     ja: "学歴",          en: "Education" },
  { id: "experience",    ja: "経験",          en: "Experience" },
  { id: "publications",  ja: "論文",          en: "Publications" },
  { id: "presentations", ja: "発表",          en: "Presentations" },
  { id: "projects",      ja: "プロジェクト",  en: "Projects" },
  { id: "awards",        ja: "受賞",          en: "Awards" },
  { id: "scholarships",  ja: "奨学金",        en: "Scholarships" },
  { id: "skills",        ja: "スキル",        en: "Skills" },
];

function isBold(name: string) {
  return name.includes("Namai") || name.includes("生井");
}

const headingStyle = { fontFamily: "var(--font-display), Georgia, serif" };

function sectionIcon(id: SectionId) {
  const cls = "w-4 h-4";
  const props = { className: cls, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: 1.8 };
  switch (id) {
    case "profile":      return <svg {...props}><circle cx="12" cy="8" r="4"/><path strokeLinecap="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
    case "interests":    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
    case "education":    return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>;
    case "experience":   return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2"/><path strokeLinecap="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
    case "publications": return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>;
    case "presentations":return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>;
    case "projects":     return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.819m2.562-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>;
    case "awards":       return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12v7a6 6 0 01-12 0V3zM4 3h2M18 3h2M4 5H2v2a4 4 0 004 4M20 5h2v2a4 4 0 01-4 4M12 16v3M9 21h6"/></svg>;
    case "scholarships": return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case "skills":       return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;
  }
}

function SectionHeading({ en, jaText, enText }: { en: boolean; jaText: string; enText: string }) {
  return (
    <h3 className="text-lg md:text-2xl font-normal text-[#464043] mb-4 md:mb-6" style={headingStyle}>
      {en ? enText : jaText}
    </h3>
  );
}

export default function CareerSection() {
  const [active, setActive] = useState<SectionId>("profile");
  const [pubTab, setPubTab] = useState<"peer" | "non-peer">("peer");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressed = useRef(false);
  const swipeStartX = useRef<number | null>(null);

  function handleSwipeStart(e: React.TouchEvent) {
    swipeStartX.current = e.touches[0].clientX;
  }
  function handleSwipeEnd(e: React.TouchEvent) {
    if (swipeStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - swipeStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0 && pubTab === "peer") setPubTab("non-peer");
      if (delta > 0 && pubTab === "non-peer") setPubTab("peer");
    }
    swipeStartX.current = null;
  }

  function handleIconPressStart(id: SectionId) {
    longPressed.current = false;
    pressTimer.current = setTimeout(() => {
      longPressed.current = true;
      setDrawerOpen(true);
    }, 500);
  }
  function handleIconPressEnd(id: SectionId) {
    if (pressTimer.current) { clearTimeout(pressTimer.current); pressTimer.current = null; }
    if (!longPressed.current) setActive(id);
  }
  function handleIconPressCancel() {
    if (pressTimer.current) { clearTimeout(pressTimer.current); pressTimer.current = null; }
  }
  const [pdfToast, setPdfToast] = useState(false);

  function handlePdfClick(e: React.MouseEvent) {
    e.preventDefault();
    setPdfToast(true);
    setTimeout(() => setPdfToast(false), 2500);
  }
  const { lang } = useLang();
  const en = lang === "en";

  const educationItems  = careers.filter((c) => c.type === "education");
  const experienceItems = careers.filter((c) => c.type === "work" || c.type === "research");
  const awardItems      = careers.filter((c) => c.type === "award");
  const scholarshipItems = careers.filter((c) => c.type === "scholarship");

  const peerPubItems    = publications.filter((p) => ["journal", "intl-conference", "domestic-conference"].includes(p.type)).sort((a, b) => b.year - a.year);
  const nonPeerPubItems = publications.filter((p) => ["workshop"].includes(p.type)).sort((a, b) => b.year - a.year);
  const presentItems    = publications.filter((p) => p.type === "other").sort((a, b) => b.year - a.year);

  function PubEntry({ pub, idx }: { pub: (typeof publications)[0]; idx: number }) {
    const q = (en || pub.isEnglish) ? ["\u201c", "\u201d"] : ["\u300c", "\u300d"];
    const authors = en ? (pub.authorsEn ?? pub.authors) : pub.authors;
    const title   = en ? (pub.titleEn   ?? pub.title)   : pub.title;
    const citation = en ? (pub.citationEn ?? pub.citation) : pub.citation;
    return (
      <li className="flex gap-3 leading-[1.85] text-xs min-[480px]:text-sm text-gray-500">
        <span className="shrink-0 tabular-nums text-gray-400 w-5 text-right pt-px">{idx + 1}.</span>
        <span>
          {authors.map((a, j) => (
            <span key={j}>
              {j > 0 && ((en || pub.isEnglish) ? ", " : "，")}
              {isBold(a) ? <strong className="font-black text-gray-500">{a}</strong> : a}
            </span>
          ))}
          {(en || pub.isEnglish) ? ", " : "，"}{q[0]}<span className="text-gray-500">{title}</span>{q[1]},&nbsp;
          <span className="text-gray-500">
            {pub.type === "journal" ? (() => {
              const sep = en ? "," : "，";
              const i = citation.indexOf(sep);
              if (i === -1) return citation;
              return <><em>{citation.slice(0, i)}</em>{citation.slice(i)}</>;
            })() : citation}
          </span>
          {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-[#CB959F] hover:underline">Web</a>}
          {pub.noteIsAward && pub.note && (
            <span className="ml-2 inline-block text-xs font-medium text-[#CB959F]" title={pub.note}>★ Award</span>
          )}
        </span>
      </li>
    );
  }

  return (
    <section id="career" className="py-16 md:py-24 bg-[#FDFAFC]">

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 h-px bg-gray-300" />
          <h2 className="text-3xl md:text-4xl font-normal text-[#464043] whitespace-nowrap" style={headingStyle}>
            Curriculum Vitae
          </h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <p className="text-center text-[13px] min-[480px]:text-sm text-gray-500 mb-3">
          {en
            ? "Selected publications, presentations, awards, and research experience."
            : "論文・発表・受賞・研究経験をまとめたものです．"}
        </p>
        <div className="flex justify-end items-center gap-3">
          {pdfToast && (
            <span className="text-[13px] min-[480px]:text-sm text-gray-400">
              {en ? "Coming soon." : "準備中です．"}
            </span>
          )}
          <a href="#" onClick={handlePdfClick} className="text-[13px] min-[480px]:text-sm text-gray-500 hover:text-[#464043] transition-colors flex items-center gap-1">
            Download PDF <span>→</span>
          </a>
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div className="max-w-4xl mx-auto px-6 flex flex-row gap-0">

        {/* Sidebar */}
        <nav className="shrink-0 relative">

          {/* ── Mobile: narrow icon strip ── */}
          <div className="min-[480px]:hidden w-9">
            {sections.map((s) => (
              <button
                key={s.id}
                onPointerDown={() => handleIconPressStart(s.id)}
                onPointerUp={() => handleIconPressEnd(s.id)}
                onPointerLeave={handleIconPressCancel}
                onContextMenu={(e) => e.preventDefault()}
                className={`w-9 h-9 flex items-center justify-center transition-colors ${
                  active === s.id ? "text-[#464043] bg-[#F7F3F4]" : "text-gray-400"
                }`}
                aria-label={en ? s.en : s.ja}
              >
                {sectionIcon(s.id)}
              </button>
            ))}
          </div>

          {/* ── Mobile: drawer overlay ── */}
          {drawerOpen && (
            <>
              <div className="fixed inset-0 z-20 min-[480px]:hidden" onClick={() => setDrawerOpen(false)} />
              <div className="absolute left-0 top-0 z-30 w-44 bg-[#FDFAFC] border-r border-gray-200 shadow-lg min-[480px]:hidden">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActive(s.id); setDrawerOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs text-left transition-colors ${
                      active === s.id
                        ? "text-[#464043] font-medium bg-[#F7F3F4]"
                        : "text-gray-500 hover:text-[#464043]"
                    }`}
                  >
                    <span className="shrink-0">{sectionIcon(s.id)}</span>
                    {en ? s.en : s.ja}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── Desktop: full label sidebar ── */}
          <ul className="hidden min-[480px]:flex flex-col w-44">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => setActive(s.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    active === s.id
                      ? "text-[#464043] font-medium bg-[#F7F3F4]"
                      : "text-gray-500 hover:text-[#464043]"
                  }`}
                >
                  {en ? s.en : s.ja}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="flex-1 border-l border-gray-200 pl-4 min-[480px]:pl-10 min-h-[400px] pt-3 min-[480px]:pt-0 text-[13px] min-[480px]:text-sm">

          {/* Profile */}
          {active === "profile" && (
            <div>
              <SectionHeading en={en} jaText="プロフィール" enText="Profile" />
              <p className="md:text-lg font-normal text-[#464043] mb-3">{profile.nameEn}</p>
              <p className="text-gray-600 leading-relaxed mb-5">
                {en ? profile.bio : profile.bioJa}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 border-t border-gray-200 pt-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${profile.email}`} className="hover:text-[#464043] transition-colors">{profile.email}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tokyo, Japan
                </span>
              </div>
            </div>
          )}

          {/* Research Interests */}
          {active === "interests" && (
            <div>
              <SectionHeading en={en} jaText="研究興味" enText="Research Interests" />
              <ul className="space-y-2">
                {profile.interests.map((kw) => (
                  <li key={kw} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {active === "education" && (
            <div>
              <SectionHeading en={en} jaText="学歴" enText="Education" />
              <div className="space-y-5">
                {educationItems.map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                    <p className="text-xs text-gray-400 mb-1">{en ? (item.periodEn ?? item.period) : item.period}</p>
                    <p className="font-medium text-[#464043] leading-snug">{en ? (item.titleEn ?? item.title) : item.title}</p>
                    {item.description && <p className="text-gray-500 mt-0.5">{en ? (item.descriptionEn ?? item.description) : item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {active === "experience" && (
            <div>
              <SectionHeading en={en} jaText="経験" enText="Experience" />
              <div className="space-y-5">
                {experienceItems.map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                    <p className="text-xs text-gray-400 mb-1">{en ? (item.periodEn ?? item.period) : item.period}</p>
                    <p className="font-medium text-[#464043] leading-snug">{en ? (item.titleEn ?? item.title) : item.title}</p>
                    {item.organization && <p className="text-gray-500">{en ? (item.organizationEn ?? item.organization) : item.organization}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications */}
          {active === "publications" && (
            <div onTouchStart={handleSwipeStart} onTouchEnd={handleSwipeEnd}>
              <SectionHeading en={en} jaText="論文" enText="Publications" />
              {/* Sub-tabs */}
              <div className="flex gap-0 mb-6 border-b border-gray-200">
                {(["peer", "non-peer"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setPubTab(tab)}
                    className={`px-4 py-2 text-sm transition-colors border-b-2 -mb-px ${
                      pubTab === tab
                        ? "border-[#464043] text-[#464043] font-medium"
                        : "border-transparent text-gray-400 hover:text-[#464043]"
                    }`}
                  >
                    {tab === "peer"
                      ? (en ? "Peer-reviewed" : "査読あり")
                      : (en ? "Non-peer-reviewed" : "査読なし")}
                  </button>
                ))}
              </div>
              <ol key={pubTab} className="space-y-4 animate-fade-slide">
                {(pubTab === "peer" ? peerPubItems : nonPeerPubItems).map((pub, i) => (
                  <PubEntry key={i} pub={pub} idx={i} />
                ))}
              </ol>
            </div>
          )}

          {/* Presentations */}
          {active === "presentations" && (
            <div>
              <SectionHeading en={en} jaText="発表" enText="Presentations" />
              <ol className="space-y-4">
                {presentItems.map((pub, i) => (
                  <PubEntry key={i} pub={pub} idx={i} />
                ))}
              </ol>
            </div>
          )}

          {/* Projects */}
          {active === "projects" && (
            <div>
              <SectionHeading en={en} jaText="プロジェクト" enText="Projects" />
              <div className="space-y-5">
                {researches.map((proj: (typeof researches)[0], i: number) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                    {proj.slug ? (
                      <a href={`/projects/${proj.slug}`} className="text-sm min-[480px]:text-base font-medium text-[#464043] hover:underline leading-snug">
                        {en ? proj.titleEn : proj.title}
                      </a>
                    ) : (
                      <p className="text-sm min-[480px]:text-base font-medium text-[#464043] leading-snug">
                        {en ? proj.titleEn : proj.title}
                      </p>
                    )}
                    {proj.description && (
                      <p className="text-xs min-[480px]:text-sm text-gray-500 mt-1">
                        {en ? (proj.descriptionEn ?? proj.description) : proj.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards */}
          {active === "awards" && (
            <div>
              <SectionHeading en={en} jaText="受賞" enText="Awards" />
              <ol className="space-y-5">
                {awardItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 tabular-nums text-gray-400 w-5 text-right pt-0.5">{i + 1}.</span>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{en ? (item.periodEn ?? item.period) : item.period}</p>
                      <p className="font-medium text-[#464043]">{en ? (item.titleEn ?? item.title) : item.title}</p>
                      <p className="text-gray-500">{en ? (item.organizationEn ?? item.organization) : item.organization}</p>
                      {item.description && <p className="text-xs text-gray-400 mt-0.5">{en ? (item.descriptionEn ?? item.description) : item.description}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Scholarships */}
          {active === "scholarships" && (
            <div>
              <SectionHeading en={en} jaText="奨学金" enText="Scholarships" />
              <ol className="space-y-5">
                {scholarshipItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 tabular-nums text-gray-400 w-5 text-right pt-0.5">{i + 1}.</span>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{en ? (item.periodEn ?? item.period) : item.period}</p>
                      <p className="font-medium text-[#464043]">{en ? (item.titleEn ?? item.title) : item.title}</p>
                      <p className="text-gray-500">{en ? (item.organizationEn ?? item.organization) : item.organization}</p>
                      {item.description && <p className="text-xs text-gray-400 mt-0.5">{en ? (item.descriptionEn ?? item.description) : item.description}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Skills */}
          {active === "skills" && (
            <div>
              <SectionHeading en={en} jaText="スキル" enText="Skills" />
              <p className="text-gray-400">{en ? "Coming soon." : "準備中です．"}</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
