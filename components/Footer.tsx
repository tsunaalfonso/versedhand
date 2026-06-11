import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">Versed Hand</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Marketing and back-office help for the service businesses that keep
            Nashville running.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-copper" href="/services/">Services</Link></li>
            <li><Link className="hover:text-copper" href="/about/">About</Link></li>
            <li><Link className="hover:text-copper" href="/blog/">Resources</Link></li>
            <li><Link className="hover:text-copper" href="/contact/">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            What we do
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Website design &amp; SEO</li>
            <li>Social media management</li>
            <li>Virtual assistant placement</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-copper" href="tel:+16155909800">(615) 590-9800</a>
            </li>
            <li>
              <a className="hover:text-copper" href="mailto:info@versedhand.com">info@versedhand.com</a>
            </li>
            <li className="text-white/70">Nashville, Tennessee</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50">
          © {new Date().getFullYear()} Versed Hand LLC · Nashville, TN
        </p>
      </div>
    </footer>
  );
}
