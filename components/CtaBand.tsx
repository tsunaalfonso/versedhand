import Link from "next/link";

export default function CtaBand({
  heading = "Tell us what's eating your week.",
  sub = "A 20-minute call. No pitch deck, no pressure — just a straight read on whether we can help.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section aria-label="Get started" className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-xl text-white/75">{sub}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact/"
            className="rounded-md bg-copper px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-deep"
          >
            Book a free consult
          </Link>
          <a
            href="tel:+16155909800"
            className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-copper hover:text-copper"
          >
            (615) 590-9800
          </a>
        </div>
      </div>
    </section>
  );
}
