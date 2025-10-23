import { WebProject } from "@/types";

const webProjects: WebProject[] = [
  {
    id: 1,
    title: "Full-Stack Next.js Blog App",
    description:
      "A fully responsive full-stack blog app built with Next.js, React, TailwindCSS, and Supabase as backend. Based on Shadcn UI components.",
    href: "/web-development/blog-app",
    imageUrl: "/images/apps/web/blog-app.jpg",
    imageAlt: "Blog App",
    github: "https://github.com/timtbdev/Next.js-Blog-App",
    liveDemo: "https://ubdotcafe.vercel.app",
    features: [
      {
        feature: "Next.js, React, TailwindCSS, Supabase",
      },
      {
        feature: "Shadcn UI components, React Motion animations",
      },
    ],
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description:
      "A modern, fast, fully responsive portfolio website with SEO optimization, MDX blog system, and custom react motion animations.",
    href: "/web-development/portfolio-website",
    imageUrl: "/images/apps/web/portfolio-app.jpg",
    imageAlt: "Portfolio Website",
    github: "https://github.com/timtbdev/Next.js-Portfolio-App",
    liveDemo: "https://projects-two-nu.vercel.app",
    features: [
      {
        feature: "Next.js, React, TailwindCSS, Supabase",
      },
      {
        feature: "Shadcn UI components, React Motion animations",
      },
    ],
  },
];

export default webProjects;
