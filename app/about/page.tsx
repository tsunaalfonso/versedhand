import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Versed Hand is a Nashville company helping local service businesses with marketing and back-office work. Here's who we are and why we exist.",
};

const beliefs = [
  {
    title: "Local means local",
    body: "We're based in Nashville and we work with Nashville. We know which neighborhoods are growing, what a Green Hills customer expects versus an Antioch one, and what \u201cnear me\u201d actually means here.",
  },
  {
    title: "Trades-first, not tech-first",
    body: "Our clients fix pipes, clean teeth, lay floors, and cut grass. We translate marketing into job-site language and never make you sit through a deck about \u201cbrand architecture.\u201d",
  },
  {
    title: "Straight answers",
    body: "If a service won't move the needle for your business, we'll say so before you spend a dollar on it. We'd rather lose a sale than waste your money.",
  },
  {
    title: "Done means done",
    body: "We work from a list, like you do. Work gets scoped, scheduled, and finished — and you can see the status anytime without chasing us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            About Versed Hand
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Built in Nashville, for the people who build Nashville.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-slate">
          <p>
            Versed Hand started with a pattern we kept seeing around town:
            excellent service businesses losing work to mediocre ones with
            better websites. The best plumber in the neighborhood was invisible
            on Google. The salon with a six-week waitlist hadn&apos;t posted in
            eight months. The HVAC owner was answering the phone from a crawl
            space because there was nobody at a desk.
          </p>
          <p>
            None of those are skill problems. They&apos;re time problems. When
            you run a crew of one to fifteen, every hour spent on a website or
            an inbox is an hour off the job — so the desk work loses, every
            time. And slowly, quietly, it costs you customers.
          </p>
          <p>
            So that&apos;s the business we built: a versed hand for the work
            that falls off your truck. We handle the website, the search
            rankings, the posting, and — when you&apos;re ready — the desk
            itself, with a trained virtual assistant who answers your phone
            like they&apos;ve worked for you for years.
          </p>
          <p className="font-semibold text-ink">
            You stay versed in your trade. We stay versed in ours.
          </p>
        </div>
      </section>

      <section aria-labelledby="beliefs-h" className="border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 id="beliefs-h" className="font-display text-3xl font-bold md:text-4xl">
            How we work
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {beliefs.map((b) => (
              <article key={b.title} className="rounded-lg border border-line bg-paper p-7">
                <h3 className="font-display text-xl font-bold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Come say hello." sub="Coffee's on us if you're in town. Otherwise, the phone works just fine." />
    </>
  );
}
