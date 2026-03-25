"use client";

import { useLang } from "@/contexts/LanguageContext";
import PublicationsList from "@/components/PublicationsList";

export default function PublicationsSection() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <section id="publications" className="py-16 md:py-24 bg-[#FDFAFC]">

      <div className="max-w-4xl mx-auto px-6 mb-14">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <h2 className="text-3xl md:text-4xl font-normal text-[#464043] whitespace-nowrap"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
            Contributions
          </h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <p className="text-[13px] min-[480px]:text-sm text-gray-500 mt-4 text-center">
          {en
            ? "Selected publications from my academic research."
            : "大学での研究成果を掲載しています．"}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <PublicationsList />
      </div>

    </section>
  );
}
