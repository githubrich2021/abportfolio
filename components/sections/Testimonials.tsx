import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const avatarColors = ['bg-sun', 'bg-accent', 'bg-blush'];

function Stars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex ${className}`} role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="relative overflow-hidden bg-surface-alt py-section">
      <div aria-hidden="true" className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-blush/40 blur-3xl dark:bg-blush/10" />
      <div aria-hidden="true" className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sun/40 blur-3xl dark:bg-sun/10" />

      <div className="container-site relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Testimonials</span>
            <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Kind words from people I&rsquo;ve worked with
            </h2>
          </div>

          {/* TODO: keep this summary only if it reflects real client feedback */}
          <div className="flex items-center gap-4 self-start rounded-full bg-surface py-2.5 pl-2.5 pr-6 shadow-card lg:self-auto">
            <ul className="flex -space-x-2.5" aria-label="Clients">
              {testimonials.map((t, idx) => (
                <li
                  key={t.name}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-on-tile ring-3 ring-surface ${avatarColors[idx % avatarColors.length]}`}
                >
                  <span aria-hidden="true">{t.name[0]}</span>
                  <span className="sr-only">{t.name}</span>
                </li>
              ))}
            </ul>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-ink">5.0</span>
                <Stars className="text-sun-soft" />
              </div>
              <p className="text-xs text-muted">Average client rating</p>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-2xl gap-6 lg:max-w-none lg:grid-cols-3 lg:items-start">
          {testimonials.map((t, idx) => {
            const featured = idx === 1;
            return (
              <li key={t.name} className={featured ? '' : 'lg:mt-12'}>
                <figure
                  className={`flex h-full flex-col rounded-card rounded-tr-blob p-7 sm:p-8 ${
                    featured ? 'bg-night text-white shadow-card ring-1 ring-white/10' : 'bg-surface text-ink shadow-card'
                  }`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl rounded-bl-md bg-accent-strong text-white">
                    <Quote size={22} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  </span>

                  <blockquote className="mt-6 flex-1">
                    <p className={`text-[1.0625rem] font-medium leading-[1.8] ${featured ? 'text-white' : 'text-ink'}`}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>

                  <Stars className={`mt-6 ${featured ? 'text-sun' : 'text-sun-soft'}`} />

                  <figcaption className={`mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-5 ${featured ? 'border-white/15' : 'border-line'}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl rounded-tl-[1.5rem] text-lg font-bold text-on-tile ${avatarColors[idx % avatarColors.length]}`}
                      >
                        {t.photo ? (
                          <Image src={t.photo} alt={t.name} fill sizes="48px" loading="lazy" className="object-cover" />
                        ) : (
                          <span aria-hidden="true">{t.name[0]}</span>
                        )}
                      </span>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className={`whitespace-nowrap text-sm ${featured ? 'text-night-muted' : 'text-muted'}`}>{t.role}</p>
                      </div>
                    </div>
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                        featured ? 'bg-white/10 text-white' : 'bg-surface-alt text-ink'
                      }`}
                    >
                      {t.service}
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
