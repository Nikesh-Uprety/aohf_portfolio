
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = './aohf.team ~# mission';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-fade-in">
          <div className="font-mono text-lg sm:text-xl text-muted-foreground mb-4">
            {displayText}
            {showCursor && <span className="animate-pulse text-primary">_</span>}
          </div>
          <div className="font-mono text-sm sm:text-base text-primary mb-2">
            => "Pushing the boundaries of offensive security, one shell at a time."
          </div>
        </div>

        <div className="opacity-0 animate-fade-in stagger-1">
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 glitch-text" data-text="aohf.team">
            <span className="text-primary">aohf</span>
            <span className="text-foreground">.team</span>
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in stagger-2">
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We train, compete, and build in the world of cybersecurity.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in stagger-3">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ./explore
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ./join_us
            </Button>
          </div>
        </div>

        <div className="mt-16 opacity-0 animate-fade-in stagger-4">
          <div className="font-mono text-sm text-muted-foreground">
            root@aohf:~# whoami
          </div>
          <div className="font-mono text-sm text-primary mt-1">
            elite_cyber_collective
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
