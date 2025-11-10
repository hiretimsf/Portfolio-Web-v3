import { cn } from "@/lib/utils";
import type { ExperiencePositionItemType } from "@/types";
import PositionDescription from "./position-description";
import PositionHeader from "./position-header";
import PositionSkills from "./position-skills";

type PositionMainProps = {
  position: ExperiencePositionItemType;
  hasProjects?: boolean;
};

export default function PositionMain({
  position,
  hasProjects,
}: PositionMainProps) {
  return (
    <div className="flex flex-col px-6 md:px-8">
      <PositionHeader
        icon={position.icon}
        title={position.title}
        employmentType={position.employmentType ?? ""}
        employmentPeriod={position.employmentPeriod}
        employmentDuration={position.employmentDuration ?? ""}
      />
      <PositionDescription description={position.description} />
      <PositionSkills skills={position.skills} hasProjects={hasProjects} />
    </div>
  );
}
