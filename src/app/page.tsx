import {
  getProfile,
  getNews,
  getPeople,
  getPublications,
  getHonors,
  getLab,
} from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ResearchAreas } from "@/components/ResearchAreas";
import { News } from "@/components/News";
import { Teaching } from "@/components/Teaching";
import { People } from "@/components/People";
import { Publications } from "@/components/Publications";
import { Lab } from "@/components/Lab";
import { Honors } from "@/components/Honors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const profile = getProfile();
  const news = getNews();
  const { phdScholars, mtechStudents, labInfo } = getPeople();
  const { journalPublications, conferencePublications } = getPublications();
  const honors = getHonors();
  const lab = getLab();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero profile={profile} />
        <About profile={profile} />
        <ResearchAreas />
        <News items={news} />
        <Teaching
          courses={profile.teaching}
          newCourse={profile.newCourseIntroduced}
        />
        <People phdScholars={phdScholars} mtechStudents={mtechStudents} labInfo={labInfo} />
        <Publications
          journals={journalPublications}
          conferences={conferencePublications}
        />
        <Lab lab={lab} />
        <Honors items={honors} />
        <Contact contact={profile.contact} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
