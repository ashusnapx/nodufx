import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/data/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {/* Animated Background Blobs */}
          <div className='fixed inset-0 overflow-hidden pointer-events-none -z-10'>
            <div className='blob blob-1' />
            <div className='blob blob-2' />
            <div className='blob blob-3' />
          </div>

          <Header />
          <main className='min-h-screen relative'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
