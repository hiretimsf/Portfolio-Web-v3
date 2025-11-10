import type { ExperienceProjectItemType } from "@/types";
import { ProjectDate } from "./project-date";
import { ProjectDescription } from "./project-description";
import { ProjectImage } from "./project-image";
import { ProjectTitle } from "./project-title";

type ProjectMainProps = {
  project: ExperienceProjectItemType;
};

export function ProjectMain({ project }: ProjectMainProps) {
  return (
    <div className="px-6 md:flex-row md:px-8">
      <div className="flex w-full flex-row gap-4 border-r border-l border-gray-200 px-4 md:gap-4">
        <div className="flex-shrink-0 border-r border-gray-200 py-4 pr-4">
          <ProjectImage
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
          />
        </div>
        <div className="flex flex-col gap-1 border-gray-200 py-4">
          <ProjectTitle title={project.title} demoLink={project.demoLink} />
          <ProjectDate date={project.date ?? "Unknown date"} />
          <ProjectDescription description={project.description} />
        </div>
      </div>
    </div>
  );
}
