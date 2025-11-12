import DotsBackground from "@/components/shared/dots-background";
import Heading from "@/components/shared/heading";
import ProjectCard from "@/components/shared/project-card";
import { PROJECTS } from "@/constants/projects";
import HEAD from "@/constants/seo/head";
import { cn, getBaseUrl } from "@/lib/utils";
import { HeadType, ProjectItemType } from "@/types";
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

// Constants for project categories
const PROJECT_CATEGORIES = {
  ANDROID: "Android",
  WEB: "Web",
} as const;

// Section configuration for different app categories
interface SectionConfig {
  category: typeof PROJECT_CATEGORIES.ANDROID | typeof PROJECT_CATEGORIES.WEB;
  title: string;
  headingProps: {
    textStyleClassName: string;
    backgroundStyleClassName: string;
    borderStyleClassName: string;
    gridStyleClassName: string;
  };
  sectionClassName?: string;
}

const sections: SectionConfig[] = [
  {
    category: PROJECT_CATEGORIES.ANDROID,
    title: "ANDROID APPS",
    headingProps: {
      textStyleClassName: "text-3xl font-bold sm:text-4xl",
      backgroundStyleClassName: "bg-panda-background",
      borderStyleClassName: "border-b border-gray-200",
      gridStyleClassName: "text-gray-200",
    },
  },
  {
    category: PROJECT_CATEGORIES.WEB,
    title: "WEB APPS",
    headingProps: {
      textStyleClassName: "text-3xl font-bold sm:text-4xl",
      backgroundStyleClassName: "bg-panda-prune",
      borderStyleClassName: "border-gray-300",
      gridStyleClassName: "text-gray-300",
    },
    sectionClassName: "bg-panda-prune",
  },
];

// Helper function to filter projects by category
function getProjectsByCategory(category: string): ProjectItemType[] {
  return PROJECTS.filter(
    (project: ProjectItemType) => project.category === category,
  );
}

// Helper function to transform ProjectItemType to WebProject format
function transformProject(project: ProjectItemType) {
  return {
    id: project.id,
    title: project.title,
    date: project.date,
    description: project.description,
    imageUrl: project.imageUrl,
    imageAlt: project.imageAlt || project.title,
    github: project.github,
    liveDemo: project.liveDemo,
  };
}

// Project section component
function ProjectSection({ config }: { config: SectionConfig }) {
  const projects = getProjectsByCategory(config.category);

  if (projects.length === 0) {
    return null;
  }

  return (
    <>
      <Heading
        title={config.title}
        textStyleClassName={config.headingProps.textStyleClassName}
        backgroundStyleClassName={config.headingProps.backgroundStyleClassName}
        borderStyleClassName={config.headingProps.borderStyleClassName}
        gridStyleClassName={config.headingProps.gridStyleClassName}
      />
      <section
        aria-label={`${config.category} Apps`}
        className={cn(
          "relative mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-8 px-6 py-8 md:py-10 lg:grid-cols-3 lg:px-8",
          config.sectionClassName,
        )}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${project.title}`}
            project={transformProject(project)}
            index={index}
          />
        ))}
        <DotsBackground gridId="apps" className="text-gray-200" />
      </section>
    </>
  );
}

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      {sections.map((section) => (
        <ProjectSection key={section.category} config={section} />
      ))}
    </div>
  );
}
