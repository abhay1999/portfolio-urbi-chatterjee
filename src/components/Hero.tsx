import { ProfileImage } from "./ProfileImage";
import type { Profile } from "@/types";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <header className="bg-[#1a1a2e] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
          <ProfileImage
            src={profile.profileImage}
            alt={`${profile.name} - ${profile.title}`}
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {profile.name}
          </h1>
          <p className="text-lg text-gray-300 mb-1">{profile.title}</p>
          <p className="text-gray-400 mb-4">{profile.department}</p>
          <p className="text-sm text-gray-400 max-w-xl">{profile.tagline}</p>
        </div>
      </div>
    </header>
  );
}
