import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    Icon: Briefcase,
    title: "Junior DevOps Engineer",
    company: "AITSP",
    subtitle: "Production Infrastructure · AWS",
    period: "2026 – Present",
    color: "var(--cyan)",
    points: [
      "Managed AWS infrastructure including EC2, VPC, IAM, Route 53, and RDS.",
      "Supported production deployments using zero-downtime deployment practices.",
      "Maintained Linux servers, systemd services, logging, and operational security.",
      "Implemented monitoring and observability using CloudWatch, Prometheus, and Grafana.",
      "Troubleshot production incidents and participated in service recovery activities.",
      "Collaborated with development teams to improve deployment reliability and release workflows.",
    ],
  },
  {
    Icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    company: "St. Joseph's First Grade College, Mysore",
    subtitle: "Computer Applications",
    period: "CGPA: 8.9 / 10",
    color: "var(--violet)",
    points: [
      "Built a strong foundation in operating systems, networking, databases, and software engineering.",
      "Completed multiple cloud, DevOps, automation, and AI-based projects.",
      "Focused on AWS, Linux, CI/CD, monitoring, and Site Reliability Engineering practices.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// experience & education"
      title="Where I've Learned, Built & Operated Systems."
      description="Professional experience and academic foundation that shaped my journey into DevOps and Cloud Engineering."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--cyan)] via-[var(--violet)] to-transparent md:left-1/2" />

        <div className="space-y-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="ml-12 md:ml-0 md:px-6">
                <div className="glass rounded-2xl p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="grid h-10 w-10 place-items-center rounded-xl"
                      style={{
                        background: `color-mix(in oklch, ${item.color} 18%, transparent)`,
                      }}
                    >
                      <item.Icon
                        className="h-5 w-5"
                        style={{ color: item.color }}
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p
                        className="font-medium text-sm"
                        style={{ color: item.color }}
                      >
                        {item.company}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className="mb-4 font-mono text-xs"
                    style={{ color: item.color }}
                  >
                    {item.period}
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Node */}
              <div
                className="absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full md:left-1/2"
                style={{
                  background: item.color,
                  boxShadow: `0 0 20px ${item.color}`,
                }}
              />

              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}