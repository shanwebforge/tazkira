export default function HeroSection() {
    return (
      <section className="text-center py-10 space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          Premium Collection
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-emerald-950 dark:text-emerald-50">
          মনীষীদের <span className="text-emerald-500 italic">অমর বাণী</span>
        </h2>
        <p className="text-slate-500 dark:text-emerald-400/60 font-medium max-w-lg mx-auto italic leading-relaxed">
          "হাজারো কামনাসমূহ এমন যে প্রতিটির ওপর দম বেরিয়ে যায়, আমার অনেক বাসনা পূর্ণ হয়েছে কিন্তু তবুও যেন তা কম।" — মির্জা গালিব
        </p>
      </section>
    );
  }