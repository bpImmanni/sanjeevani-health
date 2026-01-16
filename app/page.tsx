import Reveal from "../components/Reveal";
import FlightPath from "../components/FlightPath";
import AgentConsole from "../components/AgentConsole";
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
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#050814]" />
        <div className="absolute inset-0 opacity-80 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(255,187,80,0.14),transparent_60%),radial-gradient(900px_600px_at_80%_20%,rgba(0,255,200,0.09),transparent_60%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/human-hero.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "min(820px, 70vw)",
            opacity: 0.18,
            filter: "saturate(1.05) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_35%,transparent_35%,rgba(5,8,20,0.75)_70%,rgba(5,8,20,0.92)_100%)]" />
      </div>

      {/* NAVBAR */}
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
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#050814] hover:opacity-90"
          >
            Let us contact you
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
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
              Myth-inspired care. AI-powered coordination.
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Talk to your personal <span className="text-white">AI Care Agent</span>{" "}
              to get treatment in India — faster, clearer, and trusted.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              Sanjeevani Health pairs you with an AI Care Agent that reviews your case,
              shortlists vetted hospitals, compares costs, and coordinates your journey —
              from first call to follow-up.
            </p>

            {/* CTAs — hard fix for “white bars”: always visible text */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#050814] hover:opacity-90"
              >
                <Sparkles className="h-4 w-4" />
                Talk to an Agent
              </a>
              <a
                href="#agent"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See how the agent works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">24h</div>
                <div className="mt-1 text-xs text-white/70">Initial review</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">2–3</div>
                <div className="mt-1 text-xs text-white/70">Care options</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">70–90%</div>
                <div className="mt-1 text-xs text-white/70">Typical savings</div>
              </div>
            </div>
          </div>

          {/* Right hero panel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="ai-scan pointer-events-none absolute inset-0 opacity-50" />

                <div className="text-sm font-semibold text-white/90">
                  Sanjeevani Signal
                </div>

                <p className="mt-2 text-sm text-white/70">
                  Your agent coordinates hospitals, estimates, and logistics — so you don’t have to.
                </p>

                <div className="mt-5">
                  <FlightPath />
                </div>
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
            When treatment is delayed, outcomes can worsen. When costs are unpredictable,
            families hesitate.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Wait times",
                desc: "Specialists, procedures, and approvals can take weeks.",
                icon: <Clock3 className="h-5 w-5 text-white/85" />,
              },
              {
                title: "High cost",
                desc: "Even with insurance, out-of-pocket costs can be heavy.",
                icon: <HeartPulse className="h-5 w-5 text-white/85" />,
              },
              {
                title: "Complex coordination",
                desc: "Reports, travel, hospital selection — overwhelming alone.",
                icon: <ShieldCheck className="h-5 w-5 text-white/85" />,
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
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

      {/* AGENT-FIRST SECTION */}
      <Reveal>
        <section id="agent" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Agent-first care, not an app
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              You don’t need to navigate hospitals and logistics alone. Your AI Care Agent
              handles the complexity — you get clarity, speed, and trusted options.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <AgentConsole />

              <div className="rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="text-sm font-semibold text-white/90">
                  What your agent does
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    1) Reviews your reports and case summary
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    2) Shortlists 2–3 vetted hospitals (JCI/NABH)
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    3) Shares cost ranges and timelines upfront
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    4) Coordinates travel, admission, and follow-ups
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#050814] hover:opacity-90"
                >
                  Start with an Agent
                </a>
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
              Our solution: trusted care in India, coordinated end-to-end
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              We help you choose vetted hospitals, get clear estimates, coordinate travel and care,
              and stay supported after treatment.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Vetted options",
                  desc: "2–3 hospital options aligned to your case.",
                  icon: <BadgeCheck className="h-5 w-5 text-white/85" />,
                },
                {
                  title: "Transparent cost",
                  desc: "Indicative ranges upfront before you travel.",
                  icon: <ShieldCheck className="h-5 w-5 text-white/85" />,
                },
                {
                  title: "End-to-end support",
                  desc: "Travel, logistics, follow-ups — coordinated.",
                  icon: <Clock3 className="h-5 w-5 text-white/85" />,
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-white/10 bg-[#070b1f] p-6"
                >
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
              Professional, scan-friendly comparison. Exact prices vary; these are indicative ranges.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <CostCard
                title="CABG (Heart Bypass)"
                icon={<HeartPulse className="h-5 w-5 text-white/85" />}
                india="$10k–$20k"
                usa="$80k–$200k"
                indiaPct={20}
                usaPct={90}
              />
              <CostCard
                title="Knee Replacement"
                icon={<Bone className="h-5 w-5 text-white/85" />}
                india="$7k–$15k"
                usa="$30k–$70k"
                indiaPct={18}
                usaPct={70}
              />
              <CostCard
                title="Liver Transplant"
                icon={<Syringe className="h-5 w-5 text-white/85" />}
                india="$30k–$60k"
                usa="$200k–$300k+"
                indiaPct={25}
                usaPct={95}
              />
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
              <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
              <div className="rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-4 space-y-2 text-sm text-white/75">
                  <div><span className="text-white/60">Email:</span> your-email@domain.com</div>
                  <div><span className="text-white/60">Phone:</span> +1 (xxx) xxx-xxxx</div>
                  <div><span className="text-white/60">WhatsApp:</span> +91 xxxxxxxxxx</div>
                  <div><span className="text-white/60">Office:</span> City, State, India</div>
                </div>
              </div>

              <div id="contact" className="rounded-2xl border border-white/10 bg-[#070b1f] p-6">
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
