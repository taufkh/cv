import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useReveal } from '@/hooks/useReveal';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email inquiry',
    value: 'taufkh@gmail.com',
    href: 'mailto:taufkh@gmail.com?subject=Consulting%20Inquiry',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 817-1413-42',
    href: 'https://wa.link/xk0hfx',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/taufkhidayat',
    href: 'https://www.linkedin.com/in/taufkhidayat/',
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-6">
          <div
            className="reveal overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-[linear-gradient(145deg,#0f172a_0%,#162336_44%,#0f766e_130%)] px-5 py-6 text-white shadow-[0_36px_90px_-56px_rgba(15,23,42,0.9)] opacity-0 sm:rounded-[2.4rem] sm:px-8 sm:py-8"
            style={{ animationDelay: '0.15s' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-teal-100/70">
              Contact
            </p>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1] text-white sm:text-5xl">
              If the business needs Odoo with more structure, let&apos;s talk.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200">
              The best starting point is a clear description of your operational context,
              the current bottlenecks, and the type of implementation or stabilization work
              you are evaluating.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button asChild size="lg" className="rounded-full bg-white px-6 text-slate-950 hover:bg-white/92">
                <a href="mailto:taufkh@gmail.com?subject=Consulting%20Inquiry">
                  Send an Inquiry
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white/16 hover:text-white"
              >
                <a href="#case-studies">Review Case Studies</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white/16 hover:text-white"
              >
                <a href="./Taufik_Hidayat_CV.pdf" download="Taufik_Hidayat_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </Button>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MapPin className="h-4 w-4" />
              Based in Jakarta, Indonesia • Available for remote collaboration
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="reveal rounded-[1.45rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_56px_-46px_rgba(15,23,42,0.4)] opacity-0 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_74px_-50px_rgba(15,23,42,0.46)] sm:rounded-[1.8rem] sm:p-6"
                style={{ animationDelay: `${0.24 + index * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(180,83,9,0.18))]">
                    <method.icon className="h-5 w-5 text-slate-950" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {method.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div
              className="reveal rounded-[1.45rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-5 text-sm leading-relaxed text-slate-600 shadow-[0_22px_56px_-46px_rgba(15,23,42,0.35)] opacity-0 sm:rounded-[1.8rem] sm:p-6"
              style={{ animationDelay: '0.48s' }}
            >
              A short inquiry with your business context, current bottleneck, and desired
              timeline is enough to start a useful first conversation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
