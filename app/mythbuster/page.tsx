"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type MythResult = {
  verdict?: "Correct" | "Incorrect" | "Partially correct" | "Insufficient evidence";
  confidence?: number;
  summary?: string;
  explanation?: string[];
  sources?: { title: string; url: string; snippet: string }[];
  safety_note?: string;
  error?: string;
  status?: number;
  raw?: string;
};

function VerdictBadge({ verdict }: { verdict?: MythResult["verdict"] }) {
  const cls = useMemo(() => {
    switch (verdict) {
      case "Correct":
        return "border-emerald-400/25 bg-emerald-400/10 text-emerald-100";
      case "Incorrect":
        return "border-rose-400/25 bg-rose-400/10 text-rose-100";
      case "Partially correct":
        return "border-amber-300/25 bg-amber-300/10 text-amber-100";
      case "Insufficient evidence":
      default:
        return "border-white/15 bg-white/5 text-white/85";
    }
  }, [verdict]);

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>
      {verdict ?? "—"}
    </span>
  );
}

function clamp01(x: number) {
  if (Number.isNaN(x)) return 0;
  return Math.max(0, Math.min(1, x));
}

export default function MythBuster() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<MythResult | null>(null);
  const [loading, setLoading] = useState(false);

  const examples = [
    "Sugar causes diabetes",
    "Antibiotics work for viral infections",
    "Cold weather causes the common cold",
    "Drinking water detoxes your liver",
  ];

  async function check() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/mythbuster", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statement: text }),
      });

      // Read as text first so we can safely handle non-JSON responses
      const raw = await res.text();

      let data: MythResult;
      try {
        data = JSON.parse(raw);
      } catch {
        data = {
          error: "API did not return JSON (server likely crashed).",
          status: res.status,
          raw,
        };
      }

      setResult(data);
    } catch (e: any) {
      setResult({ error: e?.message ?? "Request failed." });
    } finally {
      setLoading(false);
    }
  }

  const confidencePct =
    typeof result?.confidence === "number"
      ? Math.round(clamp01(result.confidence) * 100)
      : null;

  return (
    <main className="relative min-h-screen text-white">
      {/* Background consistent with your site */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#050814]" />
        <div className="absolute inset-0 hanuman-bg" />
        <div className="absolute inset-0 hanuman-vignette" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <div>
              <div className="text-sm font-semibold tracking-wide">MythBuster</div>
              <div className="text-xs text-white/60">Check health claims with citations</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Back to Home
            </Link>
            <Link
              href="/chat"
              className="btnPrimary rounded-xl px-4 py-2 text-sm font-semibold"
            >
              Talk to an Agent
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <div className="glass rounded-3xl border border-white/10 p-7 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Bust a myth in seconds.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Enter a health statement. MythBuster labels it{" "}
                <span className="text-white/85">Correct</span>,{" "}
                <span className="text-white/85">Incorrect</span>, or{" "}
                <span className="text-white/85">Partially correct</span> — with explanations and trusted sources.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setText(ex)}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/75 hover:bg-white/10"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/65 md:w-[340px]">
              <div className="font-semibold text-white/85">Important</div>
              <p className="mt-2 leading-relaxed">
                MythBuster provides informational support — <span className="text-white/85">not medical advice</span>.
                For emergencies, call your local emergency number.
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <label className="text-sm font-semibold text-white/85">Statement</label>
              <textarea
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#070b1f] p-4 text-sm text-white/90 outline-none focus:border-white/20"
                placeholder='Example: "Sugar causes diabetes."'
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
              />
              <div className="mt-2 text-xs text-white/55">
                Tip: Add detail like “type 2 diabetes” or “in children” to get more precise sources.
              </div>
            </div>

            <button
              onClick={check}
              disabled={loading || text.trim().length < 5}
              className="btnPrimary h-[52px] rounded-2xl px-6 text-sm font-semibold disabled:opacity-50"
            >
              {loading ? "Checking..." : "Check statement"}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-4">
            {/* Error block */}
            {result.error ? (
              <div className="card3d rounded-3xl border border-rose-400/20 bg-rose-400/10 p-6">
                <div className="text-sm font-semibold text-rose-100">Error</div>
                <div className="mt-2 text-sm text-white/80">{result.error}</div>
                {typeof result.status === "number" && (
                  <div className="mt-2 text-xs text-white/60">HTTP status: {result.status}</div>
                )}
                {result.raw && (
                  <pre className="mt-4 max-h-64 overflow-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-white/70">
                    {result.raw}
                  </pre>
                )}
              </div>
            ) : (
              <>
                {/* Verdict card */}
                <div className="card3d rounded-3xl p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-semibold text-white/85">Verdict</div>
                      <VerdictBadge verdict={result.verdict} />
                    </div>

                    {confidencePct !== null && (
                      <div className="text-xs text-white/60">Confidence: {confidencePct}%</div>
                    )}
                  </div>

                  {confidencePct !== null && (
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <div
                        className="h-full bg-white/80"
                        style={{ width: `${confidencePct}%` }}
                      />
                    </div>
                  )}

                  {result.summary && (
                    <p className="mt-4 text-sm leading-relaxed text-white/80">{result.summary}</p>
                  )}

                  {Array.isArray(result.explanation) && result.explanation.length > 0 && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                      {result.explanation.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                    {result.safety_note ??
                      "Not medical advice. This is informational support only. For emergencies, call your local emergency number."}
                  </div>
                </div>

                {/* Sources */}
                {Array.isArray(result.sources) && result.sources.length > 0 && (
                  <div className="card3d rounded-3xl p-7">
                    <div className="text-sm font-semibold text-white/85">Sources</div>
                    <div className="mt-4 space-y-3">
                      {result.sources.map((s, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-white/10 bg-[#070b1f] p-5"
                        >
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-white hover:underline"
                          >
                            {s.title}
                          </a>
                          <div className="mt-1 text-xs text-white/55 break-words">{s.url}</div>
                          <div className="mt-3 text-sm text-white/75">{s.snippet}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
