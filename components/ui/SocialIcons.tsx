import type { SVGProps } from 'react';

// lucide-react v1 dropped brand icons, so these are simple outline marks drawn on lucide's 24px grid.
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7M11 17v-7M11 13.5a3 3 0 0 1 6 0V17" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function BehanceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 6h4.5a3 3 0 0 1 0 6H2.5zM2.5 12h5.25a3 3 0 0 1 0 6H2.5zM15 7.5h5M14.25 14.5h6.5a3.25 3.25 0 1 0-.95 2.3" />
    </svg>
  );
}

export function DribbbleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
