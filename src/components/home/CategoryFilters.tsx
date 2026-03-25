'use client';

const categories = ["All", "জীবন", "ভালোবাসা", "সফলতা", "ইসলামিক", "অনুপ্রেরণা"];

export default function CategoryFilters({ active, onSelect }: { active: string, onSelect: (c: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
            active === cat 
            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 scale-105" 
            : "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/40"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}