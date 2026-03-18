import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import TechMarquee from '@/components/tech-marquee';
import AboutMe from '@/components/about-me';
import Services from '@/components/services';
import TechGrid from '@/components/tech-grid';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WhatsAppFloat from '@/components/whatsapp-float';
import AccessibilityWidget from '@/components/accessibility-widget';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TechMarquee />
        <AboutMe />
        <Services />
        <TechGrid />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <AccessibilityWidget />
    </>
  );
}
