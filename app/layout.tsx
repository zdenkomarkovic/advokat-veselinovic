import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "advokat Pančevo",
    "advokatska kancelarija Pančevo",
    "advokat Veselinović",
    "krivični advokat Pančevo",
    "porodični advokat Pančevo",
    "advokat za razvod Pančevo",
    "radno pravo advokat Pančevo",
    "pravna pomoć Pančevo",
    "advokatska kancelarija Veselinović",
    "nasledno pravo Pančevo",
    "upravno pravo advokat",
    "obligaciono pravo Pančevo",
    "medijator Pančevo",
    "pravna kancelarija Vojvodina",
    "advokat za krivično pravo Srbija",
    "besplatne pravne konsultacije Pančevo",
  ],
  authors: [{ name: "Advokatska kancelarija Veselinović" }],
  creator: "Advokatska kancelarija Veselinović",
  publisher: "Advokatska kancelarija Veselinović",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/hero.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
