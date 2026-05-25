import { useRef } from 'react';
import { GraduationCap, Award, Globe2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const supportingSignals = [
  {
    title: 'Odoo certification',
    subtitle: 'Odoo v16 Certified',
    description:
      'A formal credential supporting practical implementation work across custom Odoo delivery environments.',
    icon: Award,
  },
  {
    title: 'Cross-sector exposure',
    subtitle: 'Retail, F&B, B2B, POS, warehouse, finance',
    description:
      'Recent projects span operationally different environments, from store-facing POS flows to governance-heavy warehouse and finance controls.',
    icon: Globe2,
  },
  {
    title: 'Academic foundation',
    subtitle: 'University of Surrey & Universitas Indonesia',
    description:
      'Background in environmental psychology and architecture reinforces a structured, human-centered way of thinking about systems and operational environments.',
    icon: GraduationCap,
  },
];

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section id="background" ref={sectionRef} className="section-padding bg-muted/40">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <span className="reveal eyebrow opacity-0" style={{ animationDelay: '0.1s' }}>
            Supporting Background
          </span>
          <h2 className="reveal section-title mt-3 opacity-0" style={{ animationDelay: '0.18s' }}>
            Supporting proof that reinforces the consulting profile.
          </h2>
          <p
            className="reveal mt-4 opacity-0 text-base leading-relaxed text-slate-600"
            style={{ animationDelay: '0.24s' }}
          >
            These signals are not the main sales story, but they help explain the mix of
            structured thinking, technical credibility, and cross-functional implementation work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {supportingSignals.map((item, index) => (
            <article
              key={item.title}
              className="reveal card-hover rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-[0_22px_56px_-44px_rgba(15,23,42,0.4)] opacity-0"
              style={{ animationDelay: `${0.32 + index * 0.08}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(180,83,9,0.18))]">
                <item.icon className="h-5 w-5 text-slate-900" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                {item.title}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.subtitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div
          className="reveal mt-10 rounded-[2rem] border border-slate-200/80 bg-white px-6 py-5 text-sm leading-relaxed text-slate-600 shadow-[0_22px_56px_-48px_rgba(15,23,42,0.35)] opacity-0"
          style={{ animationDelay: '0.58s' }}
        >
          My formal education includes a Master&apos;s degree in Environmental Psychology
          from the University of Surrey and a Bachelor&apos;s degree in Architecture from
          Universitas Indonesia. I treat that background as supporting context, not as a
          substitute for delivery evidence.
        </div>
      </div>
    </section>
  );
}
