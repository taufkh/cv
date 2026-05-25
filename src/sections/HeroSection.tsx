import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Award, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useReveal } from '@/hooks/useReveal';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const yearsExperience = Math.max(new Date().getFullYear() - 2021, 1);

  useReveal(sectionRef);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[78%] bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.16),transparent_45%),linear-gradient(180deg,#f8f4ed_0%,#f5efe4_35%,#f7f4ee_100%)]" />
        <div className="absolute right-[-12%] top-[6%] h-72 w-72 rounded-full bg-[rgba(180,83,9,0.12)] blur-3xl lg:h-96 lg:w-96" />
        <div className="absolute bottom-[14%] left-[-10%] h-72 w-72 rounded-full bg-[rgba(15,118,110,0.1)] blur-3xl lg:h-[26rem] lg:w-[26rem]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="space-y-8">
            <div className="reveal opacity-0" style={{ animationDelay: '0.05s' }}>
              <Badge
                variant="outline"
                className="rounded-full border-slate-300/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur"
              >
                <Award className="mr-2 h-4 w-4" />
                Personal consulting profile for Odoo transformation work
              </Badge>
            </div>

            <div className="space-y-5">
              <div className="reveal space-y-3 opacity-0" style={{ animationDelay: '0.12s' }}>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Taufik Hidayat
                </p>
                <h1 className="font-display max-w-4xl text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
                  Structured Odoo consulting for businesses that need control before scale.
                </h1>
              </div>
              <p
                className="reveal max-w-2xl opacity-0 text-lg leading-relaxed text-slate-700 sm:text-xl"
                style={{ animationDelay: '0.18s' }}
              >
                I help growing SMEs and operationally complex teams implement Odoo with
                stronger process discipline, clearer controls, and rollout readiness across
                sales, warehouse, finance, and customer operations.
              </p>
              <div
                className="reveal flex flex-wrap items-center gap-x-5 gap-y-2 opacity-0 text-sm text-slate-600"
                style={{ animationDelay: '0.24s' }}
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Jakarta, Indonesia
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Odoo v16 Certified
                </span>
                <span className="rounded-full border border-slate-300/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
                  Odoo 16 & 17 exposure
                </span>
              </div>
            </div>

            <div className="reveal flex flex-wrap gap-4 opacity-0" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="rounded-full bg-primary px-6 text-white">
                <a href="mailto:taufkh@gmail.com?subject=Consulting%20Inquiry">
                  <Mail className="w-4 h-4" />
                  Request Consulting Profile
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-slate-300 bg-white/80 px-6 text-slate-900"
              >
                <a href="#case-studies">
                  View Case Studies
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="reveal grid gap-3 pt-2 opacity-0 sm:grid-cols-3" style={{ animationDelay: '0.36s' }}>
              <a
                href="mailto:taufkh@gmail.com"
                className="rounded-[1.4rem] border border-slate-200/80 bg-white/78 p-4 transition-colors hover:border-slate-300 hover:bg-white"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">taufkh@gmail.com</p>
              </a>
              <a
                href="https://wa.link/xk0hfx"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.4rem] border border-slate-200/80 bg-white/78 p-4 transition-colors hover:border-slate-300 hover:bg-white"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Phone className="h-4 w-4 text-emerald-600" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">Fast initial discussion</p>
              </a>
              <a
                href="https://www.linkedin.com/in/taufkhidayat/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.4rem] border border-slate-200/80 bg-white/78 p-4 transition-colors hover:border-slate-300 hover:bg-white"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10">
                  <Linkedin className="h-4 w-4 text-blue-500" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  LinkedIn
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">Professional background</p>
              </a>
            </div>
          </div>

          <div className="reveal flex justify-center opacity-0 lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[22rem]">
              <div className="absolute inset-x-8 top-10 h-40 rounded-full bg-[rgba(180,83,9,0.18)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,239,227,0.96))] p-4 shadow-[0_32px_90px_-54px_rgba(15,23,42,0.7)]">
                <div className="mb-4 rounded-[2rem] border border-slate-200/80 bg-white/85 p-3">
                  {!profileImageFailed ? (
                    <img
                      src="./profile.png"
                      alt="Taufik Hidayat"
                      className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
                      onError={() => setProfileImageFailed(true)}
                    />
                  ) : (
                    <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(180,83,9,0.18))] px-6 py-12 text-center">
                      <div className="mx-auto mb-3 flex h-32 w-32 items-center justify-center rounded-full bg-white">
                        <span className="font-display text-5xl text-slate-900">TH</span>
                      </div>
                      <p className="text-sm text-slate-600">Profile image available on the public site.</p>
                    </div>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/80 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      Consulting Focus
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
                      Operational discipline, approval controls, and rollout readiness.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/80 px-4 py-4">
                    <p className="text-3xl font-semibold text-slate-950">{yearsExperience}+</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      years working across ERP delivery, customization, and stabilization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
