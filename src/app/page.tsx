import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import TechMarquee from '@/components/tech-marquee';
import AboutMe from '@/components/about-me';
import Achievements from '@/components/achievements';
import TechGrid from '@/components/tech-grid';
import Services from '@/components/services';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WhatsAppFloat from '@/components/whatsapp-float';
import AccessibilityWidget from '@/components/accessibility-widget';
import ScrollButtons from '@/components/scroll-buttons';
import CookieConsent from '@/components/cookie-consent';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TechMarquee />
        <AboutMe />
        <Achievements />
        <TechGrid />
        <Services />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <AccessibilityWidget />
      <ScrollButtons />
      <CookieConsent />
    </>
  );
}
