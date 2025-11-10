import { EXPERIENCE } from "@/constants/experience";
import ExperienceItem from "./experience-item";

interface WorkExperienceSectionProps {
  className?: string;
}

export default function WorkExperienceSection({
  className,
}: WorkExperienceSectionProps) {
  return (
    <section className={className} aria-label="Work Experience">
      {EXPERIENCE && EXPERIENCE.length > 0 ? (
        EXPERIENCE.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            className={index % 2 === 0 ? undefined : "bg-panda-prune/40"}
          />
        ))
      ) : (
        <p className="text-muted-foreground px-4 py-8 text-center text-sm">
          No work experience to display.
        </p>
      )}
    </section>
  );
}
