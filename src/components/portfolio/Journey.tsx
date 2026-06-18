import { motion } from "framer-motion";
import { Section } from "./Section";
import { Terminal, Cloud, GitBranch, Server, Wrench, Target } from "lucide-react";

const milestones = [
  { Icon: Terminal, title: "Started with Linux", text: "Learned the shell, file systems, processes, systemd.", color: "var(--cyan)" },
  { Icon: Cloud, title: "Discovered AWS", text: "EC2, VPC, IAM, RDS — provisioning real infrastructure.", color: "var(--violet)" },
  { Icon: GitBranch, title: "Built CI/CD Pipelines", text: "Jenkins + Docker + GitHub Actions for repeatable delivery.", color: "var(--emerald)" },
  { Icon: Server, title: "Owned Production", text: "Deployments, monitoring, on-call instincts, rollbacks.", color: "var(--amber)" },
  { Icon: Wrench, title: "Became a DevOps Engineer", text: "Cross-team collaboration, automation, observability.", color: "var(--cyan)" },
  { Icon: Target, title: "Next: Site Reliability Engineer", text: "SLOs, error budgets, chaos engineering, scale.", color: "var(--violet)" },
];

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="// the path so far"
      title="A journey from curiosity to capability."
      description="Every system I've broken taught me something. Here's the trajectory."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute right-3 top-3 font-mono text-xs text-muted-foreground/50">
              0{i + 1}
            </div>
            <m.Icon className="h-7 w-7" style={{ color: m.color }} />
            <h3 className="mt-4 font-semibold">{m.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
