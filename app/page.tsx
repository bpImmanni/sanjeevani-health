import Link from "next/link";

import Reveal from "../components/Reveal";
import FlightPath from "../components/FlightPath";
import CostCard from "../components/CostCard";

import {
  HeartPulse,
  Bone,
  Syringe,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Sparkles,
  Bot,
  Wand2,
  MessageSquareText,
  CalendarCheck,
  ScanSearch,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* ===== Background (base + glow + Hanuman watermark) ===== */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#050814]" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(255,187,80,0.14),transparent_60%),radial-gradient(900px_600px_at_80%_15%,rgba(0,255,200,0.10),transparent_60%)]" />

        {/* Big centered watermark (your file in /public) */}
        <div
          className="absolute inset-0 opacity-[0.22] mix-blend-screen"
          style={{
            backgroundImage: "url('/human-hero.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "min(920px, 85vw)",
            filter: "saturate(115%) contrast(115%)",
          }}
        />

        {/* extra vignette to keep it premium */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_45%,transparent_40%,rgba(0,0,0,0.55)_75%)]" />
      </div>

      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold tracking-wide">
                Sanjeevani Health
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[11px] text-white/80">
                <Bot className="h-3.5 w-3.5" />
                AI Care Agent
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#problem">Problem</a>
            <a className="hover:text-white" href="#agent">Agent</a>
            <a className="hover:text-white" href="#solution">Solution</a>
            <a className="hover:text-white" href="#cost">Cost</a>
            <a className="hover:text-white" href="#trust">Trust</a>
            <a className="hover:text-white" href="#team">Team</a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#050814] hover:opacity-90"
          >
            Let us contact you
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Particles */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="particle left-[10%] top-[20%]" />
          <div className="particle left-[25%] top-[60%] [animation-delay:1s]" />
          <div className="particle left-[40%] top-[30%] [animation-delay:2s]" />
          <div className="particle left-[65%] top-[50%] [animation-delay:0.5s]" />
          <div className="particle left-[80%] top-[25%] [animation-delay:1.7s]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-amber-200/70" />
              Myth-inspired mission. AI-powered care coordination.
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Talk to your personal{" "}
              <span className="text-white">AI Care Agent</span>{" "}
              — it handles the hospital search, cost, and bookings.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              We don’t make you “use another app.” You chat with an agent.
              It reads your case, recommends best-fit doctors and hospitals,
              schedules consults, and coordinates the journey end-to-end.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#050814] hover:opacity-90"
              >
                <Sparkles className="h-4 w-4" />
                Talk to an Agent
              </a>

              <a
                href="#agent"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See how the agent works
              </a>

              <Link
                href="/mythbuster"
                className="rounded-xl border border-amber-200/25 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-200/15"
              >
                Try MythBuster free
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              <div className="card3d rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">24h</div>
                <div className="mt-1 text-xs text-white/70">Initial review</div>
              </div>
              <div className="card3d rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">2–3</div>
                <div className="mt-1 text-xs text-white/70">Care options</div>
              </div>
              <div className="card3d rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">70–90%</div>
                <div className="mt-1 text-xs text-white/70">Typical savings</div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="ai-scan pointer-events-none absolute inset-0 opacity-60" />

                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-white/90">
                    Sanjeevani Signal
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                    <span className="ai-dot" />
                    Agent active
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/70">
                  Your agent coordinates hospitals, estimates, and logistics — so you don’t have to.
                </p>

                {/* Flight */}
                <div className="mt-5">
                  <FlightPath />
                </div>

                <p className="mt-4 text-xs text-white/55">
                  Premium AI facilitation for a real-world mission: accessible, affordable care.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-200/10 blur-2xl" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Reveal>
        <section id="problem" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            The problem we solve
          </h2>
          <p className="mt-3 max-w-3xl text-white/75 leading-relaxed">
            In the US, the biggest barriers are time, cost, and coordination.
            When treatment is delayed, outcomes can worsen. When costs are unpredictable, families hesitate.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Wait times", desc: "Specialists, procedures, and approvals can take weeks.", icon: <Clock3 className="h-5 w-5 text-white/85" /> },
              { title: "High cost", desc: "Even with insurance, out-of-pocket costs can be heavy.", icon: <HeartPulse className="h-5 w-5 text-white/85" /> },
              { title: "Complex coordination", desc: "Reports, travel, hospital selection — overwhelming alone.", icon: <ShieldCheck className="h-5 w-5 text-white/85" /> },
            ].map((x) => (
              <div key={x.title} className="card3d rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    {x.icon}
                  </div>
                  <div className="text-lg font-semibold">{x.title}</div>
                </div>
                <div className="mt-3 text-sm text-white/70">{x.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* AGENT */}
      <Reveal>
        <section id="agent" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              AI Agent first — you chat, the agent handles everything
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Our agent reads your case, recommends best-fit doctors, schedules consults, and coordinates end-to-end.
              You stay informed, but you don’t do the busywork.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                { title: "Reads your case", desc: "Understands reports + goals.", icon: <ScanSearch className="h-5 w-5 text-white/85" /> },
                { title: "Recommends doctors", desc: "Best match for your condition.", icon: <Wand2 className="h-5 w-5 text-white/85" /> },
                { title: "Chats with you", desc: "Preferences, timing, comfort.", icon: <MessageSquareText className="h-5 w-5 text-white/85" /> },
                { title: "Books & coordinates", desc: "Consults, travel, follow-up.", icon: <CalendarCheck className="h-5 w-5 text-white/85" /> },
              ].map((x) => (
                <div key={x.title} className="card3d rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      {x.icon}
                    </div>
                    <div className="text-base font-semibold">{x.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-white/70">{x.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="card3d relative overflow-hidden rounded-2xl border border-amber-200/20 bg-amber-200/10 p-6">
                <div className="absolute inset-0 opacity-40 ai-scan pointer-events-none" />
                <div className="flex items-center gap-2 text-amber-100">
                  <Sparkles className="h-4 w-4" />
                  <div className="text-sm font-semibold">MythBuster (free)</div>
                </div>
                <p className="mt-2 text-sm text-white/75">
                  Tell it anything you believe about health. It explains what’s true, what’s false, and why —
                  with simple reasoning.
                </p>

                <Link
                  href="/mythbuster"
                  className="mt-5 inline-flex w-fit items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#050814] hover:opacity-90"
                >
                  Try MythBuster free
                </Link>
              </div>

              <div className="card3d rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="text-sm font-semibold text-white/90">What makes this unique</div>
                <p className="mt-2 text-sm text-white/70">
                  Traditional apps make you click through forms. Our AI agent acts like a facilitator:
                  it reads, recommends, coordinates, and keeps you updated — while you focus on health.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SOLUTION */}
      <Reveal>
        <section id="solution" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Our solution: AI Agent + trusted care in India
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              We shortlist vetted hospitals, provide transparent cost ranges, and coordinate travel and follow-ups —
              powered by your personal AI Care Agent.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "Vetted options", desc: "2–3 hospital options aligned to your case.", icon: <BadgeCheck className="h-5 w-5 text-white/85" /> },
                { title: "Transparent cost", desc: "Indicative ranges upfront before you travel.", icon: <ShieldCheck className="h-5 w-5 text-white/85" /> },
                { title: "End-to-end support", desc: "Travel, logistics, follow-ups — coordinated.", icon: <Clock3 className="h-5 w-5 text-white/85" /> },
              ].map((x) => (
                <div key={x.title} className="card3d rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      {x.icon}
                    </div>
                    <div className="text-lg font-semibold">{x.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-white/70">{x.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* COST */}
      <Reveal>
        <section id="cost" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Cost comparison (India vs USA)
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Scan-friendly comparison. Exact prices vary; these are indicative ranges.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <CostCard title="CABG (Heart Bypass)" icon={<HeartPulse className="h-5 w-5 text-white/85" />} india="$10k–$20k" usa="$80k–$200k" indiaPct={20} usaPct={90} />
              <CostCard title="Knee Replacement" icon={<Bone className="h-5 w-5 text-white/85" />} india="$7k–$15k" usa="$30k–$70k" indiaPct={18} usaPct={70} />
              <CostCard title="Liver Transplant" icon={<Syringe className="h-5 w-5 text-white/85" />} india="$30k–$60k" usa="$200k–$300k+" indiaPct={25} usaPct={95} />
            </div>

            <div className="mt-6 text-xs text-white/50">
              Note: Indicative ranges. Final estimates depend on case complexity and hospital.
            </div>
          </div>
        </section>
      </Reveal>

      {/* TRUST */}
      <Reveal>
        <section id="trust" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Trust, safety, and standards
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Accredited hospitals", desc: "We prioritize global-quality standards (JCI / NABH)." },
              { title: "Privacy-first", desc: "Consent-based handling of sensitive information." },
              { title: "Continuity of care", desc: "Coordination from consult to follow-up." },
            ].map((x) => (
              <div key={x.title} className="card3d rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-white/70">{x.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* TEAM + CONTACT */}
      <Reveal>
        <section id="team" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Talk to our team
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Call, text, or leave your details. We’ll reach out to schedule a consultation.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="card3d rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-4 space-y-2 text-sm text-white/75">
                  <div><span className="text-white/60">Email:</span> your-email@domain.com</div>
                  <div><span className="text-white/60">Phone:</span> +1 (xxx) xxx-xxxx</div>
                  <div><span className="text-white/60">WhatsApp:</span> +91 xxxxxxxxxx</div>
                  <div><span className="text-white/60">Office:</span> City, State, India</div>
                </div>
              </div>

              <div id="contact" className="card3d rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="text-sm font-semibold">Let us contact you</div>
                <p className="mt-2 text-sm text-white/70">
                  Share your details and we’ll call you back.
                </p>

                <a
                  href="https://forms.gle/your-google-form-link"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#050814] hover:opacity-90"
                >
                  Open Google Form
                </a>

                <p className="mt-3 text-xs text-white/50">
                  Replace the link above with your real Google Form URL.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5 text-sm text-white/60">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>© {new Date().getFullYear()} Sanjeevani Health. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
