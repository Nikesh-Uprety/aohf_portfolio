
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const CapabilitiesSection = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['offensive_tools']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const capabilities = {
    offensive_tools: [
      'Burp Suite Professional',
      'Metasploit Framework',
      'Nmap & Nessus',
      'Ghidra & IDA Pro',
      'Wireshark & tcpdump',
      'SQLMap & OWASP ZAP',
      'Cobalt Strike',
      'BloodHound & SharpHound'
    ],
    platforms: [
      'Kali Linux & Parrot OS',
      'Docker & Kubernetes',
      'AWS & Azure Security',
      'GitHub Actions CI/CD',
      'VMware & VirtualBox',
      'pfSense & OPNsense'
    ],
    programming: [
      'Python & Go',
      'C/C++ & Assembly',
      'JavaScript & Node.js',
      'PowerShell & Bash',
      'Rust & Java',
      'SQL & NoSQL'
    ],
    domains: [
      'Web Application Security',
      'Network Penetration Testing',
      'Mobile Security (Android/iOS)',
      'Cloud Security Architecture',
      'Cryptography & PKI',
      'Digital Forensics & DFIR',
      'Binary Exploitation & RE',
      'Social Engineering & OSINT'
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            ./capabilities
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="code-block max-w-4xl mx-auto">
          <div className="font-mono text-sm">
            <div className="text-primary mb-4">/aohf_capabilities</div>
            
            {Object.entries(capabilities).map(([section, items], index) => (
              <div key={section} className="ml-4 mb-4">
                <div className="flex items-center cursor-pointer hover:text-primary transition-colors"
                     onClick={() => toggleSection(section)}>
                  {expandedSections.includes(section) ? (
                    <ChevronDown size={16} className="mr-2 text-primary" />
                  ) : (
                    <ChevronRight size={16} className="mr-2 text-muted-foreground" />
                  )}
                  <span className="text-yellow-400">├── {section}/</span>
                </div>
                
                {expandedSections.includes(section) && (
                  <div className="ml-8 mt-2 space-y-1 animate-fade-in">
                    {items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-muted-foreground">
                        <span className="text-yellow-400">│   ├── </span>
                        <span className="text-green-400">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="ml-4 text-yellow-400">└── research/</div>
            <div className="ml-8 mt-2 space-y-1">
              <div className="text-muted-foreground">
                <span className="text-yellow-400">├── </span>
                <span className="text-green-400">Zero-day Discovery & Analysis</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-yellow-400">├── </span>
                <span className="text-green-400">Custom Exploit Development</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-yellow-400">└── </span>
                <span className="text-green-400">Security Tool Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="font-mono text-sm text-muted-foreground mb-2">
            root@aohf:~# arsenal --status
          </div>
          <div className="font-mono text-sm text-primary">
            [✓] All systems operational. Ready for engagement.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
