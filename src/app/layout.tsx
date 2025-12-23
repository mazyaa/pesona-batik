import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RootClient from "./RootClient";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pesona Batik",
  description: "Situs resmi penjualan batik online Pesona Batik Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <RootClient>{children}</RootClient>

        <Script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

