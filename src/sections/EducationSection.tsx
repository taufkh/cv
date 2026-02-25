import { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'University of Surrey',
    location: 'Guildford, England',
    degree: 'Master in Environmental Psychology',
    period: '2018 - 2019',
    description:
      'Specialized in understanding human behavior in physical environments, applying psychological principles to design and architecture.',
  },
  {
    institution: 'Universitas Indonesia',
    location: 'Depok, Indonesia',
    degree: 'Bachelor of Architecture',
    period: '2013 - 2017',
    description:
      'Comprehensive architectural education with focus on sustainable design and human-centered spatial planning.',
  },
];

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="education"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider"
            style={{ animationDelay: '0.1s' }}
          >
            Academic Background
          </span>
          <h2
            className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Education
          </h2>
          <p
            className="reveal opacity-0 text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ animationDelay: '0.3s' }}
          >
            Strong academic foundation in architecture and environmental psychology
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-border/50 card-hover">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-lg font-medium text-primary mb-1">
                  {edu.institution}
                </p>

                {/* Location & Period */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className="reveal opacity-0 mt-12 text-center"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/80">
              Combined expertise in{' '}
              <span className="font-semibold text-primary">design thinking</span> and{' '}
              <span className="font-semibold text-primary">user-centered approach</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
