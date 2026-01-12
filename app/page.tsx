import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050814] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <span className="text-base font-semibold tracking-wide">
              Sanjeevani Health
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#story">Story</a>
            <a className="hover:text-white" href="#cost">Cost</a>
            <a className="hover:text-white" href="#trust">Trust</a>
            <a className="hover:text-white" href="#team">Team</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#050814] hover:opacity-90"
            >
              Let us contact you
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="particle left-[10%] top-[20%]" />
          <div className="particle left-[25%] top-[60%] [animation-delay:1s]" />
          <div className="particle left-[40%] top-[30%] [animation-delay:2s]" />
          <div className="particle left-[65%] top-[50%] [animation-delay:0.5s]" />
          <div className="particle left-[80%] top-[25%] [animation-delay:1.7s]" />
        </div>

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              Ancient urgency. Modern precision.
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              When time matters, healthcare should move faster.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              Sanjeevani Health helps US nationals and NRIs access world-class treatment in India
              with transparent pricing, vetted hospitals, and end-to-end support — from first call to follow-up.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#050814] hover:opacity-90"
              >
                Talk to us
              </a>
              <a
                href="#cost"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See cost comparison
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">24h</div>
                <div className="mt-1 text-xs text-white/70">Review & guidance</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">3</div>
                <div className="mt-1 text-xs text-white/70">Hospital options</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">70–90%</div>
                <div className="mt-1 text-xs text-white/70">Typical savings</div>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
              <div className="rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                <div className="text-sm font-semibold text-white/90">Sanjeevani Signal</div>
                <p className="mt-2 text-sm text-white/70">
                  We combine trust + logistics + clinical quality to deliver timely care —
                  inspired by the Sanjeevani story of bringing healing before it’s too late.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>US → India</span>
                    <span>Care Path</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-white/70" />
                  </div>
                  <div className="mt-4 text-xs text-white/60">
                    Next: we’ll replace this panel with a mythology-inspired illustration + smart animation.
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <Reveal>
        <section id="story" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            From myth to mission
          </h2>
          <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
            In the Ramayana, Hanuman carried the Sanjeevani herb across distance and uncertainty —
            not as a symbol of ritual, but of urgency and compassion. Sanjeevani Health brings that same
            urgency to modern healthcare: making timely, transparent, and trusted treatment accessible across borders.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Timeliness", desc: "Faster access when delays can cost outcomes." },
              { title: "Transparency", desc: "Clear options and pricing — no hidden surprises." },
              { title: "Trust", desc: "Vetted hospitals and guided support end-to-end." },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-white/70">{x.desc}</div>
              </div>
            ))}
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
              Example procedures often show major savings in India while maintaining global standards.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "CABG (Heart Bypass)", india: "$10k–$20k", usa: "$80k–$200k" },
                { name: "Knee Replacement", india: "$7k–$15k", usa: "$30k–$70k" },
                { name: "Liver Transplant", india: "$30k–$60k", usa: "$200k–$300k+" },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border border-white/10 bg-[#070b1f] p-6">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="mt-4 space-y-2 text-sm text-white/75">
                    <div className="flex justify-between">
                      <span>India</span>
                      <span className="font-semibold text-white">{p.india}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>USA</span>
                      <span className="font-semibold text-white">{p.usa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-white/50">
              Note: Numbers are indicative ranges.
            </div>
          </div>
        </section>
      </Reveal>

      {/* TRUST */}
      <Reveal>
        <section id="trust" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Trust, safety, and compliance
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Accredited hospitals", desc: "We prioritize partners with global-quality standards (JCI / NABH)." },
              { title: "Privacy-first", desc: "Consent-based handling of sensitive health data with strong practices." },
              { title: "End-to-end support", desc: "Visa, travel help, and post-op follow-up coordination." },
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
