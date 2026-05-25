import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-[opacity,transform] duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-slate-950 text-white shadow-[0_20px_48px_-32px_rgba(15,23,42,0.85)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[0_26px_60px_-34px_rgba(15,23,42,0.9)]"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
