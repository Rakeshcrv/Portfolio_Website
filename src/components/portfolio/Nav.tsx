import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
              scrolled ? "glass-strong" : ""
            }`}
          >
            <a href="#hero" className="flex items-center gap-2 font-mono text-sm font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--violet)] text-background">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="hidden sm:inline">rakesh<span className="text-[var(--cyan)]">.dev</span></span>
            </a>
            <ul className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)] px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </motion.header>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--cyan)] via-[var(--violet)] to-[var(--emerald)] transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
