import { Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Add your achievement images to the public folder
const achievements = [
  {
    title: "HACKGENIX Participant",
    image: "/Sathyabama.jpg",
    description: "Participated in HACKGENIX event organized at Sathyabama Institute of Science and Technology during Techno Summit'25 held on 12th & 13th September, 2025",
    year: "2025",
  },
  {
    title: "Power BI Knowledge Sharing",
    image: "/power.jpg",
    description: "Shared my knowledge about Power BI to my crew",
    year: "2025",
  },
  {
    title: "Industrial Training",
    image: "/inplant.jpg",
    description: "Completed industrial training and gained hands-on experience in real-world projects",
    year: "2024",
  },
  {
    title: "POCC Achievement",
    image: "/Pocc.jpg",
    description: "Successfully completed POCC project smart disaster management system",
    year: "2024",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Content */}
          <div>
            <span className="section-label">About Me</span>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
              <p>
                I'm a Computer Science student at Kongu Engineering College with a 
                strong foundation in modern web development technologies. My journey 
                began with curiosity about how digital products work, and it has 
                evolved into a deep passion for creating impactful solutions.
              </p>
              <p>
                I specialize in the MERN stack and have hands-on experience building 
                full-stack applications that solve real-world problems. My approach 
                combines clean code practices with user-centric design thinking.
              </p>
              <p>
                When I'm not coding, I'm exploring emerging technologies, sharpening 
                my problem-solving skills on LeetCode, or contributing to projects 
                that make a meaningful difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {[
                { value: "4", label: "Projects" },
                { value: "10+", label: "Technologies" },
                { value: "2", label: "Certifications" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Achievements Carousel */}
          <div className="flex flex-col items-center lg:items-start lg:pl-12">
            <div className="mb-8 text-center lg:text-left w-full">
              <span className="section-label">Accomplishments</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-md mx-auto lg:mx-0 lg:ml-8"
            >
              <CarouselContent>
                {achievements.map((achievement, index) => (
                  <CarouselItem key={index}>
                    <div className="professional-card hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg z-20">
                        {achievement.year}
                      </div>

                      <div className="relative z-10">
                        {/* Achievement Image */}
                        <div className="aspect-[3/2] overflow-hidden rounded-t-xl bg-secondary/50">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Achievement Info */}
                        <div className="p-4">
                          <div className="flex items-start gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                              <Award className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-bold text-base text-foreground leading-tight flex-1">
                              {achievement.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
