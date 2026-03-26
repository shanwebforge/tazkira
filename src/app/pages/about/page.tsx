import { Info, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 dark:text-emerald-50 uppercase tracking-tighter">
            আমাদের লক্ষ্য
          </h1>
          <p className="text-emerald-600 font-medium tracking-widest uppercase text-xs">
            জ্ঞানের আলো ছড়িয়ে দেয়াই আমাদের মূল উদ্দেশ্য
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
              <Target size={24} />
            </div>
            <h3 className="font-bold text-emerald-900 dark:text-emerald-100">সঠিক তথ্য</h3>
            <p className="text-sm text-emerald-900/60 dark:text-emerald-400/60 leading-relaxed">
              আমরা চেষ্টা করি প্রতিটি মনীষীর উক্তি এবং তাদের জীবনদর্শন নির্ভুলভাবে আপনার সামনে তুলে ধরতে।
            </p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
              <Heart size={24} />
            </div>
            <h3 className="font-bold text-emerald-900 dark:text-emerald-100">অনুপ্রেরণা</h3>
            <p className="text-sm text-emerald-900/60 dark:text-emerald-400/60 leading-relaxed">
              হতাশার সময়ে মনীষীদের একটি উক্তি হতে পারে আপনার নতুন করে পথ চলার শক্তি।
            </p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
              <Info size={24} />
            </div>
            <h3 className="font-bold text-emerald-900 dark:text-emerald-100">সহজ ব্যবহার</h3>
            <p className="text-sm text-emerald-900/60 dark:text-emerald-400/60 leading-relaxed">
              খুব সহজেই উক্তি কপি, শেয়ার এবং বুকমার্ক করার সুবিধার মাধ্যমে আমরা আপনার অভিজ্ঞতাকে সহজ করি।
            </p>
          </div>
        </div>

        <div className="p-10 rounded-[3rem] bg-emerald-950 text-emerald-50 text-center">
          <h2 className="text-2xl font-bold mb-4">আমাদের সাথে যুক্ত হোন</h2>
          <p className="text-emerald-200/70 max-w-2xl mx-auto leading-relaxed">
            বক্স স্টুডিও একটি ছোট উদ্যোগ যা মানুষের মধ্যে ইতিবাচক চিন্তা এবং জীবনবোধ ছড়িয়ে দিতে কাজ করছে। আমাদের সংগ্রহে প্রতিনিয়ত নতুন নতুন মনীষীর উক্তি যুক্ত হচ্ছে।
          </p>
        </div>
      </div>
    </main>
  );
}