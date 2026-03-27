"use client";

import { useState } from "react";
import Link from "next/link";
import { researches } from "@/lib/data";
import { useLang } from "@/contexts/LanguageContext";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ResearchSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeIndex = hoverIndex ?? selectedIndex;
  const { lang } = useLang();
  const en = lang === "en";
  const active = researches[activeIndex];

  return (
    <section id="research" className="py-16 md:py-24 bg-[#FDFAFC]">

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-md bg-white/30 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={`${bp}${active.image ?? "/hero.jpg"}`}
            alt={active.titleEn ?? active.title}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#464043]/70 text-white text-xl leading-none hover:bg-[#464043] transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <h2
            className="text-3xl md:text-4xl font-normal text-[#464043] whitespace-nowrap"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Projects
          </h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <p className="text-[13px] min-[480px]:text-sm text-gray-500 mt-4 text-center">
          {en
            ? "Selected projects I have worked on, including research prototypes, industry projects, and personal works."
            : "研究・企業プロジェクト・個人制作を含む，これまでに関わったプロジェクトを掲載しています．"}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Featured area */}
        <div className="mb-4 shadow-[6px_6px_20px_0px_rgba(70,64,67,0.16)]">
          {/* Image — click to enlarge */}
          <button
            className="w-full bg-white overflow-hidden cursor-zoom-in relative"
            style={{ aspectRatio: "1983/582" }}
            onClick={() => setLightboxOpen(true)}
            aria-label="Enlarge image"
          >
            <img
              key={activeIndex}
              src={`${bp}${active.image ?? "/hero.jpg"}`}
              alt={active.titleEn ?? active.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>

          {/* Description — all items stacked in same grid cell; only active is visible */}
          <div style={{ display: "grid" }}>
            {researches.map((r, i) => {
              const Wrapper = r.hasPage ? Link : "div";
              const wrapperProps = r.hasPage
                ? { href: `/projects/${r.slug}` }
                : {};
              return (
              <Wrapper
                key={i}
                {...(wrapperProps as any)}
                style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}
                className={`flex flex-col px-7 pt-4 pb-5 text-xs min-[480px]:text-sm ${
                  activeIndex === i
                    ? `${r.hasPage ? "hover:bg-gray-50 cursor-pointer" : ""} transition-colors`
                    : "invisible pointer-events-none select-none"
                }`}
              >
                <div className="mb-3">
                  <h3
                    className="text-lg min-[480px]:text-3xl font-normal text-[#464043] mb-1"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {en ? (r.titleEn ?? r.title) : r.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mt-3 mb-4">
                    {en ? (r.descriptionEn ?? r.description) : r.description}
                  </p>

                  {r.keywords.length > 0 && (
                    <div className="text-gray-500">
                      <p className="font-medium text-[#464043] mb-1">Keywords <span className="text-gray-300 font-normal">|</span></p>
                      <p className="flex flex-wrap gap-x-1">
                        {r.keywords.map((kw, j) => (
                          <span key={kw}>
                            {kw}{j < r.keywords.length - 1 && <span className="mx-1 text-gray-300">·</span>}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center text-gray-500 mt-auto pt-3" onClick={(e) => e.preventDefault()}>
                  {r.paper
                    ? <a href={r.paper} target="_blank" rel="noopener noreferrer" className="hover:text-[#464043] transition-colors" onClick={(e) => e.stopPropagation()}>Paper</a>
                    : <span className="text-gray-300">Paper</span>
                  }
                  <span className="mx-3 text-gray-300">|</span>
                  {r.project
                    ? <a href={r.project} target="_blank" rel="noopener noreferrer" className="hover:text-[#464043] transition-colors" onClick={(e) => e.stopPropagation()}>Project</a>
                    : r.hasPage
                    ? <span className="text-gray-500">Project</span>
                    : <span className="text-gray-300">Project</span>
                  }
                </div>
              </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {researches.map((r, i) => (
            <div
              key={i}
              className="relative cursor-pointer group"
              onPointerEnter={(e) => { if (e.pointerType === "mouse") setHoverIndex(i); }}
              onPointerLeave={(e) => { if (e.pointerType === "mouse") setHoverIndex(null); }}
              onTouchEnd={(e) => { e.preventDefault(); setSelectedIndex(i); }}
              onClick={() => setSelectedIndex(i)}
            >
              <div className={`aspect-[5/3] overflow-hidden bg-white transition-opacity duration-200 relative ${activeIndex === i ? "opacity-100" : "opacity-70"}`}>
                <img
                  src={`${bp}${r.image ?? "/hero.jpg"}`}
                  alt={r.titleEn ?? r.title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#464043]/30 flex items-end p-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                    {r.label ?? (en ? (r.titleEn ?? r.title) : r.title)}
                  </span>
                </div>
              </div>
              {selectedIndex === i && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#464043]" />}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
