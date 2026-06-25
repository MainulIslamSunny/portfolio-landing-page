"use client";

import { useState } from "react";
import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { useToast } from "@/components/ui/Toast";
import { PROFILE } from "@/lib/data";
import { Copy, Mail, Linkedin } from "lucide-react";

export default function ContactTile() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(PROFILE.email)
      .then(() => showToast("✓ Email copied"))
      .catch(() => showToast(`Email: ${PROFILE.email}`));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill in all fields");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        showToast("✓ Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        showToast("Failed to send — try emailing directly");
      }
    } catch {
      showToast("Error — try emailing directly");
    } finally {
      setSending(false);
    }
  }

  const contactItems = [
    { icon: "📧", label: "Email", value: PROFILE.email },
    { icon: "📱", label: "Phone", value: PROFILE.phone },
    { icon: "📍", label: "Location", value: "Dhaka, Bangladesh · Remote OK" },
    { icon: "🌐", label: "Portfolio", value: "portfolio-mainul.vercel.app" },
  ];

  return (
    <Tile className="col-span-12 sm:col-span-4 md:col-span-6">
      <Label>Get In Touch</Label>

      <div className="grid grid-cols-2 gap-[9px] mb-4">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="bg-white/[0.02] border border-white/[0.05] rounded-[10px] p-3 flex items-start gap-[10px] hover:border-[rgba(99,130,255,0.2)] hover:bg-[rgba(99,130,255,0.03)] transition-all"
          >
            <div className="w-[30px] h-[30px] rounded-lg bg-[rgba(99,130,255,0.08)] border border-[rgba(99,130,255,0.12)] flex items-center justify-center text-sm flex-shrink-0">
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[8px] text-dim uppercase tracking-[0.1em] mb-[3px]">{item.label}</div>
              <div className="font-mono text-[10px] text-muted break-all leading-tight">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact form */}
      {sent ? (
        <div className="bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.2)] rounded-xl p-5 text-center mb-4">
          <div className="text-2xl mb-2">✅</div>
          <div className="font-sans font-bold text-green text-sm mb-1">Message sent!</div>
          <div className="font-mono text-[10px] text-muted">I'll get back to you within 24 hours.</div>
          <button onClick={() => setSent(false)} className="mt-3 font-mono text-[10px] text-accent hover:underline">
            Send another →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[8px] mb-4">
          <div className="grid grid-cols-2 gap-[8px]">
            <div>
              <label className="font-mono text-[9px] text-dim uppercase tracking-[0.1em] block mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-[8px] font-mono text-[11px] text-[#EEF0FF] placeholder-dim outline-none focus:border-[rgba(99,130,255,0.4)] focus:bg-[rgba(99,130,255,0.04)] transition-all"
              />
            </div>
            <div>
              <label className="font-mono text-[9px] text-dim uppercase tracking-[0.1em] block mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-[8px] font-mono text-[11px] text-[#EEF0FF] placeholder-dim outline-none focus:border-[rgba(99,130,255,0.4)] focus:bg-[rgba(99,130,255,0.04)] transition-all"
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-[9px] text-dim uppercase tracking-[0.1em] block mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the opportunity..."
              rows={3}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-[8px] font-mono text-[11px] text-[#EEF0FF] placeholder-dim outline-none focus:border-[rgba(99,130,255,0.4)] focus:bg-[rgba(99,130,255,0.04)] transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full py-[11px] rounded-[10px] font-sans text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #6382FF, #A78BFA)", boxShadow: "0 4px 20px rgba(99,130,255,0.25)" }}
          >
            {sending ? "Sending…" : "Send Message →"}
          </button>
        </form>
      )}

      <div className="flex flex-col gap-2">
        <button
          onClick={copyEmail}
          className="flex items-center justify-center gap-[7px] py-[9px] rounded-[9px] bg-[rgba(99,130,255,0.08)] border border-[rgba(99,130,255,0.25)] text-accent font-mono text-[10px] font-medium hover:bg-[rgba(99,130,255,0.15)] transition-all cursor-pointer"
        >
          <Copy size={12} /> Copy email address
        </button>
        <a
          href={`mailto:${PROFILE.email}?subject=Opportunity for Mainul&body=Hi Mainul,`}
          className="flex items-center justify-center gap-[7px] py-[9px] rounded-[9px] bg-transparent border border-white/[0.07] text-muted font-mono text-[11px] font-medium hover:text-accent hover:border-[rgba(99,130,255,0.3)] transition-all no-underline"
        >
          <Mail size={12} /> Send direct email
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-[14px] rounded-[10px] text-white font-sans text-sm font-bold hover:opacity-90 hover:-translate-y-[1px] transition-all no-underline"
          style={{ background: "linear-gradient(135deg, #6382FF, #A78BFA)", boxShadow: "0 4px 20px rgba(99,130,255,0.25)" }}
        >
          <Linkedin size={14} /> Open to Opportunities
        </a>
      </div>
    </Tile>
  );
}
