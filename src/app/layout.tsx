import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// DM Sans replaces Inter — more refined, purpose-built for screens
const dmSans = DM_Sans({
  variable: "--font-inter",   // keeps existing class references working
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mithra Chada | Video Editor",
  description:
    "Mithra Chada is a professional video editor specialising in YouTube content, Instagram reels, and cinematic storytelling. Available for freelance and full-time opportunities.",
  keywords: [
    "video editor",
    "YouTube editor",
    "reels editor",
    "cinematic editing",
    "freelance video editor",
    "Mithra Chada",
    "social media video",
    "short film editor",
  ],
  authors: [{ name: "Mithra Chada" }],
  openGraph: {
    title: "Mithra Chada | Video Editor",
    description:
      "Turning raw footage into engaging stories that retain viewers and elevate brands.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithra Chada | Video Editor",
    description:
      "Turning raw footage into engaging stories that retain viewers and elevate brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
