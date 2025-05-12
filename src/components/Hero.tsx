<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
    <span className="block">Yo, I’m Hippo</span>
    <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl opacity-90">
      Aspiring Cybersecurity Specialist
    </span>
  </h1>
  <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8">
    Passionate about hacking, exploits, and digital defense. Learning fast, thinking deeper, and always staying curious.
  </p>

  {/* Arrow directly below text */}
  <div className="flex justify-center mt-4 animate-bounce">
    <button
      onClick={scrollToAbout}
      className="text-white hover:text-gray-200 transition-colors"
      aria-label="Scroll to About section"
    >
      <ChevronDown size={36} />
    </button>
  </div>
</div>
