// components/Pipeline.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Upload, Brain, Hospital, CalendarCheck, Plane, CheckCircle2 } from "lucide-react";

const steps = [
  { label: "Upload", icon: Upload },
  { label: "Analyze", icon: Brain },
  { label: "Match", icon: Hospital },
  { label: "Book", icon: CalendarCheck },
  { label: "Coordinate", icon: Plane },
  { label: "Follow-up", icon: CheckCircle2 },
];

export default function Pipeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((x) => (x + 1) % steps.length), 1600);
    return () => clearInterval(id);
  }, []);

  const pct = useMemo(() => ((active + 1) / steps.length) * 100, [active]);

  return (
    <div className="pipeline">
      <div className="pipeline__bar">
        <div className="pipeline__barFill" style={{ width: `${pct}%` }} />
        <div className="pipeline__barGlow" style={{ left: `${pct}%` }} />
      </div>

      <div className="pipeline__row">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === active;
          const isDone = idx < active;
          return (
            <div
              key={s.label}
              className={`pipeline__step ${isActive ? "isActive" : ""} ${isDone ? "isDone" : ""}`}
            >
              <div className="pipeline__icon">
                <Icon className="h-4 w-4" />
              </div>
              <div className="pipeline__label">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="pipeline__hint">
        You chat once — the agent runs the workflow.
      </div>
    </div>
  );
}
