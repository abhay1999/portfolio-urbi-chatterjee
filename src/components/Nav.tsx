"use client";

import { useState, useEffect } from "react";

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
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur border-b border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="#"
            className="font-bold text-[#1a1a2e] tracking-tight text-sm flex items-center gap-2"
          >
            <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black" style={{ background: "linear-gradient(135deg,#4f46e5,#06b6d4)" }}>
              UC
            </span>
            <span className="hidden sm:inline">Dr. Urbi Chatterjee</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-indigo-500" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="grid grid-cols-3 gap-1 pt-2">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 px-3 rounded-lg text-sm text-center font-medium transition-colors ${
                      isActive
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
