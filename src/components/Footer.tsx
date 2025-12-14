import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-base">Aravinth L</p>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 active:scale-95 transition-all shadow-sm hover:shadow-md"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
