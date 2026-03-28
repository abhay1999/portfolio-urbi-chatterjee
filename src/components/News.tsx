import type { NewsItem } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function News({ items }: { items: NewsItem[] }) {
  return (
    <section id="news" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="news" title="Recent News" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent" />
          <div className="space-y-8">
            {items.map((item, i) => (
              <article key={i} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-indigo-400 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>
                <time
                  dateTime={item.date}
                  className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full mb-2"
                >
                  {item.date}
                </time>
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
