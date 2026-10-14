export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <p className="font-mono text-green mb-5 text-base animate-fade-in-up">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-light mb-3 animate-fade-in-up animation-delay-100">
          Mohan Kapakayala.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate mb-6 animate-fade-in-up animation-delay-200">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-slate text-lg leading-relaxed mb-12 animate-fade-in-up animation-delay-300">
          Full Stack Developer with 3 years of experience building responsive,
          scalable web applications. Currently focused on building secure digital
          banking platforms at{" "}
          <a
            href="https://nuevesolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:underline"
          >
            Nueve IT Solutions
          </a>
          .
        </p>
        <div className="animate-fade-in-up animation-delay-400">
          <a
            href="#contact"
            className="inline-block border border-green text-green font-mono px-7 py-4 rounded text-sm hover:bg-green-tint transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
