import type { TeachingEntry } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface TeachingProps {
  courses: TeachingEntry[];
  newCourse?: string;
}

const codeColors = [
  "bg-indigo-600",
  "bg-violet-600",
  "bg-cyan-600",
  "bg-emerald-600",
  "bg-amber-600",
];

export function Teaching({ courses, newCourse }: TeachingProps) {
  return (
    <section id="teaching" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader id="teaching" title="Teaching" />

        {newCourse && (
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            New course introduced: <span className="font-semibold">{newCourse}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courses.map((c, i) => (
            <div
              key={i}
              className="group flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${codeColors[i % codeColors.length]} flex items-center justify-center shadow-sm`}>
                <span className="text-white text-xs font-black text-center leading-tight px-1">{c.code}</span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-[#1a1a2e] leading-snug mb-1">{c.name}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  {c.semesters}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
