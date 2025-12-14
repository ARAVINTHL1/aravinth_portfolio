import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Kongu Engineering College",
    location: "Perundurai",
    period: "2023 — 2027",
    grade: "CGPA: 7.48",
    isCurrent: true,
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Cheran Matric Hr Sec School",
    location: "Karur",
    period: "2022 — 2023",
    grade: "80.63%",
    isCurrent: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Cheran Matric Hr Sec School",
    location: "Karur",
    period: "2020 — 2021",
    grade: "",
    isCurrent: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-container bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education</h2>
        </header>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting all items */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-green-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <article
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="professional-card hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {edu.isCurrent && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white text-xs px-4 py-1.5 rounded-bl-xl rounded-tr-xl font-bold shadow-lg">
                          CURRENT
                        </div>
                      )}
                      
                      <div className="relative z-10 p-6">
                        <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-1.5 text-foreground leading-tight">{edu.degree}</h3>
                            <p className="text-primary font-semibold text-base mb-4">{edu.institution}</p>
                            
                            <div className={`flex flex-wrap gap-4 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{edu.period}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
                                <MapPin className="w-4 h-4" />
                                <span className="font-medium">{edu.location}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-green-500/10 text-primary font-bold px-3 py-1.5 rounded-lg border border-primary/20">
                                <Award className="w-4 h-4" />
                                <span>{edu.grade}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle Node */}
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 z-10">
                    <div className="relative">
                      {/* Outer ring with pulse */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 opacity-20 animate-ping"></div>
                      {/* Main circle */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center shadow-2xl border-4 border-background">
                        <div className="w-8 h-8 rounded-full bg-white"></div>
                      </div>
                      {/* Year label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-card border border-border text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {edu.period.split(' — ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Mobile circle indicator */}
                  <div className="md:hidden absolute left-0 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
