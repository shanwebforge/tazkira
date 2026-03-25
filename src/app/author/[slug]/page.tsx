import { Quote, ChevronLeft, Heart, Share2 } from "lucide-react";
import Link from "next/link";

// তোর সব ডাটা ফাইল এখানে ইম্পোর্ট কর
import aliData from "@/data/ali.json";
import umarData from "@/data/umar.json";
import galibData from "@/data/galib.json";

const allAuthors = [aliData, umarData, galibData];

// Next.js 14/15 এ params কে async করতে হয়
export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  // ১. params টাকে await করে স্ল্যাগ বের করছি
  const { slug } = await params;

  // ২. স্ল্যাগ অনুযায়ী ডাটা খুঁজে বের করা
  const authorData = allAuthors.find(a => a.slug === slug);

  // ৩. যদি ডাটা না পায় তবে এই মেসেজ
  if (!authorData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50 dark:bg-[#0a1a12]">
        <h2 className="text-xl font-black text-emerald-900/20 uppercase tracking-[0.3em]">
          তথ্য পাওয়া যায়নি! স্ল্যাগ চেক কর।
        </h2>
        <Link href="/" className="mt-8 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-emerald-900/20">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a1a12] p-6">
      <div className="max-w-4xl mx-auto space-y-12 py-10">
        
        {/* Header Section */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> ফিরে যাও
          </Link>
          <div className="border-l-4 border-emerald-500 pl-6">
            <h1 className="text-4xl font-black text-emerald-950 dark:text-emerald-50 mb-2 uppercase tracking-tight">
              {authorData.author}
            </h1>
            <p className="text-emerald-600/60 dark:text-emerald-400/60 font-medium italic">
              {authorData.bio}
            </p>
          </div>
        </div>

        {/* উক্তির গ্রিড */}
        <div className="grid grid-cols-1 gap-8">
          {authorData.quotes.map((quote) => (
            <div key={quote.id} className="group p-10 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 dark:border-emerald-100/5 shadow-sm hover:shadow-2xl transition-all duration-500">
              <Quote className="text-emerald-500/10 mb-6 group-hover:text-emerald-500/30 transition-colors" size={48} />
              
              <p className="text-2xl font-bold leading-relaxed text-emerald-950 dark:text-emerald-50 mb-8 italic">
                "{quote.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-emerald-900/5 dark:border-emerald-100/10 pt-8 mt-4">
                <span className="px-4 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em]">
                  {quote.category}
                </span>
                <div className="flex gap-3">
                  <button className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all active:scale-90">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all active:scale-90">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}