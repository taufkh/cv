import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-[1.6rem] border border-slate-200/80 bg-[rgba(248,244,237,0.94)] p-3 shadow-[0_28px_80px_-44px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <Button asChild className="h-11 flex-1 rounded-full bg-primary text-white shadow-[0_18px_42px_-30px_rgba(148,68,18,0.95)]">
          <a href="mailto:taufkh@gmail.com?subject=Consulting%20Inquiry">
            <Mail className="h-4 w-4" />
            Inquiry
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 flex-1 rounded-full border-slate-300 bg-white/88 text-slate-900 shadow-[0_16px_34px_-28px_rgba(15,23,42,0.35)]"
        >
          <a href="./Taufik_Hidayat_CV.pdf" download="Taufik_Hidayat_CV.pdf">
            <Download className="h-4 w-4" />
            PDF
          </a>
        </Button>
      </div>
    </div>
  );
}
