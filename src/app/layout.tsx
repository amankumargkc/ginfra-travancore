import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GInfra Travancore Pvt. Ltd. - Precision Manufacturing for Defence, Aerospace & Advanced Robotics",
  description: "GInfra Travancore specializes in high-precision manufacturing for defence, aerospace, and advanced robotics. Located in Cherlapally and EMC Maheshwaram, Telangana. We deliver mission-critical components with tight tolerances, short lead times, and full traceability.",
  keywords: "defence manufacturing, aerospace components, precision machining, artillery fuzes, CNC machining, electronics integration, quality assurance, Cherlapally, Maheshwaram, Telangana, India",
  authors: [{ name: "GInfra Travancore Pvt. Ltd." }],
  creator: "GInfra Travancore Pvt. Ltd.",
  publisher: "GInfra Travancore Pvt. Ltd.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ginfratravancore.com",
    siteName: "GInfra Travancore Pvt. Ltd.",
    title: "GInfra Travancore - Precision Manufacturing for Defence & Aerospace",
    description: "Leading precision manufacturing company in Telangana, India. Specializing in defence, aerospace, and advanced robotics components with ISO 9001 and AS9100 certifications.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GInfra Travancore - Precision Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GInfra Travancore - Precision Manufacturing for Defence & Aerospace",
    description: "Leading precision manufacturing company in Telangana, India. Specializing in defence, aerospace, and advanced robotics components.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://ginfratravancore.com",
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Telangana, India",
    "geo.position": "17.4569;78.3677",
    "ICBM": "17.4569, 78.3677",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://ginfratravancore.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
