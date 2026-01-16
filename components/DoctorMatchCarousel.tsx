// components/DoctorMatchCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const cards = [
  { name: "Dr. Rao", spec: "Orthopedics", score: 92, why: "High success rate for knee replacement + matches your city preference." },
  { name: "Apollo Hospitals", spec: "Multi-specialty", score: 89, why: "Strong orthopedic team + fast consult availability." },
  { name: "Fortis", spec: "Multi-specialty", score: 86, why: "Cost-effective package options + good post-op care." },
];

export default function DoctorMatchCarousel() {
  const [idx, setIdx] = useState(0);
  const [openWhy, setOpenWhy] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((x) => (x + 1) % cards.length);
      setOpenWhy(false);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const c = cards[idx];

  return (
    <div className="match card3d">
      <div className="match__top">
        <div className="match__title">Top match candidates</div>
        <div className="match__pill">{c.score}% match</div>
      </div>

      <div className="match__card">
        <div className="match__name">{c.name}</div>
        <div className="match__spec">{c.spec}</div>

        <button
          className="match__why"
          onClick={() => setOpenWhy((v) => !v)}
          type="button"
        >
          Explain why <ChevronDown className={`h-4 w-4 ${openWhy ? "rotate-180" : ""}`} />
        </button>

        {openWhy && <div className="match__whyBox">{c.why}</div>}
      </div>

      <div className="match__dots">
        {cards.map((_, d) => (
          <span key={d} className={`match__dot ${d === idx ? "isOn" : ""}`} />
        ))}
      </div>
    </div>
  );
}
