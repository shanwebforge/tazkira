'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuoteList from './QuoteList';
import HeroSection from './HeroSection';
import AuthorsList from './AuthorsList'; // ইম্পোর্ট করলি

export default function HomeContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-16 pb-20">
      {/* ১. হিরো সেকশন */}
      <HeroSection />

      {/* ২. সার্চ এবং মেইন উক্তি লিস্ট */}
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="max-w-2xl mx-auto">
           <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        {/* মেইন হোমপেজ উক্তি */}
        <QuoteList query={searchQuery} category="All" />
      </div>

      {/* ৩. নিচে মনীষীদের নামের ক্যাটাগরি (এখানেই আসল কাজ) */}
      <div className="max-w-4xl mx-auto px-6 pt-10 border-t border-emerald-900/5 dark:border-emerald-100/5">
        <div className="text-center mb-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-2">মনীষী অনুযায়ী দেখুন</h2>
          <div className="w-10 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        {/* মনীষীদের বাটন লিস্ট */}
        <AuthorsList />
      </div>
    </div>
  );
}