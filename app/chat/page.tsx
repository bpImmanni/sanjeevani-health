// app/chat/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Bot, Sparkles, Send, ArrowLeft, ShieldCheck } from "lucide-react";

type Msg = { role: "user" | "agent"; text: string };

const scripted: Msg[] = [
  { role: "agent", text: "Hi — I’m your Sanjeevani AI Care Agent. Tell me your condition + city preference in India." },
  { role: "user", text: "Knee pain, possible replacement. Prefer Hyderabad. I want best doctor options and cost." },
  { role: "agent", text: "Got it. Upload reports when you’re ready. Meanwhile I’ll shortlist hospitals + surgeons and estimate ranges." },
  { role: "agent", text: "✅ Shortlisting 3 orthopedic specialists… ✅ Comparing outcomes + availability… ✅ Preparing cost estimate…" },
  { role: "agent", text: "Next: choose consult slot. I can schedule it for you and share a travel-ready plan." },
];

export default function ChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [i, setI] = useState(0);
  const [input, setInput] = useState("");

  const suggestions = useMemo(
    () => [
      "I want treatment in India — where do I start?",
      "Compare costs for CABG / Knee replacement",
      "Recommend best hospitals for my case",
      "Book a consultation for next week",
    ],
    []
  );

  useEffect(() => {
    const t = setInterval(() => {
      setMsgs((prev) => {
        if (i >= scripted.length) return prev;
        return [...prev, scripted[i]];
      });
      setI((x) => x + 1);
    }, 1200);

    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  function send() {
    if (!input.trim()) return;
    setMsgs((m) => [...m, { role: "user", text: input.trim() }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          role: "agent",
          text:
            "Thanks — this is a demo chat for now. In the real version, I’ll analyze your report, match doctors, and schedule consults automatically.",
        },
      ]);
    }, 600);
  }

  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="ai-dot" />
            Agent active
          </div>

          <Link
            href="/mythbuster"
            className="rounded-xl border border-amber-200/25 bg-amber-200/10 px-3 py-2 text-xs font-semibold text-amber-100 hover:bg-amber-200/15"
          >
            Try MythBuster free
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          {/* Chat */}
          <div className="card3d relative overflow-hidden rounded-3xl border border-white/10 bg-[#070b1f]">
            <div className="ai-scan pointer-events-none absolute inset-0 opacity-40" />

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Bot className="h-5 w-5 text-white/85" />
                </div>
                <div>
                  <div className="font-semibold">Sanjeevani AI Care Agent</div>
                  <div className="text-xs text-white/60">Demo chat UI (real agent later)</div>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                <span className="ai-dot" />
                Live
              </span>
            </div>

            <div className="h-[420px] overflow-y-auto px-6 py-5">
              <div className="space-y-3">
                {msgs.map((m, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "agent"
                        ? "border border-white/10 bg-white/5"
                        : "ml-auto border border-amber-200/20 bg-amber-200/10"
                    }`}
                  >
                    {m.role === "agent" && (
                      <div className="mb-1 inline-flex items-center gap-2 text-[11px] text-white/60">
                        <Sparkles className="h-3 w-3" />
                        Agent
                      </div>
                    )}
                    {m.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 p-4">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type a message (demo)…"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                />
                <button
                  onClick={send}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#050814] hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 hover:bg-white/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="card3d rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white/90">What the AI does</div>
            <div className="mt-3 space-y-2 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-200/80" />
                Reads your case & goals
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-200/80" />
                Recommends best-fit doctors/hospitals
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-200/80" />
                Schedules consults & coordinates travel
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#070b1f] p-4">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck className="h-4 w-4 text-white/70" />
                Privacy-first. Consent-based handling of sensitive info.
              </div>
            </div>

            <Link
              href="/mythbuster"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-amber-200/25 bg-amber-200/10 px-4 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-200/15"
            >
              Try MythBuster free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
