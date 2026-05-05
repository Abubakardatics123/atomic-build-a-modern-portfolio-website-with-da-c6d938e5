import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Full-Stack Developer",
    template: "%s | Alex Morgan",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
    siteName: "Alex Morgan Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and Node.js.",
    images: ["/images/og-image.jpg"],
    creator: "@alexmorgan",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
