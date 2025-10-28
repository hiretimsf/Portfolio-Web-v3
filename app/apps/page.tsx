import ProjectCard from "@/components/shared/project-card";
import androidApps from "@/constants/projects/android-apps";
import webApps from "@/constants/projects/web-apps";
import HEAD from "@/constants/seo/head";
import { getBaseUrl } from "@/lib/utils";
import { AndroidApp, HeadType, WebProject } from "@/types";
import type { Metadata } from "next";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Apps";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  applicationName: page.title,
  description: page.description,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
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
