import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitment 2024",
  description: "NSS SoEE Project Lakshya 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lakshya_hero.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
