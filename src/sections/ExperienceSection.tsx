import { useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const approachSteps = [
  'Operational reality assessment',
  'Scope discipline and requirement framing',
  'Workflow architecture and control design',
  'Targeted customization and hardening',
  'Structured UAT, validation, and handover',
  'Post-go-live stabilization planning',
];

const clientExpectations = [
  'Clear communication on scope, dependencies, and implementation risk.',
  'A practical bridge between business-process intent and Odoo technical design.',
  'Attention to approval logic, access control, and deployment readiness rather than surface-level configuration only.',
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="section-padding bg-[linear-gradient(180deg,rgba(248,244,237,0.45),rgba(255,255,255,1))]"
    >
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
          <div>
            <span className="reveal eyebrow opacity-0" style={{ animationDelay: '0.1s' }}>
              Approach
            </span>
            <h2 className="reveal section-title mt-3 opacity-0" style={{ animationDelay: '0.18s' }}>
              How I usually structure consulting work.
            </h2>
            <p
              className="reveal mt-5 max-w-2xl opacity-0 text-base leading-relaxed text-slate-600"
              style={{ animationDelay: '0.24s' }}
            >
              Good ERP delivery depends less on speed than on the right order of work:
              understanding the real process, controlling scope, designing the workflow,
              validating the custom stack, and preparing the business for reliable use.
            </p>

            <div className="mt-8 grid gap-4">
              {approachSteps.map((step, index) => (
                <div
                  key={step}
                  className="reveal flex items-center gap-4 rounded-[1.6rem] border border-slate-200/80 bg-white px-5 py-4 shadow-[0_18px_44px_-38px_rgba(15,23,42,0.32)] opacity-0"
                  style={{ animationDelay: `${0.32 + index * 0.08}s` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(15,118,110,0.12)] text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-3 text-slate-800">
                    <span className="font-medium">{step}</span>
                    {index < approachSteps.length - 1 ? (
                      <ArrowRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal rounded-[2rem] border border-slate-200/10 bg-slate-950 p-7 text-slate-100 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.8)] opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
              What Clients Can Expect
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Calm process discipline, not improvisation disguised as customization.
            </h3>
            <ul className="mt-6 space-y-4">
              {clientExpectations.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-relaxed text-slate-300">
              My preference is to work with teams willing to make operational decisions,
              document exceptions clearly, and treat ERP as a structured business system
              instead of a collection of shortcuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
