import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getOrganizationSchema, getWebSiteSchema, getServiceSchemas } from "@/lib/schema";

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
  title: "GOVI STUDIO — AI Systems & Product Engineering Studio",
  description:
    "GOVI STUDIO is an AI systems engineering studio that designs, builds, and deploys production-ready AI automation systems, custom sales configurator software, school management platforms, and revenue-generating AI products for traditional businesses. We specialize in custom AI workflow automation, B2B AI automation engines, and EdTech workflow automation.",
  keywords: [
    "AI systems engineering studio",
    "custom AI workflow automation",
    "AI automation for business",
    "custom sales quoting software",
    "custom school management system",
    "B2B AI automation",
    "AI product development",
    "production AI systems",
    "GOVI STUDIO",
    "Govistudio",
    "custom software development",
    "AI lead qualification",
    "sales configurator system",
    "EdTech workflow automation",
    "LLM orchestration",
    "Retool development",
  ],
  metadataBase: new URL("https://govistudio.com"),
  alternates: {
    canonical: "https://govistudio.com",
  },
  openGraph: {
    title: "GOVI STUDIO — AI Systems & Product Engineering Studio",
    description:
      "We build production-ready AI systems that automate operations and unlock new revenue streams for traditional businesses.",
    url: "https://govistudio.com",
    siteName: "GOVI STUDIO",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOVI STUDIO — AI Systems & Product Engineering",
    description:
      "Production-ready AI systems for traditional businesses. Custom AI automation, sales configurators, and school management platforms.",
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
  const orgSchema = getOrganizationSchema();
  const webSchema = getWebSiteSchema();
  const serviceSchemas = getServiceSchemas();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/Govilogo2.jpeg" as="image" type="image/jpeg" />

        {/* JSON-LD: Organization Schema — Primary Entity Definition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* JSON-LD: WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
        {/* JSON-LD: Service Schemas */}
        {serviceSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
