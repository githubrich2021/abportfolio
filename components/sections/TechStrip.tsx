import type { ReactNode } from 'react';
import { Code2 } from 'lucide-react';

// Simple monochrome marks so the row reads as one greyscale strip.
function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border-2 border-current text-[0.7rem] font-bold leading-none">
      {children}
    </span>
  );
}

function FigmaMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12zM12 9H8.5a3.5 3.5 0 0 0 0 7H12zM12 16H8.5a3.5 3.5 0 1 0 3.5 3.5zM12 2h3.5a3.5 3.5 0 0 1 0 7H12z" />
      <circle cx="15.5" cy="12.5" r="3.5" />
    </svg>
  );
}

function ElementorMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 8v8M12 8h4M12 12h4M12 16h4" />
    </svg>
  );
}

const tools = [
  { name: 'Figma', mark: <FigmaMark /> },
  { name: 'WordPress', mark: <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-current text-sm font-bold">W</span> },
  { name: 'Photoshop', mark: <Badge>Ps</Badge> },
  { name: 'Illustrator', mark: <Badge>Ai</Badge> },
  { name: 'HTML/CSS', mark: <Code2 size={28} aria-hidden="true" /> },
  { name: 'JavaScript', mark: <Badge>JS</Badge> },
  { name: 'Elementor', mark: <ElementorMark /> },
];

export default function TechStrip() {
  return (
    <section aria-labelledby="tools-heading" className="border-y border-line py-12 sm:py-14">
      <div className="container-site">
        <h2 id="tools-heading" className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-muted">
          Tools I work with
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-x-7 xl:gap-x-9">
          {tools.map((tool) => (
            <li
              key={tool.name}
              className="flex items-center gap-2.5 text-muted transition-colors hover:text-ink"
            >
              {tool.mark}
              <span className="text-base font-semibold tracking-tight sm:text-lg lg:text-base xl:text-lg">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
