import type { Metadata } from 'next';
import Script from 'next/script';
import { Crimson_Pro, Cormorant_Garamond, Inter, Cinzel, Tiro_Devanagari_Sanskrit, Lora, EB_Garamond, Noto_Serif_Devanagari } from "next/font/google"; // Divine Fonts
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

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

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

// Authentic Devanagari font for Sanskrit/Hindi scripture text
const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-sanskrit",
});

// Elegant serif for English translations
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

// Classic Garamond for scripture feel
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});

// Premium Devanagari font with beautiful ligatures for Sanskrit/Hindi scripture
const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DharmaText - Your Spiritual Gateway",
  description: "A divine collection of Aartis, Kathas, and Scriptures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AD_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXX';

  return (
    <html lang="en">
      <head>
        {/* AdSense Script - Lazy Loaded */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`${crimsonPro.variable} ${cormorant.variable} ${inter.variable} ${cinzel.variable} ${tiroDevanagari.variable} ${lora.variable} ${ebGaramond.variable} ${notoSerifDevanagari.variable} antialiased bg-sandstone-50 text-stone-800 font-serif`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
