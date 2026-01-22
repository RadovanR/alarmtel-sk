import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as it has good support for Slovak characters
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

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
      <body className={`${inter.className} bg-navy-900 text-slate-light`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
