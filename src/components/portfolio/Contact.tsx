import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  Check,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Inquiry",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3500);
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const links = [
    {
      Icon: Mail,
      label: "Email",
      value: "rakeshcrv987@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rakeshcrv987@gmail.com",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "Rakesh Sirvi",
      href: "https://www.linkedin.com/in/rakesh-sirvi-n-24232a3b3",
    },
    {
      Icon: Github,
      label: "GitHub",
      value: "@Rakeshcrv",
      href: "https://github.com/Rakeshcrv",
    },
    {
      Icon: Download,
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Let's build something reliable."
      description="Open to DevOps / SRE / Cloud roles, freelance pipelines, and good conversations about infrastructure."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/10"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan)]/20 to-[var(--violet)]/20">
                <l.Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">
                  {l.label}
                </div>

                <div className="truncate font-medium group-hover:text-[var(--cyan)]">
                  {l.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong space-y-4 rounded-3xl p-6 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) =>
                setForm({
                  ...form,
                  name: v,
                })
              }
              required
            />

            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) =>
                setForm({
                  ...form,
                  email: v,
                })
              }
              required
            />
          </div>

          <Field
            label="Subject"
            value={form.subject}
            onChange={(v) =>
              setForm({
                ...form,
                subject: v,
              })
            }
          />

          <div>
            <label className="mb-1.5 block font-mono text-xs text-muted-foreground">
              Message
            </label>

            <textarea
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none ring-[var(--cyan)] transition-all focus:border-[var(--cyan)]/50 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)] px-6 py-3 font-medium text-background transition-transform hover:scale-[1.02] disabled:opacity-50 sm:w-auto"
          >
            {loading ? (
              <>
                <Send className="h-4 w-4 animate-pulse" />
                Sending...
              </>
            ) : sent ? (
              <>
                <Check className="h-4 w-4" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs text-muted-foreground">
        {label}
      </label>

      <input
        type={type}
        required={required}
        maxLength={150}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none transition-all focus:border-[var(--cyan)]/50 focus:ring-2 focus:ring-[var(--cyan)]"
      />
    </div>
  );
}