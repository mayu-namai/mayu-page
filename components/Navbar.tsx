"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";
import { useLang } from "@/contexts/LanguageContext";

const navLinks = [
  { href: "#about",        ja: "About",        en: "About" },
  { href: "#research",     ja: "Projects",     en: "Projects" },
  { href: "#publications", ja: "Contributions", en: "Contributions" },
  { href: "#career",       ja: "CV",           en: "CV" },
  { href: "#contact",      ja: "Contact",      en: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navHref = (hash: string) => isHome ? hash : `/${hash}`;

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    if (!isHome) return; // let browser do full navigation
    e.preventDefault();
    const id = hash.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FDFAFC] shadow-[0_4px_12px_-2px_rgba(70,64,67,0.10)]">
      <nav className="max-w-3xl mx-auto pl-6 pr-7 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-[#464043] hover:opacity-60 transition-opacity">
          {profile.nameEn}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={navHref(link.href)} onClick={(e) => handleNavClick(e, link.href)} className="text-sm text-[#464043] hover:opacity-60 transition-opacity">
                  {lang === "ja" ? link.ja : link.en}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div className="flex items-center gap-1 text-xs border border-gray-300">
            <button
              onClick={() => setLang("ja")}
              className={`px-2.5 py-1 transition-colors ${lang === "ja" ? "bg-[#464043] text-white" : "text-gray-400 hover:text-[#464043]"}`}
            >
              JP
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-[#464043] text-white" : "text-gray-400 hover:text-[#464043]"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#464043]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Outside-click overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[-1]" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#FDFAFC] py-4">
          <ul className="flex flex-col mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={navHref(link.href)}
                  className="block w-full text-sm text-[#464043] hover:bg-[#464043] hover:text-white transition-colors px-6 py-3"
                  onClick={(e) => { handleNavClick(e, link.href); setMenuOpen(false); }}
                >
                  {lang === "ja" ? link.ja : link.en}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 text-xs border border-gray-300 w-fit mx-6">
            <button onClick={() => setLang("ja")} className={`px-2.5 py-1 ${lang === "ja" ? "bg-[#464043] text-white" : "text-gray-400"}`}>JP</button>
            <button onClick={() => setLang("en")} className={`px-2.5 py-1 ${lang === "en" ? "bg-[#464043] text-white" : "text-gray-400"}`}>EN</button>
          </div>
        </div>
      )}
    </header>
  );
}
