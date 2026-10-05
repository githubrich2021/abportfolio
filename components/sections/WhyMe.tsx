import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { profile } from '@/data/profile';

const reasons = [
  'Pixel-perfect, responsive designs',
  'Clear communication and fast turnaround',
  'Strong technical background as a CS student',
];

export default function WhyMe() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden py-section">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative isolate mx-auto aspect-4/5 w-full max-w-105">
          <div className="wavy-shape" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="absolute inset-x-[16%] bottom-[5%] top-[7%] photo-arch overflow-hidden bg-surface shadow-card">
            <Image
              src={profile.profileImage}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 1024px) 290px, 68vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="eyebrow">Why work with me</span>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {profile.about.title}
          </h2>
          <p className="mt-5 leading-[1.8] text-muted">{profile.about.description}</p>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3.5 font-medium text-ink">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success text-white">
                  <Check size={16} strokeWidth={3} aria-hidden="true" />
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <a href="#portfolio" className="btn btn-primary mt-10">
            Learn More <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
