const projects = [
  {
    title: "Debit Card, Dispute & Overdraft Management Suite",
    subtitle: "Digital Banking Platform",
    description:
      "Developed 3 full-stack digital banking modules — Card Management, Dispute Management, and Overdraft Protection. Implemented debit card operations including lock/unlock, replacement, PIN setup, purchase limit management, and digital wallet provisioning. Built dispute workflows for debit, ATM, and ACH transactions with document uploads and status tracking.",
    tech: ["Python", "React 18", "TypeScript", "REST APIs", "pytest", "MFA"],
    period: "Feb 2026 - Present",
  },
  {
    title: "Real Time Transactions",
    subtitle: "Digital Banking Extensions",
    description:
      "Built 2 full-stack digital banking extensions for fund transfers and transaction activity using asynchronous Python, React 18, and TypeScript. Integrated Finxact core banking APIs for one-time and recurring transfers with OAuth2 authentication. Designed a modular backend service layer with step-up MFA, secure secrets management, and HMAC-SHA256 webhook verification.",
    tech: [
      "Python",
      "React 18",
      "TypeScript",
      "Docker",
      "GitLab CI/CD",
      "OAuth2",
    ],
    period: "Oct 2025 - Feb 2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="flex items-center text-2xl font-bold text-slate-light mb-10 whitespace-nowrap after:content-[''] after:block after:h-px after:w-full after:bg-navy-700 after:ml-4">
        <span className="font-mono text-green text-xl mr-2">03.</span>
        Things I&apos;ve Built
      </h2>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`relative grid md:grid-cols-12 gap-4 items-center ${
              i % 2 === 1 ? "md:text-right" : ""
            }`}
          >
            {/* Project image placeholder */}
            <div
              className={`md:col-span-7 ${
                i % 2 === 1 ? "md:col-start-6" : ""
              } row-start-1`}
            >
              <div className="bg-navy-800 rounded-lg aspect-video flex items-center justify-center overflow-hidden group hover:bg-navy-700 transition-colors">
                <div className="text-green/20 text-8xl font-bold group-hover:text-green/30 transition-colors">
                  0{i + 1}
                </div>
              </div>
            </div>

            {/* Project content */}
            <div
              className={`md:col-span-7 row-start-1 ${
                i % 2 === 1
                  ? "md:col-start-1 md:text-left"
                  : "md:col-start-6 md:text-right"
              } relative z-10`}
            >
              <p className="font-mono text-green text-sm mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-slate-light mb-4">
                {project.title}
              </h3>
              <div className="bg-navy-800 rounded-lg p-6 mb-4 shadow-xl">
                <p className="text-slate leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              <ul
                className={`flex flex-wrap gap-3 font-mono text-sm text-slate ${
                  i % 2 === 1 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="font-mono text-xs text-slate-dark mt-3">
                {project.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
