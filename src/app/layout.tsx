import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI Web App Builder | From idea to app – Hostinger Horizons",
  description: "Describe what you want to build and let AI create a fully functional web application, database, and backend for you.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "AI Web App Builder | Hostinger Horizons",
    description: "Build standard web apps like e-commerce stores, CRMs, and SaaS platforms in minutes with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#0c0d0d] text-white font-sans antialiased selection:bg-purple-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
