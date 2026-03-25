import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider"; // তোর কাস্টম ফাইলটা ইম্পোর্ট করবি

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tazkira | মনীষীদের অমর বাণী",
  description: "গালিব, নজরুল ও অন্যান্য মনীষীদের সেরা উক্তির সংগ্রহ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f7fdfa] text-slate-900 transition-colors duration-500 dark:bg-[#0a1a12] dark:text-emerald-50 selection:bg-emerald-500/30">
        
        {/* লজিকটা এখন ThemeProvider ফাইলের ভেতর থেকে আসবে */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header bookmarksCount={0} />

          <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}