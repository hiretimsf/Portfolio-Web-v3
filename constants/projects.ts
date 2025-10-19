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
        name: "Sign Language Learning",
        description: "Interactive lessons for Mongolian sign language.",
      },
      {
        name: "Video Tutorials",
        description: "Step-by-step video guides for each sign.",
      },
      {
        name: "Progress Tracking",
        description: "Track your learning progress and achievements.",
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
        name: "Zone2 Running",
        description: "Find and share optimal zone2 running tracks.",
      },
      {
        name: "Route Discovery",
        description: "Discover new running routes in your area.",
      },
      {
        name: "Community Sharing",
        description: "Share your favorite running tracks with others.",
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
        name: "Nomad Resources",
        description: "Comprehensive guides for digital nomads.",
      },
      {
        name: "Location Insights",
        description: "Detailed information about nomad-friendly locations.",
      },
      {
        name: "Community Network",
        description: "Connect with other digital nomads worldwide.",
      },
    ],
  },
];

export default projects;
