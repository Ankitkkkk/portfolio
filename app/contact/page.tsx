import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full flex justify-center scroll-mt-24 mt-16 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-6 border-b border-[#e0e0e0] pb-2 text-[#222]">Contact</h1>
          <div className="mb-6">
            <div className="mb-2"><span className="font-medium text-[#222]">Phone:</span> <a href="tel:+918178231961" className="text-[#6c757d] hover:underline">+91 8178231961</a></div>
            <div className="mb-2"><span className="font-medium text-[#222]">Email:</span> <a href="mailto:kr.ankit253@gmail.com" className="text-[#6c757d] hover:underline">kr.ankit253@gmail.com</a></div>
          </div>
          <div className="flex gap-6 mt-4 mb-4">
            <a href="https://github.com/Ankitkkkk" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded bg-[#222] text-white hover:bg-[#444] transition">GitHub</a>
            <a href="https://www.linkedin.com/in/iankitk/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded border border-[#222] text-[#222] hover:bg-[#e0e0e0] transition">LinkedIn</a>
          </div>
          <a href="/ankit-resume.pdf" className="px-5 py-3 rounded bg-[#222] text-white hover:bg-[#444] transition">Download Resume</a>
        </div>
      </section>
  );
} 