import type { LabInfo } from "@/types";
import { SectionHeader } from "./SectionHeader";

interface SettlorInfo {
  name: string;
  fullName: string;
  incharge: string;
  coIncharge: string;
  projectOfficer: string;
}

export function Lab({ lab, settlor }: { lab: LabInfo; settlor: SettlorInfo }) {
  return (
    <section id="lab" className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader id="lab" title="Laboratory" />

        {/* Lab identity card */}
        <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl" style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #0f2044 100%)" }}>
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

        {/* SETTLOR Lab strip */}
        <div className="inline-flex flex-wrap items-center gap-3 bg-[#1a1a2e] text-white px-5 py-3 rounded-2xl shadow-lg">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: "linear-gradient(135deg,#4f46e5,#06b6d4)" }}>
            {settlor.name[0]}
          </div>
          <div>
            <p className="text-xs text-indigo-300 font-medium">{settlor.name}</p>
            <p className="text-sm font-semibold">{settlor.fullName}</p>
          </div>
          <div className="h-8 w-px bg-white/20 mx-1" />
          <div>
            <p className="text-xs text-gray-400">Incharge</p>
            <p className="text-sm font-medium">{settlor.incharge}</p>
          </div>
          <div className="h-8 w-px bg-white/20 mx-1" />
          <div>
            <p className="text-xs text-gray-400">Co-Incharge</p>
            <p className="text-sm font-medium">{settlor.coIncharge}</p>
          </div>
          <div className="h-8 w-px bg-white/20 mx-1" />
          <div>
            <p className="text-xs text-gray-400">Project Officer</p>
            <p className="text-sm font-medium">{settlor.projectOfficer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
