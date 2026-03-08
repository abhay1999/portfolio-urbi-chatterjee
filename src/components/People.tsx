import type { Person } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface PeopleProps {
  phdScholars: Person[];
  labInfo: { name: string; fullName: string; coIncharge: string };
}

export function People({ phdScholars, labInfo }: PeopleProps) {
  return (
    <section id="people" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="people" title="People" />
        <p className="text-gray-700 mb-6">
          Lab: <strong>{labInfo.fullName} ({labInfo.name})</strong>. Co-Incharge:{" "}
          {labInfo.coIncharge}.
        </p>
        <h3 className="font-semibold text-[#1a1a2e] mb-3">PhD Scholars</h3>
        <ul className="space-y-4">
          {phdScholars.map((p, i) => (
            <li key={i} className="pl-4 border-l-2 border-gray-200">
              <span className="font-semibold text-[#1a1a2e]">{p.name}</span>
              {p.fellowship && (
                <span className="text-sm text-[#b71c1c] ml-2">({p.fellowship})</span>
              )}
              <p className="text-gray-700 text-sm mt-1">{p.topic}</p>
              {p.notes && (
                <p className="text-gray-500 text-sm mt-1">{p.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
