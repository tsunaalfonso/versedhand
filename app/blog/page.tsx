import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical marketing and operations guides for Nashville service businesses. New articles coming soon.",
};

// Add posts here as they're written: { slug, title, excerpt, date, tag }
const posts: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}[] = [];

const plannedTopics = [
  "How Nashville customers actually search for a plumber",
  "What to post when you think your work is boring (it isn't)",
  "The math on a virtual assistant vs. a front-desk hire",
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
        Resources
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
        Field notes for running a service business.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
        Short, practical guides on getting found, staying booked, and getting
        your hours back — written for Nashville owners, not marketers.
      </p>

      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-lg border border-line bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                {post.tag}
              </p>
              <h2 className="mt-3 font-display text-xl font-bold">
                <Link href={`/blog/${post.slug}/`} className="hover:text-copper">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate">{post.excerpt}</p>
              <p className="mt-5 text-sm text-slate">{post.date}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-lg border border-dashed border-ink/25 bg-card p-8 md:p-12">
          <p className="font-display text-2xl font-bold">
            First articles are on the bench.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-slate">
            We&apos;re writing the first batch now. Here&apos;s what&apos;s
            coming:
          </p>
          <ul className="mt-6 space-y-3">
            {plannedTopics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                <span className="font-semibold">{topic}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate">
            Have a question you want answered?{" "}
            <Link href="/contact/" className="font-semibold text-copper underline-offset-4 hover:underline">
              Send it over
            </Link>{" "}
            and we&apos;ll likely write about it.
          </p>
        </div>
      )}
    </section>
  );
}
