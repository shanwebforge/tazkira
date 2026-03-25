'use client';
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }: { value: string, onChange: (v: string) => void }) {
  return (
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600/50 group-focus-within:text-emerald-500 transition-colors">
        <Search size={20} />
      </div>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="প্রিয় মনীষী বা উক্তি খুঁজুন..." 
        className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-[#1b4332]/20 border border-emerald-900/10 dark:border-emerald-100/10 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all font-medium text-lg placeholder:text-slate-400 dark:placeholder:text-emerald-800"
      />
    </div>
  );
}