import React from 'react';
import { Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceLink: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Discord-based RAT",
      description: "A remote access tool that operates through Discord, enabling remote control over compromised machines.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Discord", "RAT", "C++", "Python"],
      sourceLink: "https://github.com/hippopillow"
    },
    {
      id: 2,
      title: "Advanced Antivirus with Deobfuscation & Protection",
      description: "An advanced antivirus software that includes built-in deobfuscation, host scanning, file scanning, and kernel protection.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Antivirus", "Deobfuscation", "Security", "Malware Analysis"],
      sourceLink: "https://github.com/hippopillow"
    },
    {
      id: 3,
      title: "Payload Generating AI",
      description: "An AI-powered system that generates customized payloads for penetration testing and security research.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["AI", "Payload Generation", "Pentesting", "Machine Learning"],
      sourceLink: "https://github.com/hippopillow"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.sourceLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/90 hover:text-white text-sm font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    Source Coming Soon
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
