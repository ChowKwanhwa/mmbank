import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM Bank | First On-Chain Bank & Stable Cash Flow Engine",
  description: "Decentralized On-Chain Bank for Sustainable Yield. Providing stable cash flow and liquidity via a multi-engine on-chain ecosystem.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-orange-500/30 selection:text-orange-500 overflow-x-hidden`}
      >
        <LanguageProvider>
          <Web3Provider>
            {children}
          </Web3Provider>
        </LanguageProvider>
      </body>
    </html>
  );
}
