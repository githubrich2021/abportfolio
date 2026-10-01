"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg/85 backdrop-blur-md transition-colors ${
        scrolled || isOpen ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-site flex h-18 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 rounded-full" onClick={close}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full rounded-bl-md bg-accent-strong text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">{profile.brand}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-outline btn-sm hidden sm:inline-flex">
            Hire Me
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!isOpen} className="border-t border-line bg-bg lg:hidden">
        <ul className="container-site flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={close}
                className="block rounded-xl px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-alt"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-3 sm:hidden">
            <Link href="/contact" onClick={close} className="btn btn-outline w-full">
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
