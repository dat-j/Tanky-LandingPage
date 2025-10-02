import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanky | Tank Battle Royale",
  description: "A 2D tank battle royale game built on Solana",
  metadataBase: new URL("https://tanky.local"),
  openGraph: {
    title: "Tanky | Tank Battle Royale",
    description: "A 2D tank battle royale game built on Solana",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased tanky-bg`}>{children}</body>
    </html>
  );
}
