import Link from 'next/link';
import { ArrowRight, Globe, Monitor, Palette, PenTool, Zap } from 'lucide-react';
import { services, serviceSkills } from '@/data/services';

const iconMap: Record<string, React.ElementType> = { Monitor, PenTool, Palette, Zap };

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-surface-alt py-section">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:pt-6">
          <span className="eyebrow">What I do</span>
          <h2 id="services-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Services I offer
          </h2>
          <p className="mt-5 max-w-md leading-[1.8] text-muted">
            From the first sketch to a site you can update yourself, I design and build digital experiences that look
            great and work hard for your business.
          </p>
          <Link href="/contact" className="btn btn-soft btn-sm mt-7">
            Request a custom project <ArrowRight size={16} aria-hidden="true" />
          </Link>

          <dl className="mt-10 max-w-md space-y-6">
            {serviceSkills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-2 flex items-baseline justify-between text-sm font-semibold text-ink">
                  <dt>{skill.label}</dt>
                  <dd>{skill.value}%</dd>
                </div>
                <progress className="skill-bar" value={skill.value} max={100} aria-label={skill.label}>
                  {skill.value}%
                </progress>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <li
                key={service.title}
                className={`rounded-card bg-surface p-7 shadow-card sm:p-8 ${idx % 2 === 1 ? 'sm:translate-y-8' : ''}`}
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl rounded-tr-[1.75rem] bg-icon-bg text-icon-fg">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.75] text-muted">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
