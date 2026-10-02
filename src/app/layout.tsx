import type { Metadata } from 'next';
import Script from 'next/script';
import { Crimson_Pro, Cormorant_Garamond, Inter, Cinzel, Noto_Serif_Devanagari } from "next/font/google"; // Divine Fonts (Optimized)
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, DEFAULT_OG_IMAGE, getCanonicalUrl } from "@/lib/seo.config";
import { generateWebSiteSchema } from "@/lib/schema";
import SchemaScript from "@/components/seo/SchemaScript";

// Body / Scripture Text
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// Display / Headings (Ancient Inscription feel)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-cinzel",
  display: "swap",
  preload: false,
});

// Premium Devanagari font with beautiful ligatures for Sanskrit/Hindi scripture
const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Hindu Prayers, Aartis & Scriptures`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    title: `${SITE_NAME} — Your Spiritual Gateway`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Your Spiritual Gateway`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AD_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXX';
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {/* AdSense Script — lazyOnload to avoid blocking LCP */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Google Analytics Script - GA4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${crimsonPro.variable} ${cormorant.variable} ${inter.variable} ${cinzel.variable} ${notoSerifDevanagari.variable} antialiased bg-sandstone-50 text-stone-800 font-serif`}
      >
        <ThemeProvider>
          <SchemaScript schemas={[generateWebSiteSchema()]} />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
