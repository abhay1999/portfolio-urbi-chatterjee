import type { TeachingEntry } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface TeachingProps {
  courses: TeachingEntry[];
  newCourse?: string;
}

export function Teaching({ courses, newCourse }: TeachingProps) {
  return (
    <section id="teaching" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="teaching" title="Teaching" />
        {newCourse && (
          <p className="text-sm text-[#b71c1c] font-medium mb-4">
            New course introduced: {newCourse}
          </p>
        )}
        <ul className="space-y-4">
          {courses.map((c, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-mono font-semibold text-[#1a1a2e] sm:w-24">
                {c.code}
              </span>
              <span className="text-gray-700">{c.name}</span>
              <span className="text-sm text-gray-500 sm:ml-2">({c.semesters})</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
