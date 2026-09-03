import { motion } from "framer-motion";
import { siteConfig } from "../../content/site";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-6rem)] lg:min-h-screen flex flex-col justify-center py-16 lg:py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-green text-fluid-sm mb-4 md:mb-6"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-fluid-2xl font-bold text-white leading-tight mb-2 md:mb-4"
      >
        {siteConfig.displayName}.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-fluid-xl font-bold text-light-slate leading-tight mb-6 md:mb-8"
      >
        {siteConfig.tagline}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-fluid-base text-slate max-w-xl leading-relaxed mb-10 md:mb-12"
      >
        I&apos;m a {siteConfig.title} at Excel Technologies Ltd based in{" "}
        {siteConfig.location}, focused on building high-quality mobile and web
        applications.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        className="inline-block font-mono text-green border border-green px-6 py-3 md:px-8 md:py-4 rounded text-fluid-sm hover:bg-green/10 transition-colors w-fit"
      >
        Get In Touch
      </motion.a>
    </section>
  );
}
