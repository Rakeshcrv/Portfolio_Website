import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, Cloud, Container, GitBranch, Server, Activity, Boxes } from "lucide-react";

const roles = ["Junior DevOps Engineer",
  "AWS Cloud Enthusiast",
  "Cloud & Infrastructure Engineer",
  "Site Reliability Engineering Aspirant"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setDel(false);
          setI((p) => (p + 1) % roles.length);
        }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-[var(--cyan)] align-middle" />
    </span>
  );
}

const floatIcons = [
  { Icon: Cloud, x: "8%", y: "20%", d: 0 },
  { Icon: Container, x: "85%", y: "15%", d: 1.2 },
  { Icon: GitBranch, x: "12%", y: "75%", d: 2.4 },
  { Icon: Server, x: "82%", y: "70%", d: 0.6 },
  { Icon: Activity, x: "50%", y: "10%", d: 1.8 },
  { Icon: Boxes, x: "92%", y: "45%", d: 3 },
];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg">
      {/* Floating icons */}
      {floatIcons.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -16, 0] }}
          transition={{ delay: d * 0.2, duration: 4, y: { repeat: Infinity, duration: 4 + d, ease: "easeInOut" } }}
        >
          <div className="glass grid h-14 w-14 place-items-center rounded-2xl">
            <Icon className="h-6 w-6 text-[var(--cyan)]" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--emerald)]" />
          Open to DevOps • Cloud • SRE Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="gradient-text">Rakesh Sirvi N</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-mono text-xl text-muted-foreground sm:text-2xl md:text-3xl"
        >
          <span className="text-[var(--cyan)]">$</span> <Typer />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Hands-on experience with AWS, Linux, Docker, CI/CD, Monitoring, and Production Operations. 
          Passionate about building reliable cloud infrastructure, automating deployments, and improving system reliability and performence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
        
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)] px-6 py-3 font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 font-medium transition-colors hover:bg-white/10"
          >
            <FolderGit2 className="h-4 w-4" /> View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
