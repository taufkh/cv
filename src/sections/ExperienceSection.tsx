import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'PT Mplus Solusi Perdana',
    position: 'Business Analyst',
    period: 'October 2024 - April 2025',
    type: 'Full-time',
    description: [
      'Analyzed client requirements and translated business needs into actionable technical solutions',
      'Created comprehensive technical documentation and process flow diagrams',
      'Conducted User Acceptance Testing (UAT) and System Integration Testing (SIT)',
      'Collaborated with cross-functional teams to optimize workflows and improve user experience',
      'Ensured project alignment with organizational goals through stakeholder management',
    ],
  },
  {
    company: 'PT Arkana Solusi Digital',
    position: 'Odoo Middle Functional',
    period: 'January 2023 - October 2024',
    type: 'Full-time',
    description: [
      'Specialized in Sales, Accounting, Inventory, and Manufacturing modules',
      'Led requirement gathering sessions and created detailed functional specifications',
      'Collaborated with developers and project managers to deliver customized Odoo solutions',
      'Successfully delivered projects within budget and on schedule',
      'Provided ongoing support and optimization for client systems',
    ],
  },
  {
    company: 'PT Arkana Solusi Digital',
    position: 'Project Manager',
    period: 'March 2021 - January 2023',
    type: 'Full-time',
    description: [
      'Managed end-to-end Odoo ERP implementation projects',
      'Oversaw project scope, timeline, and budget management',
      'Coordinated cross-functional teams for seamless business process integration',
      'Delivered customized solutions for Sales, Accounting, Inventory, and Manufacturing',
      'Maintained high standards of quality and accountability throughout project lifecycle',
    ],
  },
  {
    company: 'PT Buana Desain Arsiplano',
    position: 'Architecture Feasibility Expert',
    period: 'July 2020 - November 2020',
    type: 'Contract',
    description: [
      'Assessed viability and feasibility of building projects from architectural standpoint',
      'Collaborated with clients, architects, engineers, and government officials',
      'Evaluated project potential and identified potential obstacles',
      'Proposed solutions to ensure successful project completion',
    ],
  },
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
    <section
      id="experience"
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
            Career Journey
          </span>
          <h2
            className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Professional Experience
          </h2>
          <p
            className="reveal opacity-0 text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ animationDelay: '0.3s' }}
          >
            Progressive career growth in Odoo ERP implementation and business analysis
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.position}`}
                className={`reveal opacity-0 relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md md:-translate-x-2 z-10" />

                {/* Content */}
                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 card-hover">
                    {/* Header */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        <Briefcase className="w-3 h-3" />
                        {exp.type}
                      </span>
                    </div>

                    {/* Position */}
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.position}
                    </h3>

                    {/* Company */}
                    <div
                      className={`flex items-center gap-2 text-muted-foreground mb-2 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    {/* Period */}
                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm text-foreground/80 flex items-start gap-2 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
