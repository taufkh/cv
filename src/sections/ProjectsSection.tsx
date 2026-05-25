import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, FolderLock, Globe2, Layers3, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { caseStudies, type CaseStudy } from '@/content/caseStudies';
import { useReveal } from '@/hooks/useReveal';

const proofIcons = [Layers3, ShieldCheck, Globe2];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useReveal(sectionRef);

  return (
    <section id="case-studies" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <span className="reveal eyebrow opacity-0" style={{ animationDelay: '0.1s' }}>
            Featured Case Studies
          </span>
          <h2 className="reveal section-title mt-3 opacity-0" style={{ animationDelay: '0.2s' }}>
            Selected work that shows transformation discipline, not just customization volume.
          </h2>
          <p
            className="reveal mt-4 max-w-2xl opacity-0 text-base leading-relaxed text-slate-600"
            style={{ animationDelay: '0.24s' }}
          >
            These public summaries are intentionally selective. They are designed to show
            the type of operating problems I help solve, the scope I have worked with, and
            the kind of control-focused implementation value I bring.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setSelectedCaseStudy(item)}
              className={`reveal group rounded-[1.5rem] border border-slate-200/80 bg-white p-0 text-left shadow-[0_26px_70px_-52px_rgba(15,23,42,0.4)] opacity-0 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_32px_90px_-54px_rgba(15,23,42,0.46)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:rounded-[2rem] ${
                index === 0 ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="h-full rounded-[1.45rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-5 sm:rounded-[1.9rem] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {item.platform}
                    </p>
                    <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight text-slate-950 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <Badge
                    variant="outline"
                    className="rounded-full border-slate-300/80 bg-white/80 text-[0.68rem] uppercase tracking-[0.22em] text-slate-600"
                  >
                    {item.disclosureMode === 'named' ? 'Named' : 'Anonymized'}
                  </Badge>
                </div>

                <p className="mt-4 text-sm font-medium text-slate-500">{item.sector}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{item.summary}</p>

                <div className="mt-6 space-y-3 rounded-[1.6rem] border border-slate-200/80 bg-white/70 p-4">
                  {item.scopeHighlights.slice(0, 3).map((highlight, proofIndex) => {
                    const Icon = proofIcons[proofIndex] ?? Layers3;

                    return (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-[rgba(15,118,110,0.12)]">
                          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Read case summary
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={selectedCaseStudy !== null} onOpenChange={() => setSelectedCaseStudy(null)}>
          <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-[1.6rem] border-slate-200/80 bg-[linear-gradient(180deg,#fffdf8_0%,#f7f3ea_100%)] p-0 sm:rounded-[2rem]">
            {selectedCaseStudy ? (
              <>
                <div className="border-b border-slate-200/80 px-5 py-5 sm:px-8 sm:py-6">
                  <DialogHeader className="gap-4 text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge
                        variant="outline"
                        className="rounded-full border-slate-300/80 bg-white/85 text-[0.68rem] uppercase tracking-[0.22em] text-slate-600"
                      >
                        {selectedCaseStudy.platform}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-slate-300/80 bg-white/85 text-[0.68rem] uppercase tracking-[0.22em] text-slate-600"
                      >
                        {selectedCaseStudy.disclosureMode === 'named' ? 'Named public case' : 'Anonymized public case'}
                      </Badge>
                    </div>
                    <DialogTitle className="text-[2rem] font-semibold leading-tight text-slate-950 sm:text-3xl">
                      {selectedCaseStudy.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-relaxed text-slate-600">
                      {selectedCaseStudy.clientLabel} • {selectedCaseStudy.sector}
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <div className="space-y-7 px-5 py-5 sm:px-8 sm:py-6">
                  <section>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      Challenge
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">
                      {selectedCaseStudy.challenge}
                    </p>
                  </section>

                  <section>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      Contribution
                    </p>
                    <ul className="mt-4 space-y-3">
                      {selectedCaseStudy.contributions.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-slate-200/80 bg-white p-4 sm:rounded-[1.7rem] sm:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Consulting Value
                      </p>
                      <ul className="mt-4 space-y-3">
                        {selectedCaseStudy.consultingValue.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200/80 bg-white p-4 sm:rounded-[1.7rem] sm:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Technical Proof
                      </p>
                      <ul className="mt-4 space-y-3">
                        {selectedCaseStudy.technicalProof.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                            <FolderLock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section className="rounded-[1.45rem] border border-slate-200/80 bg-slate-950 px-5 py-5 text-slate-100 sm:rounded-[1.8rem] sm:px-6 sm:py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                      Relevance
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {selectedCaseStudy.ctaContext}
                    </p>
                    <Button asChild className="mt-5 rounded-full bg-white text-slate-950 hover:bg-white/90">
                      <a href="mailto:taufkh@gmail.com?subject=Consulting%20Inquiry">
                        Discuss a similar challenge
                      </a>
                    </Button>
                  </section>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
