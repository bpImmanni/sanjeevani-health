"use client";

import { useEffect, useState } from "react";

export default function HeroFlight() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // triggers animation on first load
    const t = setTimeout(() => setPlay(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      <div className="relative flex items-center justify-between text-xs text-white/70">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/50" />
          USA
        </span>
        <span className="inline-flex items-center gap-2">
          India
          <span className="h-2 w-2 rounded-full bg-white/50" />
        </span>
      </div>

      {/* curved path */}
      <svg
        className="relative mt-2 h-[150px] w-full"
        viewBox="0 0 1000 220"
        preserveAspectRatio="none"
      >
        <path
          d="M40,170 C260,40 740,40 960,170"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
        />
        <path
          d="M40,170 C260,40 740,40 960,170"
          fill="none"
          stroke="rgba(255,193,120,0.35)"
          strokeWidth="3"
          strokeDasharray="10 10"
        />
      </svg>

      {/* PLANE moving on the path using offset-path */}
      <div
        className={[
          "absolute left-0 top-0 h-full w-full",
          play ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <div className="flight-plane" />
      </div>

      <div className="relative mt-2 flex items-center justify-between text-xs text-white/55">
        <span>Consult → Options → Travel → Treatment → Follow-up</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          Care Path
        </span>
      </div>

      {/* CSS for path motion */}
      <style jsx>{`
        .flight-plane {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(5, 8, 20, 0.65);
          backdrop-filter: blur(8px);
          display: grid;
          place-items: center;

          /* the magic */
          offset-path: path("M40,170 C260,40 740,40 960,170");
          offset-distance: 0%;
          offset-rotate: auto;

          animation: fly 3.2s ease-in-out forwards;
          box-shadow: 0 10px 35px rgba(0,0,0,0.35);
        }

        .flight-plane::after {
          content: "✈";
          font-size: 18px;
          opacity: 0.95;
        }

        @keyframes fly {
          0% { offset-distance: 0%; transform: scale(0.95); opacity: 0; }
          10% { opacity: 1; }
          100% { offset-distance: 100%; transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
