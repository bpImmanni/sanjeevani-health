// components/ExplainDrawer.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";

export default function ExplainDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer card3d">
      <button className="drawer__btn" onClick={() => setOpen((v) => !v)} type="button">
        <span>How the AI decides</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="drawer__body">
          <div className="drawer__row">
            <span className="dot" /> Symptoms + diagnosis hints (from your text)
          </div>
          <div className="drawer__row">
            <span className="dot" /> Medical history + preferences (city, budget, timeline)
          </div>
          <div className="drawer__row">
            <span className="dot" /> Hospital capability + availability + logistics
          </div>
          <div className="drawer__note">
            <ShieldCheck className="h-4 w-4" />
            Consent-first. You control what you share.
          </div>
        </div>
      )}
    </div>
  );
}
