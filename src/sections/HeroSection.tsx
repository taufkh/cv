import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const yearsExperience = Math.max(new Date().getFullYear() - 2021, 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="reveal opacity-0" style={{ animationDelay: '0.1s' }}>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-0"
              >
                <Award className="w-4 h-4 mr-2" />
                Odoo v16 Certified
              </Badge>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1
                className="reveal opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                style={{ animationDelay: '0.2s' }}
              >
                Taufik{' '}
                <span className="text-gradient">Hidayat</span>
              </h1>
              <p
                className="reveal opacity-0 text-xl sm:text-2xl text-muted-foreground font-medium"
                style={{ animationDelay: '0.3s' }}
              >
                Odoo Functional Consultant & Business Analyst
              </p>
              <div
                className="reveal opacity-0 flex items-center gap-2 text-muted-foreground"
                style={{ animationDelay: '0.4s' }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="reveal opacity-0 text-lg text-foreground/80 max-w-xl leading-relaxed"
              style={{ animationDelay: '0.5s' }}
            >
              ERP enthusiast with {yearsExperience}+ years of experience helping companies streamline
              operations through Odoo implementation. Specializing in Sales, Inventory,
              CRM, and POS modules.
            </p>

            {/* CTA Buttons */}
            <div
              className="reveal opacity-0 flex flex-wrap gap-4"
              style={{ animationDelay: '0.6s' }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white gap-2"
                onClick={() => window.open('mailto:taufkh@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-2"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Contact Links */}
            <div
              className="reveal opacity-0 flex flex-wrap gap-4 pt-4"
              style={{ animationDelay: '0.7s' }}
            >
              <a
                href="mailto:taufkh@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="hidden sm:inline">taufkh@gmail.com</span>
              </a>
              <a
                href="https://wa.link/xk0hfx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="hidden sm:inline">+62 817-1413-42</span>
              </a>
              <a
                href="https://www.linkedin.com/in/taufkhidayat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-blue-500" />
                </div>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div
            className="reveal opacity-0 hidden lg:flex justify-center"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {!profileImageFailed ? (
                    <img
                      src="./profile.png"
                      alt="Taufik Hidayat"
                      className="w-full h-full object-cover object-top"
                      onError={() => setProfileImageFailed(true)}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-2">
                        <span className="text-5xl font-bold text-gradient">TH</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Add profile.png in public folder</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 animate-pulse-soft">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Available for work</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3">
                <p className="text-2xl font-bold text-gradient">{yearsExperience}+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/50" />
        </div>
      </div>
    </section>
  );
}
