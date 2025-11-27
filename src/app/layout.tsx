import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/provider/query.provider";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Two Zero Club",
  description:
    "Shop premium printed products at Two Zero Club. Discover custom t-shirts, hoodies, posters, mugs, and personalized merchandise. High-quality printing with fast delivery. Your one-stop shop for unique printed apparel and accessories.",
  keywords: [
    "printed products",
    "custom merchandise",
    "printed t-shirts",
    "custom hoodies",
    "personalized gifts",
    "print on demand",
    "custom apparel",
    "printed posters",
    "custom mugs",
    "personalized clothing",
    "graphic tees",
    "printed accessories",
    "custom printing",
    "Two Zero Club",
    "online merchandise store",
    "printed fashion",
    "custom design products",
  ],
  authors: [{ name: "Two Zero Club" }],
  openGraph: {
    title: "Two Zero Club - Premium Printed Products & Custom Merchandise",
    description:
      "Shop premium printed products and custom merchandise. High-quality printing with fast delivery.",
    type: "website",
    siteName: "Two Zero Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Zero Club - Premium Printed Products",
    description: "Shop premium printed products and custom merchandise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dvb7dwt.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster></Toaster>
      </body>
    </html>
  );
}
