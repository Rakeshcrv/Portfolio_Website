import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rakesh Sirvi N · Built with care & coffee.
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Rakeshcrv" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/rakesh-sirvi-n-24232a3b3" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshcrv987@gmail.com" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
