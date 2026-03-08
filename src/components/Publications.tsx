"use client";

import { useState } from "react";
import type { Publication } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface PublicationsProps {
  journals: Publication[];
  conferences: Publication[];
}

function PublicationItem({ p }: { p: Publication }) {
  return (
    <li className="py-3 border-b border-gray-100 last:border-0">
      <p className="text-gray-700 text-sm">{p.authors}</p>
      <p className="font-medium text-[#1a1a2e] mt-1">{p.title}</p>
      <p className="text-sm text-gray-600 mt-1">
        {p.venue}
        {p.year && `, ${p.year}`}
        {p.volume && `, ${p.volume}`}
        {p.pages && `, pp. ${p.pages}`}
      </p>
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#b71c1c] hover:underline mt-1 inline-block"
        >
          Publication link
        </a>
      )}
    </li>
  );
}

export function Publications({ journals, conferences }: PublicationsProps) {
  const [showJournals, setShowJournals] = useState(true);
  const [showConferences, setShowConferences] = useState(true);

  return (
    <section id="publications" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="publications" title="Publications" />
        <div className="space-y-8">
          <div>
            <button
              onClick={() => setShowJournals(!showJournals)}
              className="flex items-center gap-2 font-semibold text-[#1a1a2e] mb-4"
              aria-expanded={showJournals}
            >
              <span aria-hidden>{showJournals ? "−" : "+"}</span>
              Journal Publications ({journals.length})
            </button>
            {showJournals && (
              <ul className="divide-y divide-gray-200">
                {journals.map((p, i) => (
                  <PublicationItem key={i} p={p} />
                ))}
              </ul>
            )}
          </div>
          <div>
            <button
              onClick={() => setShowConferences(!showConferences)}
              className="flex items-center gap-2 font-semibold text-[#1a1a2e] mb-4"
              aria-expanded={showConferences}
            >
              <span aria-hidden>{showConferences ? "−" : "+"}</span>
              Conference Proceedings ({conferences.length})
            </button>
            {showConferences && (
              <ul className="divide-y divide-gray-200">
                {conferences.map((p, i) => (
                  <PublicationItem key={i} p={p} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
