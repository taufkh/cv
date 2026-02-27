import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const experiencePoints = [
  'Managing cross-functional ERP rollouts',
  'Conducting requirement workshops and system mapping',
  'Supporting regulatory-compliant payroll and finance setup',
  'Implementing multi-branch inventory and sales systems',
  'Delivering under tight deadlines and evolving scope constraints',
];

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider" style={{ animationDelay: '0.1s' }}>
            Professional Background
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground" style={{ animationDelay: '0.2s' }}>
            Structured Delivery Experience
          </h2>
        </div>

        <div className="reveal opacity-0 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-border/50" style={{ animationDelay: '0.3s' }}>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Over five years of hands-on ERP implementation experience managing simultaneous projects,
            coordinating teams of up to five members, and delivering structured implementations for
            growing SMEs.
          </p>
          <ul className="space-y-3 mb-6">
            {experiencePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            Projects have ranged across retail, F&B, B2B distribution, and public-sector environments.
          </p>
        </div>
      </div>
    </section>
  );
}
