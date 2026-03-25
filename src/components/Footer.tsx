import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-emerald-900/5 dark:border-emerald-100/5 bg-[#f7fdfa] dark:bg-[#0a1a12]">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          © {new Date().getFullYear()} Tazkira Studio
        </div>

        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in Bangladesh
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-600">Privacy</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}