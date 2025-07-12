
const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="font-mono text-xs text-muted-foreground">
            01000001 01001111 01001000 01000110
          </div>
          <div className="text-sm text-foreground font-medium">
            Attack On Hash Function © 2025 | Secure. Challenge. Dominate.
          </div>
          <div className="text-sm text-muted-foreground">
            Managed by{' '}
            <a 
              href="https://nikeshuprety.com.np/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              0xn1ku_hacks
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
