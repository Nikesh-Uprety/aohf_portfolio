import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    ctfs: 0,
    flags: 0,
    members: 0,
    writeups: 0
  });

  useEffect(() => {
    setMounted(true);
    
    // Animate counters
    const animateCounters = () => {
      const targets = { ctfs: 25, flags: 500, members: 12, writeups: 40 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          ctfs: Math.floor(targets.ctfs * progress),
          flags: Math.floor(targets.flags * progress),
          members: Math.floor(targets.members * progress),
          writeups: Math.floor(targets.writeups * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepTime);
    };
    
    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="font-mono text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="relative">
        {/* Subtle noise background */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%20opacity%3D%220.1%22/%3E%3C/svg%3E')] " />
        </div>

        <main className="relative z-10">
          <HeroSection />
          
          {/* Stats Section */}
          <section className="py-16 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                    {stats.ctfs}+
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    CTFs Participated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                    {stats.flags}+
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Flags Captured
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                    {stats.members}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Team Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                    {stats.writeups}+
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Writeups Published
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AboutSection />
          <CapabilitiesSection />
          <AchievementsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Home;