import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design & SEO, social media management, and virtual assistant placement for Nashville service businesses.",
};

const services = [
  {
    id: "websites",
    name: "Website design & SEO",
    lede: "Your website's one job is to get the phone to ring.",
    body: [
      "Most service-business websites in Nashville fall into one of two camps: a page from 2014 that loads like it, or an expensive template that looks fine and books nothing. We build the third kind — fast, mobile-first sites written around the searches your customers actually make: \u201cdrain cleaning Donelson,\u201d \u201cdeck staining Franklin,\u201d \u201cemergency AC repair near me.\u201d",
      "Every build includes local SEO foundations: Google Business Profile setup and optimization, service-area pages for the neighborhoods you work, schema markup, and a review strategy that keeps fresh stars coming in. After launch, we maintain it — hosting, updates, edits — so it never quietly rots.",
    ],
    includes: [
      "Custom design built around your trade and service area",
      "Local SEO: service-area pages, on-page optimization, schema",
      "Google Business Profile setup and ongoing optimization",
      "Review generation strategy",
      "Hosting, maintenance, and content edits included",
    ],
  },
  {
    id: "social",
    name: "Social media management",
    lede: "Consistent posting, without you touching it.",
    body: [
      "Nobody hires a plumber because of a clever caption. They hire the one who looks active, real, and busy. That's what we manage toward: a steady stream of your actual work — before-and-afters, crew on site, finished jobs, happy customers — posted on a schedule you never have to think about.",
      "You send photos from the job (we make it dead simple); we handle the calendar, the writing, the posting, and the replies. Facebook, Instagram, and Google Business posts, tuned for how Nashville customers actually find local services.",
    ],
    includes: [
      "Monthly content calendar planned around your jobs and seasons",
      "Posting and scheduling across Facebook, Instagram, and Google",
      "Caption writing in your voice, not agency-speak",
      "Comment and message monitoring",
      "Simple photo workflow for you and your crew",
    ],
  },
  {
    id: "assistants",
    name: "Virtual assistant placement",
    lede: "The office help you need, without the overhead.",
    body: [
      "Missed calls are missed jobs. But a full-time office hire runs $40,000+ a year before benefits — heavy for a crew of six. We place trained, vetted virtual assistants with Nashville service businesses to handle the desk work: answering phones, scheduling jobs, sending invoices, chasing payments, keeping the calendar straight.",
      "We do the vetting and the onboarding, train your assistant on your tools and your way of doing things, and stay involved after placement. If it's not working, we fix it or replace them — that's on us, not you.",
    ],
    includes: [
      "Vetted, trained assistants matched to your trade",
      "Phone answering, scheduling, dispatch coordination",
      "Invoicing, payment follow-up, basic bookkeeping support",
      "Onboarding on your tools (Jobber, Housecall Pro, QuickBooks, etc.)",
      "Ongoing support and a replacement guarantee",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            We do three things. We&apos;re versed in all of them.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            No bloated retainers, no fifteen-service menu. Just the marketing
            and office work that actually moves a service business — handled
            end to end.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 md:py-24">
        {services.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 id={`${s.id}-h`} className="font-display text-3xl font-bold md:text-4xl">
                {s.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-copper">{s.lede}</p>
              {s.body.map((para) => (
                <p key={para.slice(0, 24)} className="mt-5 leading-relaxed text-slate">
                  {para}
                </p>
              ))}
            </div>
            <div className="h-fit rounded-lg border border-line bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                What&apos;s included
              </p>
              <ul className="mt-4 space-y-3">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-1 shrink-0 text-copper" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6.5 4.8 9 10 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <CtaBand heading="Not sure which one you need?" sub="Most owners aren't. That's exactly what the free consult is for — we'll tell you straight, even if the answer is 'not us.'" />
    </>
  );
}
