// components/FlightPath.tsx
import Image from "next/image";

export default function FlightPath() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Image src="/flags-us.svg" alt="US flag" width={18} height={12} className="rounded-sm" />
          <span className="text-white/70">→</span>
          <Image src="/flags-in.svg" alt="India flag" width={18} height={12} className="rounded-sm" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
          <span className="ai-dot" />
          live routing
        </div>
      </div>

      {/* SVG */}
      <div className="mt-4 rounded-xl border border-white/10 bg-[#070b1f] p-4">
        <svg viewBox="0 0 520 220" className="h-[180px] w-full">
          {/* glow */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* endpoints */}
          <circle cx="50" cy="160" r="6" fill="rgba(255,255,255,0.65)" />
          <circle cx="470" cy="160" r="6" fill="rgba(255,255,255,0.65)" />

          {/* path */}
          <path
            id="arc"
            d="M 50 160 C 170 60, 350 60, 470 160"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
            strokeDasharray="4 8"
          />
          <path
            d="M 50 160 C 170 60, 350 60, 470 160"
            fill="none"
            stroke="rgba(52,211,153,0.45)"
            strokeWidth="2"
            filter="url(#glow)"
            strokeDasharray="2 10"
          />

          {/* moving plane (no external libs) */}
          <text fontSize="18" filter="url(#glow)">
            ✈️
            <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#arc" />
            </animateMotion>
          </text>
        </svg>

        <div className="mt-2 text-xs text-white/70">
          Your agent guides the journey end-to-end — with clarity, speed, and trust.
        </div>
      </div>

      {/* Steps */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["Review", "Match", "Estimate", "Book", "Travel", "Follow-up"].map((s) => (
          <span
            key={s}
            className="chip rounded-full px-3 py-1 text-[11px] text-white/75"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
