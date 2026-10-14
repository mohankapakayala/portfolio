"use client";

import { useState } from "react";

const EMAIL = "kapakayalamohan@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <p className="font-mono text-green text-base mb-4">05. What&apos;s Next?</p>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-light mb-6">
        Get In Touch
      </h2>
      <p className="text-slate leading-relaxed mb-12">
        I&apos;m currently open to new opportunities. Whether you have a question
        or just want to say hi, my inbox is always open and I&apos;ll try my
        best to get back to you!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-green text-green font-mono px-8 py-4 rounded text-sm hover:bg-green-tint transition-colors"
        >
          Say Hello
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-block border border-slate-dark text-slate-light font-mono px-8 py-4 rounded text-sm hover:border-green hover:text-green transition-colors"
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
      <p className="mt-6 font-mono text-sm text-slate">
        or write to{" "}
        <a href={`mailto:${EMAIL}`} className="text-green hover:underline">
          {EMAIL}
        </a>
      </p>

      {/* Mobile social links */}
      <div className="flex justify-center gap-6 mt-16 lg:hidden">
        <a
          href="https://github.com/mohankapakayala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-green transition-colors"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/mohan-kapakayala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-green transition-colors"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </section>
  );
}
