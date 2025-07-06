
const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span>root@aohf:~# stay curious</span>
              <span className="animate-pulse text-primary">_</span>
            </div>
            <div className="text-xs">
              latest_flag{`{terminal_based_ctf_vibes_2025}`}
            </div>
          </div>
          
          <div className="border-t border-border pt-6 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2025 aohf.team - Elite Cybersecurity Collective
              </div>
              
              <div className="flex gap-6 text-sm font-mono">
                <a href="mailto:contact@aohf.team" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  contact
                </a>
                <a href="https://github.com/aohfteam" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  github
                </a>
                <a href="https://discord.gg/aohfteam" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  discord
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 font-mono text-xs text-muted-foreground">
            <div className="mb-2">System Status: [OPERATIONAL] | Threat Level: [GREEN]</div>
            <div>Built with React, TypeScript & Terminal Aesthetics</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
