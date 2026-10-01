import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2, LayoutTemplate, Monitor, Palette, PenTool, Star } from 'lucide-react';
import { profile } from '@/data/profile';

const toolBubbles = [
  { icon: PenTool, label: 'UI/UX design', className: 'bg-blush text-on-tile' },
  { icon: LayoutTemplate, label: 'Web design', className: 'bg-sun text-on-tile' },
  { icon: Palette, label: 'Graphic design', className: 'bg-sun-soft text-on-tile' },
  { icon: Code2, label: 'Development', className: 'bg-icon-bg text-icon-fg' },
];

const serviceTiles = [
  { icon: Monitor, label: 'Web Design', className: 'bg-sun rounded-tr-blob' },
  { icon: PenTool, label: 'UI/UX Design', className: 'bg-blush rounded-bl-blob items-end text-right' },
  { icon: Palette, label: 'Graphic Design', className: 'bg-sun-soft rounded-br-blob' },
];

export default function Hero() {
  return (
    <section id="home" className="noise overflow-hidden">
      <div className="container-site grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div className="rise">
          <div className="mb-7 flex items-center gap-4">
            <ul className="flex -space-x-3" aria-label="What I work on">
              <li>
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-3 ring-bg"
                />
              </li>
              {toolBubbles.map(({ icon: Icon, label, className }) => (
                <li
                  key={label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full ring-3 ring-bg ${className}`}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-snug text-muted">
              Designer &amp; developer
              <br />
              <span className="font-semibold text-ink">CS student, Accra</span>
            </p>
          </div>

          <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            I design websites and experiences that <span className="text-accent-strong">grow your brand</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg font-light leading-[1.8] text-muted">{profile.heroIntro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Contact Me <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#portfolio" className="btn btn-soft">
              View my work
            </a>
          </div>

          {/* TODO: keep this line only if it reflects real client feedback */}
          <div className="mt-9 flex items-center gap-3">
            <div className="flex text-sun-soft" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">5-star rating</span> from my clients
            </p>
          </div>
        </div>

        <div className="rise rise-delay-2 mx-auto grid w-full max-w-[520px] grid-cols-2 gap-4 sm:gap-5">
          <div className="aspect-square rounded-card rounded-tl-blob bg-accent p-2.5">
            {/* TODO: a cut-out photo (transparent PNG/WebP) would let the coral show through even more */}
            <div className="tile-photo">
              <Image
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 250px, (min-width: 640px) 45vw, 50vw"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </div>
          {serviceTiles.map(({ icon: Icon, label, className }) => (
            <div
              key={label}
              className={`flex aspect-square flex-col justify-between rounded-card p-5 text-on-tile sm:p-6 ${className}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 sm:h-12 sm:w-12">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="text-base font-semibold sm:text-lg">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
