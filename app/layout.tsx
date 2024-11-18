import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProvider from "./client-provider";
import { ThemeProvider } from "@/components/theme-provider";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

// Metadata for SEO (allowed only in Server Component)
export const metadata: Metadata = {
  title: "TC Next",
  description: "Starter application for TYPO3 CMS with Next.js"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="light">
          <ClientProvider>{children}</ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
