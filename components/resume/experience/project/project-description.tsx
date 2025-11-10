import type { ExperienceProjectItemType } from "@/types";

interface ProjectDescriptionProps {
  description: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <p className="text-panda-text/80 line-clamp-2 text-sm">{description}</p>
  );
}
