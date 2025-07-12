const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              ./about_aohf
            </h1>
            <div className="text-lg text-muted-foreground font-mono">
              cat README.md | grep -i "who we are"
            </div>
          </div>

          {/* Origin Story */}
          <section className="bg-card/50 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 font-mono">
              ## Origin & Mission
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2023 in Kathmandu, Nepal, AOHF (Attack On Hash Function) emerged from a shared passion for cybersecurity and ethical hacking. What started as a small group of curious minds has evolved into a formidable team dedicated to pushing the boundaries of offensive security.
              </p>
              <p>
                Our mission is simple yet ambitious: to foster elite cyber talent through collaborative learning, competitive challenges, and cutting-edge research. We believe that the future of cybersecurity lies in the hands of those who dare to question, explore, and innovate.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="bg-card/50 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 font-mono">
              ## Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="font-semibold text-primary mb-2">Ethical Hacking</h3>
                <p className="text-sm text-muted-foreground">
                  We operate within legal and ethical boundaries, using our skills to strengthen defenses and educate others.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-semibold text-primary mb-2">Teamwork</h3>
                <p className="text-sm text-muted-foreground">
                  Collaboration amplifies individual strengths. Together, we solve complex challenges and share knowledge.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously explore new attack vectors, defense mechanisms, and methodologies in cybersecurity.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="bg-card/50 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 font-mono">
              ## Major Milestones
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <div className="font-mono text-sm text-primary">2023.01</div>
                  <div className="font-semibold">Team Formation</div>
                  <div className="text-sm text-muted-foreground">
                    AOHF officially formed with founding members from Kathmandu's cybersecurity community.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <div className="font-mono text-sm text-primary">2023.06</div>
                  <div className="font-semibold">First CTF Victory</div>
                  <div className="text-sm text-muted-foreground">
                    Secured our first major win at InceptionCTF, establishing our presence in the competitive scene.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <div className="font-mono text-sm text-primary">2024.03</div>
                  <div className="font-semibold">Research Initiative</div>
                  <div className="text-sm text-muted-foreground">
                    Launched our research program, contributing to the cybersecurity community with novel findings.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <div className="font-mono text-sm text-primary">2025.01</div>
                  <div className="font-semibold">National Recognition</div>
                  <div className="text-sm text-muted-foreground">
                    Achieved top rankings in multiple national competitions, solidifying our reputation.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terminal Style Quote */}
          <div className="bg-background border border-primary/20 p-6 rounded-lg font-mono text-sm">
            <div className="text-primary mb-2">root@aohf:~# echo $TEAM_PHILOSOPHY</div>
            <div className="text-muted-foreground">
              "In a world where digital threats evolve daily, we stand as guardians of knowledge, builders of defenses, and pioneers of ethical hacking. Every challenge is an opportunity to learn, every vulnerability a lesson in security."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;