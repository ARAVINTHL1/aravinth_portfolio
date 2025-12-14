import { Github, Linkedin, Mail, ArrowDown, Sparkles, Trophy, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark blue and green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 via-teal-900 to-green-900"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Photo Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Photo card */}
              <div 
                className="relative bg-card rounded-3xl p-3 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-500"
                style={{
                  background: `
                    linear-gradient(90deg, transparent 0%, transparent 40%, rgba(34, 211, 238, 0.9) 50%, transparent 60%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 40%, rgba(52, 211, 153, 0.9) 50%, transparent 60%, transparent 100%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, rgba(34, 211, 238, 0.9) 50%, transparent 60%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 40%, rgba(52, 211, 153, 0.9) 50%, transparent 60%, transparent 100%),
                    hsl(var(--card))
                  `,
                  backgroundSize: '200% 5px, 5px 200%, 200% 5px, 5px 200%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0% 0%, 100% 0%, 100% 100%, 0% 100%',
                  animation: 'border-light-train 3s linear infinite',
                }}
              >
                <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-green-500/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/Aravinth.jpg" 
                    alt="Aravinth L" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground block mb-2">Hi, I'm </span>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 block">ARAVINTH</span>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 block pl-12 md:pl-20 lg:pl-28">LOGANATHAN</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-semibold mb-6">
              Web Developer & MERN Stack Enthusiast
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl lg:max-w-none mb-10 leading-relaxed">
              Fresher in Computer Science passionate about building impactful digital solutions. 
              Focused on creating clean, efficient, and user-centric web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2.5 w-full sm:w-auto justify-center px-8 py-4 text-base font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg hover:shadow-xl">
                <Sparkles className="w-5 h-5" />
                View My Work
              </a>
              <a href="/Resume Aravinth.pdf" download className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold hover:scale-105 active:scale-95 transition-transform">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto text-center px-8 py-4 text-base font-semibold hover:scale-105 active:scale-95 transition-transform">
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/ARAVINTHL1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aravinth-loganathan-66b29632a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:aravinthl266@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/23CSR021/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                aria-label="LeetCode"
              >
                <Trophy className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2.5 text-muted-foreground hover:text-primary transition-all group"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
