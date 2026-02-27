import { useEffect, useRef } from 'react';
import { Target, Users, Lightbulb, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Process Optimization',
    description: 'Streamlining complex business workflows into efficient systems',
  },
  {
    icon: Users,
    title: 'User Training',
    description: 'Empowering teams with clear, empathetic training sessions',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Turning stakeholder feedback into practical solutions',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    description: 'Delivering projects on time and within budget',
  },
];

export function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      id="profile"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div className="space-y-6">
            <div className="reveal opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
                Profile
              </h2>
            </div>

            <div
              className="reveal opacity-0 space-y-4 text-foreground/80 leading-relaxed"
              style={{ animationDelay: '0.2s' }}
            >
              <p>
                Taufik Hidayat is an ERP enthusiast who thrives on simplifying complex
                business processes using Odoo. With over {yearsExperience} years of hands-on experience
                as a Functional Consultant and Business Analyst, he has helped companies
                from retail to manufacturing move away from messy spreadsheets and siloed
                systems into streamlined, integrated workflows.
              </p>
              <p>
                Specializing in key Odoo modules like{' '}
                <span className="font-semibold text-primary">Sales</span>,{' '}
                <span className="font-semibold text-primary">Inventory</span>,{' '}
                <span className="font-semibold text-primary">CRM</span>, and{' '}
                <span className="font-semibold text-primary">POS</span>, Taufik focuses
                on creating systems people actually enjoy using, not just ones that tick
                boxes.
              </p>
              <p>
                Known for his ability to turn stakeholder feedback into practical
                solutions and his knack for training users with clarity and empathy, he
                brings a human touch to every digital transformation project he leads.
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
}
