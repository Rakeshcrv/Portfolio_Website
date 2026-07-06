import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  ArrowUpRight,
  Cloud,
  Smartphone,
  GitMerge,
  LayoutDashboard,
  Github,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "TechSalesAxis Deployment Platform",
    Icon: Cloud,
    accent: "var(--cyan)",
    status: "Production",
    demo: "https://www.techsalesaxis.com",
    github: "https://github.com/tnbit01-wq/TechSalesAxis.git",
    description:
      "Production application on AWS with Next.js frontend, FastAPI backend, and PostgreSQL. Managed EC2 operations, systemd services, deployments, rollbacks, and health monitoring.",
    tags: ["AWS", "Linux", "Systemd", "Next.js", "FastAPI", "PostgreSQL"],
    highlights: [
      "Zero-downtime deployments",
      "Rollback strategy",
      "Production troubleshooting",
    ],
  },
  {
    title: "Rust Detection Mobile App",
    Icon: Smartphone,
    accent: "var(--amber)",
    status: "Completed",
    github: "https://github.com/Rakeshcrv/rust-detection-api",
    demo: null,
    description:
      "AI-powered Flutter application that detects rust severity in real time using YOLO and TensorFlow models with a Flask API backend deployed on AWS EC2.",
    tags: ["Flutter", "Flask", "YOLO", "TensorFlow", "AWS EC2"],
    highlights: [
      "Real-time inference",
      "Severity classification",
      "PDF report generation",
    ],
  },
  {
    title: "CI/CD Pipeline — Three-Tier Application",
    Icon: GitMerge,
    accent: "var(--violet)",
    status: "Completed",
    github: "https://github.com/Rakeshcrv/garbage-management-system",
    demo: null,
    description:
      "Designed and implemented an automated CI/CD pipeline for a containerized three-tier application using Jenkins, Docker, Prometheus, and Grafana.",
    tags: ["Jenkins", "Docker", "AWS", "Prometheus", "Grafana"],
    highlights: [
      "Automated builds",
      "Containerized deployments",
      "Observability dashboards",
    ],
  },
  {
    title: "Portfolio Website",
    Icon: LayoutDashboard,
    accent: "var(--emerald)",
    status: "Production",
    github: "https://github.com/Rakeshcrv/Portfolio_Website",
    demo: "https://rakeshsirvi.site",
    description:
      "Designed and developed a modern, fully responsive personal portfolio website to showcase my skills, projects, certifications, and experience. Built with Next.js and Tailwind CSS, featuring smooth animations, dark/light theme, optimized performance, and deployed on AWS EC2 using a GitHub Actions CI/CD pipeline.",
    tags: ["Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AWS EC2",
    "GitHub Actions",
    "Nginx",
    "Linux"],
    highlights: [
      "Deployment tracking",
      "Service monitoring",
      "Release history",
    ],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// featured work"
      title="Projects I've Built, Deployed & Operated."
      description="Hands-on projects demonstrating cloud infrastructure, automation, CI/CD, monitoring, and production operations."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-[0_0_60px_-15px_var(--accent)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
              }}
            />

            <div
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
              style={{ background: p.accent }}
            />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{
                    background: `color-mix(in oklch, ${p.accent} 18%, transparent)`,
                  }}
                >
                  <p.Icon
                    className="h-6 w-6"
                    style={{ color: p.accent }}
                  />
                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <h3 className="text-xl font-bold">{p.title}</h3>

              <div
                className={`mt-2 inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${
                  p.status === "Production"
                    ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    : "border border-violet-500/20 bg-violet-500/10 text-violet-400"
                }`}
              >
                {p.status}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="mt-4 space-y-1">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                  >
                    <span className="text-[var(--emerald)]">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition-all hover:bg-white/5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition-all hover:bg-white/5"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
