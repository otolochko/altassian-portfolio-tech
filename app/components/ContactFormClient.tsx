"use client";

import React, { useId, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

type Lang = "en" | "uk";

type Labels = {
  name: string;
  email: string;
  message: string;
  submit: string;
  success: string;
  error: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactFormClient({ lang, labels }: { lang: Lang; labels: Labels }) {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const honeyId = useId();

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });

  const emailOk = useMemo(() => {
    const v = form.email.trim();
    if (!v) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [form.email]);

  const canSubmit =
    status !== "submitting" &&
    form.name.trim().length >= 2 &&
    emailOk &&
    form.message.trim().length >= 10;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // honeypot (bots)
    if (form.company.trim()) return;

    if (!canSubmit) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", company: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Terminal prompt header */}
      <div className="font-mono text-sm text-foreground-muted mb-4">
        <span className="text-syntax-teal">$</span>{" "}
        <span className="text-foreground">./send-message.sh</span>
      </div>

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-lg border border-syntax-green/30 bg-syntax-green/10 p-4 text-syntax-green">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div className="text-sm font-mono">{labels.success}</div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-syntax-red/30 bg-syntax-red/10 p-4 text-syntax-red">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div className="text-sm font-mono">{labels.error}</div>
        </div>
      )}

      {/* honeypot */}
      <div className="hidden">
        <label htmlFor={honeyId}>Company</label>
        <input
          id={honeyId}
          name="company"
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor={nameId} className="block text-sm font-mono text-foreground-muted mb-2">
          <span className="text-syntax-cyan">name</span>
          <span className="text-syntax-purple">=</span>
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={labels.name}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-mono text-sm focus:border-syntax-teal focus:ring-1 focus:ring-syntax-teal/20 outline-none transition-colors placeholder:text-foreground-muted/50"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          required
        />
      </div>

      <div>
        <label htmlFor={emailId} className="block text-sm font-mono text-foreground-muted mb-2">
          <span className="text-syntax-cyan">email</span>
          <span className="text-syntax-purple">=</span>
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder={labels.email}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-mono text-sm focus:border-syntax-teal focus:ring-1 focus:ring-syntax-teal/20 outline-none transition-colors placeholder:text-foreground-muted/50"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          required
          aria-invalid={form.email.length > 0 && !emailOk}
        />
        {form.email.length > 0 && !emailOk && (
          <p className="mt-2 text-xs text-syntax-red font-mono">
            <span className="text-syntax-red">[error]</span>{" "}
            {lang === "en" ? "Invalid email format" : "Невірний формат email"}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={msgId} className="block text-sm font-mono text-foreground-muted mb-2">
          <span className="text-syntax-cyan">message</span>
          <span className="text-syntax-purple">=</span>
        </label>
        <textarea
          id={msgId}
          name="message"
          rows={4}
          placeholder={labels.message}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-mono text-sm focus:border-syntax-teal focus:ring-1 focus:ring-syntax-teal/20 outline-none transition-colors resize-none placeholder:text-foreground-muted/50"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          required
        />
        <p className="mt-2 text-xs text-foreground-muted font-mono">
          <span className="text-syntax-green"># </span>
          {lang === "en"
            ? "Tip: include context, target timeline, and whether you use Cloud or Data Center."
            : "Порада: додай контекст, бажані строки та чи це Cloud чи Data Center."}
        </p>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-foreground text-foreground-inverse font-mono font-semibold py-4 rounded-lg hover:bg-syntax-teal hover:text-foreground transition-colors shadow-terminal disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {status === "submitting" && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
        <span className="text-syntax-teal">$</span> {labels.submit}
      </button>
    </form>
  );
}
