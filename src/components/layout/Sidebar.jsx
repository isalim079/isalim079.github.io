import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "../../content/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import SocialLinks from "./SocialLinks";
import { container, item } from "../ui/animationVariants";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  const handleNavClick = () => setMenuOpen(false);

  const NavItems = ({ vertical = true }) => (
    <motion.ul
      variants={vertical ? container : undefined}
      initial={vertical ? "hidden" : false}
      animate={vertical ? "show" : false}
      className={`${vertical ? "space-y-2" : "flex flex-col gap-4"}`}
    >
      {navLinks.map((link, i) => (
        <motion.li key={link.id} variants={vertical ? item : undefined}>
          <a
            href={`#${link.id}`}
            onClick={handleNavClick}
            className={`group flex items-center gap-4 font-mono text-fluid-sm transition-colors ${
              activeSection === link.id ? "text-green" : "text-light-slate hover:text-green"
            }`}
          >
            <span className="text-green w-5 text-right">
              {String(i + 1).padStart(2, "0")}.
            </span>
            <span className="relative">
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-green hidden lg:block"
                />
              )}
            </span>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-lightest-navy/50">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#" className="font-mono text-fluid-sm text-green font-medium">
            {siteConfig.displayName}.
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-green font-mono text-sm border border-green px-3 py-1 rounded hover:bg-green/10 transition-colors"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-lightest-navy/50 bg-light-navy/95"
            >
              <div className="px-8 py-6">
                <NavItems />
                <div className="mt-6 pt-6 border-t border-lightest-navy/50">
                  <SocialLinks />
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-mono text-fluid-sm text-green border border-green px-4 py-2 rounded hover:bg-green/10 transition-colors"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[280px] flex-col justify-between py-24 px-10 z-40">
        <div>
          <a href="#" className="block mb-16">
            <span className="font-mono text-green text-lg font-semibold tracking-wide">
              {siteConfig.displayName}.
            </span>
          </a>
          <NavItems />
        </div>

        <div>
          <SocialLinks className="mb-8" />
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-fluid-sm text-green border border-green px-4 py-2 rounded hover:bg-green/10 transition-colors inline-block"
          >
            Resume
          </a>
        </div>
      </aside>
    </>
  );
}
