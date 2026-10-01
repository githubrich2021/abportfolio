import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="bg-night text-white">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center">
        <h2 id="cta-heading" className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Enough talk, let&rsquo;s build something <span className="text-accent">together</span>.
        </h2>
        <Link href="/contact" className="btn btn-outline-light shrink-0">
          Start a Project <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
