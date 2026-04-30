"use client";

import { useState, useMemo } from "react";
import type { Publication } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface PublicationsProps {
  journals: Publication[];
  conferences: Publication[];
}

type PubWithType = Publication & { kind: "Journal" | "Conference" };

function PublicationItem({ p, index, showKind }: { p: PubWithType; index: number; showKind: boolean }) {
  return (
    <li className="group flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center mt-0.5">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#1a1a2e] leading-snug mb-1">{p.title}</p>
        <p className="text-sm text-gray-500 mb-2">{p.authors}</p>
        <div className="flex flex-wrap items-center gap-2">
          {showKind && (
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                p.kind === "Journal"
                  ? "bg-violet-50 text-violet-700 border-violet-200"
                  : "bg-cyan-50 text-cyan-700 border-cyan-200"
              }`}
            >
              {p.kind}
            </span>
          )}
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
  const [activeYear, setActiveYear] = useState<string>("All");

  const journalsTagged = useMemo<PubWithType[]>(
    () => journals.map((p) => ({ ...p, kind: "Journal" as const })),
    [journals]
  );
  const conferencesTagged = useMemo<PubWithType[]>(
    () => conferences.map((p) => ({ ...p, kind: "Conference" as const })),
    [conferences]
  );

  // All unique years from both lists combined, newest first
  const allYears = useMemo(() => {
    const years = Array.from(
      new Set([...journals, ...conferences].map((p) => p.year).filter(Boolean))
    ) as string[];
    return ["All", ...years.sort((a, b) => parseInt(b) - parseInt(a))];
  }, [journals, conferences]);

  const yearIsActive = activeYear !== "All";

  // Combined count per year (journals + conferences)
  function combinedCountForYear(year: string) {
    return [...journals, ...conferences].filter((p) => p.year === year).length;
  }

  // When a specific year is selected: show journals + conferences combined for that year
  // When "All": respect the Journal/Conference tab
  const filteredList = useMemo<PubWithType[]>(() => {
    if (yearIsActive) {
      return [...journalsTagged, ...conferencesTagged].filter((p) => p.year === activeYear);
    }
    return activeTab === "journals" ? journalsTagged : conferencesTagged;
  }, [activeYear, activeTab, journalsTagged, conferencesTagged, yearIsActive]);

  function handleTabChange(tab: "journals" | "conferences") {
    setActiveTab(tab);
    setActiveYear("All");
  }

  return (
    <section id="publications" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="publications" title="Publications" />

        {/* Year filter — primary, always visible */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                activeYear === year
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {year}
              {year !== "All" && (
                <span className={`ml-1.5 ${activeYear === year ? "text-indigo-200" : "text-gray-400"}`}>
                  ({combinedCountForYear(year)})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab switcher — only shown when year = All */}
        {!yearIsActive && (
          <div className="flex gap-1 bg-gray-200 p-1 rounded-xl w-fit mb-6">
            <button
              onClick={() => handleTabChange("journals")}
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
              onClick={() => handleTabChange("conferences")}
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
        )}

        {/* Legend when year is active */}
        {yearIsActive && (
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-violet-400" />
              Journal
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400" />
              Conference
            </span>
          </div>
        )}

        {/* Count bar */}
        <p className="text-xs text-gray-400 mb-3 font-medium">
          Showing {filteredList.length}{" "}
          {yearIsActive
            ? `publication${filteredList.length !== 1 ? "s" : ""} from ${activeYear} (journals + conferences)`
            : `${activeTab === "journals" ? "journal" : "conference"} publication${filteredList.length !== 1 ? "s" : ""}`}
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6">
          {filteredList.length === 0 ? (
            <p className="py-8 text-center text-gray-400 text-sm">No publications found for the selected year.</p>
          ) : (
            <ul>
              {filteredList.map((p, i) => (
                <PublicationItem key={i} p={p} index={i} showKind={yearIsActive} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
