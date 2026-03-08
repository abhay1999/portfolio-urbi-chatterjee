import type { NewsItem } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function News({ items }: { items: NewsItem[] }) {
  return (
    <section id="news" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="news" title="Recent News" />
        <div className="space-y-8">
          {items.map((item, i) => (
            <article key={i} className="border-b border-gray-200 pb-8 last:border-0">
              <time
                dateTime={item.date}
                className="block text-sm text-[#b71c1c] font-medium mb-2"
              >
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
