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
      title: "Frontend",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS", "Redux"]
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL", "Firebase", "Supabase"]
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub", "Code Reviews", "CI/CD", "Agile"]
    },
    {
      icon: Layout,
      title: "UI/UX",
      skills: ["Responsive Design", "Figma", "User Testing", "Accessibility"]
    },
    {
      icon: Globe,
      title: "Deployment",
      skills: ["AWS", "Netlify", "Vercel", "Docker", "Kubernetes"]
    }
  ];

  return (
    <section id="skills" className="py-24">
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