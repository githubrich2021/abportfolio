import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { profile, toTelHref } from '@/data/profile';
import ContactForm from '@/components/ui/ContactForm';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Richmond Abenney: website, UI/UX, graphic and WordPress design in Accra, Ghana and remotely.',
};

export default function ContactPage() {
  const { email, phone, location } = profile.contact;

  const details = [
    { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    { icon: Phone, label: 'Phone', value: phone, href: toTelHref(phone) },
    { icon: MapPin, label: 'Location', value: `${location} · working remotely worldwide` },
  ];

  return (
    <>
      <main id="main">
        <section className="noise">
          <div className="container-site py-14 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Contact</span>
              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Let&rsquo;s build something amazing
              </h1>
              <p className="mt-5 leading-[1.8] text-muted">
                I&rsquo;m currently available for freelance projects and internship or full-time opportunities. Whether you
                have a fully-fledged idea or just a spark, I&rsquo;d love to hear from you.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
              <div className="rounded-card rounded-tl-blob border border-line bg-surface p-6 shadow-card sm:p-10">
                <ContactForm email={email} />
              </div>

              <div className="space-y-5">
                <ul className="space-y-4">
                  {details.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-center gap-4 rounded-card border border-line bg-surface p-5">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl rounded-tr-[1.5rem] bg-icon-bg text-icon-fg">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-muted">{label}</p>
                        {href ? (
                          <a href={href} className="break-all font-semibold text-ink hover:text-accent-strong">
                            {value}
                          </a>
                        ) : (
                          <p className="font-semibold text-ink">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="relative aspect-4/3 overflow-hidden rounded-card rounded-br-blob border border-line">
                  <iframe
                    title="Map of Accra, Ghana"
                    src="https://www.google.com/maps?q=Accra,+Ghana&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
