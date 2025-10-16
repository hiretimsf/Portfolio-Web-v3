import { Toaster } from "@/components/ui/sonner";
import TailwindIndicator from "@/components/ui/tailwind-indicator";
import {
  cn,
  getBaseUrl,
  truncateDescription,
  truncateTitle,
} from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Roboto as FontSans } from "next/font/google";
import "@/styles/tailwind.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";

interface RootLayoutProps {
  children: React.ReactNode;
}

// Author configuration

export const AUTHOR = {
  name: "Tim Baz",
  twitterUrl: "https://x.com/hiretimsf",
  twitterAddress: "@hiretimsf",
  email: "hiretimsf@gmail.com",
};

// Favicon configuration

const BASE_URL = "/favicons";

export const FAVICONS = {
  icon: [
    { url: `${BASE_URL}/favicon.ico`, type: "image/x-icon" },
    { url: `${BASE_URL}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    {
      url: `${BASE_URL}/android-icon-192x192.png`,
      sizes: "192x192",
      type: "image/png",
    },
  ],
  apple: [
    { url: `${BASE_URL}/apple-icon.png` },
    {
      url: `${BASE_URL}/apple-icon-180x180.png`,
      sizes: "180x180",
      type: "image/png",
    },
  ],
  other: [
    {
      rel: "apple-touch-icon-precomposed",
      url: `${BASE_URL}/apple-icon-precomposed.png`,
    },
  ],
};

// SEO configuration - Page head configurations
export const HEAD: {
  page: string;
  title: string;
  slug: string;
  description: string;
}[] = [
  {
    page: "Home",
    title: truncateTitle("Looking for an Android Developer? | Hire Tim"),
    description: truncateDescription(
      "Tim is an Android Developer based in San Francisco Bay Area. He is a skilled Android Developer with a passion for building high-performance Android applications.",
    ),
    slug: "/",
  },
];

// SEO keywords
export const KEYWORDS = [
  "hire tim",
  "Tim Baz",
  "Android Developer in San Francisco Bay Area",
  "Android Developer in San Francisco",
  "Android Development",
  "Kotlin",
  "Kotlin Flows",
  "Kotlin Coroutines",
  "Java",
  "RxJava",
  "XML",
  "JSON",
  "REST",
  "Retrofit2",
  "Ktor",
  "OkHttp3",
  "Coil",
  "Glide",
  "Picasso",
  "Dagger",
  "Dagger Hilt",
  "Koin",
  "Room",
  "Datastore",
  "DataStore Preferences",
  "Firebase",
  "Jetpack Compose",
  "MVVM",
  "MVI",
  "MVC",
];

// Open Graph and social media images
const OPENGRAPH_IMAGE = "/images/opengraph-image.png";
const TWITTER_IMAGE = "/images/twitter-image.png";

export const OPEN_GRAPH = {
  image: OPENGRAPH_IMAGE,
  twitterImage: TWITTER_IMAGE,
};

// Utility functions - Validates SEO configuration to ensure all required fields are present
const validateSEOConfig = () => {
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

// Page configuration

const PAGE = "Home";
const page = HEAD.find((headItem) => headItem.page === PAGE);

// Run SEO validation
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
  title: page?.title,
  generator: AUTHOR.name,
  applicationName: page?.title,
  description: page?.description,
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
    title: page?.title ?? "",
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
    title: page?.title,
    description: page?.description,
    siteName: page?.title,
    images: [
      {
        url: OPEN_GRAPH.image,
        width: 1200,
        height: 630,
        alt: page?.title ?? "",
        type: "image/png",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: page?.title,
    description: page?.description,
    site: AUTHOR.twitterAddress,
    images: [
      {
        url: OPEN_GRAPH.twitterImage,
        width: 1200,
        height: 675,
        alt: page?.title,
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
