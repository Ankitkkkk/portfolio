import React from "react";

export default function Projects() {
  return (
    <div className="flex justify-center items-start min-h-[60vh] w-full">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mt-8">
        <h1 className="text-2xl font-bold mb-6 border-b border-[#e0e0e0] pb-2 text-[#222]">Personal Projects</h1>
        <div className="bg-[#f7f7f7] border border-[#e0e0e0] rounded p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#222]">Proctoral Web Tensor : AI-Powered Online Exam Monitoring System</h2>
          <div className="text-sm text-[#888] mb-2">Jan 2023 - Mar 2023 &bull; Tech Stack: React, Bootstrap, Play Framework (Java 17), Machine Learning, MySQL</div>
          <p className="mb-2 text-[#222]">Developed full-stack anti-cheating solution using advanced facial and iris recognition. Implemented dual-side (server and client) ML model for optimized performance. Achieved 30 FPS real-time scanning on low-end devices. Deployed robust facial recognition with high accuracy. Integrated iris detection as additional anti-cheating mechanism.</p>
          <ul className="list-disc ml-5 text-[#333] text-sm space-y-1">
            <li>Low-latency facial scan implementation</li>
            <li>Distributed ML model processing</li>
            <li>Efficient hardware resource utilization</li>
            <li>High-precision cheating prevention mechanism</li>
            <li>30 FPS real-time scan capability</li>
            <li>Reduced computational server load</li>
            <li>Enhanced exam integrity through multi-modal detection</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 