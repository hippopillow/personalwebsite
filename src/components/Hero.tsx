import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-royal-blue text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0zMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDIuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDYwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMi43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0zMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDIuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDYwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMi43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="block">Hi, I'm Hippo</span>
          <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl opacity-90">Aspiring Cybersecurity Expert</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8">
          I specialize in malware development, reverse engineering, and offensive security — currently building skills to become a private cybersecurity contractor.
        </p>
        <div className="mt-8">
          <button 
            onClick={scrollToAbout}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
