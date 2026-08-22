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
  title: "TraceLens — A face is a clue, not a verdict",
  description:
    "A privacy-first front-end concept for lawful public-web face similarity searches, fraud checks, and personal footprint audits.",
  openGraph: {
    title: "TraceLens — A face is a clue, not a verdict",
    description:
      "Privacy-first visual leads for lawful checks. Similarity is never identity.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceLens — A face is a clue, not a verdict",
    description:
      "Privacy-first visual leads for lawful checks. Similarity is never identity.",
    images: ["/og.png"],
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
