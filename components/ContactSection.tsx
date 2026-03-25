"use client";

import { profile } from "@/lib/data";
import { useLang } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <section id="contact" className="py-20 bg-[#FDFAFC]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-300" />
          <h2 className="text-3xl md:text-4xl font-normal text-[#464043] whitespace-nowrap"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
            Contact
          </h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <p className="text-[13px] min-[480px]:text-sm text-gray-500 mb-10">
          {en
            ? "Feel free to reach out for any inquiries."
            : "各種お問い合わせはお気軽にご連絡ください．"}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">

          <a href={`mailto:${profile.email}`}
            className="flex items-center gap-2.5 text-[13px] min-[480px]:text-sm text-gray-500 hover:text-[#464043] transition-colors group">
            <svg className="w-4 h-4 shrink-0 text-[#464043]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.email}
          </a>

          {profile.twitter && (
            <a
              href={`https://x.com/${profile.twitter.replace(/^@/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] min-[480px]:text-sm text-gray-500 hover:text-[#464043] transition-colors"
            >
              <svg className="w-4 h-4 shrink-0 text-[#464043]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              {profile.twitter}
            </a>
          )}

        </div>
      </div>
    </section>
  );
}
