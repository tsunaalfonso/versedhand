import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://versedhand.com";
  return ["", "/services", "/about", "/contact", "/blog"].map((path) => ({
    url: `${base}${path}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
