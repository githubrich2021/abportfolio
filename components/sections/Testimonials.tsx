import Image from 'next/image';
import { Star, User } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const avatarColors = ['bg-blush', 'bg-sun', 'bg-sun-soft'];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-surface-alt py-section">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            What clients say
          </h2>
        </div>

        {/* TODO: placeholder testimonials. Edit data/testimonials.ts */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <li key={idx}>
              <figure className="flex h-full flex-col rounded-card bg-surface p-7 shadow-card sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl rounded-tl-[2.25rem] text-on-tile ${avatarColors[idx % avatarColors.length]}`}
                  >
                    {t.photo ? (
                      <Image src={t.photo} alt={t.name} fill sizes="64px" loading="lazy" className="object-cover" />
                    ) : (
                      <User size={28} aria-hidden="true" />
                    )}
                  </span>
                  <div className="flex text-sun-soft" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 font-semibold italic leading-[1.75] text-ink">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
