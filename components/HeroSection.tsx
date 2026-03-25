"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import { useLang } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <section id="about" className="pt-36 pb-20 md:pt-56 md:pb-24 bg-[#FDFAFC]">
      <div className="px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mx-auto w-fit">

        {/* Left: text */}
        <div className="max-w-sm text-center text-[13px] min-[480px]:text-sm">
          <h1
            className="text-3xl md:text-5xl font-normal mb-6 text-[#464043]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {profile.nameEn}
          </h1>

          <p className="text-gray-500 mb-6 leading-relaxed whitespace-pre-line">
            {en ? profile.bio : profile.bioJa}
          </p>

          {/* Interest tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {profile.interests.map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-1.5 rounded-full border border-gray-200 bg-[#F7F3F4] text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:opacity-60 transition-opacity">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.email}
          </a>
        </div>

        {/* Right: illustration */}
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-full overflow-hidden relative">
          <Image
            src="/icon_original.png"
            alt="illustration"
            fill
            className="object-cover"
          />
        </div>

      </div>
      </div>
    </section>
  );
}
