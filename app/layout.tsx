import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/sections/Navbar';
import BackToTop from '@/components/ui/BackToTop';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const description =
  'Richmond Abenney is a website, UI/UX, graphic and WordPress designer in Accra, Ghana, available for freelance projects and internships.';

export const metadata: Metadata = {
  // TODO: replace with your live domain once deployed
  metadataBase: new URL('https://richmondabenney.com'),
  title: {
    default: 'Richmond Abenney | Website & UI/UX Designer',
    template: '%s | Richmond Abenney',
  },
  description,
  keywords: ['Richmond Abenney', 'RiG_Designs', 'Website Designer', 'UI/UX Designer', 'Graphic Designer', 'WordPress Designer', 'Accra', 'Ghana'],
  authors: [{ name: 'Richmond Abenney' }],
  openGraph: {
    title: 'Richmond Abenney | Website & UI/UX Designer',
    description,
    url: '/',
    siteName: 'RiG_Designs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richmond Abenney | Website & UI/UX Designer',
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f14' },
  ],
};

// Runs before first paint so the saved / system theme never flashes the wrong colours.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top" className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
