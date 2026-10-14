export default function SocialSidebar() {
  const socials = [
    {
      label: "GitHub",
      url: "https://github.com/mohankapakayala",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/mohan-kapakayala",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="hidden lg:flex fixed bottom-0 left-8 flex-col items-center gap-4 after:content-[''] after:w-px after:h-24 after:bg-green/50">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-green/40 bg-green-tint text-green shadow-[0_0_12px_rgba(100,255,218,0.15)] hover:bg-green hover:text-navy-900 hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] hover:-translate-y-1 transition-all duration-200"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
