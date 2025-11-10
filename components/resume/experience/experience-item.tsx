import { cn } from "@/lib/utils";
import type { ExperienceItemType } from "@/types";
import CompanyMain from "./company/company-main";
import PositionMain from "./position/position-main";
import { ProjectMain } from "./project/project-main";

type ExperienceItemProps = {
  experience: ExperienceItemType;
  className?: string;
};

export default function ExperienceItem({
  experience,
  className,
}: ExperienceItemProps) {
  const {
    companyLogo,
    companyLogoAlt,
    companyName,
    companyLocation,
    companyWebsite,
    country,
    positions,
    projects,
  } = experience;

  const hasPositions = Array.isArray(positions) && positions.length > 0;
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <article className={cn("border-b border-gray-200", className)}>
      <CompanyMain
        companyLogo={companyLogo}
        companyLogoAlt={companyLogoAlt}
        companyName={companyName}
        companyLocation={companyLocation}
        companyWebsite={companyWebsite}
        country={country}
      />

      {hasPositions && (
        <div className="space-y-0">
          {positions.map((position) => (
            <PositionMain
              key={position.id}
              position={position}
              hasProjects={hasProjects}
            />
          ))}
        </div>
      )}

      {hasProjects &&
        projects.map((project) => (
          <ProjectMain key={project.title} project={project} />
        ))}
    </article>
  );
}
