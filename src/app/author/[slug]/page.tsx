'use client';

import { useState, useEffect, use } from 'react';
import { Quote, ChevronLeft, ChevronRight, Heart, Share2, Copy, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// ডাটা ইম্পোর্ট
import aliData from "@/data/ali.json";
import umarData from "@/data/umar.json";
import galibData from "@/data/galib.json";
import iqbalData from "@/data/iqbal.json";
import nazrulData from "@/data/nazrul.json";

const allAuthors = [aliData, umarData, galibData, iqbalData, nazrulData];

export default function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // ১০টি করে উক্তি দেখাবে

  // ডাটা ফিল্টার
  const authorData = allAuthors.find(a => a.slug === slug);

  // বুকমার্ক লোড
  useEffect(() => {
    const saved = localStorage.getItem('user_bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  if (!authorData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-transparent">
        <h2 className="text-xl font-black text-emerald-900/20 uppercase tracking-[0.3em]">তথ্য পাওয়া যায়নি!</h2>
        <Link href="/" className="mt-8 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest">হোম পেজে ফিরে যান</Link>
      </div>
    );
  }

  // --- পেজিনেশন লজিক ---
  const totalItems = authorData.quotes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentQuotes = authorData.quotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPaginationRange = () => {
    if (totalPages <= 1) return [1];
    const range = [];
    const delta = 2; 

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage > delta + 2) range.unshift("...");
    if (currentPage < totalPages - delta - 1) range.push("...");

    return [1, ...range, totalPages];
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  // --------------------

  const handleBookmark = (quoteText: string) => {
    const updated = bookmarks.includes(quoteText) 
      ? bookmarks.filter(b => b !== quoteText) 
      : [...bookmarks, quoteText];
    setBookmarks(updated);
    localStorage.setItem('user_bookmarks', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  const handleShare = async (text: string, author: string) => {
    const shareData = {
      title: 'মনীষীদের উক্তি',
      text: `"${text}" — ${author}`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (err) { console.log(err); }
    } else {
      handleCopy(`${shareData.text}\n${shareData.url}`);
    }
  };

  return (
    <main className="min-h-screen bg-transparent p-6 relative">
      
      {showCopyToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#1b4332] text-[#95d5b2] px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 size={18} />
          <span className="font-bold text-sm">উক্তিটি কপি হয়েছে!</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-12 py-10">
        
        {/* Header Section */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all group">
            <ChevronLeft size={16} /> ফিরে যাও
          </Link>
          <div className="border-l-4 border-emerald-500 pl-6">
            <h1 className="text-4xl md:text-6xl font-black text-emerald-950 dark:text-emerald-50 mb-2 uppercase tracking-tighter leading-tight">
              {authorData.author}
            </h1>
            <p className="text-emerald-900/40 dark:text-emerald-400/40 font-medium italic text-lg max-w-2xl leading-relaxed">
              {authorData.bio}
            </p>
          </div>
        </div>

        {/* উক্তির গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentQuotes.map((quote: any) => (
            <div key={quote.id} className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 dark:border-emerald-100/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              
              <button 
                onClick={() => handleBookmark(quote.text)}
                className="absolute top-7 left-7 p-1 z-10 transition-transform active:scale-125 group-hover:scale-110"
              >
                <Heart 
                  size={22} 
                  className={bookmarks.includes(quote.text) ? "text-red-500 fill-red-500 shadow-sm" : "text-emerald-500/20 hover:text-red-400"} 
                />
              </button>

              <Quote className="text-emerald-500/10 mb-4 ml-auto" size={40} />
              
              <p className="text-lg font-bold leading-relaxed text-emerald-950 dark:text-emerald-50 mb-6 italic min-h-[60px]">
                "{quote.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-emerald-900/5 dark:border-emerald-100/10 pt-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">
                    {quote.category}
                  </span>
                  <span className="text-sm font-black text-emerald-700 dark:text-emerald-400">
                    — {authorData.author}
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
                    onClick={() => handleShare(quote.text, authorData.author)} 
                    className="p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-400 transition-colors"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* পেজিনেশন কন্ট্রোল */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1 md:gap-3 py-10">
            <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="p-2 rounded-xl border border-emerald-900/5 disabled:opacity-10 text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1">
              {getPaginationRange().map((page, index) => (
                <button
                  key={index}
                  disabled={page === "..." || currentPage === page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 md:w-11 md:h-11 rounded-xl text-xs md:text-sm font-black transition-all ${
                    currentPage === page 
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 scale-110" 
                    : page === "..." 
                      ? "cursor-default text-emerald-300" 
                      : "bg-white dark:bg-[#1b4332]/20 text-emerald-700 border border-emerald-900/5 hover:bg-emerald-50 shadow-sm"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-2 rounded-xl border border-emerald-900/5 disabled:opacity-10 text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}