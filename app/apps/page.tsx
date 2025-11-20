import DotsBackground from "@/components/shared/dots-background";
import Heading from "@/components/shared/heading";
import ProjectCard from "@/components/shared/project-card";
import SeparatorHorizontal from "@/components/shared/separator-horizontal";
import HEAD from "@/constants/seo/head";
import { projectsSource } from "@/lib/source";
import { cn, getBaseUrl } from "@/lib/utils";
import type { HeadType, ProjectItemType } from "@/types";
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

// Build a flat list of projects from the content source
type ProjectData = {
  title?: string;
  description?: string;
  date?: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
  github?: string;
  liveDemo?: string;
};

const PROJECTS: ProjectItemType[] = projectsSource
  .getPages()
  .map(({ data }, index) => {
    const d = (data ?? {}) as ProjectData;
    return {
      id: index,
      title: d.title ?? "",
      date: d.date,
      description: d.description ?? "",
      imageUrl: d.imageUrl ?? "/images/app-placeholder.jpg",
      imageAlt: d.imageAlt ?? d.title ?? "Project",
      github: d.github,
      liveDemo: d.liveDemo,
      category: d.category,
    } satisfies ProjectItemType;
  });

// Parse the start date (e.g., "October 2025 - Present" -> Date("October 2025"))
function parseStartDate(dateString?: string): number {
  if (!dateString) return 0;
  const start = dateString.split(" - ")[0]?.trim();
  const time = Date.parse(start ?? "");
  return Number.isNaN(time) ? 0 : time;
}

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
      backgroundStyleClassName: "bg-panda-prune",
      borderStyleClassName: "border-b border-panda-text/10",
      gridStyleClassName: "text-panda-text/10",
    },
  },
  {
    category: PROJECT_CATEGORIES.WEB,
    title: "WEB APPS",
    headingProps: {
      textStyleClassName: "text-3xl font-bold sm:text-4xl",
      backgroundStyleClassName: "bg-panda-prune",
      borderStyleClassName: "border-b border-panda-text/10",
      gridStyleClassName: "text-panda-text/10",
    },
  },
];

// Helper function to filter projects by category
function getProjectsByCategory(category: string): ProjectItemType[] {
  return PROJECTS.filter(
    (project: ProjectItemType) => project.category === category,
  ).sort((a, b) => parseStartDate(b.date) - parseStartDate(a.date));
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
function ProjectSection({
  config,
  isFirst,
}: {
  config: SectionConfig;
  isFirst: boolean;
}) {
  const projects = getProjectsByCategory(config.category);

  if (projects.length === 0) {
    return null;
  }

  return (
    <>
      {!isFirst && <SeparatorHorizontal />}
      <Heading
        title={config.title}
        textStyleClassName={config.headingProps.textStyleClassName}
        backgroundStyleClassName={config.headingProps.backgroundStyleClassName}
        gridStyleClassName={config.headingProps.gridStyleClassName}
      />
      <SeparatorHorizontal />
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
  const visibleSections = sections.filter(
    (section) => getProjectsByCategory(section.category).length > 0,
  );

  return (
    <div className="mx-auto max-w-7xl">
      {visibleSections.map((section, index) => (
        <ProjectSection
          key={section.category}
          config={section}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}
