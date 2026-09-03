import { motion } from "framer-motion";

function ProjectLink({ project }) {
  const href = project.liveUrl || project.playStoreUrl || project.githubUrl;
  if (!href) return null;

  const isPlayStore = Boolean(project.playStoreUrl && !project.liveUrl);
  const label = isPlayStore ? "Google Play" : project.liveUrl ? "Live" : "GitHub";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} ${label}`}
      className="text-light-slate hover:text-green transition-colors"
    >
      {isPlayStore ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M3.609 1.814 13.792 12 3.61 22.186a1.016 1.016 0 0 1-.465-.366 1.035 1.035 0 0 1-.144-.5V2.68c0-.2.05-.39.144-.5a1.016 1.016 0 0 1 .465-.366zm2.633 20.632 11.668-6.75-2.916-2.916-8.752 9.666zm14.025-15.3-2.916-1.686-2.916 2.916 2.916 2.916 2.916-1.686a1.035 1.035 0 0 0 0-1.794l-.001-.001-2.915-1.659zM6.242 3.834l8.752 9.666 2.916-2.916L8.158 2.148 6.242 3.834z" />
        </svg>
      ) : project.liveUrl ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )}
    </a>
  );
}

export default function ProjectRow({ project, index }) {
  const isReversed = index % 2 !== 0;
  const linkHref = project.liveUrl || project.playStoreUrl || project.githubUrl;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center mb-12 md:mb-20"
    >
      <div
        className={`md:col-span-7 relative ${isReversed ? "md:order-2" : "md:order-1"}`}
      >
        {linkHref ? (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded overflow-hidden"
          >
            <ProjectImage project={project} />
          </a>
        ) : (
          <div className="block relative rounded overflow-hidden">
            <ProjectImage project={project} />
          </div>
        )}
      </div>

      <div
        className={`md:col-span-5 ${isReversed ? "md:order-1 md:text-right" : "md:order-2"}`}
      >
        <p className="font-mono text-green text-fluid-sm mb-2">
          {project.subtitle || "Featured Contribution"}
        </p>
        <h3 className="text-fluid-lg font-semibold text-light-slate mb-3 group-hover:text-green transition-colors">
          {linkHref ? (
            <a href={linkHref} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
          {project.status && (
            <span className="ml-2 font-mono text-xs text-green/70 border border-green/30 px-2 py-0.5 rounded align-middle">
              {project.status}
            </span>
          )}
        </h3>
        <div className="bg-light-navy p-5 md:p-6 rounded mb-4 shadow-xl">
          <p className="text-fluid-sm leading-relaxed">{project.description}</p>
        </div>
        <ul
          className={`flex flex-wrap gap-2 md:gap-3 ${isReversed ? "md:justify-end" : ""}`}
        >
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-green/80 text-xs md:text-sm">
              {t}
            </li>
          ))}
        </ul>
        <div
          className={`flex gap-4 mt-4 ${isReversed ? "md:justify-end" : ""}`}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-light-slate hover:text-green transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
          <ProjectLink project={project} />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="rounded w-full aspect-video object-cover object-top border-2 border-lightest-navy group-hover:border-green/40 transition-all duration-300"
      />
    );
  }

  return (
    <div className="w-full aspect-video rounded border-2 border-lightest-navy group-hover:border-green/40 transition-all duration-300 bg-gradient-to-br from-light-navy to-navy flex flex-col items-center justify-center gap-3 p-6">
      <span className="font-mono text-green text-fluid-lg font-semibold">
        {project.title}
      </span>
      {project.playStoreUrl && (
        <span className="font-mono text-slate text-xs">Available on Google Play</span>
      )}
      {project.status && (
        <span className="font-mono text-green/70 text-xs border border-green/30 px-3 py-1 rounded">
          {project.status}
        </span>
      )}
    </div>
  );
}
