'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar'; // আলাদা ফাইল থেকে ইম্পোর্ট করা
import QuoteList from './QuoteList';
import HeroSection from './HeroSection';

export default function HomeContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-16 pb-20">
      {/* ১. হিরো সেকশন */}
      <HeroSection />

      {/* ২. সার্চ এবং উক্তি লিস্ট সেকশন */}
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        
        {/* সার্চবার কন্টেইনার */}
        <div className="max-w-2xl mx-auto">
           {/* এখানে SearchBar অন্য ফাইল থেকে আসছে */}
           <SearchBar 
             value={searchQuery} 
             onChange={setSearchQuery} 
             setCurrentPage={() => {}} // টাইপ এরর এড়াতে এটি রাখা হয়েছে
           />
        </div>
        
        {/* উক্তির লিস্ট - এখানে সার্চ কুয়েরি অনুযায়ী ফিল্টার হবে */}
        <QuoteList query={searchQuery} category="All" />
        
      </div>

      {/* ৩. নিচের ফাঁকা অংশ (যেখান থেকে Authors List মুছে ফেলা হয়েছে) */}
      <div className="max-w-4xl mx-auto px-4">
        {/* এখানে আগে Authors List ছিল, এখন এটি ক্লিন */}
      </div>
      
    </div>
  );
}