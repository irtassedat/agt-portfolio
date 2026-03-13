import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sedat İrtaş | AGT Ağaç Sanayi — Dijital Dönüşüm Vizyonu",
  description:
    "Full-Stack Developer & AI Systems Engineer. AGT Ağaç Sanayi için birleşik dijital platform, üretim optimizasyonu ve AI tabanlı akıllı fabrika çözüm önerisi.",
  keywords: [
    "AGT",
    "ahşap",
    "laminat parke",
    "panel",
    "MDF",
    "dijital dönüşüm",
    "akıllı fabrika",
    "AI",
    "full-stack developer",
  ],
  openGraph: {
    title: "Sedat İrtaş | AGT Ağaç Sanayi — Dijital Dönüşüm Vizyonu",
    description:
      "AGT'nin 42 yıllık üretim gücünü AI ve dijital platformlarla birleştiren dönüşüm önerisi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
