"use client";

import { Bot, Sparkles, ShieldCheck, Clock3 } from "lucide-react";

export default function AgentConsole() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b1f] p-6">
      <div className="pointer-events-none absolute inset-0 opacity-50 ai-scan" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Bot className="h-5 w-5 text-white/85" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/90">AI Care Agent</div>
            <div className="text-xs text-white/60">Personal facilitator for India care</div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_18px_rgba(52,211,153,0.45)]" />
          active
        </div>
      </div>

      {/* “messages” */}
      <div className="mt-5 space-y-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/75">
          <span className="text-white/90 font-medium">You:</span> I need options for treatment in India.
        </div>

        <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-3 text-sm text-white/80">
          <div className="flex items-center gap-2 text-white/90 font-medium">
            <Sparkles className="h-4 w-4" />
            Agent
            <span className="typing-dots ml-1" aria-hidden />
          </div>
          <div className="mt-1 text-white/70">
            Upload reports → I’ll shortlist 2–3 vetted hospitals + estimate cost + timeline.
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Clock3 className="h-4 w-4 text-white/70" />
              Response window
            </div>
            <div className="mt-1 text-sm font-semibold">24 hours</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="h-4 w-4 text-white/70" />
              Hospital trust
            </div>
            <div className="mt-1 text-sm font-semibold">JCI / NABH</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Sparkles className="h-4 w-4 text-white/70" />
              Coordination
            </div>
            <div className="mt-1 text-sm font-semibold">End-to-end</div>
          </div>
        </div>
      </div>
    </div>
  );
}
