'use client';

import { Sun, Moon, Heart, Plus, Quote as QuoteIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Header({ bookmarksCount }: { bookmarksCount: number }) {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  // সরাসরি টগল ফাংশন - কোনো মাউন্ট চেক এর জন্য ওয়েট করবে না
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
            <h1 className="text-2xl font-black tracking-tighter text-[#1b4332] dark:text-[#95d5b2]">
              উক্তি ভল্ট
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#52b788]">The Quote Vault</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Dark Mode Toggle - NO MOUNTED CHECK HERE */}
          <button 
            onClick={toggleTheme} 
            className="p-3 rounded-xl transition-all duration-300 active:scale-90 bg-[#f0f9f4] text-[#2d6a4f] dark:bg-[#1b4332] dark:text-[#95d5b2] relative overflow-hidden h-11 w-11"
            aria-label="Toggle Theme"
          >
            {/* আমরা দুইটা আইকনই রেন্ডার করব, সিএসএস (dark: class) দিয়ে কন্ট্রোল করব */}
            <Sun size={20} className="absolute inset-0 m-auto transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0 duration-300" />
            <Moon size={20} className="absolute inset-0 m-auto transition-all scale-100 dark:scale-0 rotate-0 dark:rotate-90 duration-300" />
          </button>

          {/* Bookmarks */}
          <Link 
            href="/bookmarks" 
            className="p-3 rounded-xl transition-all relative bg-[#f0f9f4] text-[#2d6a4f] dark:bg-[#1b4332] dark:text-[#95d5b2]"
          >
            <Heart size={20} className={pathname === '/bookmarks' ? "fill-current" : ""} />
            {bookmarksCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#52b788] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#0a1a12]">
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