import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Wrench,
  RotateCcw,
  Database,
  Server,
  DollarSign,
  Activity,
} from "lucide-react";

const experiences = [
  {
    title: "Production Service Recovery",
    icon: Wrench,
    description:
      "Diagnosed and restored application services running on Linux servers using systemd, logs, and process monitoring.",
  },
  {
    title: "Deployment Rollbacks",
    icon: RotateCcw,
    description:
      "Executed rollback procedures during failed deployments to quickly restore application availability.",
  },
  {
    title: "AWS Infrastructure Management",
    icon: Server,
    description:
      "Managed EC2 instances, Elastic IPs, Route53 records, networking, and deployment operations.",
  },
  {
    title: "Database Operations",
    icon: Database,
    description:
      "Monitored and maintained PostgreSQL databases hosted on Amazon RDS.",
  },
  {
    title: "AWS Cost Optimization",
    icon: DollarSign,
    description:
      "Identified unused cloud resources and reduced infrastructure costs through cleanup and optimization.",
  },
  {
    title: "Monitoring & Troubleshooting",
    icon: Activity,
    description:
      "Used logs, metrics, and health checks to investigate issues and maintain service reliability.",
  },
];

export function ProductionExperience() {
  return (
    <Section
      id="production"
      eyebrow="// operations"
      title="Production Experience"
      description="Hands-on experience operating, troubleshooting, and maintaining production systems."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <item.icon className="mb-4 h-8 w-8 text-cyan-400" />

            <h3 className="mb-2 text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
