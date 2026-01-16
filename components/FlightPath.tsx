"use client";

export default function FlightPath() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 overflow-hidden">
      {/* Top row (flags + routing status) */}
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="flag-emoji" aria-hidden>
            🇺🇸
          </span>
          <span className="text-white/50">→</span>
          <span className="flag-emoji" aria-hidden>
            🇮🇳
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_18px_rgba(52,211,153,0.45)]" />
          live routing
        </div>
      </div>

      {/* Flight panel */}
      <div className="mt-4 relative rounded-xl border border-white/10 bg-[#070b1f]/45 p-4 overflow-hidden">
        {/* AI scan overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-60 ai-scan" />

        <svg
          className="w-full h-[170px]"
          viewBox="0 0 640 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* soft glow */}
          <path
            d="M60 170 C 210 60, 430 60, 580 170"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* dotted route */}
          <path
            id="routePath"
            d="M60 170 C 210 60, 430 60, 580 170"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 8"
          />

          {/* endpoints */}
          <circle cx="60" cy="170" r="6" fill="rgba(255,255,255,0.75)" />
          <circle cx="580" cy="170" r="6" fill="rgba(255,255,255,0.75)" />

          {/* moving plane */}
          <g filter="url(#shadow)">
            <text fontSize="18" dominantBaseline="middle" textAnchor="middle">
              ✈️
              <animateMotion
                dur="3.4s"
                repeatCount="indefinite"
                rotate="auto"
                keyTimes="0; 1"
                keySplines="0.42 0 0.58 1"
                calcMode="spline"
              >
                <mpath href="#routePath" />
              </animateMotion>
            </text>
          </g>

          <defs>
            <filter
              id="shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="3"
                floodColor="rgba(255,255,255,0.25)"
              />
            </filter>
          </defs>
        </svg>

        <div className="mt-2 text-xs text-white/60">
          Your agent guides the journey end-to-end — with clarity, speed, and trust.
        </div>
      </div>

      {/* Steps (moved to bottom as chips) */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["Consult", "Options", "Travel", "Treatment", "Follow-up"].map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
