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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tanky | Tank Battle Royale",
    description: "A 2D tank battle royale game built on Solana",
    type: "website",
    url: "/",
    images: [{ url: "/tank-hero.png", width: 1200, height: 630, alt: "Tank Battle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanky | Tank Battle Royale",
    description: "A 2D tank battle royale game built on Solana",
    images: ["/tank-hero.png"],
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
