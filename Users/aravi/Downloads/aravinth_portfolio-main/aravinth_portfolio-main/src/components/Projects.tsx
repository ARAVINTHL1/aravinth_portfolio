import { ExternalLink, Github, AlertTriangle, TrendingUp, Sprout, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Smart Disaster Management System",
    description:
      "Developed a Disaster Management System with real-time alerts and incident reporting to improve emergency response. Integrated location tracking and emergency contact features for faster communication during disasters.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    icon: AlertTriangle,
    gradient: "from-amber-500 to-orange-600",
    features: ["Real-time Alerts", "Location Tracking", "Emergency Contacts", "Incident Reports"],
  },
  {
    title: "Retail Demand Forecasting",
    description:
      "Developed a Retail Demand Forecasting system using Machine Learning and Facebook Prophet to predict future product demand. Used historical sales data to improve inventory planning and demand prediction.",
    technologies: ["Python", "ML", "AI Bot", "Flask", "TensorFlow"],
    icon: TrendingUp,
    gradient: "from-blue-500 to-indigo-600",
    features: ["ML Predictions", "Demand Analysis", "Inventory Planning", "Sales Forecasting"],
  },
  {
    title: "AI-Based Farmer Query System",
    description:
      "Developed an AI-powered farming platform to help farmers with crop recommendations, disease detection, and weather monitoring. Multi-language assistance and government scheme updates for better accessibility and support.",
    technologies: ["Python", "ML", "AI", "Flask", "TensorFlow"],
    icon: Sprout,
    gradient: "from-green-500 to-emerald-600",
    features: ["Crop Recommendations", "Disease Detection", "Weather Monitoring", "Government Schemes"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </header>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group professional-card p-0 overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Header with icon */}
              <div className="p-5 pb-0">
                <div className={`inline-flex w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-lg font-bold mb-2.5 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 border-t border-border bg-secondary/30">
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ARAVINTHL1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium group"
          >
            <Github className="w-5 h-5" />
            <span>Explore more on GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
