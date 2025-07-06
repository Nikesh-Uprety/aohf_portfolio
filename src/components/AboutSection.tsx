
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            ./about_organization
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="code-block">
            <div className="font-mono text-sm">
              <div className="text-primary mb-4">const aohf = {`{`}</div>
              <div className="ml-4 space-y-2">
                <div><span className="text-muted-foreground">established:</span> <span className="text-yellow-400">2023</span>,</div>
                <div><span className="text-muted-foreground">origin:</span> <span className="text-green-400">"Kathmandu, Nepal"</span>,</div>
                <div className="text-muted-foreground">focus: [</div>
                <div className="ml-4 space-y-1">
                  <div className="text-green-400">"Capture The Flag (CTF) competitions",</div>
                  <div className="text-green-400">"Red Teaming & Penetration Testing",</div>
                  <div className="text-green-400">"Cybersecurity Research & Development",</div>
                  <div className="text-green-400">"Community-driven knowledge sharing"</div>
                </div>
                <div className="text-muted-foreground">],</div>
                <div className="text-muted-foreground">affiliations: [</div>
                <div className="ml-4 space-y-1">
                  <div className="text-green-400">"CTFtime.org",</div>
                  <div className="text-green-400">"NepSec Community",</div>
                  <div className="text-green-400">"University clubs & global CTF leagues"</div>
                </div>
                <div className="text-muted-foreground">]</div>
              </div>
              <div className="text-primary">{`};`}</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary font-mono">./mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To foster elite cyber talent through challenges, research, and team-based learning. 
                We bridge the gap between academic cybersecurity and real-world offensive operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="code-block text-center">
                <div className="text-3xl font-bold text-primary font-mono">12+</div>
                <div className="text-sm text-muted-foreground font-mono">active_members</div>
              </div>
              <div className="code-block text-center">
                <div className="text-3xl font-bold text-primary font-mono">40+</div>
                <div className="text-sm text-muted-foreground font-mono">writeups</div>
              </div>
              <div className="code-block text-center">
                <div className="text-3xl font-bold text-primary font-mono">25+</div>
                <div className="text-sm text-muted-foreground font-mono">events</div>
              </div>
              <div className="code-block text-center">
                <div className="text-3xl font-bold text-primary font-mono">500+</div>
                <div className="text-sm text-muted-foreground font-mono">flags_captured</div>
              </div>
            </div>

            <div className="code-block">
              <div className="font-mono text-sm">
                <div className="text-primary mb-2">./core_values</div>
                <div className="space-y-1 text-muted-foreground">
                  <div>• Continuous learning and skill development</div>
                  <div>• Ethical hacking and responsible disclosure</div>
                  <div>• Knowledge sharing and community building</div>
                  <div>• Innovation in cybersecurity research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
