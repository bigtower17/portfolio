import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}