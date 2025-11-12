import { truncateDescription, truncateTitle } from "@/lib/utils";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("Looking for an Android Developer? | Hire Tim"),
    description: truncateDescription(
      "Tim is an Android Developer based in San Francisco Bay Area. He is a skilled Android Developer with a passion for building high-performance Android applications.",
    ),
    slug: "/",
  },
  {
    page: "About",
    title: truncateTitle("About | Android Developer for Hire | Tim"),
    description: truncateDescription(
      "Looking for an Android Developer in San Francisco Bay Area? Hire Tim.",
    ),
    slug: "/about",
  },
  {
    page: "Apps",
    title: truncateTitle("Apps | Showcasing Tim's Apps | Tim"),
    description: truncateDescription(
      "Kotlin, Jetpack Compose, and Android Development!",
    ),
    slug: "/apps",
  },
  {
    page: "Resume",
    title: truncateTitle("Resume | Tim's Resume | Tim"),
    description: truncateDescription(
      "Tim's resume showcasing his work experience and education.",
    ),
    slug: "/resume",
  },
];

export default HEAD;
