// app/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import FlightPath from "../components/FlightPath";
import CostCard from "../components/CostCard";
import AgentBadge from "../components/AgentBadge";

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
  Stethoscope,
  AlertTriangle,
} from "lucide-react";

/** ---------- Helpers: PNG Icon badge (keeps layout stable) ---------- */
function IconBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
      <img
        src={src}
        alt={alt}
        className="h-7 w-7 object-contain opacity-95"
        draggable={false}
      />
    </div>
  );
}

function DisclaimerInline() {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70 leading-relaxed">
      <div className="flex items-start gap-2">
        <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-200/90" />
        <div>
          <span className="font-semibold text-white/85">Important:</span> Sanjeevani Health provides
          coordination and informational support — <span className="text-white/85">not medical advice</span>.
          For emergencies, call <span className="text-white/85">911</span> (US) or your local emergency number.
        </div>
      </div>
    </div>
  );
}

/** ---------- Trust strip: now uses your generated icons ---------- */
function TrustStrip() {
  return (
    <div className="mt-8 grid gap-3 md:grid-cols-3">
      <div className="card3d rounded-2xl p-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <img
            src="/public/icons/privacy-lock.png"
            alt="Privacy-first"
            className="h-4 w-4 object-contain opacity-95"
            draggable={false}
          />
          Privacy-first
        </div>
        <div className="mt-1 text-xs text-white/70">
          Patient data isn’t shared anywhere unless you explicitly permit it.
        </div>
      </div>

      <div className="card3d rounded-2xl p-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <img
            src="/public/icons/audit-log.png"
            alt="Access audit logs"
            className="h-4 w-4 object-contain opacity-95"
            draggable={false}
          />
          Access audit logs
        </div>
        <div className="mt-1 text-xs text-white/70">
          We maintain an audit trail of who accessed records and when (for authorized users).
        </div>
      </div>

      <div className="card3d rounded-2xl p-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <img
            src="/public/icons/hipaa-badge.png"
            alt="HIPAA aligned"
            className="h-4 w-4 object-contain opacity-95"
            draggable={false}
          />
          HIPAA aligned
        </div>
        <div className="mt-1 text-xs text-white/70">
          Designed for HIPAA compliance with consent-based workflows and least-privilege access.
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* GLOBAL BACKGROUND (Hanuman must NEVER disappear) */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#050814]" />
        <div className="absolute inset-0 hanuman-bg" />
        <div className="absolute inset-0 hanuman-vignette" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-wide">Sanjeevani Health</span>
              <AgentBadge />
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

          <Link href="/chat" className="btnPrimary rounded-xl px-4 py-2 text-sm font-semibold">
            Talk to an Agent
          </Link>
        </div>
      </header>

      {/* HERO */}
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
          {/* LEFT */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-amber-200/70" />
              Myth-inspired mission. AI-powered healthcare access.
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Don’t use an app.
              <br />
              Talk to your personal <span className="text-white">AI Care Agent</span>.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              It reads your case, recommends best-fit doctors, sets up consults, compares costs,
              and coordinates treatment + travel — while you sit back and stay informed.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/chat"
                className="btnPrimary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                <Sparkles className="h-4 w-4" />
                Talk to an Agent
              </Link>

              <a
                href="#agent"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See how the agent works
              </a>

              {/* GOLD MythBuster button stays */}
              <Link
                href="/mythbuster"
                className="mythbtn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                <Bot className="h-4 w-4" />
                Try MythBuster free
              </Link>
            </div>

            {/* Disclaimers */}
            <DisclaimerInline />

            {/* Trust strip */}
            <TrustStrip />

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              <div className="card3d rounded-2xl p-4">
                <div className="text-2xl font-semibold">24h</div>
                <div className="mt-1 text-xs text-white/70">Initial review</div>
              </div>
              <div className="card3d rounded-2xl p-4">
                <div className="text-2xl font-semibold">2–3</div>
                <div className="mt-1 text-xs text-white/70">Care options</div>
              </div>
              <div className="card3d rounded-2xl p-4">
                <div className="text-2xl font-semibold">70–90%</div>
                <div className="mt-1 text-xs text-white/70">Typical savings</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="glass rounded-3xl p-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="ai-scan pointer-events-none absolute inset-0 opacity-30" />

                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-white/90">Sanjeevani Signal</div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                    <span className="ai-dot" />
                    Agent active
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/70">
                  Your agent coordinates hospitals, estimates, consults, and logistics — so you don’t have to.
                </p>

                <div className="mt-5">
                  <FlightPath />
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/65">
                  <span className="font-semibold text-white/80">Note:</span> Informational and coordination support only.
                  Not for emergencies.
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
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">The problem we solve</h2>
          <p className="mt-3 max-w-3xl text-white/75 leading-relaxed">
            In the US, the biggest barriers are time, cost, and coordination. When treatment is delayed,
            outcomes can worsen. When costs are unpredictable, families hesitate.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Wait times", desc: "Specialists, procedures, and approvals can take weeks.", icon: <Clock3 className="h-5 w-5 text-white/85" /> },
              { title: "High cost", desc: "Even with insurance, out-of-pocket costs can be heavy.", icon: <HeartPulse className="h-5 w-5 text-white/85" /> },
              { title: "Complex coordination", desc: "Reports, travel, hospital selection — overwhelming alone.", icon: <ShieldCheck className="h-5 w-5 text-white/85" /> },
            ].map((x) => (
              <div key={x.title} className="card3d rounded-2xl p-6">
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
          <div className="card3d rounded-3xl p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              AI Agent first — you chat, we handle the work
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Our agent reads your case, recommends best-fit doctors, schedules consults, and coordinates end-to-end.
              You stay in control without doing busywork.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                { title: "Reads your case", desc: "Understands reports + goals.", icon: <ScanSearch className="h-5 w-5 text-white/85" /> },
                { title: "Recommends doctors", desc: "Best match for your condition.", icon: <Wand2 className="h-5 w-5 text-white/85" /> },
                { title: "Chats with you", desc: "Preferences, timeline, comfort.", icon: <MessageSquareText className="h-5 w-5 text-white/85" /> },
                { title: "Books & coordinates", desc: "Consults, travel, follow-up.", icon: <CalendarCheck className="h-5 w-5 text-white/85" /> },
              ].map((x) => (
                <div key={x.title} className="card3d rounded-2xl bg-[#070b1f] p-6">
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

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/chat" className="btnPrimary rounded-xl px-5 py-3 text-sm font-semibold">
                Open Agent Chat
              </Link>

              <Link href="/mythbuster" className="mythbtn rounded-xl px-5 py-3 text-sm font-semibold">
                Try MythBuster free
              </Link>

              <span className="text-xs text-white/60">
                <Stethoscope className="mr-1 inline h-4 w-4" />
                Not medical advice. For emergencies, call 911.
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SOLUTION */}
      <Reveal>
        <section id="solution" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="card3d rounded-3xl p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Our solution: AI Agent + trusted care in India
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              We shortlist vetted hospitals, provide transparent cost ranges, and coordinate travel + follow-ups.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "Vetted options", desc: "2–3 hospital options aligned to your case.", icon: <BadgeCheck className="h-5 w-5 text-white/85" /> },
                { title: "Transparent cost", desc: "Indicative ranges upfront before you travel.", icon: <ShieldCheck className="h-5 w-5 text-white/85" /> },
                { title: "End-to-end support", desc: "Travel, logistics, follow-ups — coordinated.", icon: <Clock3 className="h-5 w-5 text-white/85" /> },
              ].map((x) => (
                <div key={x.title} className="card3d rounded-2xl bg-[#070b1f] p-6">
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

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              <span className="font-semibold text-white/80">Disclaimer:</span> Final treatment decisions are made by
              licensed clinicians. We support coordination and information based on what you share.
            </div>
          </div>
        </section>
      </Reveal>

      {/* COST */}
      <Reveal>
        <section id="cost" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="card3d rounded-3xl p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Cost comparison (India vs USA)
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Scan-friendly comparison. Exact prices vary; these are indicative ranges.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              <span className="font-semibold text-white/80">Cost disclaimer:</span> Numbers shown are estimates for
              educational/decision support. Quotes depend on medical review, hospital, surgeon, city, and case complexity.
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <CostCard title="CABG (Heart Bypass)" icon={<HeartPulse className="h-5 w-5 text-white/85" />} india="$10k–$20k" usa="$80k–$200k" indiaPct={20} usaPct={90} />
              <CostCard title="Knee Replacement" icon={<Bone className="h-5 w-5 text-white/85" />} india="$7k–$15k" usa="$30k–$70k" indiaPct={18} usaPct={70} />
              <CostCard title="Liver Transplant" icon={<Syringe className="h-5 w-5 text-white/85" />} india="$30k–$60k" usa="$200k–$300k+" indiaPct={25} usaPct={95} />
            </div>
          </div>
        </section>
      </Reveal>

      {/* TRUST */}
      <Reveal>
        <section id="trust" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Trust, privacy, and compliance
          </h2>
          <p className="mt-3 max-w-3xl text-white/75">
            Built for sensitive healthcare workflows: consent-first, auditable access, and HIPAA-aligned controls.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "HIPAA compliance",
                desc: "Designed for HIPAA compliance (administrative, physical, and technical safeguards).",
                img: "/icons/hipaa-badge.png",
              },
              {
                title: "Consent-based sharing",
                desc: "No patient data is shared outside the platform without explicit permission.",
                img: "/icons/Consent.png",
              },
              {
                title: "Access audit trail",
                desc: "Audit logs track authorized access to patient records (who/what/when).",
                img: "/icons/audit-log.png",
              },
              {
                title: "Privacy-first defaults",
                desc: "Least-privilege access, role-based controls, and secure handling of reports.",
                img: "/icons/privacy-lock.png",
              },
              {
                title: "Accredited hospitals",
                desc: "We prioritize global-quality standards (JCI / NABH) where applicable.",
                icon: <BadgeCheck className="h-5 w-5 text-white/85" />,
              },
              {
                title: "Not medical advice",
                desc: "We support coordination and information — clinical decisions are made by clinicians.",
                icon: <Stethoscope className="h-5 w-5 text-white/85" />,
              },
            ].map((x) => (
              <div key={x.title} className="card3d rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  {"img" in x ? (
                    <IconBadge src={x.img!} alt={x.title} />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      {x.icon}
                    </div>
                  )}
                  <div className="text-lg font-semibold">{x.title}</div>
                </div>
                <div className="mt-2 text-sm text-white/70">{x.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <details className="card3d rounded-2xl p-6">
              <summary className="cursor-pointer select-none text-sm font-semibold text-white/85">
                Privacy & patient data (details)
              </summary>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <p>• We use consent-based workflows for sharing with providers.</p>
                <p>• Access is restricted by roles and “minimum necessary” principle.</p>
                <p>• You can request deletion/export of your information (policy-dependent).</p>
              </div>
            </details>

            <details className="card3d rounded-2xl p-6">
              <summary className="cursor-pointer select-none text-sm font-semibold text-white/85">
                Audit logs & compliance (details)
              </summary>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <p>• Audit trail records authorized user access and key actions.</p>
                <p>• Designed for HIPAA compliance; we can support BAAs when needed (as you operationalize).</p>
                <p>• Security controls evolve as the product moves from demo → production.</p>
              </div>
            </details>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
            <span className="font-semibold text-white/80">Legal:</span> This site is for informational and care coordination purposes only.
            It does not establish a doctor–patient relationship. If you believe you may have a medical emergency, call your local emergency number.
          </div>
        </section>
      </Reveal>

      {/* TEAM */}
      <Reveal>
        <section id="team" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="card3d rounded-3xl p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Talk to our team
            </h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Call, text, or leave your details. We’ll reach out to schedule a consultation.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="card3d rounded-2xl bg-[#070b1f] p-6">
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-4 space-y-2 text-sm text-white/75">
                  <div><span className="text-white/60">Email:</span> bpimmanni@gmail.com</div>
                  <div><span className="text-white/60">Phone:</span> +1 (781) 671-4423</div>
                  <div><span className="text-white/60">WhatsApp:</span> +1 (781) 671-4423</div>
                  <div><span className="text-white/60">Office:</span> Waltham, MA, USA</div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/60">
                  <span className="font-semibold text-white/80">Privacy note:</span> Only share medical reports through the secure flow.
                  Avoid sending sensitive data over plain email/SMS.
                </div>
              </div>

              <div id="contact" className="card3d rounded-2xl bg-[#070b1f] p-6">
                <div className="text-sm font-semibold">Let us contact you</div>
                <p className="mt-2 text-sm text-white/70">Share your details and we’ll call you back.</p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSch7HktlNUwpj3dDnvVDMB0rdzBJQONWRVSZ3Vh0xII2QKUAw/viewform?usp=sharing&ouid=110541935064243557937"
                  target="_blank"
                  rel="noreferrer"
                  className="btnPrimary mt-5 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold"
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

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5 text-sm text-white/60">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>© {new Date().getFullYear()} Sanjeevani Health. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
              <a className="hover:text-white" href="#trust">Disclaimers</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
