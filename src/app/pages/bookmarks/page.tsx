'use client';

import { useState, useEffect } from 'react';
import { Quote, Heart, Share2, Copy, ArrowLeft, CheckCircle2, Trash2 } from "lucide-react";
import Link from 'next/link';

// ডাটা ইম্পোর্ট (মাস্টার লিস্ট তৈরির জন্য সব ফাইল লাগবে)
import aliData from "@/data/ali.json";
import umarData from "@/data/umar.json";
import galibData from "@/data/galib.json";
import iqbalData from "@/data/iqbal.json";
import nazrulData from "@/data/nazrul.json";

export default function BookmarksPage() {
  const [bookmarkedItems, setBookmarkedItems] = useState<any[]>([]);
  const [showCopyToast, setShowCopyToast] = useState(false);

  useEffect(() => {
    // ১. সব ডাটা এক জায়গায় করা
    const allQuotes = [
      ...aliData.quotes.map(q => ({ ...q, author: aliData.author })),
      ...umarData.quotes.map(q => ({ ...q, author: umarData.author })),
      ...galibData.quotes.map(q => ({ ...q, author: galibData.author })),
      ...iqbalData.quotes.map(q => ({ ...q, author: iqbalData.author })),
      ...nazrulData.quotes.map(q => ({ ...q, author: nazrulData.author })),
    ];

    // ২. LocalStorage থেকে উক্তিগুলোর টেক্সট আনা
    const savedTexts = JSON.parse(localStorage.getItem('user_bookmarks') || '[]');
    
    // ৩. মাস্টার লিস্ট থেকে শুধু বুকমার্ক করা উক্তিগুলো ফিল্টার করা
    const filtered = allQuotes.filter(q => savedTexts.includes(q.text));
    setBookmarkedItems(filtered);
  }, []);

  // বুকমার্ক রিমুভ করা
  const removeBookmark = (text: string) => {
    const savedTexts = JSON.parse(localStorage.getItem('user_bookmarks') || '[]');
    const updatedTexts = savedTexts.filter((t: string) => t !== text);
    localStorage.setItem('user_bookmarks', JSON.stringify(updatedTexts));
    setBookmarkedItems(bookmarkedItems.filter(item => item.text !== text));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  const handleShare = async (text: string, author: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'প্রিয় উক্তি',
          text: `"${text}" — ${author}`,
          url: window.location.href,
        });
      } catch (err) { console.log(err); }
    }
  };

  return (
    <div className="min-h-screen py-10 px-2">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-2xl font-black text-emerald-950 dark:text-emerald-50 tracking-tight">আপনার প্রিয় উক্তিমালা</h1>
          <div className="w-12"></div> {/* Balance Spacer */}
        </div>

        {/* Custom Toast */}
        {showCopyToast && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#1b4332] text-[#95d5b2] px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
            <CheckCircle2 size={18} />
            <span className="font-bold text-sm">কপি হয়েছে!</span>
          </div>
        )}

        {/* Content */}
        {bookmarkedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookmarkedItems.map((quote, idx) => (
              <div key={idx} className="group relative p-6 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 shadow-sm">
                
                {/* Remove Button */}
                <button 
                  onClick={() => removeBookmark(quote.text)}
                  className="absolute top-7 left-7 p-1 text-red-500 hover:scale-110 transition-transform"
                  title="মুছে ফেলুন"
                >
                  <Heart size={22} fill="currentColor" />
                </button>

                <Quote className="text-emerald-500/10 mb-4 ml-auto" size={40} />
                
                <p className="text-lg font-bold leading-relaxed text-emerald-950 dark:text-emerald-50 mb-6 italic">
                  "{quote.text}"
                </p>
                
                <div className="flex items-center justify-between border-t border-emerald-900/5 pt-6 mt-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">{quote.category}</span>
                    <span className="text-sm font-black text-emerald-700 dark:text-emerald-400">— {quote.author}</span>
                  </div>
                  
                  <div className="flex gap-1">
                    <button onClick={() => handleCopy(quote.text)} className="p-2.5 rounded-xl hover:bg-emerald-50 text-emerald-400">
                      <Copy size={18} />
                    </button>
                    <button onClick={() => handleShare(quote.text, quote.author)} className="p-2.5 rounded-xl hover:bg-emerald-50 text-emerald-400">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#1b4332]/5 rounded-[3rem] border-2 border-dashed border-emerald-900/10">
            <Heart size={48} className="mx-auto text-emerald-900/10 mb-4" />
            <p className="text-emerald-900/40 dark:text-emerald-100/40 font-bold italic">এখনো কোনো উক্তি বুকমার্ক করেননি!</p>
            <Link href="/" className="inline-block mt-6 px-8 py-3 bg-[#1b4332] text-[#95d5b2] rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-xl transition-all">
              উক্তি দেখতে যান
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}