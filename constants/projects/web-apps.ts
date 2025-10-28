import { WebProject } from "@/types";

const webProjects: WebProject[] = [
  {
    id: 1,
    title: "Full-Stack Blog App (Next.js)",
    description:
      "A fully responsive full-stack blog app built with Next.js, React, TailwindCSS, and Supabase as backend. Based on Shadcn UI components.",
    imageUrl: "/images/apps/web/blog-app.jpg",
    imageAlt: "Blog App",
    github: "https://github.com/timtbdev/Next.js-Blog-App",
    liveDemo: "https://ubdotcafe.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio Website v2 (Next.js)",
    description:
      "A modern, fast, fully responsive portfolio website with SEO optimization, MDX blog system, and custom react motion animations.",
    imageUrl: "/images/apps/web/portfolio-app-v2.jpg",
    imageAlt: "Portfolio Website",
    github: "https://github.com/timtbdev/Next.js-Portfolio-App",
    liveDemo: "https://tim-portfolio-web-v2.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website v1 (Next.js)",
    description:
      "Built with Next.js 13 and TailwindCSS. This is the first version of my portfolio website.",
    imageUrl: "/images/apps/web/portfolio-app-v1.jpg",
    imageAlt: "Portfolio Website",
    github: "https://github.com/hiretimsf/Portfolio-Web-v1",
    liveDemo: "https://tim-portfolio-web-v1.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Website v0 (jQuery)",
    description:
      "This is the first version of my portfolio site, built with HTML, CSS, and jQuery.",
    imageUrl: "/images/apps/web/portfolio-app-v0.jpg",
    imageAlt: "Portfolio Website v0",
    liveDemo: "https://personal-website-76368.web.app/index.html",
  },
  {
    id: 5,
    title: "Renewable Energy Project",
    description:
      "Designed and developed from the ground up with HTML, CSS, and JavaScript to highlight the key advantages of a renewable energy initiative.",
    imageUrl: "/images/apps/web/renewable-energy-app.jpg",
    imageAlt: "Renewable Energy Project",
    liveDemo: "https://ioco-5c746.web.app/eg/index.html",
  },
];

export default webProjects;
