import Image from "next/image";
import { Fragment } from "react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur">
      <div className="container-safe flex items-center justify-between py-4 md:py-6 md:grid md:grid-cols-[auto_1fr_auto]">
        <div className="flex items-center gap-3">
          <Image src="/logo-tank.png" alt="Tanky" width={103} height={58} />
        </div>
        <nav className="hidden md:flex justify-self-center items-center ring-1 ring-white/15 rounded-xl px-2 py-1 text-xl text-foreground/80">
          <a href="#features" className="rounded-full font-bold  px-4 py-2 hover:bg-white/5 transition">Feature</a>
          <a href="#rewards" className="rounded-full font-bold px-4 py-2 hover:bg-white/5 transition">Weekly Rewards</a>
          <a href="#roadmap" className="rounded-full font-bold px-4 py-2 hover:bg-white/5 transition">Roadmap</a>
        </nav>
        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden sm:inline-flex md:inline-flex items-center rounded-full bg-accent text-black text-sm font-semibold px-5 py-2 shadow-[0_8px_24px_rgba(215,255,58,0.35)] hover:brightness-95"
        >
          Join in Discord
        </a>

        {/* Mobile menu */}
        <details className="md:hidden relative">
          <summary className="list-none rounded-full border border-white/15 p-2 inline-flex items-center justify-center" aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-xl border border-white/10 bg-[#0b1821] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
            <a href="#features" className="block rounded-lg px-3 py-2 hover:bg-white/5">Feature</a>
            <a href="#rewards" className="block rounded-lg px-3 py-2 hover:bg-white/5">Weekly Rewards</a>
            <a href="#roadmap" className="block rounded-lg px-3 py-2 hover:bg-white/5">Roadmap</a>
            <div className="mt-2 pt-2 border-t border-white/10">
              <a href="#" className="block text-center rounded-full bg-accent text-black text-sm font-semibold px-4 py-2 mt-2">Join in Discord</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* stars */}
      <div className="tanky-star" style={{ left: "20%", top: "180px" }} />
      <div className="tanky-star" style={{ left: "50%", top: "120px" }} />
      <div className="tanky-star" style={{ left: "80%", top: "220px" }} />
      <div className="container-safe relative pt-16 md:pt-24">
        <div className="text-center">
          <h1 className="heading-display text-5xl md:text-7xl">Tank Battle Royale</h1>
          <p className="mt-4 text-muted text-lg md:text-xl">
            A 2D tank battle royale game build on Solana
          </p>
          <div className="mt-8">
            <button className="btn-accent rounded-xl px-6 py-3 text-base font-semibold shadow-[0_8px_24px_rgba(215,255,58,0.35)]">
              Launch App
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-8 md:mt-12 mx-[calc(50%-50vw)] w-screen">
        <Image
          src="/tank-hero.png"
          alt="Tank"
          width={1440}
          height={570}
          className="w-full h-auto object-cover select-none pointer-events-none"
          priority
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />
      </div>
    </section>
  );
}

function FeatureCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="feature-frame relative rounded-[36px] p-3 md:p-4 bg-[#06131a] border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="pointer-events-none absolute inset-0 rounded-[36px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
      <div className="rounded-[28px] overflow-hidden border border-white/12 bg-[#0b1821]">
        <div className="relative aspect-[4/5]">
          <Image src={image} alt="" fill className="object-cover" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute left-4 right-4 bottom-4">
            <div className="rounded-2xl border border-[rgba(215,255,58,0.45)] bg-[rgba(9,17,23,0.65)] backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <div className="px-5 py-4 text-white">
                <div className="font-extrabold">{title}</div>
                <div className="text-sm text-white/85 mt-1">{desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="container-safe pt-16 md:pt-24">
      <h2 className="heading-display text-4xl md:text-5xl text-center">Feature</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-10">
        <FeatureCard
          image="/feat-1.jpg"
          title="Skill over money"
          desc="Victory is based on skill, not purchases"
        />
        <div className="md:translate-y-12">
          <FeatureCard
            image="/feat-2.jpg"
            title="Hold-to-Play"
            desc="Joined ranked matches by holding STANKY"
          />
        </div>
        <FeatureCard
          image="/feat-3.jpg"
          title="Built on Solana"
          desc="Secure, non-custodial, and fast"
        />
      </div>
    </section>
  );
}

function Rewards() {
  return (
    <section id="rewards" className="container-safe pt-20 md:pt-28">
      <div className="rewards-panel rounded-[36px] p-8 md:p-12 relative overflow-hidden">
        <h2 className="relative heading-display text-5xl md:text-6xl text-center md:text-left">Weekly Rewards</h2>
        <p className="relative text-muted mt-2 text-center md:text-left">Top 10% of players qualify for on-chain prices every week</p>
        <div className="relative grid md:grid-cols-[1fr_1.3fr] gap-10 mt-12">
          <ul className="space-y-6 text-muted self-center md:self-start">
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent bullet-accent"></span> Top 10% of player</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent bullet-accent"></span> Mainet Release</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent bullet-accent"></span> Custom Rooms</li>
          </ul>
          <div className="rewards-board p-6 md:p-8">
            <div className="grid-lines" />

            {/* ghost numbers */}
            <div className="rewards-ghost" style={{ left: '28%', top: '16%', fontSize: '48px' }}>02</div>
            <div className="rewards-ghost" style={{ left: '50%', top: '6%', fontSize: '56px', transform: 'translateX(-50%)' }}>01</div>
            <div className="rewards-ghost" style={{ right: '28%', top: '16%', fontSize: '48px' }}>03</div>

            {/* top 3 */}
            <div className="grid grid-cols-3 gap-6 relative">
              {[
                { img: "/avatar-1.png", name: "CrytoTank", tag: "@cryptotank" },
                { img: "/avatar-2.png", name: "DarthInvade", tag: "@darthvadeee" },
                { img: "/avatar-3.png", name: "SolanaMaster", tag: "@somaster" },
              ].map((p, i) => (
                <div key={i} className="text-center">
                  <div className={`mx-auto w-20 h-20 rounded-full overflow-hidden relative ${i===1 ? 'avatar-neon' : ''}`}>
                    <Image src={p.img} alt="" fill className="object-cover" />
                  </div>
                  <div className="mt-3 font-semibold">{p.name}</div>
                  <div className="text-xs text-muted">{p.tag}</div>
                </div>
              ))}
            </div>

            {/* bottom list */}
            <div className="mt-8 space-y-4">
              {[
                { img: "/avatar-4.png", name: "BattleKing", tag: "@battle128" },
                { img: "/avatar-5.png", name: "BlitzBuster", tag: "@bblitzz" },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={p.img} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="text-xs text-muted">{p.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    { step: 1, side: 'left' as const, title: "MVPTest Launch" },
    { step: 2, side: 'right' as const, title: "MVPTest Launch" },
    { step: 3, side: 'left' as const, title: "MVPTest Launch" },
    { step: 4, side: 'right' as const, title: "MVPTest Launch" },
  ];

  return (
    <section id="roadmap" className="container-safe pt-24 md:pt-32 pb-24">
      <h2 className="heading-display text-5xl md:text-6xl text-center">Roadmap</h2>
      {/* Desktop / Tablet */}
      <div className="relative mt-12 hidden md:block">
        <div className="roadmap-ghost-grid" />
        <div className="roadmap-line" />
        <div className="grid grid-cols-[1fr_80px_1fr] gap-x-12 gap-y-24">
          {steps.map((s) => (
            <Fragment key={`l-${s.step}`}>
              <div className={s.side === 'left' ? "text-left" : "hidden md:block"}>
                {s.side === 'left' && (
                  <>
                    <div className="text-[#c2ff47] font-semibold">Step {s.step}</div>
                    <div className="heading-display text-3xl md:text-4xl mt-2">{s.title}</div>
                    <ul className="mt-4 text-muted space-y-2">
                      <li>• Top 10% of player</li>
                      <li>• Mainet Release</li>
                      <li>• Custom Rooms</li>
                    </ul>
                  </>
                )}
              </div>
              <div key={`c-${s.step}`} className="relative flex items-center justify-center">
                <div className="relative w-[86px] h-[86px] z-10">
                  <Image src="/step.png" alt="step" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-white/90">{s.step}</div>
                </div>
              </div>
              <div key={`r-${s.step}`} className={s.side === 'right' ? "md:translate-x-32 text-left" : "hidden md:block"}>
                {s.side === 'right' && (
                  <>
                    <div className="text-[#c2ff47] font-semibold">Step {s.step}</div>
                    <div className="heading-display text-3xl md:text-4xl mt-2">{s.title}</div>
                    <ul className="mt-4 text-muted space-y-2">
                      <li>• Top 10% of player</li>
                      <li>• Mainet Release</li>
                      <li>• Custom Rooms</li>
                    </ul>
                  </>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile stacked timeline */}
      <div className="relative mt-10 md:hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-[6px] -translate-x-1/2 bg-[linear-gradient(180deg,#0e4257,#0b313f)] rounded-full shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]" />
        <div className="space-y-14">
          {steps.map((s) => (
            <div key={`m-${s.step}`} className="relative text-center">
              <div className="relative mx-auto w-[72px] h-[72px]">
                <Image src="/step.png" alt="step" fill className="object-contain" />
                <div className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-white/90">{s.step}</div>
              </div>
              <div className="mt-4 text-[#c2ff47] font-semibold">Step {s.step}</div>
              <div className="heading-display text-2xl mt-2">{s.title}</div>
              <ul className="mt-3 text-muted space-y-1 text-sm">
                <li>• Top 10% of player</li>
                <li>• Mainet Release</li>
                <li>• Custom Rooms</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Rewards />
      <Roadmap />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="container-safe py-6 md:py-8 flex flex-col md:flex-row gap-4 md:gap-0 items-center md:items-center md:justify-between text-sm md:text-xl text-muted">
        <div className="font-extrabold text-accent">TANKY</div>
        <div className="text-xs order-last md:order-none">© 2025 Tanky. All rights reserved</div>
        <div className="flex items-center gap-3 order-none">
          <a href="#" aria-label="Instagram" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="4"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="Dribbble" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3.6 9.5c3.2 0 7.8-.2 11-.9M5.5 18.2c3.1-5.4 6.6-8.5 12.8-8.7M9.2 3.8c2.7 3.1 4.9 7.6 5.8 12.5"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l16 16M20 4L4 20"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="18" height="12" rx="3"/>
              <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
