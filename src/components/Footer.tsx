'use client';

import { Mail, MessageCircle, Share2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-10 border-t border-emerald-900/10 dark:border-emerald-100/5 bg-[#fcfefd] dark:bg-[#040d09]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* মেইন গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* ১. ব্র্যান্ডিং সেকশন */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center text-emerald-50 font-black text-xl shadow-inner">
                ব
              </div>
              <h2 className="text-xl font-black tracking-tight text-emerald-950 dark:text-emerald-50">
                বানি বক্স <span className="text-emerald-600"></span>
              </h2>
            </div>
            <p className="text-sm text-emerald-900/60 dark:text-emerald-100/40 leading-relaxed max-w-xs mx-auto md:mx-0">
              মনীষীদের অমূল্য বাণী এবং জীবনদর্শনের একটি ডিজিটাল সংকলন। আমাদের লক্ষ্য জ্ঞানের আলো ছড়িয়ে দেওয়া।
            </p>
          </div>

          {/* ২. কুইক লিংকস */}
          <div className="flex flex-col items-center md:items-center space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/40 dark:text-emerald-100/30">
              প্রয়োজনীয় লিংক
            </h3>
            <nav className="flex flex-wrap justify-center gap-6 text-[13px] font-bold text-emerald-800 dark:text-emerald-200/60">
              <Link href="/pages/about" className="hover:text-emerald-600 transition-colors">আমাদের সম্পর্কে</Link>
              <Link href="/pages/privacy" className="hover:text-emerald-600 transition-colors">প্রাইভেসি পলিসি</Link>
              <Link href="/pages/contact" className="hover:text-emerald-600 transition-colors">যোগাযোগ</Link>
            </nav>
          </div>

          {/* ৩. সোশ্যাল ও কানেক্ট (Clean UI) */}
          <div className="flex flex-col items-center md:items-end space-y-5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/40 dark:text-emerald-100/30">
              যুক্ত থাকুন
            </h3>
            <div className="flex gap-3">
              {/* Facebook SVG - No Library Error */}
              <a href="#" className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Messenger */}
              <a href="#" className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                <MessageCircle size={18} strokeWidth={2.5} />
              </a>
              {/* Mail */}
              <a href="mailto:info@banibox.com" className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                <Mail size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* ৪. কপিরাইট ও ডেকোরেশন */}
        <div className="mt-16 pt-8 border-t border-emerald-900/5 dark:border-emerald-100/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-emerald-900/30 dark:text-emerald-100/20 uppercase tracking-[0.2em]">
            © {currentYear} BANI BOX STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-emerald-600/40 dark:text-emerald-400/20">
            <span className="text-[10px] font-black uppercase tracking-widest">Premium Content</span>
            <ChevronRight size={12} />
          </div>
        </div>

      </div>
    </footer>
  );
}