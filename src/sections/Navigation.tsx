import { useEffect, useState } from 'react';
import { Menu, X, Mail, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Approach', href: '#approach' },
  { label: 'Principles', href: '#principles' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 72);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          isScrolled
            ? 'border-b border-slate-200/70 bg-[rgba(248,244,237,0.88)] py-2.5 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl'
            : 'bg-[rgba(248,244,237,0.72)] py-3.5 shadow-[0_18px_56px_-44px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:bg-transparent sm:py-5 sm:shadow-none sm:backdrop-blur-0'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/88 text-base font-semibold tracking-[0.16em] shadow-[0_12px_30px_-24px_rgba(15,23,42,0.34)] sm:h-auto sm:w-auto sm:border-0 sm:bg-transparent sm:shadow-none sm:text-lg sm:tracking-[0.18em]">
              TH
            </span>
            <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-500 md:block">
              Odoo Consulting
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 px-2 py-2 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.3)] backdrop-blur md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild size="sm" className="rounded-full bg-primary px-4 text-white shadow-[0_18px_40px_-26px_rgba(148,68,18,0.9)]">
              <a href="mailto:taufkh@gmail.com?subject=Consulting%20Inquiry">
                <Mail className="w-4 h-4" />
                Start an Inquiry
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-slate-300 bg-white/85 px-4 text-slate-900 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.28)]"
            >
              <a href="./Taufik_Hidayat_CV.pdf" download="Taufik_Hidayat_CV.pdf">
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-full border border-slate-200/80 bg-white/85 p-2 text-slate-900 shadow-sm transition-colors hover:bg-white md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-[opacity,visibility] duration-300 md:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMenu} />
        <div
          id="mobile-navigation"
          className={`absolute left-4 right-4 top-[4.5rem] rounded-[1.55rem] border border-slate-200 bg-[rgba(248,244,237,0.98)] p-4 shadow-[0_28px_80px_-46px_rgba(15,23,42,0.45)] transition-[transform,opacity] duration-300 sm:top-20 sm:rounded-[1.8rem] ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="mb-4 rounded-[1.25rem] border border-white/80 bg-white/70 px-4 py-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
              Consulting Profile
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Navigate the profile, review case studies, or start a direct inquiry.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-left font-medium text-slate-700 transition-colors hover:bg-white hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
            <hr className="my-2 border-slate-200" />
            <div className="grid gap-2 min-[380px]:grid-cols-2">
              <Button asChild className="w-full rounded-full bg-primary text-white">
                <a href="mailto:taufkh@gmail.com?subject=Consulting%20Inquiry" onClick={closeMenu}>
                  <Mail className="w-4 h-4" />
                  Start an Inquiry
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-slate-300 bg-white/85 text-slate-900"
              >
                <a
                  href="./Taufik_Hidayat_CV.pdf"
                  download="Taufik_Hidayat_CV.pdf"
                  onClick={closeMenu}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </Button>
            </div>
            <Button asChild variant="ghost" className="mt-1 w-full rounded-full text-slate-700 hover:bg-white/80 hover:text-slate-950">
              <a href="#case-studies" onClick={closeMenu}>
                <ArrowRight className="w-4 h-4" />
                Jump to Case Studies
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
