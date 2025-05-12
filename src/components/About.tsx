import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-royal-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <span className="text-white/80 text-sm">Based in</span>
                  <h3 className="text-lg font-semibold text-white">New York, NY</h3>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">My Story</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                I'm a passionate software developer with a keen eye for detail and a commitment to creating elegant solutions to complex problems. With a background in [Your Background], I've developed a strong sense for user-centric design and efficient, maintainable code.
              </p>
              <p className="text-white/90 leading-relaxed">
                When I'm not coding, you can find me [Your Hobbies/Interests]. I believe that these diverse interests help fuel my creativity and problem-solving abilities in my development work.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">My Personality</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { trait: "Analytical", description: "I break down complex problems methodically" },
                { trait: "Creative", description: "I find innovative solutions to challenges" },
                { trait: "Detail-oriented", description: "I pay attention to the small things" },
                { trait: "Collaborative", description: "I thrive working with diverse teams" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105 hover:rotate-1 cursor-pointer"
                >
                  <h4 className="font-medium text-white mb-2">{item.trait}</h4>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-white">Languages & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript", "TypeScript", "React", "Node.js", "Python", 
                "HTML/CSS", "SQL", "Git", "Docker"
              ].map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-block px-3 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-110 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;