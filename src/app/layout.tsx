import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  description: "GInfra Travancore specializes in high-precision manufacturing for defence, aerospace, and advanced robotics. We deliver mission-critical components with tight tolerances, short lead times, and full traceability.",
  keywords: "defence manufacturing, aerospace components, precision machining, artillery fuzes, CNC machining, electronics integration, quality assurance",
  authors: [{ name: "GInfra Travancore Pvt. Ltd." }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
