'use client'

import "./globals.css";

import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
