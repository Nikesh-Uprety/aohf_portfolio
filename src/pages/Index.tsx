
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="font-mono text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative">
        {/* Subtle noise background */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3C/defs%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.1"/%3E%3C/svg%3E')]" />
        </div>

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <CapabilitiesSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
