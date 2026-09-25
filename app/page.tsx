import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import TechStrip from '@/components/sections/TechStrip';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Page() {
  return (
    <main className="relative">
      <CustomCursor />
      <Hero />
      <TechStrip />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
