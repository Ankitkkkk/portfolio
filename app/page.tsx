import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] text-[#222] px-4">
      <header className="flex flex-col items-center gap-4 mt-12 mb-8">
        <div className="rounded-full overflow-hidden shadow-lg border-4 border-[#e0e0e0] w-40 h-40">
          <Image src="/pfp.jpg" alt="Ankit Kumar" width={160} height={160} priority />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Ankit Kumar</h1>
        <p className="text-lg text-[#444]">Senior Software Engineer & Backend Specialist</p>
        <nav className="flex gap-6 mt-2 text-base font-medium">
          <Link href="/about" className="hover:text-[#6c757d] transition">About</Link>
          <Link href="/experience" className="hover:text-[#6c757d] transition">Experience</Link>
          <Link href="/projects" className="hover:text-[#6c757d] transition">Projects</Link>
          <Link href="/achievements" className="hover:text-[#6c757d] transition">Achievements</Link>
          <Link href="/contact" className="hover:text-[#6c757d] transition">Contact</Link>
        </nav>
      </header>
      <main className="max-w-2xl text-center text-[#333]">
        <p className="text-xl mb-6">Software Developer focused on delivering impactful results, tackling dynamic challenges, and building scalable backend systems. Proficient in Java, Spring Boot, Microservices, Kubernetes, Docker, Terraform, MySQL, and PostgreSQL. Experienced in API design, payment gateway integration, SQL optimization, and server performance enhancement.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a href="https://github.com/Ankitkkkk" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded bg-[#222] text-white hover:bg-[#444] transition">GitHub</a>
          <a href="https://www.linkedin.com/in/iankitk/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded border border-[#222] text-[#222] hover:bg-[#e0e0e0] transition">LinkedIn</a>
        </div>
      </main>
      <footer className="mt-16 text-sm text-[#888]">Noida, Delhi NCR &bull; +91 8178231961 &bull; kr.ankit253@gmail.com</footer>
    </div>
  );
}
