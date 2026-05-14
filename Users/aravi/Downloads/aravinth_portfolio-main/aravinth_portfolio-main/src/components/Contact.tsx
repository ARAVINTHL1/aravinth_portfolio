import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Trophy, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aravinthl266@gmail.com",
    href: "mailto:aravinthl266@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7339486437",
    href: "tel:+917339486437",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ARAVINTHL1",
    username: "@ARAVINTHL1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aravinth-loganathan-66b29632a/",
    username: "Aravinth Loganathan",
  },
  {
    icon: Trophy,
    label: "LeetCode",
    href: "https://leetcode.com/u/23CSR021/",
    username: "@23CSR021",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact cards */}
            {contactInfo.map((info, index) => (
              <div key={index} className="professional-card flex items-center gap-4 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-semibold text-base hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-base">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-sm font-bold mb-5 text-foreground uppercase tracking-wider">Find me online</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all hover:scale-110 shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability & CTA */}
          <div className="space-y-6">
            {/* Availability Card */}
            <div className="professional-card hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <h4 className="font-bold text-lg">Available for Opportunities</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                I'm currently open to internship opportunities, freelance projects, and full-time positions. 
                Let's collaborate to build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:aravinthl266@gmail.com"
                  className="btn-primary flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="/Resume Aravinth.pdf"
                  download
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-secondary border-2 border-border hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="professional-card hover:shadow-xl transition-all">
              <h4 className="font-bold text-lg mb-6">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-2xl font-bold text-gradient mb-1">24h</p>
                  <p className="text-xs text-muted-foreground font-medium">Response Time</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-2xl font-bold text-gradient mb-1">5+</p>
                  <p className="text-xs text-muted-foreground font-medium">Projects Done</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-2xl font-bold text-gradient mb-1">100%</p>
                  <p className="text-xs text-muted-foreground font-medium">Dedication</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-2xl font-bold text-gradient mb-1">2+</p>
                  <p className="text-xs text-muted-foreground font-medium">Years Learning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
