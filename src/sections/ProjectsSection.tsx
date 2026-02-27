import { useEffect, useRef } from 'react';

const caseStudies = [
  {
    title: 'Case Study 1 - Multi-Branch Retail ERP Implementation',
    challenge: 'Fragmented POS, manual reconciliation, and lack of centralized visibility.',
    solution:
      'Implemented integrated Odoo Sales, POS, Inventory, and Accounting with structured promotion logic and reporting control.',
    outcome:
      'Improved stock accuracy, centralized reporting visibility, reduced reconciliation workload, and strengthened branch-level operational discipline.',
  },
  {
    title: 'Case Study 2 - F&B Coffee Shop POS Development',
    challenge:
      'Need for structured POS system aligned with inventory tracking and simplified operational flow.',
    solution:
      'Designed tailored POS configuration with shift logic, cost tracking, and inventory integration while maintaining interface simplicity.',
    outcome:
      'Improved transaction clarity, reduced inventory leakage risk, and enabled structured reporting for daily operations.',
  },
  {
    title: 'Case Study 3 - B2B Distribution ERP Rollout',
    challenge:
      'Inventory-heavy environment with procurement complexity and credit-based sales.',
    solution:
      'Structured procurement-to-sales workflow integrating inventory valuation and accounting logic.',
    outcome:
      'Improved stock movement control, enhanced financial visibility, and created clearer operational accountability.',
  },
];

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider" style={{ animationDelay: '0.1s' }}>
            Selected Case Studies
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground" style={{ animationDelay: '0.2s' }}>
            Structured Problem-Solving Outcomes
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="reveal opacity-0 bg-white rounded-2xl p-6 shadow-sm border border-border/50"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{item.title}</h3>
              <div className="space-y-3 text-sm text-foreground/80">
                <p><span className="font-semibold text-foreground">Challenge:</span> {item.challenge}</p>
                <p><span className="font-semibold text-foreground">Solution:</span> {item.solution}</p>
                <p><span className="font-semibold text-foreground">Outcome:</span> {item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
