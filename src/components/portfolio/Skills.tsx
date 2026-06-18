import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Cloud,
  GitBranch,
  Activity,
  Server,
  Code2,
  Database,
} from "lucide-react";

const groups = [
  {
    title: "Cloud Infrastructure",
    Icon: Cloud,
    color: "var(--cyan)",
    items: [
      { name: "EC2", level: 90 },
      { name: "VPC", level: 80 },
      { name: "IAM", level: 80 },
      { name: "RDS", level: 75 },
      { name: "Route 53", level: 75 },
      { name: "CloudWatch", level: 80 },
      { name: "Elastic IP", level: 85 },
      { name: "NAT Gateway", level: 70 },
    ],
  },

  {
    title: "CI/CD & Automation",
    Icon: GitBranch,
    color: "var(--violet)",
    items: [
      { name: "Jenkins", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Docker Compose", level: 65 },
      { name: "Git", level: 92 },
      { name: "GitHub Actions", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "Deployment Pipelines", level: 85 },
      { name: "Rollback Strategy", level: 80 },
    ],
  },

  {
    title: "Monitoring & Observability",
    Icon: Activity,
    color: "var(--emerald)",
    items: [
      { name: "Dynatrace", level: 82 },
      { name: "Prometheus", level: 78 },
      { name: "Grafana", level: 80 },
      { name: "CloudWatch", level: 80 },
      { name: "Health Checks", level: 85 },
      { name: "Log Analysis", level: 82 },
    ],
  },

  {
    title: "Linux & Operations",
    Icon: Server,
    color: "var(--amber)",
    items: [
      { name: "Linux", level: 90 },
      { name: "Ubuntu", level: 90 },
      { name: "Systemd", level: 82 },
      { name: "Bash", level: 82 },
      { name: "SSH", level: 88 },
      { name: "Nginx", level: 75 },
    ],
  },

  {
    title: "Development & APIs",
    Icon: Code2,
    color: "var(--cyan)",
    items: [
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 82 },
      { name: "Flask", level: 80 },
      { name: "React", level: 78 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "SQL", level: 75 },
    ],
  },

  {
    title: "Databases",
    Icon: Database,
    color: "var(--violet)",
    items: [
      { name: "PostgreSQL", level: 82 },
      { name: "Amazon RDS", level: 80 },
      { name: "SQLite", level: 78 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// technical expertise"
      title="Technologies I Use to Build & Operate Systems."
      description="Hands-on experience across cloud infrastructure, CI/CD, monitoring, Linux administration, backend development, and database management."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                <g.Icon
                  className="h-5 w-5"
                  style={{ color: g.color }}
                />
              </div>

              <h3 className="font-semibold">{g.title}</h3>
            </div>

            <div className="space-y-3">
              {g.items.map((it, i) => (
                <div key={it.name}>
                  <div className="mb-1 flex justify-between font-mono text-xs">
                    <span className="text-muted-foreground">
                      {it.name}
                    </span>

                    <span style={{ color: g.color }}>
                      {it.level}%
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: i * 0.05,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${g.color}, oklch(0.65 0.22 295))`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}