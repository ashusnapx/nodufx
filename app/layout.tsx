import type { Metadata } from "next";
import { Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground transition-colors duration-300 selection:bg-accent/20 selection:text-accent`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
