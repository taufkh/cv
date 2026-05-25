import { useRef } from 'react';
import { BriefcaseBusiness, Route, ShieldCheck, Warehouse, ShoppingBag, ClipboardList } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const capabilities = [
  {
    title: 'ERP implementation structuring',
    description:
      'Translate business complexity into a scoped, realistic implementation path with better requirement discipline and rollout clarity.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Business process customization',
    description:
      'Shape Odoo behavior around actual sales, procurement, finance, and customer-service workflows instead of forcing teams into awkward defaults.',
    icon: Route,
  },
  {
    title: 'Approval & control workflows',
    description:
      'Design approval gates, access rules, validation logic, and audit visibility where operational and finance control matters.',
    icon: ShieldCheck,
  },
  {
    title: 'Warehouse, sales & finance operations',
    description:
      'Support process-heavy environments that depend on stock accuracy, purchasing structure, quotation discipline, and accounting reliability.',
    icon: Warehouse,
  },
  {
    title: 'POS, loyalty & membership logic',
    description:
      'Customize commercial and retail-facing experiences where Odoo POS needs to reflect real customer rules and store operations.',
    icon: ShoppingBag,
  },
  {
    title: 'Migration, UAT & rollout readiness',
    description:
      'Support testing, validation, migration preparation, and handover evidence so implementations are not left at feature-complete but deployment-fragile.',
    icon: ClipboardList,
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section id="capabilities" ref={sectionRef} className="section-padding bg-muted/40">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <span className="reveal eyebrow opacity-0" style={{ animationDelay: '0.1s' }}>
            Capabilities
          </span>
          <h2 className="reveal section-title mt-3 opacity-0" style={{ animationDelay: '0.2s' }}>
            Core consulting capabilities shaped by real implementation pressure.
          </h2>
          <p
            className="reveal mt-4 max-w-2xl opacity-0 text-base leading-relaxed text-slate-600"
            style={{ animationDelay: '0.24s' }}
          >
            The work is strongest where business needs custom Odoo behavior but still
            needs structure, approval clarity, testing discipline, and implementation
            realism.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="reveal card-hover rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_56px_-44px_rgba(15,23,42,0.4)] opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.08}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(180,83,9,0.18))]">
                <item.icon className="h-5 w-5 text-slate-950" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
