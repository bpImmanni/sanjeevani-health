// components/AgentConsole.tsx
"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

type Line = { role: "user" | "agent"; text: string };

const script: Line[] = [
  { role: "user", text: "I have knee pain. I want the best hospital in Hyderabad." },
  { role: "agent", text: "Received. Upload reports when ready — I’ll start with a preliminary shortlist now." },
  { role: "agent", text: "Analyzing symptoms + goals… ✅" },
  { role: "agent", text: "Shortlisting top orthopedic surgeons… ✅" },
  { role: "agent", text: "Estimating cost range + timelines… ✅" },
  { role: "agent", text: "Scheduling consult options: Tue 9:00 AM / Wed 6:30 PM" },
];

export default function AgentConsole() {
  const [lines, setLines] = useState<Line[]>([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLines((prev) => {
        if (i >= script.length) return prev;
        return [...prev, script[i]];
      });
      setI((x) => x + 1);
    }, 900);
    return () => clearInterval(id);
  }, [i]);

  return (
    <div className="console card3d">
      <div className="console__top">
        <div className="console__title">
          <Sparkles className="h-4 w-4" />
          AI Agent Console
        </div>
        <div className="console__status">
          <span className="ai-dot" />
          processing
        </div>
      </div>

      <div className="console__body">
        {lines.map((l, idx) => (
          <div key={idx} className={`console__line ${l.role === "user" ? "isUser" : "isAgent"}`}>
            <span className="console__role">{l.role === "user" ? "You" : "Agent"}</span>
            <span className="console__text">{l.text}</span>
          </div>
        ))}
        <div className="console__cursor" />
      </div>
    </div>
  );
}
