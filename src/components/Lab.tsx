import type { LabInfo } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function Lab({ lab }: { lab: LabInfo }) {
  return (
    <section id="lab" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="lab" title="Laboratory" />
        <h3 className="font-semibold text-[#1a1a2e] mb-2">
          {lab.fullName} ({lab.name})
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">{lab.description}</p>
        <h4 className="font-semibold text-[#1a1a2e] mb-2">Research Areas</h4>
        <ul className="flex flex-wrap gap-2 mb-6">
          {lab.researchAreas.map((area, i) => (
            <li
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
            >
              {area}
            </li>
          ))}
        </ul>
        <h4 className="font-semibold text-[#1a1a2e] mb-2">Collaborations</h4>
        <p className="text-gray-700 text-sm">
          {lab.collaborations.join(", ")}
        </p>
      </div>
    </section>
  );
}
