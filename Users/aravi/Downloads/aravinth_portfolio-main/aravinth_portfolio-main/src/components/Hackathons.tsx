import { Trophy, Calendar, Users, Award, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const hackathons = [
  {
    name: "HACKGENIX - Retail Demand Forecasting",
    organizer: "Sathyabama Institute of Science and Technology",
    date: "12th & 13th September, 2025",
    achievement: "Participant",
    team: "Kongu Engineering College",
    description: "Developed a comprehensive Retail Demand Forecasting system using machine learning to predict product demand patterns.",
    detailedDescription: `
      <h3 class="font-bold text-lg mb-3">Project Overview</h3>
      <p class="mb-4">Built an AI-powered Retail Demand Forecasting system that analyzes historical sales data to predict future product demand. The system helps retailers optimize inventory management and reduce stockouts.</p>
      
      <h3 class="font-bold text-lg mb-3">Key Features</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Time series analysis for demand prediction</li>
        <li>Interactive dashboards for data visualization</li>
        <li>Machine learning models for accurate forecasting</li>
        <li>Real-time inventory optimization recommendations</li>
      </ul>
      
      <h3 class="font-bold text-lg mb-3">Technologies Used</h3>
      <p class="mb-4">Python, TensorFlow, Scikit-learn, Pandas, NumPy, React, Node.js, MongoDB</p>
      
      <h3 class="font-bold text-lg mb-3">Impact</h3>
      <p>Successfully demonstrated the solution at Techno Summit'25, receiving positive feedback for innovation and practical applicability in retail operations.</p>
    `,
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
    certificate: "/s.png",
    images: ["/Sathyabama.jpg"],
  },
];

const Hackathons = () => {
  const [selectedHackathon, setSelectedHackathon] = useState<number | null>(null);

  return (
    <section id="hackathons" className="section-container bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="section-header">
          <span className="section-label">Competitions</span>
          <h2 className="section-title">Hackathons</h2>
        </header>

        {/* Hackathons Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <article
              key={index}
              className="professional-card hover:shadow-2xl transition-all duration-300 group relative overflow-hidden p-5"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Header with icon and achievement */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-green-500/10 text-primary font-bold text-xs px-3 py-1.5 rounded-full border border-primary/20">
                    {hackathon.achievement}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-1.5 text-foreground group-hover:text-primary transition-colors">
                  {hackathon.name}
                </h3>
                <p className="text-muted-foreground font-semibold text-sm mb-3">
                  {hackathon.organizer}
                </p>

                <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                  {hackathon.description}
                </p>

                {/* Info badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs bg-secondary/50 text-muted-foreground px-2.5 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium text-xs">{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-secondary/50 text-muted-foreground px-2.5 py-1.5 rounded-lg">
                    <Users className="w-3.5 h-3.5" />
                    <span className="font-medium text-xs">{hackathon.team}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-badge text-xs px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <button
                  onClick={() => setSelectedHackathon(index)}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-xs hover:gap-3 transition-all group/link"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {hackathons.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <p className="text-muted-foreground text-lg font-medium">
              Hackathon experiences coming soon!
            </p>
          </div>
        )}

        {/* Modal for detailed view */}
        {selectedHackathon !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedHackathon(null)}>
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-foreground">{hackathons[selectedHackathon].name}</h2>
                <button
                  onClick={() => setSelectedHackathon(null)}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-2">
                {/* Certificate Image */}
                {hackathons[selectedHackathon].certificate && (
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img 
                      src={hackathons[selectedHackathon].certificate} 
                      alt="Certificate" 
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Project Images */}
                {hackathons[selectedHackathon].images && hackathons[selectedHackathon].images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {hackathons[selectedHackathon].images.map((image, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-border">
                        <img 
                          src={image} 
                          alt={`Project ${idx + 1}`} 
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Description */}
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: hackathons[selectedHackathon].detailedDescription || hackathons[selectedHackathon].description }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hackathons;
