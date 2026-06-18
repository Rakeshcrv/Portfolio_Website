import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "AWS Cloud Learning", issuer: "AWS Skill Builder", color: "var(--amber)" },
  { title: "DevOps Training Program", issuer: "Hands-on Workshop", color: "var(--cyan)" },
  { title: "Linux Administration", issuer: "Self-paced", color: "var(--emerald)" },
  { title: "CI/CD with Jenkins", issuer: "Workshop", color: "var(--violet)" },
  { title: "Docker Essentials", issuer: "Practical Lab", color: "var(--cyan)" },
  { title: "Monitoring with Grafana", issuer: "Workshop", color: "var(--emerald)" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="// certifications"
      title="Credentials & continuous learning."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass flex items-center gap-4 rounded-2xl p-5"
          >
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
              style={{ background: `color-mix(in oklch, ${c.color} 18%, transparent)` }}
            >
              <Award className="h-6 w-6" style={{ color: c.color }} />
            </div>
            <div className="min-w-0">
              <div className="truncate font-medium">{c.title}</div>
              <div className="text-xs text-muted-foreground">{c.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
