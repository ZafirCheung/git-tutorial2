import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reverse Face Search for Lawful Checks | Promai",
  description:
    "A privacy-first reverse face search concept for personal footprint checks, consent-based verification and fraud prevention. Similarity is never identity.",
  openGraph: {
    title: "Promai — Find where a face shows up",
    description:
      "Privacy-first visual leads for lawful checks. A face is a clue, never a verdict.",
    type: "website",
    images: [{ url: "/og-promai.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promai — Find where a face shows up",
    description:
      "Privacy-first visual leads for lawful checks. Similarity is never identity.",
    images: ["/og-promai.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
