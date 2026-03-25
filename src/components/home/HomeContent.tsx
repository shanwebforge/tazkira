'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import HeroSection from './HeroSection';
import AuthorsList from './AuthorsList';

export default function HomeContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-16 pb-20">
      {/* ১. হিরো সেকশন */}
      <HeroSection />

      {/* ২. সার্চ এবং মেইন উক্তি লিস্ট */}
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="max-w-2xl mx-auto">
           {/* সার্চবার দিয়ে উক্তি এবং মনীষী দুইটাই খোঁজা যাবে */}
           <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        {/* মেইন হোমপেজ উক্তি - এখানে category="All" পাস করা হয়েছে */}
        <QuoteList query={searchQuery} category="All" />
      </div>

      {/* ৩. নিচে মনীষীদের নামের সেকশন (লিস্ট ভিউ) */}
      <div className="max-w-4xl mx-auto px-6 pt-16 border-t border-emerald-900/5 dark:border-emerald-100/5">
        <div className="text-center mb-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-3">
            মনীষী অনুযায়ী দেখুন
          </h2>
          <div className="w-12 h-1 bg-emerald-500/20 mx-auto rounded-full overflow-hidden">
             <div className="w-1/2 h-full bg-emerald-500"></div>
          </div>
        </div>
        
        {/* মনীষীদের লিস্ট যেটা আমরা অ্যারো আইকন দিয়ে বানিয়েছিলাম */}
        <div className="max-w-md mx-auto">
          <AuthorsList />
        </div>
      </div>
    </div>
  );
}