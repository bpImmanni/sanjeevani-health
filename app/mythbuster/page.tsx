import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function MythBusterPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-sm text-amber-100">
            <Sparkles className="h-4 w-4" />
            MythBuster (free)
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Ask any health belief. Get a clear explanation.
          </h1>

          <p className="mt-3 text-white/75">
            This page can become a real interactive tool later (chat + citations).
            For now it’s a clean landing page for the feature.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#070b1f] p-5">
            <label className="text-sm text-white/70">Try a myth:</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none"
              placeholder='e.g., "Does cold water cause colds?"'
            />
            <button className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#050814] hover:opacity-90">
              Analyze myth (coming next)
            </button>

            <p className="mt-3 text-xs text-white/50">
              Next step: we’ll wire this to your real AI logic + safe health disclaimers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
