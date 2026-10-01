"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Monitor, Palette, PenTool, X, Zap } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';
import { projectFilters, type Project, type ProjectFilter } from '@/data/projects';

type PortfolioItem = Project & { hasImage: boolean };

const placeholderStyle: Record<ProjectFilter, { icon: React.ElementType; className: string }> = {
  web: { icon: Monitor, className: 'bg-accent' },
  uiux: { icon: PenTool, className: 'bg-blush' },
  graphics: { icon: Palette, className: 'bg-sun' },
  wordpress: { icon: Zap, className: 'bg-sun-soft' },
};

const labelFor = (filter: ProjectFilter) => projectFilters.find((f) => f.id === filter)?.label ?? filter;

function ProjectVisual({ project, sizes }: { project: PortfolioItem; sizes: string }) {
  if (project.hasImage) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        fill
        sizes={sizes}
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  const { icon: Icon, className } = placeholderStyle[project.filter];
  return (
    // TODO: placeholder until a real image is added at project.image
    <div className={`absolute inset-0 flex items-center justify-center text-on-tile ${className}`}>
      <Icon size={72} strokeWidth={1.25} aria-hidden="true" className="opacity-40" />
      <span className="absolute left-4 top-4 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold">Image coming soon</span>
    </div>
  );
}

export default function PortfolioGrid({ projects }: { projects: PortfolioItem[] }) {
  const [active, setActive] = useState<'all' | ProjectFilter>('all');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = active === 'all' ? projects : projects.filter((p) => p.filter === active);
  const buttons = [{ id: 'all' as const, button: 'All' }, ...projectFilters];

  useEffect(() => {
    if (selected && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selected]);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap justify-center gap-2.5">
        {buttons.map((b) => (
          <button
            key={b.id}
            type="button"
            aria-pressed={active === b.id}
            onClick={() => setActive(b.id)}
            className={`btn btn-sm ${active === b.id ? 'bg-ink text-bg' : 'btn-soft'}`}
          >
            {b.button}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="group relative block aspect-[3/4] w-full overflow-hidden rounded-card rounded-tr-blob text-left"
              aria-label={`${project.title}, ${labelFor(project.filter)}. View case study`}
            >
              <ProjectVisual project={project} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/55 to-transparent px-6 pb-6 pt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/80">{labelFor(project.filter)}</p>
                <h3 className="mt-1.5 text-xl font-semibold leading-snug text-white">{project.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white/90">
                  View case study <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      >
        {selected && (
          <div className="relative p-6 sm:p-10">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close case study"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-alt text-ink hover:bg-line"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <span className="eyebrow">{labelFor(selected.filter)}</span>
            <h2 id="project-dialog-title" className="mt-2 pr-12 text-2xl font-bold leading-tight text-ink sm:text-3xl">
              {selected.title}
            </h2>

            <div className="relative mt-6 aspect-video overflow-hidden rounded-card">
              <ProjectVisual project={selected} sizes="(min-width: 960px) 880px, 100vw" />
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-3">
              <div className="space-y-7 md:col-span-2">
                <div>
                  <h3 className="font-semibold text-ink">Overview</h3>
                  <p className="mt-2 leading-[1.8] text-muted">{selected.longDescription}</p>
                </div>
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-ink">The problem</h3>
                    <p className="mt-2 text-sm leading-[1.8] text-muted">{selected.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">The objective</h3>
                    <p className="mt-2 text-sm leading-[1.8] text-muted">{selected.caseStudy.objective}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">The solution</h3>
                  <p className="mt-2 leading-[1.8] text-muted">{selected.caseStudy.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Key features</h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {selected.caseStudy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-card bg-surface-alt p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Tech stack</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <li key={tech} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <dl className="space-y-4 rounded-card bg-surface-alt p-5 text-sm">
                  <div>
                    <dt className="text-muted">My role</dt>
                    <dd className="font-semibold text-ink">{selected.caseStudy.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Challenges</dt>
                    <dd className="text-ink">{selected.caseStudy.challenges}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Results</dt>
                    <dd className="text-ink">{selected.caseStudy.results}</dd>
                  </div>
                </dl>
                {(selected.githubUrl || selected.liveUrl) && (
                  <div className="flex flex-col gap-3">
                    {selected.liveUrl && (
                      <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <ExternalLink size={18} aria-hidden="true" /> Live site
                      </a>
                    )}
                    {selected.githubUrl && (
                      <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <GitHubIcon /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
