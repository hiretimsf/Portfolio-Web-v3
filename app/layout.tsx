import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import { Toaster } from "@/components/ui/sonner";
import TailwindIndicator from "@/components/ui/tailwind-indicator";
// Constants and utilities
import { AUTHOR, FAVICONS, HEAD, KEYWORDS, OPEN_GRAPH } from "@/constants/seo";
import { cn, getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Roboto as FontSans } from "next/font/google";
// Global styles
import "@/styles/tailwind.css";

// Type definitions
interface RootLayoutProps {
  children: React.ReactNode;
}

// Constants
const CURRENT_PAGE = "Home"; // Define the current page for SEO configuration

// SEO configuration
const currentPageSEO = HEAD.find(
  (page: HeadType) => page.page === CURRENT_PAGE,
) as HeadType; // Get SEO configuration for the current page from the HEAD array

// Utility functions
const validateSEOConfig = () => {
  // Validates SEO configuration to ensure all required fields are present
  if (!HEAD || HEAD.length === 0) {
    console.error("⚠️ HEAD configuration is missing or empty");
  }
  if (!KEYWORDS || KEYWORDS.length === 0) {
    console.warn("🔍 No keywords defined for SEO");
  }
  if (!(AUTHOR && AUTHOR.name)) {
    console.error("❌ Author information is missing");
  }
  if (!(FAVICONS && FAVICONS.icon) || FAVICONS.icon.length === 0) {
    console.warn("🖼️ No favicons configured");
  }
  if (!OPEN_GRAPH) {
    console.error("📱 OpenGraph configuration is missing");
  } else if (!OPEN_GRAPH.image || !OPEN_GRAPH.twitterImage) {
    console.warn("📱 OpenGraph images are missing");
  }
};

// Font configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Initialize SEO validation
validateSEOConfig();

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Metadata configuration
export const metadata: Metadata = {
  // Basic metadata
  title: currentPageSEO?.title,
  generator: AUTHOR.name,
  applicationName: currentPageSEO?.title,
  description: currentPageSEO?.description,
  referrer: "origin-when-cross-origin",
  keywords: (KEYWORDS ?? []).join(", "),

  // Author information
  authors: [
    {
      name: AUTHOR.name,
      url: AUTHOR.twitterUrl,
    },
  ],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,

  // URL configurations
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: getBaseUrl(),
    types: {
      "application/rss+xml": `${getBaseUrl("/rss.xml")}`,
    },
    languages: {
      "en-US": getBaseUrl(),
      "x-default": getBaseUrl(),
    },
  },

  // Apple web app configuration
  appleWebApp: {
    title: currentPageSEO?.title ?? "",
    statusBarStyle: "default",
    capable: true,
  },

  // Search engine configuration
  robots: {
    index: true,
    follow: true,
  },

  // Favicon configuration
  icons: FAVICONS,

  // OpenGraph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en",
    url: getBaseUrl(),
    title: currentPageSEO?.title,
    description: currentPageSEO?.description,
    siteName: currentPageSEO?.title,
    images: [
      {
        url: OPEN_GRAPH.image,
        width: 1200,
        height: 630,
        alt: currentPageSEO?.title ?? "",
        type: "image/png",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: currentPageSEO?.title,
    description: currentPageSEO?.description,
    site: AUTHOR.twitterAddress,
    images: [
      {
        url: OPEN_GRAPH.twitterImage,
        width: 1200,
        height: 675,
        alt: currentPageSEO?.title,
        type: "image/png",
      },
    ],
    creator: AUTHOR.twitterAddress,
  },
};

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className="h-full scroll-smooth"
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={cn(
          "selection:bg-panda-text-highlight selection:text-panda-text-on-highlight-green bg-white antialiased",
          fontSans.variable,
        )}
        suppressHydrationWarning={true}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
        <Analytics />
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
