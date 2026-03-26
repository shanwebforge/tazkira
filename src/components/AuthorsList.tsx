'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import aliData from "@/data/ali.json";
import umarData from "@/data/umar.json";
import galibData from "@/data/galib.json";
import iqbalData from "@/data/iqbal.json";
import nazrulData from "@/data/nazrul.json";

const authors = [aliData, umarData, galibData, iqbalData, nazrulData];

export default function AuthorsList() {
  return (
    <div className="space-y-10 mb-10">
      {/* ১. টাইটেল সেকশন */}
      <div className="text-center">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-3">
          মনীষী অনুযায়ী দেখুন
        </h2>
        <div className="w-12 h-1 bg-emerald-500/20 mx-auto rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-emerald-500 animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>

      {/* ২. মনীষীদের লিস্ট */}
      <div className="flex flex-col gap-2 max-w-md mx-auto">
        {authors.map((a) => (
          <Link 
            key={a.slug} 
            href={`/author/${a.slug}`}
            className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 dark:border-emerald-100/5 hover:bg-[#1b4332] transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              {/* সামনের অ্যারো আইকন */}
              <ArrowRight 
                size={16} 
                className="text-emerald-500 group-hover:text-[#95d5b2] group-hover:translate-x-1 transition-all" 
              />
              <span className="text-emerald-900/80 dark:text-emerald-100/80 text-[13px] font-black uppercase tracking-widest group-hover:text-[#95d5b2]">
                {a.author}
              </span>
            </div>

            {/* উক্তির সংখ্যা */}
            <span className="text-[10px] font-bold text-emerald-500/40 group-hover:text-[#95d5b2]/50 uppercase italic">
              {a.quotes.length} Quotes
            </span>
          </Link>
        ))}
      </div>

      {/* শিমার এনিমেশনের জন্য গ্লোবাল সিএসএস বা ইনলাইন স্টাইল (অপশনাল) */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}