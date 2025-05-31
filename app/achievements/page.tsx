import React from "react";

export default function Achievements() {
  return (
    <div className="flex justify-center items-start min-h-[60vh] w-full">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mt-8">
        <h1 className="text-2xl font-bold mb-6 border-b border-[#e0e0e0] pb-2 text-[#222]">Achievements & Competitive Programming</h1>
        <ul className="list-disc ml-5 text-[#333] text-base space-y-2 mb-8">
          <li>Global Rank 123 in CodeChef Infinity 2k21</li>
          <li>CodeChef All-Time Best Rating: 1791</li>
          <li>CodeForces All-Time Best Rating: 1246</li>
        </ul>
        <h2 className="text-xl font-semibold mt-10 mb-2 text-[#222]">Certifications & Awards</h2>
        <ul className="list-disc ml-5 text-[#333] text-base space-y-2">
          <li>CODE BLOODED, Coding Ninjas, Mar 2021</li>
          <li>Coding Ninja, Coding Ninjas, Mar 2021 (Credential ID 111628)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-10 mb-2 text-[#222]">Languages</h2>
        <ul className="list-disc ml-5 text-[#333] text-base space-y-2">
          <li>English: Full Professional Proficiency</li>
          <li>Hindi: Full Professional Proficiency</li>
        </ul>
      </div>
    </div>
  );
} 