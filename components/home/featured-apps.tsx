import { ProjectItemType } from "@/types";
import DotsBackground from "../shared/dots-background";
import ProjectCard from "../shared/project-card";

interface FeaturedAppsProps {
  projects: ProjectItemType[];
}

export default function FeaturedApps({ projects }: FeaturedAppsProps) {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-10 lg:px-8">
      <DotsBackground gridId="featured-apps" className="text-gray-200/80" />
      <div className="xl mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects.map((project: ProjectItemType, index: number) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
