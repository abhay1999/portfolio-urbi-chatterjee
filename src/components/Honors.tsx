import type { HonorItem } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function Honors({ items }: { items: HonorItem[] }) {
  return (
    <section id="honors" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader id="honors" title="Honors & Service" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3.5 hover:shadow-md hover:border-indigo-100 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg,#4f46e5,#06b6d4)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 leading-snug">{item.text}</p>
              </div>
              {item.year && (
                <span className="flex-shrink-0 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  {item.year}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
