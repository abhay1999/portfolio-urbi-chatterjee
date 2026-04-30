import { ProfileImage } from "./ProfileImage";
import type { Profile } from "@/types";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <header className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f2044 100%)" }}>
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Photo column */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-30 blur-xl scale-110" />
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-white/20 shadow-2xl">
                <ProfileImage
                  src={profile.profileImage}
                  alt={`${profile.name} - ${profile.title}`}
                />
              </div>
            </div>
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </a>
            )}
          </div>

          {/* Info column */}
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-xs text-gray-300 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              IIT Kanpur &nbsp;·&nbsp; SETTLOR Lab
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2" style={{ background: "linear-gradient(to right, #ffffff, #c7d2fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {profile.name}
            </h1>
            <p className="text-lg text-indigo-300 font-semibold mb-1">{profile.title}</p>
            <p className="text-gray-400 mb-1 text-sm">{profile.department}</p>
            <p className="text-gray-500 text-sm mb-5">{profile.institute}</p>
            <p className="text-sm text-gray-300 max-w-xl leading-relaxed border-l-2 border-indigo-500 pl-3 italic">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              {profile.meetingLink && (
                <a
                  href={profile.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#00897b] hover:bg-[#00796b] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  Online Meet
                </a>
              )}
              <a
                href="https://scholar.google.co.in/citations?user=tb-hEXAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors border border-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z" />
                </svg>
                Google Scholar
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006399] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors border border-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
