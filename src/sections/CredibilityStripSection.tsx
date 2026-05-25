import { ShieldCheck, BriefcaseBusiness, Globe2, Layers3 } from 'lucide-react';

const credibilityItems = [
  {
    icon: ShieldCheck,
    label: 'Credential',
    value: 'Odoo v16 Certified',
  },
  {
    icon: Layers3,
    label: 'Exposure',
    value: 'Odoo 16 & 17 custom project delivery',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Coverage',
    value: 'Retail, F&B, B2B, POS, Warehouse & Finance',
  },
  {
    icon: Globe2,
    label: 'Location',
    value: 'Jakarta-based, remote-ready',
  },
];

export function CredibilityStripSection() {
  return (
    <section aria-label="Consulting credibility" className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-[2rem] border border-white/70 bg-white/88 p-4 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)] backdrop-blur xl:grid-cols-4">
        {credibilityItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.4rem] border border-slate-200/80 bg-white/80 px-4 py-4"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(22,78,99,0.12),rgba(180,83,9,0.18))] text-slate-900">
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
