import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/navbar";
import PageLoader from "@/components/page-loader";
import PageTransition from "@/components/page-transition";
import SmoothScroll from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Dogukan — Software Engineer",
    template: "%s | Dogukan",
  },
  description: "Web designer crafting beautiful digital experiences",
  openGraph: {
    title: "Dogukan — Software Engineer",
    description: "Web designer crafting beautiful digital experiences",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Dogukan — Software Engineer",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative select-none",
          geist.variable,
          geistMono.variable
        )}
      >
        <PageLoader />
        <Backdrop />
        <SmoothScroll />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              <PageTransition>{children}</PageTransition>
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <div
          className="pointer-events-none bg-black fixed bottom-0 left-0 z-20 h-28 w-full"
          style={{
            maskImage: "linear-gradient(transparent, #000000)",
            WebkitMaskImage: "linear-gradient(transparent, #000000)",
          }}
        />
      </body>
    </html>
  );
}
