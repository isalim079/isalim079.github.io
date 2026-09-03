import { aboutContent, siteConfig } from "../../content/site";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="py-16 md:py-24 scroll-mt-24">
        <SectionHeading number="01" title="About Me" />

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">
          <div className="space-y-4 text-fluid-base leading-relaxed">
            {aboutContent.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <div>
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 rounded-md bg-green/20 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <img
                  src={siteConfig.profilePhoto}
                  alt={siteConfig.fullName}
                  className="relative w-48 md:w-56 rounded-md border-2 border-green/40 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-light-navy p-6 rounded border border-lightest-navy/50">
              <h3 className="font-mono text-green text-fluid-sm mb-4">
                Technologies I work with
              </h3>
              {Object.entries(aboutContent.skills).map(([category, items]) => (
                <div key={category} className="mb-4 last:mb-0">
                  <p className="font-mono text-light-slate text-xs mb-2">
                    {category}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="font-mono text-green/80 text-xs bg-navy/60 px-2 py-1 rounded"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-mono text-green text-fluid-sm mb-4">
                Education
              </h3>
              <ul className="space-y-4">
                {aboutContent.education.map((edu) => (
                  <li key={edu.degree} className="text-fluid-sm">
                    <p className="text-light-slate font-medium">{edu.degree}</p>
                    <p className="text-slate">{edu.school}</p>
                    {edu.period && (
                      <p className="font-mono text-green/70 text-xs mt-1">
                        {edu.period}
                        {edu.note ? ` · ${edu.note}` : ""}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-mono text-green text-fluid-sm mb-4">
                Languages
              </h3>
              <ul className="space-y-2">
                {aboutContent.languages.map((lang) => (
                  <li key={lang.name} className="text-fluid-sm flex justify-between gap-4">
                    <span className="text-light-slate">{lang.name}</span>
                    <span className="font-mono text-green/70 text-xs">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
