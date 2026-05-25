import { useRef } from 'react';
import { CheckCircle2, Scale, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reasonsToEngage = [
  'I am comfortable in both technical detail and business process conversations.',
  'I care about approval discipline, data reliability, and operational clarity as much as feature delivery.',
  'I prefer realistic scope, explicit tradeoffs, and long-term maintainability over fast but fragile customization.',
];

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section id="principles" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <span className="reveal eyebrow opacity-0" style={{ animationDelay: '0.1s' }}>
            Principles
          </span>
          <h2 className="reveal section-title mt-3 opacity-0" style={{ animationDelay: '0.18s' }}>
            Why clients engage me, and the principles that shape the engagement.
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div
            className="reveal rounded-[1.55rem] border border-slate-200/80 bg-white p-5 shadow-[0_26px_70px_-50px_rgba(15,23,42,0.45)] opacity-0 sm:rounded-[2rem] sm:p-7"
            style={{ animationDelay: '0.28s' }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(180,83,9,0.18))]">
              <ShieldCheck className="h-5 w-5 text-slate-950" aria-hidden="true" />
            </div>
            <h3 className="text-[1.6rem] font-semibold leading-tight text-slate-950 sm:text-2xl">Why clients engage me</h3>
            <ul className="mt-6 space-y-4">
              {reasonsToEngage.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              The long-term direction is to build a consulting practice known for
              disciplined execution, ethical alignment, and sustainable client partnerships.
            </p>
          </div>

          <div
            className="reveal overflow-hidden rounded-[1.55rem] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.95),rgba(255,247,219,0.98))] shadow-[0_28px_80px_-52px_rgba(146,64,14,0.35)] opacity-0 sm:rounded-[2rem]"
            style={{ animationDelay: '0.36s' }}
          >
            <div className="border-b border-amber-200/70 px-5 py-5 sm:px-7 sm:py-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
                <Scale className="h-5 w-5 text-amber-800" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                Ethical Foundation
              </p>
              <h3 className="mt-3 text-[1.6rem] font-semibold leading-tight text-slate-950 sm:text-2xl">
                Commercial fit matters. Ethical fit matters too.
              </h3>
            </div>
            <div className="space-y-5 px-5 py-5 text-sm leading-relaxed text-slate-700 sm:px-7 sm:py-6">
              <p>
                As a practicing Muslim, I treat ethical alignment as a real part of
                engagement selection, not an afterthought. I do not want implementation
                work to be technically successful but ethically compromised.
              </p>
              <p>
                In practice, that means I look for projects where integrity,
                accountability, responsible commercial behavior, and long-term value are
                taken seriously by both sides.
              </p>
              <p className="rounded-[1.3rem] border border-amber-200/80 bg-white/70 px-4 py-4 text-slate-700">
                I do not participate in projects that conflict with Islamic values. The
                goal is sustainable growth built on clarity, discipline, and responsible
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
