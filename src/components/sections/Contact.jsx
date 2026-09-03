import { siteConfig } from "../../content/site";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-16 md:py-24 scroll-mt-24">
        <SectionHeading number="04" title="Get In Touch" />

        <div className="max-w-xl mx-auto text-center">
          <p className="text-fluid-base leading-relaxed mb-8 md:mb-10">
            I&apos;m currently open to new opportunities and interesting
            projects. Whether you have a question, a role in mind, or just want
            to say hi — my inbox is always open.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block font-mono text-green border border-green px-8 py-4 rounded text-fluid-sm hover:bg-green/10 transition-colors"
          >
            Say Hello
          </a>
        </div>

        <footer className="mt-24 md:mt-32 pb-8 text-center">
          <p className="font-mono text-fluid-sm text-slate">
            Designed &amp; built by{" "}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:underline"
            >
              {siteConfig.displayName}
            </a>
          </p>
          <p className="font-mono text-xs text-slate/60 mt-2">
            Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </footer>
      </section>
    </AnimatedSection>
  );
}
