import { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  BarChart3,
  Users,
  ClipboardCheck,
  HeadphonesIcon,
  FileText,
  Code,
  Palette,
} from 'lucide-react';

const coreSkills = [
  {
    name: 'Odoo Configuration',
    level: 95,
    icon: Settings,
    description: 'Module setup, workflow configuration, system optimization',
  },
  {
    name: 'Business Process Analysis',
    level: 90,
    icon: BarChart3,
    description: 'Requirements gathering, process mapping, workflow design',
  },
  {
    name: 'Project Management',
    level: 85,
    icon: ClipboardCheck,
    description: 'Timeline management, resource allocation, stakeholder communication',
  },
  {
    name: 'User Training',
    level: 92,
    icon: Users,
    description: 'End-user training, documentation, knowledge transfer',
  },
];

const technicalSkills = [
  { name: 'Odoo Configuration', icon: Settings },
  { name: 'Business Process Analysis', icon: BarChart3 },
  { name: 'User Training', icon: Users },
  { name: 'System Testing', icon: ClipboardCheck },
  { name: 'Support', icon: HeadphonesIcon },
  { name: 'Documentation', icon: FileText },
  { name: 'Basic HTML', icon: Code },
  { name: 'Basic CSS', icon: Code },
  { name: 'Basic Figma', icon: Palette },
];

const modules = [
  'Sales',
  'Inventory',
  'CRM',
  'POS',
  'Accounting',
  'Purchase',
  'Manufacturing',
  'Payroll',
  'Attendance',
  'Employee',
  'Recruitment',
  'Website',
  'Helpdesk',
  'Time Off',
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
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider"
            style={{ animationDelay: '0.1s' }}
          >
            Expertise
          </span>
          <h2
            className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Skills & Competencies
          </h2>
          <p
            className="reveal opacity-0 text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ animationDelay: '0.3s' }}
          >
            Comprehensive skill set in Odoo ERP implementation, business analysis,
            and project management
          </p>
        </div>

        {/* Core Skills with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="reveal opacity-0 p-6 bg-white rounded-2xl shadow-sm border border-border/50 card-hover"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <span className="text-sm font-medium text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div
          className="reveal opacity-0 mb-12"
          style={{ animationDelay: '0.8s' }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                <skill.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Odoo Modules */}
        <div className="reveal opacity-0" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Odoo Modules Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {modules.map((module) => (
              <Badge
                key={module}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-2 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default"
              >
                {module}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
