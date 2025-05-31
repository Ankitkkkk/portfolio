import React from "react";

const experiences = [
  {
    company: "Infoedge - 99Acres",
    role: "Senior Software Engineer",
    duration: "Mar 2025 - Present",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Upgraded core platform from Java 11 to Java 24, unlocking access to modern language features and improving system reliability and maintainability.",
      "Enabled virtual threading (Project Loom) to replace traditional thread pools, resulting in up to 40% improvement in API gateway responsiveness and reduced thread contention under peak load.",
      "Eliminated performance bottlenecks in the primary API gateway, leading to a 30–50% increase in concurrent request handling capacity.",
      "Enhanced backend scalability and resource efficiency, contributing to smoother deployments and reduced infrastructure costs."
    ]
  },
  {
    company: "Ipsator Analytics Pvt. Ltd.",
    role: "Software Developer",
    duration: "Sep 2022 - Mar 2025",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Led data-intensive Universal Search Flow development reducing response time by 40% and improving search accuracy for 100,000+ daily train passengers.",
      "Architected multi-level vendor approval pipeline, reducing onboarding time by 60% and processing 500+ restaurant partners monthly.",
      "Spearheaded Menu Customization and Brand Flow features, increasing customer satisfaction by 45% and average order value by 30%.",
      "Integrated Zomato and Swiggy APIs, expanding e-catering reach to 50+ cities and enabling 100,000+ daily food deliveries to train seats.",
      "Streamlined announcement processes through robust APIs, reducing manual intervention by 70% and handling 1000+ daily announcements.",
      "Optimized data insertion and caching strategies, improving server performance by 35% and reducing response time to under 200ms.",
      "Led cross-functional team of 8 members, delivering 15+ major e-catering features with 99% reliability.",
      "Managed end-to-end development cycle from requirement gathering to production deployment for 3 major service integrations.",
      "Improved feature deployment efficiency by 40% through enhanced testing protocols and documentation.",
      "Achieved 99.9% uptime for e-catering services through comprehensive API monitoring and testing.",
      "Reduced API-related customer complaints by 65% through robust error handling and validation.",
      "Implemented automated testing suites reducing QA cycle time by 50%."
    ]
  },
  {
    company: "ZeroT.ai",
    role: "Backend Java Developer (Internship)",
    duration: "Jul 2022 - Sep 2022",
    location: "India",
    highlights: [
      "Worked on DevOps and Java-based backend systems."
    ]
  },
  {
    company: "cscodershub Community",
    role: "Problem Setter",
    duration: "May 2021 - Jul 2022",
    location: "India",
    highlights: [
      "Created and curated programming problems for the community."
    ]
  }
];

export default function Experience() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-[#222]">
      <h1 className="text-2xl font-bold mb-6 border-b border-[#e0e0e0] pb-2">Experience</h1>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-[#f7f7f7] border border-[#e0e0e0] rounded p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <div className="font-semibold text-lg">{exp.role}</div>
              <div className="text-sm text-[#888]">{exp.duration}</div>
            </div>
            <div className="font-medium text-[#444] mb-1">{exp.company} <span className="text-xs text-[#aaa]">{exp.location}</span></div>
            <ul className="list-disc ml-5 mt-2 text-[#333] text-sm space-y-1">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 