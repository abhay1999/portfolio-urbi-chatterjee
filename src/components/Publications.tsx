"use client";

import { useState } from "react";
import type { Publication } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface PublicationsProps {
  journals: Publication[];
  conferences: Publication[];
}

function PublicationItem({ p, index }: { p: Publication; index: number }) {
  return (
    <li className="group flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center mt-0.5">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#1a1a2e] leading-snug mb-1">{p.title}</p>
        <p className="text-sm text-gray-500 mb-2">{p.authors}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-full">
            {p.venue}
          </span>
          {p.year && (
            <span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
              {p.year}
            </span>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              View paper
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export function Publications({ journals, conferences }: PublicationsProps) {
  const [activeTab, setActiveTab] = useState<"journals" | "conferences">("journals");

  return (
    <section id="publications" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="publications" title="Publications" />

        {/* Tab switcher */}
        <div className="flex gap-1 bg-gray-200 p-1 rounded-xl w-fit mb-8">
          <button
            onClick={() => setActiveTab("journals")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "journals"
                ? "bg-white text-[#1a1a2e] shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Journals
            <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full">
              {journals.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("conferences")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "conferences"
                ? "bg-white text-[#1a1a2e] shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Conferences
            <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full">
              {conferences.length}
            </span>
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6">
          <ul>
            {activeTab === "journals"
              ? journals.map((p, i) => <PublicationItem key={i} p={p} index={i} />)
              : conferences.map((p, i) => <PublicationItem key={i} p={p} index={i} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
