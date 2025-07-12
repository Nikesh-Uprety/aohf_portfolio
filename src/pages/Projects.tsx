import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type: 'CTF' | 'Tool' | 'Research' | 'Writeup';
  date: string;
  status: 'Completed' | 'Ongoing' | 'Planned';
}

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'NepCTF 2025 Writeups',
      description: 'Comprehensive writeups for NepCTF 2025 challenges, including detailed explanations and solution methodologies.',
      tags: ['Web', 'Crypto', 'Binary', 'Forensics'],
      link: 'https://github.com/aohfteam/nepctf2025-writeups',
      type: 'Writeup',
      date: '2025-01-15',
      status: 'Completed'
    },
    {
      title: 'CSP Bypass Research',
      description: 'Novel research on Content Security Policy bypass techniques using SVG chains and DOM manipulation.',
      tags: ['Web Security', 'Research', 'Browser'],
      link: 'https://github.com/aohfteam/csp-bypass-research',
      type: 'Research',
      date: '2024-11-20',
      status: 'Completed'
    },
    {
      title: 'AutoPwn Framework',
      description: 'Automated exploitation framework for common CTF binary challenges with built-in ROP chain generation.',
      tags: ['Binary', 'Automation', 'Python'],
      link: 'https://github.com/aohfteam/autopwn',
      type: 'Tool',
      date: '2024-09-10',
      status: 'Ongoing'
    },
    {
      title: 'CryptoCracker Suite',
      description: 'Collection of cryptographic analysis tools for common CTF cipher challenges.',
      tags: ['Crypto', 'Analysis', 'Tool'],
      link: 'https://github.com/aohfteam/cryptocracker',
      type: 'Tool',
      date: '2024-08-05',
      status: 'Completed'
    },
    {
      title: 'AOHF Internal CTF 2024',
      description: 'Internal team competition featuring custom challenges designed by team members.',
      tags: ['CTF', 'Education', 'Team Building'],
      link: 'https://github.com/aohfteam/internal-ctf-2024',
      type: 'CTF',
      date: '2024-12-15',
      status: 'Completed'
    },
    {
      title: 'Steganography Toolkit',
      description: 'Advanced steganography detection and extraction tools for various file formats.',
      tags: ['Steganography', 'Forensics', 'Python'],
      link: 'https://github.com/aohfteam/stego-toolkit',
      type: 'Tool',
      date: '2024-07-20',
      status: 'Ongoing'
    },
    {
      title: 'Web Vulnerability Scanner',
      description: 'Custom vulnerability scanner optimized for CTF web challenges with advanced detection capabilities.',
      tags: ['Web Security', 'Scanner', 'Automation'],
      link: 'https://github.com/aohfteam/web-vuln-scanner',
      type: 'Tool',
      date: '2025-02-01',
      status: 'Planned'
    },
    {
      title: 'Malware Analysis Lab',
      description: 'Containerized malware analysis environment with custom tools and automated reporting.',
      tags: ['Malware', 'Analysis', 'Docker'],
      link: 'https://github.com/aohfteam/malware-lab',
      type: 'Research',
      date: '2024-10-12',
      status: 'Ongoing'
    }
  ];

  const types = ['All', 'CTF', 'Tool', 'Research', 'Writeup'];
  const filteredProjects = selectedType === 'All' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              ./projects --list
            </h1>
            <p className="text-lg text-muted-foreground">
              Showcasing our tools, research, and CTF contributions
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center">
            <div className="bg-card p-1 rounded-lg border border-border inline-flex">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CTF': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Tool': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Research': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Writeup': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400';
      case 'Ongoing': return 'text-yellow-400';
      case 'Planned': return 'text-blue-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
            {project.type}
          </div>
          <div className={`text-xs font-mono ${getStatusColor(project.status)}`}>
            {project.status}
          </div>
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-mono flex items-center gap-1"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
            <Calendar className="w-3 h-3" />
            {new Date(project.date).toLocaleDateString()}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            title="View Project"
          >
            {project.link.includes('github.com') ? (
              <Github className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;