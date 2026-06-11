import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const trades = [
  "Plumbers",
  "HVAC",
  "Window cleaners",
  "Flooring",
  "Landscapers",
  "Dental offices",
  "Salons",
];

const ticketItems = [
  { task: "Rebuild website + local SEO pages", client: "Plumbing co. — Donelson", done: true },
  { task: "Schedule month of posts + reviews", client: "Salon — 12 South", done: true },
  { task: "Place VA for dispatch & invoicing", client: "HVAC — Antioch", done: false },
];

const services = [
  {
    title: "Website design & SEO",
    body: "A fast site that ranks for \u201cnear me\u201d searches and turns visits into booked jobs. Built once, maintained for you.",
    detail: "Local SEO \u00b7 Google Business Profile \u00b7 review strategy",
  },
  {
    title: "Social media management",
    body: "Steady, on-brand posting that shows your real work — before-and-afters, crew shots, finished jobs. You stay on the tools; we keep you visible.",
    detail: "Content calendar \u00b7 posting \u00b7 engagement",
  },
  {
    title: "Virtual assistant placement",
    body: "A trained, vetted assistant who answers phones, schedules jobs, chases invoices, and keeps your books tidy — for a fraction of a full-time hire.",
    detail: "Vetting \u00b7 onboarding \u00b7 ongoing support",
  },
];

const proof = [
  {
    quote:
      "They rebuilt our site in three weeks and the phone started ringing for the right neighborhoods. I haven't touched a marketing task since.",
    name: "Owner, residential plumbing company",
    place: "Donelson",
  },
  {
    quote:
      "Our VA handles scheduling and follow-ups. That's ten hours a week I got back for actual client work.",
    name: "Practice manager, dental office",
    place: "Green Hills",
  },
  {
    quote:
      "Honest about what we did and didn't need. They talked us out of a bigger package — who does that?",
    name: "Owner, window cleaning service",
    place: "East Nashville",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Nashville, Tennessee
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Steady hands for the businesses that keep Nashville running.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Websites that rank, social media that stays current, and virtual
              assistants who pick up the phone — so you can stay on the job
              instead of behind a desk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="rounded-md bg-copper px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-deep"
              >
                Book a free consult
              </Link>
              <Link
                href="/services/"
                className="rounded-md border border-ink/20 px-6 py-3 font-semibold text-ink transition-colors hover:border-copper hover:text-copper"
              >
                See what we do
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate" aria-label="Who we work with">
              {trades.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-copper" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Signature: the work-order ticket */}
          <div className="mx-auto w-full max-w-md" aria-label="Example weekly work order">
            <div className="rotate-1 transition-transform duration-300 hover:rotate-0">
              <div className="ticket-perforation" aria-hidden="true" />
              <div className="rounded-b-lg border border-t-0 border-line bg-card p-6 shadow-[0_18px_40px_-20px_rgba(31,45,61,0.35)]">
                <div className="flex items-baseline justify-between border-b border-dashed border-line pb-4">
                  <p className="font-display text-lg font-bold">This week&apos;s work order</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">
                    Versed Hand
                  </p>
                </div>
                <ul className="divide-y divide-line/70">
                  {ticketItems.map((item) => (
                    <li key={item.task} className="flex items-start gap-3 py-4">
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          item.done
                            ? "border-copper bg-copper text-white"
                            : "border-ink/30 text-transparent"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6.5 4.8 9 10 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold leading-snug">{item.task}</p>
                        <p className="mt-0.5 text-sm text-slate">{item.client}</p>
                      </div>
                      <span className="sr-only">{item.done ? "Done" : "In progress"}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-dashed border-line pt-4 text-sm text-slate">
                  You hand it off. We work the list. You see it done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section aria-labelledby="services-heading" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
          What we do
        </p>
        <h2 id="services-heading" className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Three things, done properly.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-lg border border-line bg-card p-7">
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate">{s.body}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm font-semibold text-ink/70">
                {s.detail}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/services/"
          className="mt-8 inline-block font-semibold text-copper underline-offset-4 hover:underline"
        >
          Full service details →
        </Link>
      </section>

      {/* Social proof */}
      <section aria-labelledby="proof-heading" className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            From around town
          </p>
          <h2 id="proof-heading" className="mt-3 font-display text-3xl font-bold md:text-4xl">
            What owners tell us.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {proof.map((p) => (
              <figure key={p.name} className="flex flex-col justify-between rounded-lg border border-line bg-paper p-7">
                <blockquote className="leading-relaxed text-ink">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-slate"> · {p.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
