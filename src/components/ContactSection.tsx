
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            ./connect
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="code-block mb-12">
          <div className="font-mono text-sm">
            <div className="text-primary mb-4">root@aohf:~# connect</div>
            <div className="text-muted-foreground mb-4">
              > Establishing secure channels...
            </div>
            <div className="text-green-400 mb-6">
              [✓] Connection established. Available endpoints:
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Card className="p-4 bg-muted/30 border-border hover:border-primary/50 transition-colors">
                <div className="text-yellow-400 font-mono mb-2">📧 Email</div>
                <a href="mailto:contact@aohf.team" 
                   className="text-primary hover:text-primary/80 font-mono text-sm">
                  contact@aohf.team
                </a>
              </Card>
              
              <Card className="p-4 bg-muted/30 border-border hover:border-primary/50 transition-colors">
                <div className="text-yellow-400 font-mono mb-2">💬 Discord</div>
                <a href="https://discord.gg/aohfteam" 
                   className="text-primary hover:text-primary/80 font-mono text-sm">
                  discord.gg/aohfteam
                </a>
              </Card>
              
              <Card className="p-4 bg-muted/30 border-border hover:border-primary/50 transition-colors">
                <div className="text-yellow-400 font-mono mb-2">⚡ GitHub</div>
                <a href="https://github.com/aohfteam" 
                   className="text-primary hover:text-primary/80 font-mono text-sm">
                  github.com/aohfteam
                </a>
              </Card>
              
              <Card className="p-4 bg-muted/30 border-border hover:border-primary/50 transition-colors">
                <div className="text-yellow-400 font-mono mb-2">🏆 CTFtime</div>
                <a href="https://ctftime.org/team/aohf" 
                   className="text-primary hover:text-primary/80 font-mono text-sm">
                  ctftime.org/team/aohf
                </a>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary font-mono">./join_team</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for skilled individuals passionate about cybersecurity. 
              We value curiosity, dedication, and ethical hacking principles.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8"
            >
              Apply to Join
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <h4 className="text-lg font-bold mb-4 text-primary font-mono">./secure_communication</h4>
            <div className="code-block max-w-2xl mx-auto">
              <div className="font-mono text-xs">
                <div className="text-muted-foreground mb-2">PGP Public Key:</div>
                <div className="text-green-400 break-all">
                  -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                  mQENBGH...aohf.team...XkVuZA==<br/>
                  -----END PGP PUBLIC KEY BLOCK-----
                </div>
                <div className="text-muted-foreground mt-2 text-xs">
                  Fingerprint: 1A2B 3C4D 5E6F 7890 ABCD EFGH IJKL MNOP QRSTUVWX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
