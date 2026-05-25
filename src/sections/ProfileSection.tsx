import { useRef } from 'react';
import { CheckCircle2, Compass, Shield, Workflow } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const bestFitEngagements = [
  'Growing SMEs replacing spreadsheet-heavy operations with a structured ERP backbone.',
  'Retail, F&B, and B2B operators with branch, inventory, procurement, or approval complexity.',
  'Leaders who need clearer control over custom Odoo scope, testing, and handover quality.',
  'Teams that want practical transformation discipline, not rushed customization without governance.',
];

const differentiators = [
  {
    icon: Workflow,
    title: 'Process-first delivery',
    description: 'I shape the workflow first, then configure or customize the system around it.',
  },
  {
    icon: Shield,
    title: 'Control-minded implementation',
    description: 'Approval gates, access rules, validation logic, and audit clarity are treated as core design concerns.',
  },
  {
    icon: Compass,
    title: 'Operational translation',
    description: 'I work comfortably between business requirement structure and Odoo technical execution.',
  },
];

export function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-10">
          <div className="space-y-8">
            <div className="reveal opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="eyebrow">About</span>
              <h2 className="section-title mt-3">
                I work best where Odoo needs both structure and practical delivery judgment.
              </h2>
            </div>

            <div
              className="reveal space-y-5 opacity-0 text-base leading-relaxed text-slate-700"
              style={{ animationDelay: '0.2s' }}
            >
              <p>
                Growing businesses often hit a point where spreadsheets, side approvals,
                and disconnected operational habits start slowing decisions and hiding
                risk. That is usually the moment when ERP stops being a software topic
                and becomes an execution topic.
              </p>
              <p>
                My role is to help shape that transition into a structured Odoo
                environment where sales, inventory, procurement, finance, and customer
                operations reflect real business workflows instead of improvised workarounds.
              </p>
              <p>
                I focus on scope discipline, workflow architecture, runtime stability,
                and delivery readiness. The aim is not to make Odoo look complex. The
                aim is to make the business operate with more clarity.
              </p>
              <p>
                My recent work spans Odoo 16 and 17 custom environments across retail,
                F&amp;B, B2B distribution, POS, warehouse, finance controls, and
                governance-heavy approval flows, including projects with Singapore-linked
                stakeholders and broader remote collaboration.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal rounded-[1.35rem] border border-slate-200/80 bg-white px-4 py-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.35)] opacity-0 sm:rounded-[1.6rem] sm:px-5 sm:py-5"
                  style={{ animationDelay: `${0.26 + index * 0.08}s` }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(180,83,9,0.18))]">
                    <item.icon className="h-5 w-5 text-slate-900" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-5 shadow-[0_28px_70px_-48px_rgba(15,23,42,0.45)] opacity-0 sm:rounded-[2rem] sm:p-7"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
              Best Fit Engagements
            </p>
            <h3 className="mt-3 text-[1.6rem] font-semibold leading-tight text-slate-950 sm:text-2xl">
              The strongest fit is usually a business that values structure over shortcuts.
            </h3>
            <ul className="mt-6 space-y-4">
              {bestFitEngagements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-[1.4rem] border border-slate-200/80 bg-white/80 px-4 py-4 text-sm leading-relaxed text-slate-600">
              I am selective with engagements because long-term system quality depends on
              alignment, operational ownership, and realistic implementation discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
