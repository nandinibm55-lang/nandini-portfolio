import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nandini-bm-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nandini BM | AI & Data Science | 2D Graphics Editor",
  description:
    "Portfolio of Nandini BM, a Computer Science and Engineering student specializing in Artificial Intelligence and Data Science with an interest in 2D graphics and creative digital experiences.",
  keywords: [
    "Nandini BM",
    "AI Data Science Student",
    "2D Graphics Editor",
    "Reva University",
    "Computer Science Engineering",
    "Creative Technologist",
  ],
  authors: [{ name: "Nandini BM" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nandini BM | AI & Data Science | 2D Graphics Editor",
    description:
      "Portfolio of Nandini BM, a Computer Science and Engineering student specializing in Artificial Intelligence and Data Science with an interest in 2D graphics and creative digital experiences.",
    url: siteUrl,
    siteName: "Nandini BM",
    images: [{ url: "/profile.jpg", width: 460, height: 460, alt: "Nandini BM" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nandini BM | AI & Data Science | 2D Graphics Editor",
    description:
      "Portfolio of Nandini BM — AI & Data Science student and 2D graphics editor at Reva University.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
