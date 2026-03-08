import type { Profile } from "@/types";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 py-12">
      <div className="max-w-3xl mx-auto px-6 text-center text-sm">
        <p className="font-semibold text-white mb-2">{profile.name}</p>
        <p>
          {profile.title} | {profile.department}
        </p>
        <p className="mt-2">{profile.institute}</p>
        <p className="mt-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-[#b71c1c] hover:underline"
          >
            {profile.contact.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
