import { ShieldCheck, Lock, Eye } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-6 py-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <ShieldCheck size={48} className="mx-auto text-emerald-500" />
          <h1 className="text-4xl font-black text-emerald-950 dark:text-emerald-50 uppercase">গোপনীয়তা নীতি</h1>
          <p className="text-emerald-600 font-medium text-xs uppercase tracking-widest">সর্বশেষ আপডেট: মার্চ ২০২৬</p>
        </div>

        <div className="space-y-10 text-emerald-900/70 dark:text-emerald-400/70 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <Eye size={20} className="text-emerald-500" /> তথ্য সংগ্রহ
            </h2>
            <p>আমরা আমাদের সাইটে কোনো ব্যক্তিগত গোপনীয় তথ্য সংগ্রহ করি না। শুধুমাত্র আপনার বুকমার্ক করা উক্তিগুলো আপনার ব্রাউজারের "Local Storage"-এ সেভ করা থাকে।</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <Lock size={20} className="text-emerald-500" /> কুডিস এবং নিরাপত্তা
            </h2>
            <p>ডার্ক মোড এবং বুকমার্ক ম্যানেজ করার জন্য আমরা ব্রাউজার কুকিজ ব্যবহার করতে পারি। আপনার ডিভাইস এবং ব্রাউজারের বাইরে এই তথ্য আমাদের কাছে সংরক্ষিত থাকে না।</p>
          </section>

          <section className="space-y-4 border-t border-emerald-900/10 pt-8">
            <p>এই ওয়েবসাইটটি ব্যবহারের মাধ্যমে আপনি আমাদের শর্তাবলী এবং গোপনীয়তা নীতি মেনে নিচ্ছেন। আমরা যেকোনো সময় এই নীতি পরিবর্তন করার অধিকার রাখি।</p>
          </section>
        </div>
      </div>
    </main>
  );
}