
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            ./contact
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-muted/30 border-border hover:border-primary/50 transition-colors">
            <div className="text-yellow-400 font-mono mb-4 text-xl">💬 Discord</div>
            <p className="text-muted-foreground mb-4">Join our community of hackers and security enthusiasts.</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
              onClick={() => window.open('https://discord.gg/dBNUjFEp', '_blank')}
            >
              Join Server
            </Button>
          </Card>
          
          <Card className="p-6 bg-muted/30 border-border hover:border-primary/50 transition-colors">
            <div className="text-yellow-400 font-mono mb-4 text-xl">📧 Email</div>
            <p className="text-muted-foreground mb-4">For official inquiries and collaboration opportunities.</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
              onClick={() => window.location.href = 'mailto:info@aohf.team'}
            >
              Send Email
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <div className="font-mono text-sm text-muted-foreground">
            root@aohf:~# ./status
            <br />
            {'>'}  Always recruiting talented individuals
            <br />
            {'>'}  Open for collaborations and partnerships
            <br />
            {'>'}  Building the future of cybersecurity, one exploit at a time
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
