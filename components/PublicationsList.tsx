"use client";

import React from "react";
import { publications, Publication, careers } from "@/lib/data";
import { useLang } from "@/contexts/LanguageContext";

type CategoryDef = {
  type: Publication["type"];
  labelJa: string;
  labelEn: string;
  badge?: string;
};

export const categories: CategoryDef[] = [
  { type: "journal",             labelJa: "学術誌論文",              labelEn: "Journal",                      badge: "Peer-reviewed" },
  { type: "intl-conference",     labelJa: "国際会議",                labelEn: "International Conference",      badge: "Peer-reviewed" },
  { type: "domestic-conference", labelJa: "国内会議",                labelEn: "Domestic Conference",           badge: "Peer-reviewed" },
  { type: "workshop",            labelJa: "ワークショップ・技術報告", labelEn: "Workshops / Technical Reports" },
  { type: "other",               labelJa: "その他",                  labelEn: "Other Presentations" },
];

const boldTermsEn = ["Mayu Namai", "Issei Fujishiro", "the 2023 Nakanishi Encouragement Awards", "Best poster awards", "studioVOXEL award", "Student encouragement awards"];
const boldTermsJa = ["生井 麻結", "藤代 一成", "中西奨励賞", "優秀ポスタ賞", "企業賞（ヴォクセル）", "学生奨励賞"];

export function AwardCitation({ text, boldTerms }: { text: string; boldTerms: string[] }) {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;
  const used = new Set<string>();
  while (remaining.length > 0) {
    let earliest = -1;
    let earliestTerm = "";
    for (const term of boldTerms) {
      if (used.has(term)) continue;
      const idx = remaining.indexOf(term);
      if (idx !== -1 && (earliest === -1 || idx < earliest)) {
        earliest = idx;
        earliestTerm = term;
      }
    }
    if (earliest === -1) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }
    if (earliest > 0) {
      parts.push(<span key={key++} className="text-gray-500">{remaining.slice(0, earliest)}</span>);
    }
    parts.push(<strong key={key++} className="font-black text-gray-600">{earliestTerm}</strong>);
    used.add(earliestTerm);
    remaining = remaining.slice(earliest + earliestTerm.length);
  }
  return <>{parts}</>;
}

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
          {isBold(a) ? <strong className="font-black">{a}</strong> : a}
        </span>
      ))}
    </span>
  );
}

export function PublicationEntry({ pub, index, en }: { pub: Publication; index: number; en: boolean }) {
  const useEn = en || pub.isEnglish;
  const q = useEn ? ["\u201c", "\u201d"] : ["\u300c", "\u300d"];
  const authors = (en && pub.authorsEn) ? pub.authorsEn : pub.authors;
  const title = (en && pub.titleEn) ? pub.titleEn : pub.title;
  const citation = (en && pub.citationEn) ? pub.citationEn : pub.citation;
  return (
    <li className="flex gap-3 py-3.5 leading-[1.85] text-gray-600">
      <span className="shrink-0 font-semibold w-5 text-right tabular-nums pt-px text-gray-400">
        {index + 1}.
      </span>
      <div>
        <AuthorList authors={authors} isEnglish={useEn} />
        {useEn ? ", " : "，"}
        {q[0]}
        {title}
        {q[1]},{" "}
        {(() => {
          if (pub.type !== "journal") return citation;
          const sep = useEn ? "," : "，";
          const idx = citation.indexOf(sep);
          if (idx === -1) return citation;
          return <><em>{citation.slice(0, idx)}</em>{citation.slice(idx)}</>;
        })()}
        {pub.note && (
          pub.noteIsAward
            ? <span className="ml-2 inline-block text-xs font-medium text-[#CB959F]" title={pub.note}>★ Award</span>
            : <span className="ml-2 inline-block text-xs font-medium px-2 py-0.5 border border-gray-300 text-gray-500">{pub.note}</span>
        )}
        {(pub.doi || pub.arxiv || pub.pdf || pub.link) && (
          <span className="inline-flex gap-2 ml-2">
            {pub.doi && <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-xs text-[#464043] hover:underline">DOI</a>}
            {pub.arxiv && <a href={pub.arxiv} target="_blank" rel="noopener noreferrer" className="text-xs text-[#464043] hover:underline">arXiv</a>}
            {pub.pdf && <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="text-xs text-[#464043] hover:underline">PDF</a>}
            {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#CB959F] hover:underline">Web</a>}
          </span>
        )}
      </div>
    </li>
  );
}

export default function PublicationsList() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="space-y-10 text-xs min-[480px]:text-sm" style={{ fontFamily: "var(--font-noto-serif-jp), serif", fontWeight: 400 }}>
      {categories.map(({ type, labelJa, labelEn, badge }) => {
        const items = publications.filter((p) => p.type === type).sort((a, b) => b.year - a.year);
        if (items.length === 0) return null;
        return (
          <div key={type}>
            <div className="flex items-center gap-2.5 mb-5 pl-4 border-l-4 border-[#464043]">
              <h3 className="text-base font-bold tracking-wide text-[#464043]">{en ? labelEn : labelJa}</h3>
              {badge && (
                <span className="text-xs px-2.5 py-0.5 border border-gray-400 text-gray-500 font-medium">
                  {badge}
                </span>
              )}
            </div>
            <ul className="ml-4">
              {items.map((pub, i) => <PublicationEntry key={i} pub={pub} index={i} en={en} />)}
            </ul>
          </div>
        );
      })}

      <hr className="border-t border-gray-200" />

      {(() => {
        const awards = careers.filter((c) => c.type === "award");
        if (awards.length === 0) return null;
        return (
          <div>
            <div className="flex items-center gap-2.5 mb-5 pl-4 border-l-4 border-[#464043]">
              <h3 className="text-base font-bold tracking-wide text-[#464043]">
                {en ? "Awards" : "受賞"}
              </h3>
            </div>
            <ul className="ml-4">
              {awards.map((award, i) => (
                <li key={i} className="flex gap-3 py-3.5 leading-[1.85] text-gray-600">
                  <span className="shrink-0 font-semibold w-5 text-right tabular-nums pt-px text-gray-400">
                    {i + 1}.
                  </span>
                  <div>
                    {en && award.citationEn
                      ? <AwardCitation text={award.citationEn} boldTerms={boldTermsEn} />
                      : award.citationJa
                        ? <AwardCitation text={award.citationJa} boldTerms={boldTermsJa} />
                        : <>
                            {award.title}{"，"}{award.organization}
                            {award.description && <>{`，${award.description}`}</>}
                            {"，"}{award.period}
                          </>
                    }
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })()}
    </div>
  );
}
