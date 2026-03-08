"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#news", label: "News" },
  { href: "#teaching", label: "Teaching" },
  { href: "#people", label: "People" },
  { href: "#publications", label: "Publications" },
  { href: "#lab", label: "Lab" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-semibold text-[#1a1a2e]">
            Dr. Urbi Chatterjee
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b71c1c] focus:ring-offset-2"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span>{open ? "✕" : "☰"}</span>
          </button>
          <ul
            className={`${
              open ? "block" : "hidden"
            } md:flex absolute md:relative top-14 left-0 right-0 md:top-0 bg-white md:bg-transparent border-b md:border-0 border-gray-200 md:py-0 py-4`}
          >
            {links.map((link) => (
              <li key={link.href} className="md:ml-6">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 md:py-0 text-gray-700 hover:text-[#b71c1c] text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
