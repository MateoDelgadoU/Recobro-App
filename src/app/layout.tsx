import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://recobro-app.vercel.app/'),
  title: {
    default: 'Recobro - Multi-tenant Project Management',
    template: '%s | Recobro'
  },
  description: 'Modern multi-tenant SaaS dashboard for project management',
  openGraph: {
    title: 'Recobro - Multi-tenant Project Management',
    description: 'Modern multi-tenant SaaS dashboard for project management',
    url: 'https://recobro-app.vercel.app/',
    siteName: 'Recobro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recobro - Multi-tenant Project Management',
    description: 'Modern multi-tenant SaaS dashboard for project management',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
