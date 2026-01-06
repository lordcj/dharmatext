import { Inter, Crimson_Pro, Cormorant_Garamond } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
});

export const crimsonPro = Crimson_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-serif',
});

export const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-display',
});

// Using local font or Google Font for Tiro Devanagari Sanskrit if available via next/font/google
// Since it's not a standard Google Font in the default list for some versions, we might need a workaround or just import it in CSS. 
// However, sticking to the user request for "Tiro Devanagari". 
// A robust way if it's not in the google font package is to use the @fontsource package or just use a standard fallback.
// But for now, let's assume we can simply load it via Google Fonts if it exists there, or we'll use a standard serif for Sanskrit as fallback if strict loading fails.
// Actually, Tiro Devanagari Sanskrit IS on Google Fonts.
import { Tiro_Devanagari_Sanskrit } from 'next/font/google';

export const tiroSanskrit = Tiro_Devanagari_Sanskrit({
    weight: ['400'],
    subsets: ['devanagari', 'latin'],
    variable: '--font-sanskrit',
    display: 'swap',
});
