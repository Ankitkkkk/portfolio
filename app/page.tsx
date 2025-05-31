import Image from "next/image";
import Link from "next/link";

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

const topSkills = [
  "Java", "Spring Boot", "Microservices", "React", "Next.js", "SQL", "AWS", "Docker", "Kubernetes"
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center w-full">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl w-full mt-12 flex flex-col items-center">
          <div className="rounded-full overflow-hidden shadow-lg border-4 border-[#e0e0e0] w-40 h-40 mb-6">
            <Image src="/pfp.jpg" alt="Ankit Kumar" width={160} height={160} priority />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-[#222]">Ankit Kumar</h1>
          <p className="text-lg text-[#333] font-medium mb-2">Senior Software Engineer & Backend Specialist</p>
          <p className="text-sm text-[#666] mb-4">1000+ LinkedIn followers • 500+ connections • Active in coding competitions</p>
          <nav className="flex flex-wrap gap-4 sm:gap-6 mt-2 text-base font-medium mb-6">
            <a href="#about" className="hover:font-[550] text-[#6c757d] transition">About</a>
            <a href="#experience" className="hover:font-[550] text-[#6c757d] transition">Experience</a>
            <a href="#projects" className="hover:font-[550] text-[#6c757d] transition">Projects</a>
            <a href="#achievements" className="hover:font-[550] text-[#6c757d] transition">Achievements</a>
            <a href="#contact" className="hover:font-[550] text-[#6c757d] transition">Contact</a>
          </nav>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <a href="https://github.com/Ankitkkkk" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded bg-[#222] text-white hover:bg-[#444] transition">GitHub</a>
            <a href="https://www.linkedin.com/in/iankitk/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded border border-[#222] text-[#222] hover:bg-[#e0e0e0] transition">LinkedIn</a>
            <a href="/ankit-resume.pdf" className="px-5 py-2 rounded bg-[#222] text-white hover:bg-[#444] transition">Download Resume</a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {/* TODO: Add a featured section and remove the hidden class */}
      <section className="w-full flex justify-center scroll-mt-24 mt-8 hidden">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-4 border-b border-[#e0e0e0] pb-2 text-[#222]">Featured</h1>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-blue-600 hover:underline font-semibold">How I Optimized API Gateways for 99Acres</a>
            <span className="text-sm text-[#666]">Technical Blog (placeholder)</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full flex justify-center scroll-mt-24 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
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
      </section>

      {/* Top Skills Section */}
      <section className="w-full flex justify-center scroll-mt-24 mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-4 border-b border-[#e0e0e0] pb-2 text-[#222]">Top Skills</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {topSkills.map(skill => (
              <span key={skill} className="px-4 py-1 rounded-full bg-[#f7f7f7] border border-[#e0e0e0] text-[#222] font-medium text-sm shadow-sm">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full flex justify-center scroll-mt-24 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-6 border-b border-[#e0e0e0] pb-2 text-[#222]">Experience</h1>
          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-[#f7f7f7] border border-[#e0e0e0] rounded p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <div className="font-semibold text-lg text-[#222]">{exp.role}</div>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full flex justify-center scroll-mt-24 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
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
      </section>

      {/* Interests & Volunteering Section */}
      <section className="w-full flex justify-center scroll-mt-24 mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-4 border-b border-[#e0e0e0] pb-2 text-[#222]">Interests & Volunteering</h1>
          <p className="text-[#222]">Active member of competitive programming communities (CodeChef, Codeforces). Interested in distributed systems, cloud infrastructure, and mentoring junior developers.</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="w-full flex justify-center scroll-mt-24 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
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
      </section>

      {/* Recommendations Section */}
      <section className="w-full flex justify-center scroll-mt-24 mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-4 border-b border-[#e0e0e0] pb-2 text-[#222]">Recommendations</h1>
          <div className="flex flex-col gap-4 mt-2">
            <blockquote className="text-[#333] italic border-l-4 border-[#e0e0e0] pl-4">“Ankit is a highly skilled engineer who consistently delivers high-quality solutions.”<br /><span className="text-[#888]">— Priya S. (Manager, 99Acres)</span></blockquote>
            <blockquote className="text-[#333] italic border-l-4 border-[#e0e0e0] pl-4">“His leadership and technical depth made a huge impact on our team.”<br /><span className="text-[#888]">— Rahul G. (Colleague, Ipsator)</span></blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
}
