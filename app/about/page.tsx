import React from "react";

export default function About() {
  return (
    <div className="flex justify-center items-start min-h-[60vh] w-full">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mt-8">
        <h1 className="text-2xl font-bold mb-6 border-b border-[#e0e0e0] pb-2 text-[#222]">About Me</h1>
        <p className="mb-6 text-lg text-[#222]">Software Developer focused on delivering impactful results, tackling dynamic challenges, and building scalable backend systems. Skilled in project management, user-centric problem-solving, and cross-team collaboration. Proficient in Java, Spring Boot, Microservices, Kubernetes, Docker, Terraform, MySQL, and PostgreSQL. Experienced in designing APIs, integrating payment gateways, optimizing SQL queries, and enhancing server performance with caching. Adept at technical interviews, test suite integration, and unit testing. Strong foundation in Data Structures and Algorithms.</p>
        <h2 className="text-xl font-semibold mt-10 mb-2 text-[#222]">Education</h2>
        <div className="mb-6 p-4 rounded bg-[#f7f7f7] border border-[#e0e0e0] text-[#222]">
          <div className="font-medium">B Tech Computer Science</div>
          <div>Guru Gobind Singh Indraprastha University</div>
          <div>2019 - 2023 &bull; GPA: 8.99</div>
        </div>
        <h2 className="text-xl font-semibold mt-10 mb-2 text-[#222]">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="font-medium mb-1 text-[#222]">Languages</div>
            <div className="text-[#444]">JAVA, JavaScript, TypeScript, MYSQL, BASH, C++, C</div>
          </div>
          <div>
            <div className="font-medium mb-1 text-[#222]">Frameworks</div>
            <div className="text-[#444]">Play Framework, Spring Boot, Next.js, Scala Build Tool, React Native</div>
          </div>
          <div>
            <div className="font-medium mb-1 text-[#222]">Tools</div>
            <div className="text-[#444]">git, Github, Intellij, VScode, maven, gradle, redis, kafka, REST APIs, CI/CD, AWS</div>
          </div>
        </div>
      </div>
    </div>
  );
} 