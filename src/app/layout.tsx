import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google"; // Heavenly Fonts
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DharmaText - Your Spiritual Gateway",
  description: "A divine collection of Bhajans, Kathas, and Scriptures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased bg-saffron-50 text-slate-800 font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
