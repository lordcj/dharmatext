import type { Metadata } from "next";
import { Crimson_Pro, Cormorant_Garamond, Inter } from "next/font/google"; // Divine Fonts
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

// Body / Scripture Text
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

// Display / Headings (Ancient Inscription feel)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
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
        className={`${crimsonPro.variable} ${cormorant.variable} ${inter.variable} antialiased bg-sandstone-50 text-stone-800 font-serif`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
