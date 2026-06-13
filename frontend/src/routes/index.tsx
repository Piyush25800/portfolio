import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Resume } from "@/components/portfolio/Resume";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Piyush Sharma — Data Scientist · ML & AI Engineer" },
      { name: "description", content: "Portfolio of Piyush Sharma — Data Analyst, Data Scientist, and AI/ML Engineer. Projects, experience, and a futuristic peek into modern data work." },
      { property: "og:title", content: "Piyush Sharma — Data Scientist & AI Engineer" },
      { property: "og:description", content: "Premium portfolio showcasing ML, AI, and analytics projects." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    trackPageView("/");
  }, []);
  return (
    <div className="relative min-h-screen">
      <Loader />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Resume />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
