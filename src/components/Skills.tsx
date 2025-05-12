import React from 'react';
import { Code, Server, Layout, Database, GitBranch, Globe } from 'lucide-react';

const SkillCard = ({ 
  icon: Icon, 
  title, 
  skills 
}: { 
  icon: React.ElementType; 
  title: string; 
  skills: string[]; 
}) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105">
    <div className="text-white mb-4">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-white/90 flex items-center">
          <span className="w-2 h-2 rounded-full bg-white/70 mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Malware Development",
      skills: ["Reverse Engineering", "Disassembly", "Exploitation", "Rootkits", "Shellcode"]
    },
    {
      icon: Server,
      title: "Offensive Security",
      skills: ["Penetration Testing", "Vulnerability Research", "Exploits", "Buffer Overflow", "Privilege Escalation"]
    },
    {
      icon: Database,
      title: "Databases & Networking",
      skills: ["MySQL", "PostgreSQL", "TCP/IP", "Packet Analysis", "Network Security"]
    },
    {
      icon: GitBranch,
      title: "Version Control & DevOps",
      skills: ["Git", "GitHub", "CI/CD", "Docker", "Kubernetes"]
    },
    {
      icon: Layout,
      title: "System Analysis & Forensics",
      skills: ["Memory Dump Analysis", "Log Analysis", "Digital Forensics", "Malware Sandbox", "Incident Response"]
    },
    {
      icon: Globe,
      title: "Deployment & Automation",
      skills: ["Linux", "AWS", "Netlify", "Docker", "CI/CD Pipelines"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-royal-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
