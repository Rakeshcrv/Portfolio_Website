import { motion } from "framer-motion";
import { Section } from "./Section";
import { Trophy, Cloud, GitBranch, Activity, ShieldCheck, Cpu } from "lucide-react";

const achievements = [
  {
    icon: Cloud,
    title: "Production AWS Deployments",
    description:
      "Successfully deployed and managed production applications on AWS using EC2, RDS, Route53, and Linux servers.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Implementation",
    description:
      "Built automated deployment pipelines using Jenkins and Docker to streamline software delivery.",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Implemented monitoring solutions using Prometheus and Grafana for application health and performance tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Production Operations",
    description:
      "Performed deployment rollbacks, service recovery, troubleshooting, and infrastructure maintenance.",
  },
  {
    icon: Cpu,
    title: "AI Application Deployment",
    description:
      "Developed and deployed an AI-powered rust detection application using Flutter, Flask, YOLO, and AWS.",
  },
  {
    icon: Trophy,
    title: "DevOps & Cloud Focus",
    description:
      "Continuously building expertise in cloud infrastructure, automation, Linux administration, and reliability engineering.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="// achievements"
      title="Key Achievements"
      description="Highlights from projects, deployments, and operational experience."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <item.icon className="mb-4 h-8 w-8 text-cyan-400" />

            <h3 className="mb-2 text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}