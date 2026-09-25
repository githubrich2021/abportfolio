import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/sections/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'Richmond Abenney | Developer, Designer & Digital Solutions Creator',
  description: 'Portfolio of Richmond Abenney — developer, designer, and technology enthusiast building modern websites, digital experiences, and creative technology solutions.',
  keywords: ['Richmond Abenney', 'RiG_Designs', 'Web Developer', 'UI/UX Designer', 'Digital Solutions', 'Full Stack Developer', 'Next.js Portfolio'],
  authors: [{ name: 'Richmond Abenney' }],
  openGraph: {
    title: 'Richmond Abenney | RiG_Designs',
    description: 'Building digital experiences that turn ideas into reality.',
    url: 'https://richmondabenney.com', // Placeholder
    siteName: 'RiG_Designs',
    images: [
      {
        url: '/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Richmond Abenney Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richmond Abenney | RiG_Designs',
    description: 'Building digital experiences that turn ideas into reality.',
    creator: '@your_twitter_handle', // Placeholder
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-neutral-950 text-neutral-100 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
