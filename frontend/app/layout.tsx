import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "iPhone 17 Pro - Apple",
  description: "Forged in Grade 5 Titanium. Impossibly strong. Strikingly light. Undeniably Pro. Explore the new A19 Pro chip, advanced Apple Intelligence, and pro-level cameras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/cloudinary-video-player@4.0.3/dist/player.min.css" 
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/cloudinary-video-player@4.0.3/dist/player.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
