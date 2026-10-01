import { Award, Briefcase, Smile } from 'lucide-react';
import { stats } from '@/data/stats';

const iconMap: Record<string, React.ElementType> = { Award, Briefcase, Smile };

export default function Stats() {
  return (
    <section aria-label="Highlights" className="pb-section">
      {/* TODO: these numbers are placeholders. Put your real numbers in data/stats.ts */}
      <ul className="container-site grid gap-5 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <li key={stat.label} className="flex items-center gap-5 rounded-card rounded-br-blob border border-line bg-surface p-7 shadow-card">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl rounded-tr-[1.75rem] bg-icon-bg text-icon-fg">
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <p className="text-4xl font-bold tracking-tight text-ink">{stat.value}</p>
                <p className="mt-1 text-[0.9375rem] text-muted">{stat.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
