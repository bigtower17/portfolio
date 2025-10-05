import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";

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
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans theme-transition`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}