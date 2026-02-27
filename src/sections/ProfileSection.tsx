import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const idealClients = [
  'Growing SMEs with 10 to 50 active system users',
  'Multi-branch retail or F&B operators scaling operations',
  'B2B distributors managing inventory-intensive workflows',
  'Business owners who value structure over shortcuts',
  'Companies ready to commit effort alongside system transformation',
];

export function ProfileSection() {
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
                Positioning
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
                Strategic Implementation Focus
              </h2>
            </div>

            <div
              className="reveal opacity-0 space-y-4 text-foreground/80 leading-relaxed"
              style={{ animationDelay: '0.2s' }}
            >
              <p>
                Growing businesses often reach a stage where spreadsheets, manual
                reconciliation, and disconnected systems start limiting clarity and
                slowing growth.
              </p>
              <p>
                I help small to mid-sized enterprises transition into structured Odoo
                ERP environments where sales, inventory, finance, procurement, and
                operations are fully integrated and aligned with real business
                workflows.
              </p>
              <p>
                My focus is not simply system configuration. It is disciplined
                implementation, scope control, and operational clarity that supports
                sustainable business expansion.
              </p>
              <p>
                With experience across retail, F&amp;B, B2B distribution, and
                cross-border engagements including Singapore-based projects, I bring
                both business understanding and structured system execution into every
                implementation.
              </p>
            </div>
          </div>

          {/* Right - Client Fit */}
          <div
            className="reveal opacity-0 p-6 bg-white rounded-2xl shadow-sm border border-border/50"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Who We Work Best With
            </h3>
            <ul className="space-y-3">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              We are selective in engagements to ensure alignment, sustainability, and
              ethical integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
