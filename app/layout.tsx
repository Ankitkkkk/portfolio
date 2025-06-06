import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar Portfolio",
  description: "Portfolio of Ankit Kumar, Senior Software Engineer & Backend Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f7f7] text-[#222] min-h-screen`}>
        <header className="flex flex-col items-center gap-4 mt-8 sm:mt-12 mb-8 px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <div className="rounded-full overflow-hidden shadow-lg border-4 border-[#e0e0e0] w-24 h-24 sm:w-28 sm:h-28 mx-auto">
              <Image src="/pfp.jpg" alt="Ankit Kumar" width={112} height={112} priority />
            </div>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">Ankit Kumar</h1>
          <p className="text-base sm:text-lg text-[#444] text-center">Senior Software Engineer & Backend Specialist</p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 text-base font-medium text-center">
            <Link href="/" className="hover:text-[#6c757d] transition">Home</Link>
            <Link href="/about" className="hover:text-[#6c757d] transition">About</Link>
            <Link href="/experience" className="hover:text-[#6c757d] transition">Experience</Link>
            <Link href="/projects" className="hover:text-[#6c757d] transition">Projects</Link>
            <Link href="/achievements" className="hover:text-[#6c757d] transition">Achievements</Link>
            <Link href="/contact" className="hover:text-[#6c757d] transition">Contact</Link>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="mt-16 mb-4 text-sm text-[#888] text-center px-4">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            <span>Noida, Delhi NCR</span>
            <span>&bull;</span>
            <span>+91 xxxxyyyyzz</span>
            <span>&bull;</span>
            <a href="mailto:kr.ankit253@gmail.com" className="hover:underline">
              kr.ankit253@gmail.com
            </a>
          </div>
        </footer>
      </body>

    </html>
  );
}
