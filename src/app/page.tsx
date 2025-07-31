import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import AboutDoctorSection from '@/components/sections/about-doctor-section';
import ServicesSection from '@/components/sections/services-section';
import DifferentiatorsSection from '@/components/sections/differentiators-section';
import LocationSection from '@/components/sections/location-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';
import FloatingWhatsAppButton from '@/components/floating-whatsapp-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutDoctorSection />
        <ServicesSection />
        <DifferentiatorsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
