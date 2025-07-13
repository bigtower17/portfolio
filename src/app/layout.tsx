import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Torregrossa - Software Engineer",
  description: "Portfolio di un Software Engineer appassionato di tecnologie moderne",
  keywords: ["software engineer", "developer", "react", "next.js", "typescript"],
  authors: [{ name: "Torregrossa" }],
  openGraph: {
    title: "Torregrossa - Software Engineer",
    description: "Portfolio di un Software Engineer appassionato di tecnologie moderne",
    url: "https://torregrossa.dev",
    siteName: "Torregrossa Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="theme-sober" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans theme-transition`}>
        <ThemeProvider defaultTheme="sober" themes={["sober", "beast"]}>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}