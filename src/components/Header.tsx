'use client';

import { Sun, Moon, Heart, Plus, Quote as QuoteIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [bookmarksCount, setBookmarksCount] = useState(0);

  // ১. বুকমার্ক কাউন্ট আপডেট করার লজিক
  const updateCount = () => {
    const saved = localStorage.getItem('user_bookmarks');
    if (saved) {
      const list = JSON.parse(saved);
      setBookmarksCount(list.length);
    } else {
      setBookmarksCount(0);
    }
  };

  useEffect(() => {
    updateCount();
    // অন্য উইন্ডো বা ট্যাবে পরিবর্তন হলে আপডেট হবে
    window.addEventListener('storage', updateCount);
    
    // কাস্টম ইভেন্ট লিসেনার (একই পেজে বুকমার্ক করলে সাথে সাথে আপডেট হওয়ার জন্য)
    const interval = setInterval(updateCount, 1000); 
    
    return () => {
      window.removeEventListener('storage', updateCount);
      clearInterval(interval);
    };
  }, []);

  const toggleTheme = () => {
    const target = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(target);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b px-6 py-4 shadow-sm transition-all duration-500 bg-white/80 border-[#d8e9df] dark:bg-[#0a1a12]/80 dark:border-[#1b4332]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <QuoteIcon size={24} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-black  text-[#1b4332] dark:text-[#95d5b2]">
              BaniBox
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#52b788]">মনীষীদের অমর বাণী</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-3 rounded-xl transition-all duration-300 active:scale-90 bg-[#f0f9f4] text-[#2d6a4f] dark:bg-[#1b4332] dark:text-[#95d5b2] relative overflow-hidden h-11 w-11"
            aria-label="Toggle Theme"
          >
            <Sun size={20} className="absolute inset-0 m-auto transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0 duration-300" />
            <Moon size={20} className="absolute inset-0 m-auto transition-all scale-100 dark:scale-0 rotate-0 dark:rotate-90 duration-300" />
          </button>

          {/* Bookmarks - Path Fixed to /bookmarks */}
          <Link 
            href="/pages/bookmarks" 
            className="p-3 rounded-xl transition-all relative bg-[#f0f9f4] text-[#2d6a4f] dark:bg-[#1b4332] dark:text-[#95d5b2]"
          >
            <Heart size={20} className={pathname === '/pages/bookmarks' ? "fill-current text-red-500" : ""} />
            {bookmarksCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#0a1a12] animate-in zoom-in">
                {bookmarksCount}
              </span>
            )}
          </Link>

          {/* Add Button */}
          <Link
            href="/add"
            className="group flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#1b4332] text-white rounded-2xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-900/20"
          >
            <Plus size={20} className="text-[#95d5b2]" />
            <span className="hidden md:inline">নতুন উক্তি</span>
          </Link>

        </div>
      </div>
    </header>
  );
}