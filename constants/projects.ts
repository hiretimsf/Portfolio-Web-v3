import { Project } from "@/types";

// Featured projects data
const projects: Project[] = [
  {
    id: 1,
    type: "Kotlin",
    subType: "Android",
    title: "Mongolian Sign Language",
    href: "/projects/mongolian-sign-language",
    description: "Android app for learning Mongolian sign language.",
    imageUrlHorizontal: "/images/horizontal-app-placeholder.jpg",
    imageUrlVertical: "/images/vertical-app-placeholder.jpg",
    features: [
      {
        feature: "Interactive lessons for Mongolian sign language.",
      },
      {
        feature: "Step-by-step video guides for each sign.",
      },
      {
        feature: "Track your learning progress and achievements.",
      },
    ],
  },
  {
    id: 2,
    type: "Kotlin",
    subType: "Android",
    title: "Don't Run Fast",
    href: "/projects/dont-run-fast",
    description: "Android app to find and share zone2 running tracks.",
    imageUrlHorizontal: "/images/horizontal-app-placeholder.jpg",
    imageUrlVertical: "/images/vertical-app-placeholder.jpg",
    features: [
      {
        feature: "Find and share optimal zone2 running tracks.",
      },
      {
        feature: "Discover new running routes in your area.",
      },
      {
        feature: "Share your favorite running tracks with others.",
      },
    ],
  },
  {
    id: 3,
    type: "Kotlin",
    subType: "Android",
    title: "Digital Nomad Advisory",
    href: "/projects/digital-nomad-advisory",
    description: "Platform providing resources for digital nomads.",
    imageUrlHorizontal: "/images/horizontal-app-placeholder.jpg",
    imageUrlVertical: "/images/vertical-app-placeholder.jpg",
    features: [
      {
        feature: "Comprehensive guides for digital nomads.",
      },
      {
        feature: "Detailed information about nomad-friendly locations.",
      },
      {
        feature: "Connect with other digital nomads worldwide.",
      },
    ],
  },
];

export default projects;
