import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Users,
  Clock,
  Target,
  CheckCircle2
} from "lucide-react";

const technicalSkills = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    category: "Database & Storage",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const softSkills = [
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Clock },
  { name: "Leadership", icon: Target },
  { name: "Responsibility", icon: CheckCircle2 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </header>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <article
              key={index}
              className="professional-card group hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all shadow-sm">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Languages Known & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages Known */}
          <div className="professional-card hover:shadow-xl transition-all">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              Languages Known
            </h3>
            <div className="space-y-3">
              {["C", "Java", "Python"].map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-semibold text-base">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="professional-card hover:shadow-xl transition-all">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all border border-border/50"
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
