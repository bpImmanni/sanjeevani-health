// components/AgentBadge.tsx
import { Bot } from "lucide-react";

export default function AgentBadge() {
  return (
    <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] text-white/85 overflow-hidden">
      <span className="ai-scan absolute inset-0 opacity-40" />
      <span className="ai-dot" />
      <Bot className="h-4 w-4" />
      Agent thinking
    </span>
  );
}
