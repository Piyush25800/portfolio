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
      { title: "Piyush Bhajikhaye — Data Analyst & Data Scientist" },
      { name: "description", content: "Portfolio of Piyush Bhajikhaye — Data Analyst, Business Analyst and Data Scientist. Explore projects in data analysis, machine learning, SQL, Python, Power BI and AI." },
      { property: "og:title", content: "Piyush Bhajikhaye — Data Analyst, Data Science & AI Engineer" },
      { property: "og:description", content: "Portfolio showcasing data analysis, business analytics and data science projects using Python, SQL, Power BI, Machine Learning and AI." },
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
