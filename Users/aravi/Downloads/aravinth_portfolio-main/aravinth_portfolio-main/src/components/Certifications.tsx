import { Award, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB",
    icon: "🍃",
    date: "2025",
    link: "/mongodb.pdf",
    status: "completed",
  },
  {
    name: "APEX Cloud Developer Professional",
    issuer: "Oracle",
    icon: "☁️",
    date: "2025",
    link: "/oracle.pdf",
    status: "completed",
  },
  {
    name: "Java Foundation",
    issuer: "Oracle",
    icon: "☕",
    date: "2025",
    link: "#",
    status: "in-progress",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  return (
    <section id="certifications" className="section-container bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="section-header">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Certifications</h2>
        </header>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const animations = [
              'border-light-train 3s linear infinite',
              'border-light-train-reverse 2.5s linear infinite',
              'border-light-pulse 4s ease-in-out infinite'
            ];
            const colors = [
              {
                gradient1: 'rgba(34, 211, 238, 0.8)',
                gradient2: 'rgba(52, 211, 153, 0.8)'
              },
              {
                gradient1: 'rgba(147, 51, 234, 0.8)',
                gradient2: 'rgba(59, 130, 246, 0.8)'
              },
              {
                gradient1: 'rgba(251, 191, 36, 0.8)',
                gradient2: 'rgba(249, 115, 22, 0.8)'
              }
            ];
            const currentColor = colors[index % colors.length];
            const currentAnimation = animations[index % animations.length];

            return cert.status === "in-progress" ? (
              <div
                key={index}
                className="professional-card hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: `
                    linear-gradient(90deg, transparent 0%, transparent 40%, ${currentColor.gradient1} 50%, transparent 60%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 40%, ${currentColor.gradient2} 50%, transparent 60%, transparent 100%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, ${currentColor.gradient1} 50%, transparent 60%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 40%, ${currentColor.gradient2} 50%, transparent 60%, transparent 100%),
                    hsl(var(--card))
                  `,
                  backgroundSize: '200% 4px, 4px 200%, 200% 4px, 4px 200%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0% 0%, 100% 0%, 100% 100%, 0% 100%',
                  animation: currentAnimation,
                }}
              >
                {/* In Progress Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg z-20">
                  In Progress
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{cert.icon}</span>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground font-semibold text-base mb-4">
                    {cert.issuer}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{cert.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm">
                      <span>Currently Pursuing</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                onClick={() => setSelectedCert(cert.link)}
                className="professional-card hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
                style={{
                  background: `
                    linear-gradient(90deg, transparent 0%, transparent 40%, rgba(34, 211, 238, 0.8) 50%, transparent 60%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 40%, rgba(52, 211, 153, 0.8) 50%, transparent 60%, transparent 100%),
                    linear-gradient(90deg, transparent 0%, transparent 40%, rgba(34, 211, 238, 0.8) 50%, transparent 60%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent 40%, rgba(52, 211, 153, 0.8) 50%, transparent 60%, transparent 100%),
                    hsl(var(--card))
                  `,
                  backgroundSize: '200% 4px, 4px 200%, 200% 4px, 4px 200%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0% 0%, 100% 0%, 100% 100%, 0% 100%',
                  animation: 'border-light-train 3s linear infinite',
                }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{cert.icon}</span>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground font-semibold text-base mb-4">
                    {cert.issuer}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{cert.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
            <div className="bg-card rounded-2xl max-w-6xl w-full h-[90vh] shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="bg-card border-b border-border p-6 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold text-foreground">Certificate</h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex-1 p-6 overflow-hidden">
                <iframe 
                  src={selectedCert} 
                  title="Certificate" 
                  className="w-full h-full rounded-xl border border-border"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
