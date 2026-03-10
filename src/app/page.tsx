import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import TechMarquee from '@/components/tech-marquee';
import AboutMe from '@/components/about-me';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WhatsAppFloat from '@/components/whatsapp-float';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TechMarquee />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
