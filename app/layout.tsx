import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://versedhand.com"),
  title: {
    default: "Versed Hand — Marketing & Operations for Nashville Service Businesses",
    template: "%s | Versed Hand",
  },
  description:
    "Website design & SEO, social media management, and virtual assistant placement for Nashville plumbers, HVAC, window cleaners, landscapers, dental offices, and salons.",
  openGraph: {
    title: "Versed Hand",
    description:
      "Marketing and back-office help for Nashville service businesses. Websites & SEO, social media, and virtual assistants.",
    url: "https://versedhand.com",
    siteName: "Versed Hand",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
