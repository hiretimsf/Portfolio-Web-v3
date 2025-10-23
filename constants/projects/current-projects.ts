import { CurrentProject } from "@/types";

// Current projects data
const currentProjects: CurrentProject[] = [
  {
    id: 1,
    title: "Sign Language Dictionary",
    description: "Learn Mongolian sign language with interactive lessons.",
    href: "/apps/sign-language-dictionary",
    imageUrl: "/images/app-placeholder.jpg",
    imageAlt: "Sign Language Dictionary",
    githubLink: "https://github.com/timtbdev/sign-language-dictionary",
    downloadLink:
      "https://play.google.com/store/apps/details?id=com.timtb.signlanguagedictionary",
  },
  {
    id: 2,
    title: "RunningSux",
    description: "Find and share battle tested running tracks.",
    href: "/apps/runningsux",
    imageUrl: "/images/app-placeholder.jpg",
    imageAlt: "RunningSux",
    githubLink: "https://github.com/timtbdev/runningsux",
    downloadLink:
      "https://play.google.com/store/apps/details?id=com.timtb.runningsux",
  },
  {
    id: 3,
    title: "Digital Nomad Advisory",
    href: "/apps/digital-nomad-advisory",
    description: "Platform providing resources for digital nomads.",
    imageUrl: "/images/app-placeholder.jpg",
    imageAlt: "Digital Nomad Advisory",
    githubLink: "https://github.com/timtbdev/digital-nomad-advisory",
    downloadLink:
      "https://play.google.com/store/apps/details?id=com.timtb.digitalnomadadvisory",
  },
];

export default currentProjects;
