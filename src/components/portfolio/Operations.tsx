import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Cloud,
  GitBranch,
  Activity,
  Server,
  ShieldAlert,
} from "lucide-react";

const operations = [
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    items: [
      "AWS EC2",
      "Amazon RDS",
      "IAM",
      "VPC",
      "Route 53",
      "Elastic IP",
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    items: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Deployment Pipelines",
      "Rollback Strategy",
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    items: [
      "Dynatrace",
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "Health Checks",
      "Application Monitoring",
    ],
  },
  {
    title: "Linux Administration",
    icon: Server,
    items: [
      "Ubuntu",
      "Systemd",
      "Nginx",
      "SSH",
      "Log Analysis",
      "Performance Monitoring",
    ],
  },
  {
    title: "Incident Response",
    icon: ShieldAlert,
    items: [
      "Service Recovery",
      "Deployment Rollbacks",
      "Production Troubleshooting",
      "Root Cause Analysis",
    ],
  },
];

export function Operations() {
  return (
    <Section
      id="operations"
      eyebrow="// infrastructure"
      title="Infrastructure & Operations"
      description="Experience managing cloud infrastructure, deployments, monitoring, and production operations."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {operations.map((op, index) => (
          <motion.div
            key={op.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <op.icon className="h-6 w-6 text-cyan-400" />
              <h3 className="font-semibold">{op.title}</h3>
            </div>

            <ul className="space-y-2">
              {op.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground"
                >
                  ▸ {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}