import type { Contact } from "@/types";
import { SectionHeader } from "./SectionHeader";

export function Contact({ contact }: { contact: Contact }) {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader id="contact" title="Contact" />
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-[#b71c1c] hover:underline"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <strong>Lab Website:</strong>{" "}
            <a
              href={contact.labWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b71c1c] hover:underline"
            >
              {contact.labWebsite}
            </a>
          </li>
          {contact.personalWebsite && (
            <li>
              <strong>Personal Website:</strong>{" "}
              <a
                href={contact.personalWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b71c1c] hover:underline"
              >
                {contact.personalWebsite}
              </a>
            </li>
          )}
          <li>
            <strong>Phone:</strong> {contact.phone}
          </li>
          <li>
            <strong>Address:</strong> Indian Institute of Technology Kanpur,
            Kanpur, Uttar Pradesh, India 208016
          </li>
        </ul>
      </div>
    </section>
  );
}
