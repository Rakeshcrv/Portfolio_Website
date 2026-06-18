import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Operations } from "@/components/portfolio/Operations";
import { ProductionExperience } from "@/components/portfolio/ProductionExperience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Journey } from "@/components/portfolio/Journey";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { StarField } from "@/components/portfolio/StarField";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Rakesh Sirvi N — DevOps Engineer & AWS Cloud Enthusiast",
      },
      {
        name: "description",
        content:
          "Portfolio of Rakesh Sirvi N — DevOps Engineer specializing in AWS, CI/CD, Linux, Docker, Kubernetes, monitoring, and cloud infrastructure.",
      },
      {
        property: "og:title",
        content: "Rakesh Sirvi N — DevOps Engineer",
      },
      {
        property: "og:description",
        content:
          "AWS · Kubernetes · Docker · CI/CD · Linux · Monitoring · Production Operations",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <CursorGlow />
      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Operations />
        <ProductionExperience />
        <Achievements />
        <Projects />
        <Experience />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}