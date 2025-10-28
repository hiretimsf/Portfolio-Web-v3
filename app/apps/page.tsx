import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import allProjects from "@/constants/projects/all-projects";
import {
  CurrentProject,
  EarlyProject,
  ModernProject,
  WebProject,
} from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProjectItem = CurrentProject | WebProject | EarlyProject | ModernProject;

// Unified interface for display data
interface ProjectDisplayData {
  href: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  githubLink?: string;
  downloadLink?: string;
  liveDemoLink?: string;
}

export default function AppsPage() {
  // Type guards for better type safety
  const isCurrentProject = (item: ProjectItem): item is CurrentProject => {
    return "href" in item && "imageUrl" in item && "imageAlt" in item;
  };

  const isWebProject = (item: ProjectItem): item is WebProject => {
    return (
      "href" in item &&
      "imageUrl" in item &&
      "imageAlt" in item &&
      "github" in item
    );
  };

  const isEarlyProject = (item: ProjectItem): item is EarlyProject => {
    return (
      "year" in item &&
      "status" in item &&
      "section" in item &&
      item.section === "early"
    );
  };

  const isModernProject = (item: ProjectItem): item is ModernProject => {
    return (
      "year" in item &&
      "status" in item &&
      "section" in item &&
      item.section === "modern"
    );
  };

  const getProjectData = (item: ProjectItem): ProjectDisplayData => {
    if (isCurrentProject(item)) {
      return {
        href: item.href,
        title: item.title,
        image: item.imageUrl,
        alt: item.imageAlt,
        description: item.description,
        githubLink: item.githubLink,
        downloadLink: item.downloadLink,
      };
    }

    if (isWebProject(item)) {
      return {
        href: item.href,
        title: item.title,
        image: item.imageUrl,
        alt: item.imageAlt,
        description: item.description,
        githubLink: item.github,
        liveDemoLink: item.liveDemo,
      };
    }

    if (isEarlyProject(item) || isModernProject(item)) {
      return {
        href: "#", // Placeholder since these don't have links
        title: item.title,
        image: "/images/app-placeholder.jpg", // Use placeholder image
        alt: item.title,
        description: item.description,
        githubLink: isModernProject(item) ? item.github : undefined,
        downloadLink: isModernProject(item) ? item.download : undefined,
      };
    }

    // Fallback for unknown types
    return {
      href: "#",
      title: "Unknown Project",
      image: "/images/app-placeholder.jpg",
      alt: "Unknown Project",
      description: "No description available",
    };
  };

  // Handle empty state
  if (!allProjects || allProjects.length === 0) {
    return (
      <div className="bg-panda-prune mx-auto w-full max-w-7xl border-t border-gray-200 py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline underline-offset-8 sm:text-4xl">
            ALL APPS
          </h2>
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-panda-text text-lg">
              No projects available at the moment.
            </p>
            <p className="text-panda-text mt-2 text-sm">
              Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-panda-prune mx-auto w-full max-w-7xl border-t border-gray-200 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline underline-offset-8 sm:text-4xl">
          ALL APPS
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allProjects.map((item: ProjectItem, index: number) => {
            const projectData = getProjectData(item);
            return (
              <Card
                key={`${item.title}-${index}`}
                className="h-full gap-0 rounded-none rounded-b-md border border-gray-200 py-0 transition-shadow duration-300 hover:shadow-lg"
                role="article"
                aria-labelledby={`project-title-${index}`}
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    alt={projectData.alt}
                    src={projectData.image}
                    width={1000}
                    height={500}
                    className="w-full rounded-none transition-transform duration-300 hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3} // Prioritize first 3 images
                  />
                </div>
                <CardHeader>
                  <CardTitle
                    id={`project-title-${index}`}
                    className="text-panda-text mt-4 text-lg/6"
                  >
                    {projectData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-panda-text line-clamp-3 text-sm/6">
                    {projectData.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-6 mb-4 flex-col gap-2">
                  {projectData.href && projectData.href !== "#" && (
                    <Button
                      className="bg-panda-blue hover:bg-panda-blue-dark text-md w-full text-white transition-colors duration-200"
                      asChild
                    >
                      <Link
                        href={projectData.href}
                        aria-label={`View ${projectData.title} project`}
                      >
                        View Project
                      </Link>
                    </Button>
                  )}
                  {projectData.liveDemoLink && (
                    <Button
                      className="bg-panda-orange hover:bg-panda-orange-dark text-md w-full text-white transition-colors duration-200"
                      asChild
                    >
                      <Link
                        href={projectData.liveDemoLink}
                        aria-label={`View live demo of ${projectData.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {projectData.githubLink && (
                    <Button
                      className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text text-md w-full transition-colors duration-200"
                      asChild
                    >
                      <Link
                        href={projectData.githubLink}
                        aria-label={`View ${projectData.title} source code on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {projectData.downloadLink && (
                    <Button
                      className="bg-panda-green hover:bg-panda-dark-green text-md w-full text-white transition-colors duration-200"
                      asChild
                    >
                      <Link
                        href={projectData.downloadLink}
                        aria-label={`Download ${projectData.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
