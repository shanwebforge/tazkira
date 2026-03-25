'use client';

import { useState } from 'react';
import { Quote, Heart, Share2 } from "lucide-react";

// তোর সব ফাইল ইম্পোর্ট (নতুন মনীষী এলে এখানে ইম্পোর্ট করবি)
import aliData from "@/data/ali.json";
import umarData from "@/data/umar.json";
import galibData from "@/data/galib.json";

export default function QuoteList({ query }: { query: string }) {
  // ১. বর্তমানে কোন মনীষী সিলেক্ট করা আছে তার স্টেট
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  // ২. সব ফাইল থেকে ডাটা নিয়ে মাস্টার লিস্ট
  const allQuotes = [
    ...aliData.quotes.map(q => ({ ...q, author: aliData.author })),
    ...umarData.quotes.map(q => ({ ...q, author: umarData.author })),
    ...galibData.quotes.map(q => ({ ...q, author: galibData.author })),
  ];

  // ৩. ইউনিক মনীষীদের নামের লিস্ট (ফিল্টার বাটন বানানোর জন্য)
  const authorNames = ["All", aliData.author, umarData.author, galibData.author];

  // ৪. ফিল্টারিং লজিক (মনীষীর নাম + সার্চ কুয়েরি)
  const filtered = allQuotes.filter(q => {
    const matchesAuthor = selectedAuthor === "All" || q.author === selectedAuthor;
    const matchesQuery = 
      q.text.toLowerCase().includes(query.toLowerCase()) || 
      q.author.toLowerCase().includes(query.toLowerCase());
    
    return matchesAuthor && matchesQuery;
  });

  return (
    <div className="space-y-10">
      
      {/* মনীষীদের নামের ফিল্টার বাটন লিস্ট */}
      <div className="flex flex-wrap gap-3 justify-center">
        {authorNames.map((name) => (
          <button
            key={name}
            onClick={() => setSelectedAuthor(name)}
            className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
              selectedAuthor === name 
              ? "bg-[#1b4332] text-[#95d5b2] border-transparent shadow-lg shadow-emerald-900/40 scale-105" 
              : "bg-white dark:bg-[#1b4332]/10 text-emerald-900/40 dark:text-emerald-100/40 border-emerald-900/5 dark:border-emerald-100/5 hover:border-emerald-500/30"
            }`}
          >
            {name === "All" ? "সব উক্তি" : name}
          </button>
        ))}
      </div>

      {/* উক্তির গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length > 0 ? (
          filtered.map((quote) => (
            <div 
              key={quote.id} 
              className="group p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 dark:border-emerald-100/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <Quote className="text-emerald-500/20 mb-4 group-hover:text-emerald-500/40 transition-colors" size={40} />
              
              <p className="text-xl font-bold leading-relaxed text-emerald-950 dark:text-emerald-50 mb-6 italic min-h-[80px]">
                "{quote.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-emerald-900/5 dark:border-emerald-100/10 pt-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1">
                    {quote.category}
                  </span>
                  <span className="text-sm font-black text-emerald-700 dark:text-emerald-400">
                    — {quote.author}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-400 transition-all active:scale-90 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800">
                    <Heart size={18} />
                  </button>
                  <button className="p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-400 transition-all active:scale-90 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-emerald-900/40 dark:text-emerald-100/20 font-bold italic">
              সালা, এই মনীষীর কোনো উক্তি খুঁজে পেলাম না!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}