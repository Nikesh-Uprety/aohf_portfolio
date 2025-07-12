import { useState } from 'react';
import { Mail, ExternalLink, Filter } from 'lucide-react';

interface Member {
  username: string;
  role: 'Founding Member' | 'Moderator' | 'Active Player';
  specialization: string[];
  website: string;
  email: string;
  avatar:string;
}

const Members = () => {
  const [selectedRole, setSelectedRole] = useState<string>('All');

  const members: Member[] = [
    // Founding Members
    {
      username: "0xn1ku_hacks",
      role: "Founding Member",
      specialization: ["Web", "DevSecOps"],
      website: "https://nikeshuprety.com.np/",
      email: "0xn1ku_hacks@aohf.team",
      avatar:
        "https://cdn.discordapp.com/avatars/587273795707076608/38e8dd0692d6e01a2e7388f0750dcbcf.webp?size=80",
    },
    {
      username: "༒𝙰sʜᴡɪɴ༒",
      role: "Founding Member",
      specialization: ["Web", "Forensics"],
      website: "https://aswinpoudel.com.np",
      email: "founder2@aohf.team",
      avatar:
        "https://cdn.discordapp.com/avatars/710501147458404472/64b143a0bffbdddf599651642728e575.webp?size=80",
    },
    {
      username: "kharayo1x",
      role: "Founding Member",
      specialization: ["OSINT", "General"],
      website: "https://s",
      email: "founder2@aohf.team",
      avatar:
        "https://cdn.discordapp.com/avatars/419082019385901057/a_9873fab1290727dbd21c34d033634069.webp?size=80",
    },
    {
      username: "p0tato",
      role: "Founding Member",
      specialization: ["Binary", "Reverse"],
      website: "https://example.com",
      email: "founder2@aohf.team",
      avatar:
        "https://cdn.discordapp.com/avatars/1069274307680804955/983ff08f637c3078017d88d092427755.webp?size=80",
    },

    // Moderators
    {
      username: "mod_sec",
      role: "Moderator",
      specialization: ["Forensics", "OSINT"],
      website: "https://example.com",
      email: "mod_sec@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
    {
      username: "crypto_mod",
      role: "Moderator",
      specialization: ["Crypto", "Math"],
      website: "https://example.com",
      email: "crypto_mod@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
    {
      username: "web_guardian",
      role: "Moderator",
      specialization: ["Web", "Network"],
      website: "https://example.com",
      email: "web_guardian@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },

    // Active Players
    {
      username: "pwn_master",
      role: "Active Player",
      specialization: ["Binary", "Pwn"],
      website: "https://example.com",
      email: "pwn_master@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
    {
      username: "stego_ninja",
      role: "Active Player",
      specialization: ["Steganography", "Forensics"],
      website: "https://example.com",
      email: "stego_ninja@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
    {
      username: "rev_engineer",
      role: "Active Player",
      specialization: ["Reverse", "Malware"],
      website: "https://example.com",
      email: "rev_engineer@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
    {
      username: "net_hunter",
      role: "Active Player",
      specialization: ["Network", "OSINT"],
      website: "https://example.com",
      email: "net_hunter@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
    {
      username: "crypto_wizard",
      role: "Active Player",
      specialization: ["Crypto", "Math"],
      website: "https://example.com",
      email: "crypto_wizard@aohf.team",
      avatar: "/lovable-uploads/0xn1ku_hacks.png",
    },
  ];

  const roles = ['All', 'Founding Member', 'Moderator', 'Active Player'];
  const filteredMembers = selectedRole === 'All' 
    ? members 
    : members.filter(member => member.role === selectedRole);

  const groupedMembers = {
    'Founding Members': members.filter(m => m.role === 'Founding Member'),
    'Moderators': members.filter(m => m.role === 'Moderator'),
    'Active Players': members.filter(m => m.role === 'Active Player'),
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              {'<Team_Members/>'}
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet the minds behind AOHF's cybersecurity initiatives
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center">
            <div className="bg-card p-1 rounded-lg border border-border inline-flex">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedRole === role
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Members by Groups */}
          {selectedRole === 'All' ? (
            Object.entries(groupedMembers).map(([groupName, groupMembers]) => (
              <section key={groupName} className="space-y-6">
                <h2 className="text-2xl font-bold text-primary font-mono">
                  ### {groupName}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupMembers.map((member) => (
                    <MemberCard key={member.username} member={member} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <MemberCard key={member.username} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ member }: { member: Member }) => {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Founding Member': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Moderator': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Active Player': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
      {/* Avatar Placeholder */}
      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
        <img
          src={member.avatar}
          alt={`${member.username}'s avatar`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Member Info */}
      <div className="text-center space-y-3">
        <h3 className="text-lg font-bold text-foreground font-mono">
          {member.username}
        </h3>

        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getRoleColor(
            member.role
          )}`}
        >
          {member.role}
        </div>

        {/* Specializations */}
        <div className="flex flex-wrap justify-center gap-2">
          {member.specialization.map((spec) => (
            <span
              key={spec}
              className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-mono"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Contact Links */}
        <div className="flex justify-center space-x-4 pt-2">
          <a
            href={`mailto:${member.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;