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
  title: "Filostech — Global Capability Centers & Fractional Leadership",
  description:
    "Build world-class digital products without building a large internal team. From fractional technology leadership to fully managed engineering teams.",
  keywords:
    "Global Capability Center, GCC, Fractional CTO, Fractional VP Engineering, Offshore Engineering, Product Development",
  openGraph: {
    title: "Filostech — Global Capability Centers & Fractional Leadership",
    description:
      "Build world-class digital products without building a large internal team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07111E] text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
