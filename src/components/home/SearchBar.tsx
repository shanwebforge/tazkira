'use client';

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  setCurrentPage: (page: number) => void;
}

export default function SearchBar({ 
  value = "", 
  onChange, 
  setCurrentPage 
}: SearchBarProps) {
  
  return (
    <div className="relative group max-w-2xl mx-auto px-4">
      {/* সার্চ আইকন */}
      <div className="absolute left-9 top-1/2 -translate-y-1/2 text-emerald-600/50 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
        <Search size={22} />
      </div>

      {/* ইনপুট ফিল্ড */}
      <input 
        type="text" 
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setCurrentPage(1); // সার্চ করার সাথে সাথে প্রথম পেজে নিয়ে যাবে
        }}
        placeholder="প্রিয় মনীষী বা উক্তি খুঁজুন..." 
        className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white dark:bg-[#1b4332]/20 border border-emerald-900/10 dark:border-emerald-100/10 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/40 outline-none transition-all font-medium text-lg placeholder:text-slate-400 dark:placeholder:text-emerald-800/50 shadow-sm group-hover:shadow-md"
      />
    </div>
  );
}