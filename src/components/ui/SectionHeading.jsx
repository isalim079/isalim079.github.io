export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-12">
      <h2 className="text-fluid-lg font-semibold text-light-slate whitespace-nowrap flex items-center gap-2">
        <span className="font-mono text-green text-fluid-sm">{number}.</span>
        {title}
        <span className="hidden sm:block h-px bg-lightest-navy flex-1 ml-4 max-w-xs" />
      </h2>
    </div>
  );
}
