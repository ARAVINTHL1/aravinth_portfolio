import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-primary/20 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group relative">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600 via-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-white font-bold text-xl relative z-10">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground text-lg tracking-tight block leading-tight">Aravinth L</span>
              <span className="text-xs text-primary font-semibold">Full Stack Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-card/40 backdrop-blur-md rounded-2xl px-2 py-2 border border-border/60 shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative px-5 py-2.5 text-[15px] font-semibold text-muted-foreground hover:text-foreground rounded-xl hover:bg-secondary/80 transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2.5 group px-7 py-3 rounded-xl font-semibold overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-secondary/80 transition-all duration-200 border border-border/60 hover:border-primary/50 active:scale-90 shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} className="text-primary" /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4">
            <div className="flex flex-col gap-2 bg-card/98 backdrop-blur-2xl rounded-2xl border border-border/60 p-4 shadow-2xl">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-3.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200 font-semibold text-base group overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-teal-400 to-green-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r-full"></div>
                  <span className="relative z-10 ml-2">{link.name}</span>
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border/60">
                <a
                  href="#contact"
                  className="w-full text-center flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
