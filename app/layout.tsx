import type { Metadata } from "next";
import { domAnimation, LazyMotion } from "framer-motion";
import localFont from "next/font/local";

import "./global.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const roboto = localFont({
  src: [
    {
      path: "./fonts/roboto/roboto-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/roboto/roboto-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/roboto/roboto-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/inter/inter-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter/inter-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/inter/inter-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erzet.dev"),
  title: "eRZet – Tworzenie stron internetowych i aplikacji webowych",
  description:
    "Tworzymy nowoczesne strony internetowe, sklepy e-commerce i aplikacje webowe. Szybko, estetycznie i zoptymalizowane pod SEO. Warszawa i zdalnie.",
  keywords: [
    "strony internetowe Warszawa",
    "tworzenie stron internetowych",
    "aplikacje webowe",
    "sklep internetowy",
    "strony responsywne",
    "Next.js development",
    "React developer Warszawa",
  ],
  authors: [{ name: "Piotr", url: "https://erzet.dev" }],
  creator: "Piotr",
  publisher: "eRZet",
  openGraph: {
    title: "eRZet – Strony i aplikacje webowe na najwyższym poziomie",
    description:
      "Specjalizujemy się w szybkich, nowoczesnych i estetycznych projektach internetowych. Next.js, React, TypeScript, optymalizacja SEO i Core Web Vitals.",
    url: "https://erzet.dev",
    siteName: "eRZet",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 382,
        alt: "eRZet – Tworzenie stron i aplikacji",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eRZet – Strony i aplikacje webowe",
    description: "Nowoczesne rozwiązania internetowe – Warszawa i zdalnie",
    images: ["/og-image.webp"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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
    <html lang="pl">
      <head>
        <link
          rel="preload"
          href="/hero_mobile.svg"
          as="image"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
      </head>
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        <LazyMotion features={domAnimation}>
          <Header />
          {children}
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
