"use client";

import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
}

// Both icons are rendered and CSS shows the right one, so server and client markup always match.
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const toggle = () => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink ${className}`}
    >
      <Moon size={18} aria-hidden="true" className="dark:hidden" />
      <Sun size={18} aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}
