import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '@/data/profile';
import { services } from '@/data/services';
import { BehanceIcon, DribbbleIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/SocialIcons';

const quickLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/contact' },
];

const socials = [
  { name: 'LinkedIn', href: profile.socials.linkedin, icon: LinkedInIcon },
  { name: 'Behance', href: profile.socials.behance, icon: BehanceIcon },
  { name: 'Dribbble', href: profile.socials.dribbble, icon: DribbbleIcon },
  { name: 'GitHub', href: profile.socials.github, icon: GitHubIcon },
  { name: 'Instagram', href: profile.socials.instagram, icon: InstagramIcon },
];

const headingClass = 'text-sm font-semibold uppercase tracking-[0.1em] text-white';
const linkClass = 'text-night-muted transition-colors hover:text-white';

export default function Footer() {
  const { email, phone, location } = profile.contact;

  return (
    <footer className="border-t border-white/10 bg-night text-white">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 rounded-full">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full rounded-bl-md bg-accent-strong text-sm font-bold">
              {profile.initials}
            </span>
            <span className="text-lg font-bold tracking-tight">{profile.brand}</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-[1.8] text-night-muted">
            Website, UI/UX, graphic and WordPress design by {profile.name}.
          </p>
          <ul className="mt-6 flex gap-2.5" aria-label="Social profiles">
            {socials.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href || '#'}
                  {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-night-muted transition-colors hover:border-white hover:text-white"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h2 className={headingClass}>Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={linkClass}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.title}>
                <Link href="/#services" className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Say Hello</h2>
          <address className="mt-5 space-y-3.5 text-sm not-italic">
            <a href={`mailto:${email}`} className={`flex items-center gap-3 break-all ${linkClass}`}>
              <Mail size={18} aria-hidden="true" className="shrink-0" /> {email}
            </a>
            {/* TODO: the phone row appears once profile.contact.phone is filled in */}
            {phone && (
              <a href={`tel:${phone.replace(/\s/g, '')}`} className={`flex items-center gap-3 ${linkClass}`}>
                <Phone size={18} aria-hidden="true" className="shrink-0" /> {phone}
              </a>
            )}
            <p className="flex items-center gap-3 text-night-muted">
              <MapPin size={18} aria-hidden="true" className="shrink-0" /> {location}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-site py-6 pr-20 text-sm text-night-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
