"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Anonymous"} (${email || "no email provided"})`
    );
    window.location.href = `mailto:nandinibm55@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-background p-7"
    >
      <p className="mb-5 text-xs text-muted">
        This form opens your email app with the message pre-filled — there&apos;s
        no backend attached.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/70"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-semibold text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/70"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="focus-ring w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/70"
          placeholder="Tell me a bit about your idea or opportunity..."
        />
      </div>

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-md"
      >
        Send Message
        <Send size={15} />
      </button>
    </form>
  );
}
