import { EDUCATION } from "@/constants/education";
import ExperienceItem from "../experience/experience-item";

interface EducationSectionProps {
  className?: string;
}

export default function EducationSection({ className }: EducationSectionProps) {
  return (
    <section className={className} aria-label="Education">
      {EDUCATION && EDUCATION.length > 0 ? (
        EDUCATION.map((education, index) => (
          <ExperienceItem
            key={education.id}
            experience={education}
            className={index % 2 === 0 ? undefined : "bg-panda-prune/40"}
          />
        ))
      ) : (
        <p className="text-muted-foreground px-4 py-8 text-center text-sm">
          No education to display.
        </p>
      )}
    </section>
  );
}
