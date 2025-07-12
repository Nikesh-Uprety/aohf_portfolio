
const AchievementsSection = () => {
  const achievements = [
    {
      year: "2025",
      items: [
        {
          icon: "🥇",
          title: "Softwarica Hack@Fest 2.0",
          description: "3rd Place Overall",
          category: "CTF Competition",
        },
        {
          icon: "🏆",
          title: "OWASP Kathmandu Meetup CTF",
          description: "2nd Place",
          category: "CTF Competition",
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          icon: "🥇",
          title: "Softwarica Hack@Fest 1.0",
          description: "1st Place Overall",
          category: "CTF Competition",
        },
        // {
        //   icon: "🛠️",
        //   title: "HackTheMountain",
        //   description: "Finalist, DevSecOps Track",
        //   category: "Hackathon",
        // },
        // {
        //   icon: "🎯",
        //   title: "TryHackMe Team Ladder",
        //   description: "Top 3 in Nepal",
        //   category: "Platform Ranking",
        // },
        // {
        //   icon: "🏆",
        //   title: "Bug Bounty Research",
        //   description: "Critical SSTI vulnerability disclosed",
        //   category: "Security Research",
        // },
      ],
    },
    {
      year: "2023",
      items: [
        // {
        //   icon: "🚩",
        //   title: "InceptionCTF",
        //   description: "2nd Runner-Up (Binary Exploitation)",
        //   category: "CTF Competition",
        // },
        // {
        //   icon: "📁",
        //   title: "CTFtime Debut",
        //   description: "Top 20% Worldwide in first year",
        //   category: "Global Ranking",
        // },
        // {
        //   icon: "🧑‍🏫",
        //   title: "Community Outreach",
        //   description: "Cybersecurity 101 workshops for students",
        //   category: "Education",
        // },
      ],
    },
  ];

  const research = [
    // {
    //   title: 'CSP Bypass with SVG Chains',
    //   description: 'Novel technique for Content Security Policy evasion',
    //   type: 'Research Paper'
    // },
    // {
    //   title: 'Advanced OSINT Automation',
    //   description: 'Custom toolchain for reconnaissance workflows',
    //   type: 'Tool Development'
    // },
    // {
    //   title: 'Container Escape Techniques',
    //   description: 'Docker and Kubernetes security analysis',
    //   type: 'Security Research'
    // }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            ./achievements
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="code-block mb-8">
              <div className="font-mono text-sm">
                <div className="text-primary mb-4">/aohf_achievements</div>
                
                {achievements.map((yearGroup, yearIndex) => (
                  <div key={yearGroup.year} className="mb-6">
                    <div className="text-yellow-400 mb-3">├── {yearGroup.year}/</div>
                    
                    {yearGroup.items.map((achievement, itemIndex) => (
                      <div key={itemIndex} className="ml-4 mb-3">
                        <div className="flex items-start gap-3">
                          <span className="text-yellow-400">│   ├──</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{achievement.icon}</span>
                              <span className="text-green-400 font-medium">{achievement.title}</span>
                            </div>
                            <div className="text-muted-foreground text-xs ml-6">
                              {achievement.description}
                            </div>
                            <div className="text-primary text-xs ml-6 mt-1">
                              [{achievement.category}]
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                
                <div className="text-yellow-400">└── misc/</div>
                <div className="ml-4 mt-2 space-y-2">
                  {research.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-yellow-400">├──</span>
                      <div>
                        <div className="text-green-400 font-medium">{item.title}</div>
                        <div className="text-muted-foreground text-xs">{item.description}</div>
                        <div className="text-primary text-xs mt-1">[{item.type}]</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">./timeline</h3>
              <div className="space-y-6">
                {achievements.flatMap(yearGroup => 
                  yearGroup.items.map((achievement, index) => (
                    <div key={`${yearGroup.year}-${index}`} className="achievement-item">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <h4 className="font-bold text-foreground">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{yearGroup.year}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{achievement.description}</p>
                      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded font-mono">
                        {achievement.category}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="code-block">
              <div className="font-mono text-sm">
                <div className="text-primary mb-3">./statistics</div>
                <div className="space-y-2 text-muted-foreground">
                  {/* <div><span className="text-green-400">CTF_RANKING:</span> Top 20% Global</div>
                  <div><span className="text-green-400">VULNERABILITIES:</span> 15+ Disclosed</div>
                  <div><span className="text-green-400">RESEARCH_PAPERS:</span> 8 Published</div> */}
                  <div><span className="text-green-400">COMMUNITY_IMPACT:</span> 100+ Students Trained with % plus CTF classed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
