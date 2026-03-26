'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center pt-24 pb-12 space-y-6 bg-transparent">
      {/* একটি সিম্পল আধুনিক ডিভাইডার */}
      <div className="flex justify-center items-center gap-4 opacity-30">
        <div className="h-[1.5px] w-10 bg-emerald-500 rounded-full"></div>
        <div className="w-2 h-2 rounded-full border-2 border-emerald-500 rotate-45"></div>
        <div className="h-[1.5px] w-10 bg-emerald-500 rounded-full"></div>
      </div>

      {/* মেইন টাইটেল */}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-emerald-950 dark:text-emerald-50 leading-[1.05]">
          জ্ঞানের আলোয় <br />
          <span className="text-emerald-500 italic">জীবন সাজান</span>
        </h1>
      </div>

      {/* সাবটাইটেল - উক্তি ছাড়া জাস্ট টেক্সট */}
      <div className="max-w-2xl mx-auto px-6 pt-4">
        <p className="text-emerald-900/40 dark:text-emerald-100/30 font-bold text-xs md:text-sm uppercase tracking-[0.4em] leading-relaxed">
          বিখ্যাত মনীষীদের অমূল্য বাণী ও <br className="hidden md:block" /> আধ্যাত্মিক চিন্তাধারার ডিজিটাল সংকলন
        </p>
      </div>

      {/* নিচে একটা ছোট ডেকোরেশন লাইন */}
      <div className="flex justify-center pt-6">
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      </div>
    </section>
  );
}