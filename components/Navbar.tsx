"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#about",        label: "About" },
  { href: "#research",     label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#career",       label: "CV" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[rgba(240,237,229,0.97)] backdrop-blur shadow-sm shadow-[#D9B343]/15">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold transition-colors"
          style={{ color: "#D9B343" }}
        >
          {profile.nameEn}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm transition-colors hover:opacity-70"
                style={{ color: "#D9B343" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "#D9B343" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4"
          style={{ background: "#F0EDE5", borderColor: "rgba(217,179,67,0.3)" }}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "#D9B343" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
