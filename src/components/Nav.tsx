"use client";

import { useState } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-navy-900/80 border-b border-navy-800/50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-green font-mono font-bold text-xl hover:text-green/80 transition-colors"
        >
          MK
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-green"
                    : "text-slate-light hover:text-green"
                }`}
              >
                <span className="text-green mr-1">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green text-green font-mono text-sm px-4 py-2 rounded hover:bg-green-tint transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-navy-800 border-b border-navy-700 md:hidden">
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-sm text-slate-light hover:text-green transition-colors"
                  >
                    <span className="text-green mr-1">0{i + 1}.</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
