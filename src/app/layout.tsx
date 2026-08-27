import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Govistudio — Personalized Business Systems for Growing Clinics",
  description:
    "Govistudio helps growing clinics improve the way they attract, communicate with, follow up with, and manage patients — by building technology around the way your clinic actually works. Custom AI systems, automation, integrations and software for dental, cosmetic, dermatology and specialty clinics.",
  keywords: [
    "custom software for clinics",
    "clinic automation",
    "AI automation for clinics",
    "clinic business automation",
    "healthcare workflow automation",
    "custom technology for clinics",
    "AI systems for clinics",
    "dental practice automation",
    "clinic software solutions",
    "AI receptionist for clinics",
    "patient follow-up automation",
    "clinic management systems",
    "Govistudio",
  ],
  metadataBase: new URL("https://govistudio.com"),
  alternates: {
    canonical: "https://govistudio.com",
  },
  openGraph: {
    title: "Govistudio — Personalized Business Systems for Growing Clinics",
    description:
      "Your clinic isn't like everyone else. Your systems shouldn't be either. We build personalized business systems for growing clinics.",
    url: "https://govistudio.com",
    siteName: "Govistudio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Govistudio — Business Systems for Growing Clinics",
    description:
      "Personalized business systems for growing clinics — built around the way they actually work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/Govilogo2.jpeg" as="image" type="image/jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
