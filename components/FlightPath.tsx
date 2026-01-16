"use client";

export default function FlightPath() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      {/* header row */}
      <div className="mb-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="text-base leading-none">🇺🇸</span>
          <span className="text-white/40">→</span>
          <span className="text-base leading-none">🇮🇳</span>
          <span className="ml-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[11px] text-emerald-200">
            live route
          </span>
        </div>

        {/* moved agent online out of here per your ask */}
        <div className="text-[11px] text-white/45">coordinated by your AI agent</div>
      </div>

      {/* the map canvas */}
      <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-3">
        {/* subtle hologram */}
        <div className="ai-holo pointer-events-none absolute inset-0 rounded-xl" />

        <svg
          viewBox="0 0 640 240"
          className="block h-[170px] w-full"
          aria-label="Flight path animation"
        >
          {/* glow backdrop */}
          <defs>
            <linearGradient id="route" x1="0" x2="1">
              <stop offset="0" stopColor="rgba(255,255,255,0.20)" />
              <stop offset="0.5" stopColor="rgba(255,255,255,0.50)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.20)" />
            </linearGradient>

            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* endpoints */}
          <circle cx="80" cy="170" r="6" fill="rgba(255,255,255,0.55)" />
          <circle cx="560" cy="170" r="6" fill="rgba(255,255,255,0.55)" />

          {/* dashed arc */}
          <path
            id="flightArc"
            d="M 80 170 C 220 65, 420 65, 560 170"
            fill="none"
            stroke="url(#route)"
            strokeWidth="2.2"
            strokeDasharray="4.5 5"
            strokeLinecap="round"
            filter="url(#softGlow)"
            opacity="0.85"
          />

          {/* moving plane (SVG SMIL animateMotion) */}
          <g filter="url(#softGlow)">
            <g>
              {/* simple plane icon */}
              <path
                d="M 0 -6 L 30 0 L 0 6 L 6 0 Z"
                fill="rgba(180, 255, 240, 0.95)"
              />
              <path
                d="M 6 0 L -10 -10"
                stroke="rgba(180, 255, 240, 0.95)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 6 0 L -10 10"
                stroke="rgba(180, 255, 240, 0.95)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flightArc" />
              </animateMotion>
            </g>
          </g>

          {/* subtle moving “pulse dot” */}
          <circle r="4.8" fill="rgba(0,255,200,0.35)">
            <animateMotion dur="3.6s" repeatCount="indefinite">
              <mpath href="#flightArc" />
            </animateMotion>
          </circle>
        </svg>

        <div className="mt-2 text-xs text-white/55">
          Your AI agent routes:{" "}
          <span className="text-white/75">Consult → Options → Travel → Treatment → Follow-up</span>
        </div>
      </div>

      {/* 3D-ish chips */}
      <div className="mt-3 flex flex-wrap gap-2">
        {["Case review", "Hospital shortlist", "Cost estimate", "Booking", "Follow-up"].map((t) => (
          <span
            key={t}
            className="chip3d inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
