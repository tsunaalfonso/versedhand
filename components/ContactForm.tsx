"use client";

import { useState } from "react";

const inputClass =
  "mt-2 w-full rounded-md border border-line bg-card px-4 py-3 text-ink placeholder:text-slate/60 focus:border-copper";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-72 flex-col items-start justify-center rounded-lg border border-line bg-card p-8" role="status">
        <p className="font-display text-2xl font-bold">Got it — we&apos;ll be in touch.</p>
        <p className="mt-3 max-w-md leading-relaxed text-slate">
          We reply to every message within one business day. Need an answer
          sooner? Call{" "}
          <a href="tel:+16155909800" className="font-semibold text-copper">
            (615) 590-9800
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border border-line bg-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">
            Your name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Sam Carter" />
        </div>
        <div>
          <label htmlFor="business" className="text-sm font-semibold">
            Business name
          </label>
          <input id="business" name="business" type="text" className={inputClass} placeholder="Carter Plumbing" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@business.com" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="(615) 555-0100" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="text-sm font-semibold">
          What do you need help with?
        </label>
        <select id="interest" name="interest" className={inputClass} defaultValue="">
          <option value="" disabled>
            Choose one (or close enough)
          </option>
          <option>Website design &amp; SEO</option>
          <option>Social media management</option>
          <option>Virtual assistant placement</option>
          <option>Honestly, all of it</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold">
          Tell us a bit about the business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="What you do, where you work, and what's eating your time."
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-copper px-6 py-3.5 font-semibold text-white transition-colors hover:bg-copper-deep sm:w-auto"
      >
        Send message
      </button>
      <p className="mt-4 text-sm text-slate">
        No newsletters, no drip campaigns. Just a reply from a person.
      </p>
    </form>
  );
}
