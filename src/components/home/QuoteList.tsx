'use client';

import { useState, useEffect } from 'react';
import { Quote, Heart, Share2, Copy, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

// ডাটা ইম্পোর্ট
import aliData from "@/data/ali.json";
import umarData from "@/data/umar.json";
import galibData from "@/data/galib.json";
import iqbalData from "@/data/iqbal.json";
import nazrulData from "@/data/nazrul.json";

interface QuoteListProps {
  query: string;
  category: string;
}

export default function QuoteList({ query, category }: QuoteListProps) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const itemsPerPage = 20;

  // ১. বুকমার্ক লোড করা
  useEffect(() => {
    const saved = localStorage.getItem('user_bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  // ২. সব উক্তি ডাটাবেস থেকে নেওয়া
  const allQuotes = [
    ...aliData.quotes.map(q => ({ ...q, author: aliData.author })),
    ...umarData.quotes.map(q => ({ ...q, author: umarData.author })),
    ...galibData.quotes.map(q => ({ ...q, author: galibData.author })),
    ...iqbalData.quotes.map(q => ({ ...q, author: iqbalData.author })),
    ...nazrulData.quotes.map(q => ({ ...q, author: nazrulData.author })),
  ];

  // ৩. ফিল্টারিং লজিক (শুধুমাত্র সার্চ কুয়েরি এবং ক্যাটাগরি প্রপস এর উপর ভিত্তি করে)
  const filtered = allQuotes.filter(q => {
    const matchesCategory = category === "All" || q.category === category;
    const matchesQuery = q.text.toLowerCase().includes(query.toLowerCase()) || 
                         q.author.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // ৪. পেজিনেশন ক্যালকুলেশন
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // স্মার্ট পেজিনেশন রেঞ্জ ফাংশন (মোবাইল ফ্রেন্ডলি)
  const getPaginationRange = () => {
    if (totalPages <= 1) return [1];
    const delta = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 2;
    const range = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    if (currentPage > delta + 2) range.unshift("...");
    if (currentPage < totalPages - delta - 1) range.push("...");
    return [1, ...range, totalPages];
  };

  const handleBookmark = (quoteText: string) => {
    const updated = bookmarks.includes(quoteText) 
      ? bookmarks.filter(b => b !== quoteText) 
      : [...bookmarks, quoteText];
    setBookmarks(updated);
    localStorage.setItem('user_bookmarks', JSON.stringify(updated));
    // হেডারের কাউন্ট আপডেট করার জন্য ইভেন্ট ফায়ার করা
    window.dispatchEvent(new Event('storage'));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  const handleShare = async (text: string, author: string) => {
    const shareData = {
      title: 'বিখ্যাত উক্তি',
      text: `"${text}" — ${author}`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share failed", err);
      }
    } else {
      handleCopy(`${shareData.text}\n${shareData.url}`);
    }
  };

  return (
    <div className="space-y-6 relative">
      
      {/* Custom Copy Toast */}
      {showCopyToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#1b4332] text-[#95d5b2] px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300 border border-emerald-500/30">
          <CheckCircle2 size={18} />
          <span className="font-bold text-sm">উক্তিটি কপি হয়েছে!</span>
        </div>
      )}

      {/* উক্তির গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
        {currentItems.map((quote, idx) => (
          <div key={idx} className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            
            {/* Love Button - Top Left */}
            <button 
              onClick={() => handleBookmark(quote.text)}
              className="absolute top-7 left-7 p-1 z-10 transition-transform active:scale-125"
            >
              <Heart 
                size={22} 
                className={bookmarks.includes(quote.text) ? "text-red-500 fill-red-500" : "text-emerald-500/20 hover:text-red-400"} 
              />
            </button>

            <Quote className="text-emerald-500/10 mb-4 ml-auto" size={40} />
            
            <p className="text-lg font-bold leading-relaxed text-emerald-950 dark:text-emerald-50 mb-6 italic min-h-[60px]">
              "{quote.text}"
            </p>
            
            <div className="flex items-center justify-between border-t border-emerald-900/5 pt-6 mt-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">
                  {quote.category}
                </span>
                <span className="text-sm font-black text-emerald-700 dark:text-emerald-400">
                  — {quote.author}
                </span>
              </div>
              
              <div className="flex gap-1">
                <button 
                  onClick={() => handleCopy(quote.text)} 
                  className="p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-400 transition-colors"
                >
                  <Copy size={18} />
                </button>
                <button 
                  onClick={() => handleShare(quote.text, quote.author)} 
                  className="p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-400 transition-colors"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* পেজিনেশন */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 md:gap-3 py-10 px-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => { setCurrentPage(prev => prev - 1); window.scrollTo(0,0); }}
            className="p-2 rounded-lg border border-emerald-900/5 disabled:opacity-10 text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-1">
            {getPaginationRange().map((page, index) => (
              <button
                key={index}
                disabled={page === "..." || currentPage === page}
                onClick={() => {
                  if (typeof page === 'number') {
                    setCurrentPage(page);
                    window.scrollTo(0,0);
                  }
                }}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  currentPage === page 
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed shadow-inner" 
                  : page === "..." 
                    ? "cursor-default text-emerald-300" 
                    : "bg-white dark:bg-[#1b4332]/20 text-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border border-emerald-900/5"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => { setCurrentPage(prev => prev + 1); window.scrollTo(0,0); }}
            className="p-2 rounded-lg border border-emerald-900/5 disabled:opacity-10 text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}