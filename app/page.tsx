import Hero from '@/components/sections/Hero';
import TechStrip from '@/components/sections/TechStrip';
import Services from '@/components/sections/Services';
import WhyMe from '@/components/sections/WhyMe';
import Stats from '@/components/sections/Stats';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

// About, Skills, Experience, Contact and CustomCursor are no longer on the homepage,
// but their files are kept in components/ in case you want them back.
export default function Page() {
  return (
    <>
      <main id="main">
        <Hero />
        <TechStrip />
        <Services />
        <WhyMe />
        <Stats />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
