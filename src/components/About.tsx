import Image from "next/image";

export default function About() {
  const technologies = [
    "React.js",
    "TypeScript",
    "Next.js",
    "Python",
    "Django",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="flex items-center text-2xl font-bold text-slate-light mb-10 whitespace-nowrap after:content-[''] after:block after:h-px after:w-full after:bg-navy-700 after:ml-4">
        <span className="font-mono text-green text-xl mr-2">01.</span>
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-slate leading-relaxed">
          <p>
            Hello! I&apos;m Mohan, a Full Stack Developer based in Visakhapatnam,
            India. I enjoy building things that live on the internet — from
            interactive front-end applications to robust backend services and
            APIs.
          </p>
          <p>
            I currently work as a Software Developer at{" "}
            <a
              href="https://nuevesolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:underline"
            >
              Nueve IT Solutions
            </a>
            , where I
            develop and maintain digital banking platforms. My day-to-day involves
            building financial web applications using React.js, TypeScript, and
            Python, with a focus on security, reliability, and clean architecture.
          </p>
          <p>
            I graduated with a B.Tech in Electronics and Communication
            Engineering from ANITS, Visakhapatnam, and have since been deepening
            my expertise in full-stack web development.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="flex items-center before:content-['▹'] before:text-green before:mr-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <div className="relative w-64 h-64 rounded bg-green/20 overflow-hidden">
            <div className="absolute inset-0 bg-green/10 group-hover:bg-transparent transition-colors duration-300 z-10 rounded" />
            <Image
              src="/profile.jpg"
              alt="Mohan Kapakayala"
              fill
              sizes="256px"
              priority
              className="object-cover object-top grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="absolute top-4 left-4 w-64 h-64 border-2 border-green rounded -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
