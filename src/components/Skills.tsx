const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
      "Context API",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST API Development",
      "JWT Authentication",
    ],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQLite", "Django ORM"],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "AWS (EC2, S3, RDS, IAM)",
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Jest",
      "React Testing Library",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="flex items-center text-2xl font-bold text-slate-light mb-10 whitespace-nowrap after:content-[''] after:block after:h-px after:w-full after:bg-navy-700 after:ml-4">
        <span className="font-mono text-green text-xl mr-2">04.</span>
        Skills & Technologies
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-navy-800 rounded-lg p-6 hover:shadow-lg hover:shadow-navy-900/50 transition-shadow">
            <h3 className="text-green font-mono text-sm mb-4 uppercase tracking-wider">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm text-slate-light bg-navy-900 rounded-full border border-navy-700 hover:border-green/30 hover:text-green transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
