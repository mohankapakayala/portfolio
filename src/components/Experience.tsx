"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Nueve IT Solutions",
    title: "Software Developer",
    period: "November 2023 - Present",
    points: [
      "Developed and maintained financial web applications using React.js and TypeScript, delivering responsive and reusable UI components aligned with business requirements.",
      "Integrated REST APIs and managed application state using Redux and Context API to support transaction workflows and reliable data handling.",
      "Built reusable components and optimized rendering behavior to improve maintainability and application performance.",
      "Implemented unit and integration tests using Jest and React Testing Library to improve application reliability.",
      "Collaborated with designers and backend developers to deliver financial application features and support production releases.",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="flex items-center text-2xl font-bold text-slate-light mb-10 whitespace-nowrap after:content-[''] after:block after:h-px after:w-full after:bg-navy-700 after:ml-4">
        <span className="font-mono text-green text-xl mr-2">02.</span>
        Where I&apos;ve Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-navy-700">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 font-mono text-sm text-left whitespace-nowrap transition-colors ${
                activeTab === i
                  ? "text-green bg-navy-800 border-b-2 md:border-b-0 md:border-l-2 border-green"
                  : "text-slate hover:text-green hover:bg-navy-800/50"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:pl-6 pt-1">
          <h3 className="text-xl text-slate-light font-medium">
            {experiences[activeTab].title}{" "}
            <span className="text-green">
              @ {experiences[activeTab].company}
            </span>
          </h3>
          <p className="font-mono text-sm text-slate mt-1 mb-6">
            {experiences[activeTab].period}
          </p>
          <ul className="space-y-3">
            {experiences[activeTab].points.map((point, i) => (
              <li
                key={i}
                className="flex before:content-['▹'] before:text-green before:mr-3 before:mt-1 before:flex-shrink-0 text-slate leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
