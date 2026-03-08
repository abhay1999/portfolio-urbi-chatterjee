import type { HonorItem } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function Honors({ items }: { items: HonorItem[] }) {
  return (
    <section id="honors" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="honors" title="Honors & Service" />
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="text-[#b71c1c] flex-shrink-0">•</span>
              <span>
                {item.text}
                {item.year && (
                  <span className="text-gray-500 ml-1">({item.year})</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
