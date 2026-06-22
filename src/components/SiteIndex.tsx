import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ShieldCheck, Sparkles, Clock, Wrench, Smile, BadgeCheck,
  PaintBucket, Hammer, Plug, Pipette, Sofa, Drill, Lightbulb, Trees,
  Phone, Mail, MapPin, MessageCircle, ArrowRight, ArrowUp, Star, Quote, Menu, X, CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Work />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

const NAV = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "work", label: "Recent Work" },
  { id: "why", label: "Why Us" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Work />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-foreground shadow-soft transition-transform group-hover:scale-105">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className={`block text-[11px] uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>London</span>
            <span className={`block text-sm font-bold ${scrolled ? "text-foreground" : "text-white"}`}>Handyman Services</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-active={active === n.id}
              className={`nav-link text-sm font-medium ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden grid place-items-center h-10 w-10 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={hero}
        alt="Professional London handyman at work"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
        <div className="max-w-3xl">
          <span className="hero-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Trusted across London
          </span>
          <h1 className="hero-in hero-in-1 mt-6 text-balance text-[clamp(2.4rem,6.4vw,5rem)] font-extrabold leading-[1.02] text-white">
            Reliable handyman services,{" "}
            <span className="text-gold">done right the first time.</span>
          </h1>
          <p className="hero-in hero-in-2 mt-6 max-w-2xl text-pretty text-base sm:text-lg leading-relaxed text-white/85">
            From a single shelf to full property repairs — experienced, insured tradesmen
            you'll happily welcome into your home. Friendly, punctual and finished to a
            standard you'll be proud of.
          </p>
          <div className="hero-in hero-in-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              See Recent Work
            </a>
          </div>
          <dl className="hero-in hero-in-4 mt-12 grid max-w-xl grid-cols-3 gap-6 text-white">
            <Stat n="500+" label="Jobs completed" />
            <Stat n="4.9★" label="Customer rating" />
            <Stat n="24h" label="Response time" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="text-2xl sm:text-3xl font-bold text-gold">{n}</dt>
      <dd className="mt-1 text-xs sm:text-sm text-white/75">{label}</dd>
    </div>
  );
}

/* ---------------- Trust Bar ---------------- */
const TRUST = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Vetted & Verified" },
  { icon: Clock, label: "Quick Response" },
  { icon: Sparkles, label: "Quality Workmanship" },
  { icon: Smile, label: "Friendly Service" },
  { icon: CheckCircle2, label: "No Job Too Small" },
];

function TrustBar() {
  return (
    <Reveal>
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 sm:py-10">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/5 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-foreground/85">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

/* ---------------- Services ---------------- */
const SERVICES = [
  { icon: PaintBucket, title: "Painting & Decorating", desc: "Interior and exterior. Walls, woodwork and flawless finishes." },
  { icon: Hammer, title: "Repairs & Maintenance", desc: "Doors, locks, fixtures, leaks, fittings — sorted properly." },
  { icon: Sofa, title: "Furniture Assembly", desc: "Flat-pack, wardrobes, beds and built-ins, expertly assembled." },
  { icon: Pipette, title: "Plumbing", desc: "Taps, toilets, leaks and minor installations done cleanly." },
  { icon: Plug, title: "Electrical", desc: "Sockets, lights, fittings and safe minor electrical work." },
  { icon: Drill, title: "Carpentry", desc: "Shelves, doors, skirting and custom timber work." },
  { icon: Lightbulb, title: "General Maintenance", desc: "The to-do list you never get round to — handled in one visit." },
  { icon: Trees, title: "Outdoor & Garden", desc: "Fence repairs, decking, gates and small outdoor projects." },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            eyebrow="What We Do"
            title="Skilled hands for every job around the home."
            sub="One trusted team, one phone number — covering everything most properties ever need."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 60}>
              <article className="lift group h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-gold/60">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                  Enquire <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={about}
              alt="Friendly experienced London handyman"
              width={1280}
              height={1280}
              loading="lazy"
              className="rounded-3xl shadow-elevated aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-card border border-border shadow-elevated p-5 max-w-[260px]">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold">"Genuinely the best handyman we've used in London."</p>
              <p className="mt-1 text-xs text-muted-foreground">Verified customer · Islington</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              About Us
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
              A small London team that treats your home like our own.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We're a friendly team of experienced tradesmen serving homes and small businesses
              across London. Our reputation is built on three things: arriving when we say we will,
              finishing to a genuinely high standard, and leaving your home as tidy as we found it.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Years of hands-on experience",
                "Clean, considerate and tidy",
                "Honest, upfront pricing",
                "Fully insured for peace of mind",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn-glow mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"
            >
              Talk to the team <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Recent Work ---------------- */
const WORK = [
  { src: w1, title: "Living room repaint", tag: "Painting", span: "lg:row-span-2" },
  { src: w2, title: "Wardrobe assembly", tag: "Furniture", span: "" },
  { src: w3, title: "Bathroom refresh", tag: "Repairs", span: "lg:row-span-2" },
  { src: w4, title: "Floating oak shelves", tag: "Carpentry", span: "" },
  { src: w5, title: "Front door restoration", tag: "Decorating", span: "" },
  { src: w6, title: "Kitchen refit details", tag: "Maintenance", span: "" },
];

function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Recent Work"
            title="A small selection of jobs we're proud of."
            sub="Real projects from real London homes — finished to a standard we'd want in our own."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px]">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <figure
                className={`gallery-card group relative overflow-hidden rounded-2xl shadow-soft border border-border h-72 sm:h-80 lg:h-auto ${w.span}`}
              >
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="gallery-img h-full w-full object-cover"
                />
                <div className="overlay absolute inset-0" />
                <figcaption className="caption absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="inline-block rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                    {w.tag}
                  </span>
                  <p className="mt-2 text-lg font-bold">{w.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
const WHY = [
  { icon: ShieldCheck, t: "Reliable", d: "We turn up on time, every time — and keep you updated throughout." },
  { icon: Sparkles, t: "Quality Finish", d: "Attention to detail that turns small jobs into proud results." },
  { icon: Clock, t: "Quick Response", d: "Most enquiries answered the same day, often within the hour." },
  { icon: Smile, t: "Friendly Service", d: "Polite, respectful and easy to chat with — no jargon." },
  { icon: BadgeCheck, t: "Fully Insured", d: "Comprehensive cover so you can relax while we work." },
  { icon: Wrench, t: "Fully Equipped", d: "We arrive with the right tools and materials for the job." },
  { icon: CheckCircle2, t: "Honest Pricing", d: "Clear quotes upfront — no surprises when we finish." },
  { icon: Hammer, t: "Experienced", d: "Years of trade experience across hundreds of London homes." },
];

function WhyUs() {
  return (
    <section id="why" className="bg-brand text-brand-foreground py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Why Choose Us"
            title="The little things that make a big difference."
            sub="We're not the cheapest in London — but we're the team customers call back."
            invert
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="lift h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 hover:border-gold/60 hover:bg-white/[0.06]">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
const REVIEWS = [
  { name: "Sarah M.", area: "Islington", text: "Booked for a quick repair and ended up giving them three more jobs. Punctual, polite and the finish was spotless." },
  { name: "James T.", area: "Clapham", text: "Hung shelves, fixed a leaking tap and assembled a wardrobe in one visit. Genuinely the easiest tradesman experience I've had in London." },
  { name: "Priya K.", area: "Hackney", text: "Repainted our hallway and stairwell. The prep was meticulous and the result looks better than when we moved in." },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Customer Reviews"
            title="Trusted by homeowners across London."
            sub="A consistent 5-star reputation built one job at a time."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <blockquote className="lift relative h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <Quote className="absolute -top-3 left-6 h-7 w-7 text-gold" />
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">"{r.text}"</p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground text-sm font-bold">
                    {r.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{r.name}</span>
                    <span className="block text-xs text-muted-foreground">{r.area}</span>
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Get in touch
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
              Tell us about the job — we'll handle the rest.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Send a quick message and we'll come back to you with a clear, no-obligation quote.
              Most enquiries are answered the same day.
            </p>
            <ul className="mt-10 space-y-5">
              <ContactRow icon={Phone} label="Call us" value="Available on request" />
              <ContactRow icon={Mail} label="Email" value="hello@londonhandymanservices.co.uk" />
              <ContactRow icon={MapPin} label="Service area" value="All of Greater London" />
              <ContactRow icon={MessageCircle} label="Facebook" value="Message us on Facebook" href="https://www.facebook.com/profile.php?id=61578172167809" />
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            action="https://formsubmit.co/hello@londonhandymanservices.co.uk"
            method="POST"
            onSubmit={() => setSent(true)}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-elevated"
          >
            <input type="hidden" name="_subject" value="New enquiry — London Handyman Services" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="sm:col-span-2">
                <Field label="How can we help?" name="message" textarea required />
              </div>
            </div>
            <button
              type="submit"
              className="btn-glow mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-gold-foreground sm:w-auto"
            >
              Send enquiry <ArrowRight className="h-4 w-4" />
            </button>
            {sent && (
              <p className="mt-4 text-sm text-brand font-medium">Thanks — your message is on its way.</p>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting you agree to be contacted about your enquiry. We never share your details.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold">{label}</p>
        <p className="mt-1 text-base font-semibold text-foreground/90 break-words">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li><a href={href} target="_blank" rel="noopener noreferrer" className="block transition hover:opacity-80">{inner}</a></li>
  ) : <li>{inner}</li>;
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-gold-foreground">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] uppercase tracking-[0.18em] text-white/60">London</span>
              <span className="block text-sm font-bold">Handyman Services</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-white/65 max-w-sm leading-relaxed">
            Trusted handyman services across Greater London. Reliable, insured and finished to a standard you'll be proud of.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-white/80 hover:text-gold transition">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Connect</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61578172167809" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition">
                Facebook
              </a>
            </li>
            <li><a href="#contact" className="text-white/80 hover:text-gold transition">hello@londonhandymanservices.co.uk</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} London Handyman Services. All rights reserved.</p>
          <p>Proudly serving Greater London.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionHead({
  eyebrow, title, sub, invert,
}: { eyebrow: string; title: string; sub?: string; invert?: boolean }) {
  return (
    <div className="max-w-2xl">
      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${invert ? "bg-white/10 text-gold" : "bg-brand/5 text-brand"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance ${invert ? "text-white" : ""}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-base leading-relaxed text-pretty ${invert ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground shadow-elevated transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      } hover:bg-gold hover:text-gold-foreground`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
