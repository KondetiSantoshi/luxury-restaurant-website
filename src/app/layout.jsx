import './globals.css';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'AURA | Modern Minimalist Haute Gastronomy & Wine Cellar',
  description: 'Three Michelin-starred culinary journey rooted in Venetian heritage and contemporary artisanal gastronomy. Dorsoduro, Venice.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#080706] text-[#F7F4EE] antialiased min-h-screen selection:bg-[#C5A880] selection:text-[#080706]">
        {children}
      </body>
    </html>
  );
}
