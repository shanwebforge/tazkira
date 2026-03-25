import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-emerald-900/5 dark:border-emerald-100/5 bg-[#f7fdfa] dark:bg-[#0a1a12]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* ১. ব্র্যান্ডিং ও কপিরাইট */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-emerald-900/80 dark:text-emerald-100/80">
              BaniBox Studio
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত
            </p>
          </div>

          {/* ২. বাংলাদেশে তৈরি ব্যাজ */}
          <div className="flex flex-col items-center gap-3">
             <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30">
                <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                  বাংলাদেশে তৈরি
                </span>
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
             </div>
          </div>

          {/* ৩. সোশ্যাল আইকন (Pure SVG - No Import Needed) */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 items-center">
               {/* Github */}
               <a href="#" className="text-slate-400 hover:text-emerald-600 transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
               </a>
               {/* Facebook */}
               <a href="#" className="text-slate-400 hover:text-emerald-600 transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
               {/* Twitter (X) */}
               <a href="#" className="text-slate-400 hover:text-emerald-600 transition-all">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path></svg>
               </a>
            </div>
            
            {/* পলিসি লিংক */}
            <div className="flex gap-4">
              <a href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">গোপনীয়তা নীতি</a>
              <span className="text-slate-200 dark:text-slate-800">•</span>
              <a href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">শর্তাবলী</a>
            </div>
          </div>

        </div>
        
        {/* ডেকোরেটিভ লাইন */}
        <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>
      </div>
    </footer>
  );
}