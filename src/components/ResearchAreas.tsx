import type { Profile } from "@/types";

export function ResearchAreas({ profile }: { profile: Profile }) {
  return (
    <section id="research" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 border-b-2 border-[#b71c1c] pb-2 w-fit">
          Research Areas
        </h2>
        <ul className="space-y-3">
          {profile.researchAreas.map((area, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700"
            >
              <span className="text-[#b71c1c] mt-1" aria-hidden>•</span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
