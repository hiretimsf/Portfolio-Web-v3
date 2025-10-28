import ProjectCard from "@/components/shared/project-card";
import androidApps from "@/constants/projects/android-apps";
import webApps from "@/constants/projects/web-apps";
import { AndroidApp, WebProject } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Apps | Tim's Portfolio",
  description:
    "Explore Tim's web applications built with Next.js, React, and modern web technologies.",
  openGraph: {
    title: "Web Apps | Tim's Portfolio",
    description:
      "Explore Tim's web applications built with Next.js, React, and modern web technologies.",
  },
};

export default function AppsPage() {
  return (
    <div className="bg-panda-background mx-auto w-full max-w-7xl border-t border-gray-200">
      <section
        aria-label="Android Apps"
        className="bg-panda-background mx-auto max-w-7xl border-b border-gray-200 px-6 py-8 md:py-10 lg:px-8"
      >
        <h1 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline underline-offset-8 sm:text-4xl">
          ANDROID APPS
        </h1>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {androidApps.map((project: AndroidApp, index: number) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={{
                id: project.id,
                title: project.title,
                description: project.description,
                imageUrl: project.image,
                imageAlt: project.title,
                github: project.github || "",
                liveDemo: project.liveDemo || "",
                features: [],
              }}
              index={index}
            />
          ))}
        </div>
      </section>
      <section
        aria-label="Web Apps"
        className="bg-panda-prune mx-auto max-w-7xl border-b border-gray-200 px-6 py-8 md:py-10 lg:px-8"
      >
        <h1 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline underline-offset-8 sm:text-4xl">
          WEB APPS
        </h1>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {webApps.map((project: WebProject, index: number) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
