import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter as it has good support for Slovak characters
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin", "latin-ext"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Alarmtel SK - Zabezpečovacie systémy pre domov a firmy",
  description: "Špičkové alarmy, kamerové systémy, dochádzkové systémy a požiarna signalizácia. 25 rokov skúseností v obore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth scroll-pt-20" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-navy-900 text-slate-light`} suppressHydrationWarning>
        {children}
        <CookieConsent />
        <ScrollToTop />
      </body>
    </html>
  );
}
