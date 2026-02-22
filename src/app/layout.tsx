import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecobill.lk"),
  title: {
    default: "EcoBill — Professional Invoice Generator for Sri Lankan Businesses",
    template: "%s | EcoBill",
  },
  description:
    "Create professional invoices in seconds. Go paperless. Free to start — no account needed. Built for Sri Lanka's smallest businesses.",
  keywords: [
    "invoice generator",
    "Sri Lanka",
    "invoice maker",
    "PDF invoice",
    "LKR invoice",
    "small business invoice",
    "free invoice",
    "paperless invoice",
    "eco friendly",
  ],
  authors: [{ name: "EcoBill" }],
  creator: "EcoBill",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://ecobill.lk",
    siteName: "EcoBill",
    title: "EcoBill — Professional Invoice Generator for Sri Lankan Businesses",
    description:
      "Create professional invoices in seconds. Go paperless. Free to start — no account needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EcoBill — Invoice Generator for Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoBill — Invoice Generator for Sri Lanka",
    description:
      "Create professional invoices in seconds. Free to start — no account needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
