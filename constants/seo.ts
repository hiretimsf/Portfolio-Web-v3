import { truncateDescription, truncateTitle } from "@/lib/utils";
import type { HeadType } from "@/types";

// Author information
export const AUTHOR = {
  name: "Tim Baz",
  twitterUrl: "https://x.com/hiretimsf",
  twitterAddress: "@hiretimsf",
  email: "hiretimsf@gmail.com",
};

// Favicon configurations
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

// Page head configurations
export const HEAD: HeadType[] = [
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
