import { useEffect, useRef } from 'react';

export function PrinciplesSection() {
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
    <section id="principles" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider" style={{ animationDelay: '0.1s' }}>
            Principles
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground" style={{ animationDelay: '0.2s' }}>
            Leadership Vision & Ethical Foundation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="reveal opacity-0 bg-white rounded-2xl p-6 shadow-sm border border-border/50" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-3">Leadership Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              The long-term vision is to build a structured ERP consulting firm that prioritizes
              disciplined execution, ethical alignment, and sustainable business partnerships.
              The objective is not volume of projects, but quality of transformation.
            </p>
          </div>

          <div className="reveal opacity-0 bg-white rounded-2xl p-6 shadow-sm border border-border/50" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-3">Ethical Foundation</h3>
            <p className="text-foreground/80 leading-relaxed">
              As a practicing Muslim, ethical alignment is a core principle in every engagement.
              We do not participate in projects that conflict with Islamic values. Business growth
              must be built on integrity, accountability, and long-term responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
