import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Building2, UtensilsCrossed, Boxes, Users, Globe2, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    title: 'Retail Operations',
    description:
      'Multi-branch sales integration, POS synchronization, centralized reporting, and promotion logic structuring.',
    icon: Building2,
  },
  {
    title: 'F&B Operations',
    description:
      'Coffee shop POS development with structured inventory discipline, cost awareness, and operational simplicity for staff adoption.',
    icon: UtensilsCrossed,
  },
  {
    title: 'B2B Distribution & Industrial Supply',
    description:
      'Procurement-heavy, inventory-intensive environments requiring credit control, stock accuracy, and structured warehouse workflows.',
    icon: Boxes,
  },
  {
    title: 'HR & Payroll',
    description:
      'Regulatory-compliant payroll implementation and attendance integration.',
    icon: Users,
  },
  {
    title: 'Cross-Border Exposure',
    description:
      'Experience supporting structured ERP engagements involving Singapore-based stakeholders and governance standards.',
    icon: Globe2,
  },
];

const approach = [
  'Operational Reality Assessment',
  'Scope Discipline',
  'Workflow Architecture',
  'Controlled Customization',
  'Structured Testing & Training',
  'Post-Go-Live Stabilization',
];

const mistakes = [
  'Overcomplicated workflows that confuse users',
  'Scope expansion without budget alignment',
  'Customization driven by preference instead of necessity',
  'Inventory logic misalignment leading to stock inaccuracies',
  'ERP projects treated as software installation instead of business transformation',
  'Owners expecting automation without operational commitment',
];

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span
            className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider"
            style={{ animationDelay: '0.1s' }}
          >
            Industry Experience
          </span>
          <h2
            className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Where We Operate Best
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {industries.map((item, index) => (
            <div
              key={item.title}
              className="reveal opacity-0 p-6 bg-white rounded-2xl shadow-sm border border-border/50 card-hover"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="reveal opacity-0 p-6 bg-white rounded-2xl shadow-sm border border-border/50" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4">Consulting Approach</h3>
            <p className="text-sm text-muted-foreground mb-4">ERP implementation succeeds when structure is prioritized over speed.</p>
            <div className="flex flex-wrap gap-2">
              {approach.map((item) => (
                <Badge key={item} variant="outline" className="px-3 py-1">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 p-6 bg-white rounded-2xl shadow-sm border border-border/50" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4">Common ERP Mistakes We Prevent</h3>
            <ul className="space-y-2">
              {mistakes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
