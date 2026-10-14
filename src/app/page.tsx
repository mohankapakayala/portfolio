"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";
import EmailSidebar from "@/components/EmailSidebar";
import Cursor from "@/components/Cursor";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Nav activeSection={activeSection} />
      <SocialSidebar />
      <EmailSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate text-sm font-mono">
        <p>Designed & Built by Mohan Kapakayala</p>
      </footer>
    </>
  );
}
