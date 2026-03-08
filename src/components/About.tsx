import type { Profile } from "@/types";

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 border-b-2 border-[#b71c1c] pb-2 w-fit">
          About
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">{profile.about}</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {profile.researchIntro}
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-800">
            <strong>Call for students:</strong> {profile.callForStudents}{" "}
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-[#b71c1c] hover:underline"
            >
              Email CV
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
