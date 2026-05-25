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
    <section aria-label="Consulting credibility" className="relative z-10 -mt-6 px-4 sm:-mt-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-[1.6rem] border border-white/70 bg-white/88 p-3.5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)] backdrop-blur min-[380px]:grid-cols-2 sm:rounded-[2rem] sm:p-4 lg:grid-cols-4">
        {credibilityItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.15rem] border border-slate-200/80 bg-white/80 px-3.5 py-3.5 sm:rounded-[1.4rem] sm:px-4 sm:py-4"
          >
            <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(22,78,99,0.12),rgba(180,83,9,0.18))] text-slate-900 sm:mb-3 sm:h-11 sm:w-11">
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-[0.7rem] sm:tracking-[0.28em]">
              {item.label}
            </p>
            <p className="mt-1 text-[0.92rem] font-medium leading-relaxed text-slate-800 sm:text-sm">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
