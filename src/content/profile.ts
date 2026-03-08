import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Dr. Urbi Chatterjee",
  title: "Assistant Professor",
  department: "Department of Computer Science and Engineering",
  institute: "Indian Institute of Technology Kanpur",
  location: "Kanpur, Uttar Pradesh, INDIA 208016",
  email: "urbic@cse.iitk.ac.in",
  personalWebsite: "https://urbiism.wixsite.com/urbi1989",
  labWebsite: "https://cse.iitk.ac.in/users/urbic/research/",
  phone: "+91-9836931261",
  profileImage: "/images/profile/placeholder.svg", // Replace with urbi-chatterjee.jpg when adding profile photo
  tagline: "Hardware Security, Physically Unclonable Functions, Acoustic Side Channel Attacks",
  about:
    "I am an Assistant Professor in the Department of Computer Science and Engineering at IIT Kanpur. My research focuses on hardware security, physically unclonable functions (PUFs), acoustic side-channel attacks, approximate computing, and UAV security. I lead the Secure Embedded and Smart Things Laboratory (SETTLOR) at the C3I Center of IIT Kanpur.",
  researchIntro:
    "The general focus of my SETTLOR research group is on hardware and embedded system security, addressing challenges posed by emerging technologies. Our key research areas include Acoustic Side-Channel Attacks, Physically Unclonable Functions (PUFs), Approximate Computing, Near Field and Far-Field EM Side Channel Attacks, UAV Security, Screen Reading TEMPEST Attacks, Network-on-Chip (NoC) security, Bio-Chip Security and Post-Quantum Cryptography.",
  callForStudents:
    "I am looking for self-motivated students with strong academic background to join our group and work on exciting projects related to hardware security, side-channel attacks, PUFs, approximate computing, and IoT security. Interested students can email their CV with a short description about their research interests.",
  researchAreas: [
    "Physically Unclonable Functions (PUFs)",
    "UAV Security",
    "Acoustic Side Channel Attacks",
    "Approximate Computing",
    "Timing Side Channel Attacks on Network-on-Chip Architecture",
    "Bio-Chip Security",
  ],
  teaching: [
    {
      code: "CS666",
      name: "Hardware Security for Internet of Things",
      semesters: "2021-22-I, 2022-23-I, 2023-24-I, 2025-26-I",
    },
    {
      code: "CS220",
      name: "Computer Organisation",
      semesters: "2021-22-II, 2022-23-II",
    },
    {
      code: "CS422",
      name: "Computer Architecture",
      semesters: "2025-26-II",
    },
    {
      code: "CS669",
      name: "Design for Security",
      semesters: "2023-24-II",
    },
    {
      code: "ESC111/112",
      name: "Fundamentals of Computing",
      semesters: "2024-25-I",
    },
  ],
  newCourseIntroduced: "CS666: Hardware Security for Internet of Things",
  contact: {
    email: "urbic@cse.iitk.ac.in",
    labWebsite: "https://cse.iitk.ac.in/users/urbic/research/",
    personalWebsite: "https://urbiism.wixsite.com/urbi1989",
    phone: "+91-9836931261",
  },
};
