import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { projects } from '@/data/projects';
import PortfolioGrid from '@/components/ui/PortfolioGrid';

export default function Projects() {
  // A card shows its image as soon as the file exists in /public; until then it shows a coloured placeholder.
  const items = projects.map((project) => ({
    ...project,
    hasImage: existsSync(join(process.cwd(), 'public', project.image)),
  }));

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-section">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Portfolio</span>
          <h2 id="portfolio-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Recent work
          </h2>
          <p className="mt-4 leading-[1.8] text-muted">
            A selection of websites, interfaces and brand work, from student systems to client builds.
          </p>
        </div>
        <PortfolioGrid projects={items} />
      </div>
    </section>
  );
}
