import { useEffect, useState } from 'react';
import { Menu, X, Mail, Download } from 'lucide-react';
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

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          isScrolled
            ? 'border-b border-slate-200/70 bg-[rgba(248,244,237,0.88)] py-2.5 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-semibold tracking-[0.16em] text-slate-900 sm:text-lg sm:tracking-[0.18em]">
            TH
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
          className={`absolute left-4 right-4 top-[4.5rem] rounded-[1.55rem] border border-slate-200 bg-[rgba(248,244,237,0.96)] p-4 shadow-[0_28px_80px_-46px_rgba(15,23,42,0.45)] transition-[transform,opacity] duration-300 sm:top-20 sm:rounded-[1.8rem] ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
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
        </div>
      </div>
    </>
  );
}
