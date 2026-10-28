import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const title = `${site.name} | ${site.role}`;
const description =
  "Engineering leader and hands-on builder: CTO and head of engineering across production LLM systems, cloud infrastructure on AWS and GCP and full-stack platforms. AWS Certified Solutions Architect – Associate.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "Beniamino Torregrossa", "CTO", "head of engineering", "engineering leader", "cloud engineer", "AI engineer", "LLM", "RAG",
    "AWS", "GCP", "Terraform", "Next.js", "TypeScript", "Go", "Python",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "CTO",
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
  address: { "@type": "PostalAddress", addressLocality: "Caltanissetta", addressRegion: "Sicily", addressCountry: "IT" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Università degli Studi di Pavia" },
    { "@type": "CollegeOrUniversity", name: "Università Kore di Enna" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="theme-sober" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans theme-transition`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}