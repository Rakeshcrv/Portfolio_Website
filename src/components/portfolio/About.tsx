import { motion } from "framer-motion";
import { Section } from "./Section";
import { Rocket, Code2, Cloud, Award } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", Icon: Rocket, color: "var(--cyan)" },
  { label: "Technologies Learned", value: "25+", Icon: Code2, color: "var(--violet)" },
  { label: "AWS Services", value: "12+", Icon: Cloud, color: "var(--emerald)" },
  { label: "Experience", value: "1+", Icon: Award, color: "var(--amber)" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title="Engineer in pursuit of reliability."
      description="Student-turned-DevOps practitioner with a passion for automation, infrastructure as code, and the quiet satisfaction of systems that just work."
    >
      <div className="grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a passionate <span className="text-foreground font-medium">DevOps Engineer</span> with hands-on
            experience designing and deploying cloud-native applications on AWS. I build CI/CD pipelines that ship,
            automate deployments end-to-end, and instrument the observability that keeps production honest.
          </p>
          <p>
            My toolkit spans <span className="text-[var(--cyan)]">AWS</span>,
            <span className="text-[var(--cyan)]"> Linux</span>,
            <span className="text-[var(--cyan)]"> Docker</span>,
            <span className="text-[var(--cyan)]"> Jenkins</span>, and modern GitOps. Every day I get a little
            closer to my goal: becoming a <span className="text-foreground font-medium">Site Reliability Engineer</span> who
            helps teams build infrastructure that empowers — not blocks — the business.
          </p>
          <p>
            When I'm not deploying, I'm reading post-mortems, tuning Grafana dashboards, or breaking things in a lab to
            understand how to fix them faster next time.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5"
            >
              <s.Icon className="h-6 w-6" style={{ color: s.color }} />
              <div className="mt-3 text-3xl font-bold">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
