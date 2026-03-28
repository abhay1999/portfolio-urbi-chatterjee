import type { LabInfo } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function Lab({ lab }: { lab: LabInfo }) {
  return (
    <section id="lab" className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader id="lab" title="Laboratory" />

        {/* Lab identity card */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl" style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #0f2044 100%)" }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl" />
          <div className="relative p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg" style={{ background: "linear-gradient(135deg,#4f46e5,#06b6d4)" }}>
                {lab.name.slice(0, 2)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-1">{lab.name}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{lab.fullName}</h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl">{lab.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Research Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {lab.researchAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-medium rounded-full border transition-colors hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50 text-gray-700 border-gray-200 bg-gray-50"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Collaborating Organizations</h4>
            <div className="grid grid-cols-2 gap-2">
              {lab.collaborations.map((org, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 hover:border-indigo-200 hover:bg-indigo-50 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-indigo-700 font-medium leading-tight">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
