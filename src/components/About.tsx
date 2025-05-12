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
                  <h3 className="text-lg font-semibold text-white">United States</h3>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                I'm a cybersecurity enthusiast with a growing focus on malware development, reverse engineering, and vulnerability research. At just 13 years old, I'm already building the foundation to become a private offensive security contractor by 18 — capable of developing custom malware, exploit chains, and stealth tooling for red team and research applications.
              </p>
              <p className="text-white/90 leading-relaxed">
                I learn by doing: building, breaking, analyzing. My work includes developing proof-of-concept malware in controlled environments, experimenting with evasion techniques, and learning how real-world attackers operate — so I can one day outthink them.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Mindset & Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { trait: "Tactical", description: "I understand attacker logic and use it to build smarter defenses and tools." },
                { trait: "Resilient", description: "I keep pushing through bugs, crashes, and blocks until I succeed." },
                { trait: "Precise", description: "I value clean, efficient, and low-level code — especially in malware development." },
                { trait: "Self-taught", description: "I figure things out myself and don't wait for someone else to teach me." },
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

            <h3 className="text-xl font-bold mb-6 text-white">My Toolkit</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python", "C++", "Assembly", "x64dbg", "IDA Free",
                "Ghidra", "Windows Internals", "PowerShell", "Batch",
                "Linux", "Wireshark", "Sysinternals", "Git"
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
