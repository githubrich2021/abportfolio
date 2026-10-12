"use client";

import { useEffect } from 'react';

// Blocks below the hero fade up as they scroll into view. Cards inside a
// .reveal-stagger list that appear together come in one after another.
const TARGETS =
  'main > section:not(#home) .container-site > :not(.reveal-stagger), main > section .reveal-stagger > li';
const STAGGER_MS = 120;

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Leave anything already on screen alone so it doesn't blink on load.
    const elements = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );

    const finish = (el: HTMLElement) => {
      el.classList.remove('reveal', 'is-visible');
      el.style.transitionDelay = '';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        entering.forEach((el, i) => {
          observer.unobserve(el);
          el.style.transitionDelay = `${i * STAGGER_MS}ms`;
          el.classList.add('is-visible');
          // Hand the element back to its own styles (hover effects etc.) once done.
          const onEnd = (e: TransitionEvent) => {
            if (e.target !== el) return; // ignore hover transitions bubbling up from children
            el.removeEventListener('transitionend', onEnd);
            finish(el);
          };
          el.addEventListener('transitionend', onEnd);
        });
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      elements.forEach(finish);
    };
  }, []);

  return null;
}
