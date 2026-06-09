"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#prednosti", label: "Prednosti" },
  { href: "#galerija", label: "Galerija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a2e44] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-[#d97706] text-2xl">▲</span>
            <span className="text-white font-bold text-lg md:text-xl leading-tight">
              Montažni<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Krovovi
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[#d97706] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+381612795007"
              className="bg-[#d97706] hover:bg-[#b45309] text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
            >
              +381 61 279 5007
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meni"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1a2e44] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[#d97706] font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+381612795007"
              className="bg-[#d97706] text-white px-4 py-2 rounded font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              +381 61 279 5007
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
