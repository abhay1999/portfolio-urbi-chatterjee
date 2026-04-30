"use client";

import { useState, useMemo } from "react";
import type { Person, MtechStudent, BtechStudent } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface PeopleProps {
  phdScholars: Person[];
  mtechStudents: MtechStudent[];
  btechStudents: BtechStudent[];
  labInfo: { name: string; fullName: string; incharge: string; coIncharge: string; projectOfficer: string };
}

const fellowshipColors: Record<string, string> = {
  PMRF: "bg-amber-100 text-amber-700 border-amber-200",
  TCS: "bg-blue-100 text-blue-700 border-blue-200",
};

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const avatarGradients = [
  "from-indigo-500 to-indigo-700",
  "from-violet-500 to-violet-700",
  "from-cyan-500 to-cyan-700",
  "from-emerald-500 to-emerald-700",
  "from-rose-500 to-rose-700",
];

function YearFilter({ years, active, onSelect }: { years: string[]; active: string; onSelect: (y: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
            active === year
              ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
              : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export function People({ phdScholars, mtechStudents, btechStudents, labInfo }: PeopleProps) {
  const mtechYears = useMemo(() => {
    const years = Array.from(new Set(mtechStudents.map((s) => s.year).filter(Boolean))) as string[];
    return ["All", ...years.sort()];
  }, [mtechStudents]);

  const btechYears = useMemo(() => {
    const years = Array.from(new Set(btechStudents.map((s) => s.year))) as string[];
    return ["All", ...years.sort()];
  }, [btechStudents]);

  const [activeMtechYear, setActiveMtechYear] = useState("All");
  const [activeBtechYear, setActiveBtechYear] = useState("All");

  const filteredMtech = useMemo(
    () => activeMtechYear === "All" ? mtechStudents : mtechStudents.filter((s) => s.year === activeMtechYear),
    [mtechStudents, activeMtechYear]
  );

  const filteredBtech = useMemo(
    () => activeBtechYear === "All" ? btechStudents : btechStudents.filter((s) => s.year === activeBtechYear),
    [btechStudents, activeBtechYear]
  );

  return (
    <section id="students" className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader id="students" title="Students" />

        {/* PhD Scholars grid */}
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">PhD Scholars</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {phdScholars.map((person, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                {person.image ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${person.image}`}
                    alt={person.name}
                    className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0"
                  />
                ) : (
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0`}>
                    {getInitials(person.name)}
                  </div>
                )}
                <div className="min-w-0">
                  {person.website ? (
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1a1a2e] leading-tight truncate hover:text-indigo-600 transition-colors block"
                    >
                      {person.name}
                    </a>
                  ) : (
                    <p className="font-semibold text-[#1a1a2e] leading-tight truncate">{person.name}</p>
                  )}
                  {person.fellowship && (
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border mt-1 ${fellowshipColors[person.fellowship.split(" ")[0]] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {person.fellowship}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{person.topic}</p>
              {person.notes && (
                <p className="text-xs text-indigo-600 font-medium bg-indigo-50 px-3 py-1.5 rounded-lg mb-2">
                  {person.notes}
                </p>
              )}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="text-xs text-gray-400 hover:text-indigo-600 transition-colors mt-2 block"
                >
                  {person.email}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* M.Tech Students table */}
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-14 mb-4">M.Tech Students</h3>
        <YearFilter years={mtechYears} active={activeMtechYear} onSelect={setActiveMtechYear} />
        <p className="text-xs text-gray-400 mb-3 font-medium">
          Showing {filteredMtech.length} student{filteredMtech.length !== 1 ? "s" : ""}
          {activeMtechYear !== "All" ? ` from batch ${activeMtechYear}` : ""}
        </p>
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider w-10">#</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">Student Name</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">Project Title</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Solo / Joint Supervision</th>
              </tr>
            </thead>
            <tbody>
              {filteredMtech.map((s, i) => (
                <tr
                  key={s.sno}
                  className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-indigo-50 transition-colors`}
                >
                  <td className="px-4 py-3 text-gray-400 font-medium">{s.sno}</td>
                  <td className="px-4 py-3 font-medium text-[#1a1a2e] whitespace-nowrap">{s.name}</td>
                  <td className="px-4 py-3 text-gray-600 leading-relaxed">{s.projectTitle}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {s.supervision === "Sole Supervision" ? (
                      <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                        Sole Supervision
                      </span>
                    ) : (
                      <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                        {s.supervision}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* B.Tech Students table */}
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-14 mb-4">B.Tech Students</h3>
        <YearFilter years={btechYears} active={activeBtechYear} onSelect={setActiveBtechYear} />
        <p className="text-xs text-gray-400 mb-3 font-medium">
          Showing {filteredBtech.length} student{filteredBtech.length !== 1 ? "s" : ""}
          {activeBtechYear !== "All" ? ` from ${activeBtechYear}` : ""}
        </p>
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider w-10">#</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">Student Name</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">Project Title</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredBtech.map((s, i) => (
                <tr
                  key={s.sno}
                  className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-indigo-50 transition-colors`}
                >
                  <td className="px-4 py-3 text-gray-400 font-medium">{s.sno}</td>
                  <td className="px-4 py-3 font-medium text-[#1a1a2e] whitespace-nowrap">{s.name}</td>
                  <td className="px-4 py-3 text-gray-600 leading-relaxed">{s.projectTitle}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                      {s.year}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
