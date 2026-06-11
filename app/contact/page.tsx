import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consult with Versed Hand. Call (615) 590-9800 or email info@versedhand.com.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s talk about your week.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
            Tell us what&apos;s pulling you off the job — the website, the
            socials, the phone — and we&apos;ll tell you honestly whether we
            can fix it.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                Phone
              </dt>
              <dd className="mt-1">
                <a href="tel:+16155909800" className="font-display text-2xl font-bold text-ink hover:text-copper">
                  (615) 590-9800
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                Email
              </dt>
              <dd className="mt-1">
                <a href="mailto:info@versedhand.com" className="font-display text-2xl font-bold text-ink hover:text-copper">
                  info@versedhand.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                Based in
              </dt>
              <dd className="mt-1 font-semibold">Nashville, Tennessee</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
