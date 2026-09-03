import { experience } from "../../content/site";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <AnimatedSection>
      <section id="experience" className="py-16 md:py-24 scroll-mt-24">
        <SectionHeading number="02" title="Experience" />

        <div className="space-y-8 md:space-y-12">
          {experience.map((job) => (
            <div
              key={job.id}
              className="group flex flex-col lg:flex-row lg:gap-8 gap-3 p-4 md:p-6 -mx-4 md:-mx-6 rounded hover:bg-light-navy/40 transition-colors duration-200"
            >
              <p className="font-mono text-green/80 text-fluid-sm lg:w-[11rem] lg:shrink-0 pt-1">
                {job.period}
              </p>
              <div className="flex-1 min-w-0">
                <h3 className="text-fluid-base font-semibold text-light-slate group-hover:text-green transition-colors leading-snug">
                  <span className="block sm:inline">{job.role}</span>
                  <span className="text-slate font-normal">
                    {" "}
                    · {job.company}
                  </span>
                </h3>
                {job.location && (
                  <p className="font-mono text-slate text-xs mt-1">{job.location}</p>
                )}
                <ul className="mt-3 space-y-2 text-fluid-sm leading-relaxed">
                  {job.description.map((item) => (
                    <li key={item.slice(0, 30)} className="flex gap-3">
                      <span className="text-green mt-1.5 shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-green/70 text-xs bg-light-navy px-2 py-1 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
