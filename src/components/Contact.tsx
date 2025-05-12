import React from 'react';
import { MessageSquare, Github } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const triggerConfetti = (color: string) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [color, '#ffffff'],
      disableForReducedMotion: true
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-12 opacity-90">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://discord.com/users/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-white text-royal-blue rounded-lg font-medium text-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-md hover:transform hover:scale-105"
              onMouseEnter={() => triggerConfetti('#5865F2')}
            >
              <MessageSquare className="mr-2" size={20} />
              DM on Discord
            </a>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105"
              onMouseEnter={() => triggerConfetti('#171515')}
            >
              <Github className="mr-2" size={20} />
              See My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;