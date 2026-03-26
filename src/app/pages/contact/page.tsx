import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 dark:text-emerald-50 uppercase tracking-tighter">
            যোগাযোগ করুন
          </h1>
          <p className="text-emerald-600 font-medium uppercase text-xs tracking-widest">
            আপনার কোনো মতামত বা পরামর্শ থাকলে আমাদের জানান
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 uppercase text-sm tracking-widest">ইমেইল</h4>
                <p className="text-emerald-600">contact@banibox.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 uppercase text-sm tracking-widest">মেসেঞ্জার</h4>
                <p className="text-emerald-600 font-medium italic">fb.com/baniboxstudio</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 uppercase text-sm tracking-widest">ঠিকানা</h4>
                <p className="text-emerald-900/60 dark:text-emerald-400/60">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>
          </div>

          {/* Simple Contact Form Design */}
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#1b4332]/10 border border-emerald-900/5 space-y-4">
            <input type="text" placeholder="আপনার নাম" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-emerald-900/20 border-none outline-none focus:ring-2 focus:ring-emerald-500 text-sm" />
            <input type="email" placeholder="আপনার ইমেইল" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-emerald-900/20 border-none outline-none focus:ring-2 focus:ring-emerald-500 text-sm" />
            <textarea rows={4} placeholder="বার্তা লিখুন..." className="w-full p-4 rounded-xl bg-slate-50 dark:bg-emerald-900/20 border-none outline-none focus:ring-2 focus:ring-emerald-500 text-sm"></textarea>
            <button className="w-full py-4 bg-emerald-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-all">বার্তা পাঠান</button>
          </div>
        </div>
      </div>
    </main>
  );
}