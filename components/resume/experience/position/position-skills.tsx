import { cn } from "@/lib/utils";

type PositionSkillsProps = {
  skills?: string[];
  className?: string;
  hasProjects?: boolean;
};

export default function PositionSkills({
  skills,
  className,
  hasProjects,
}: PositionSkillsProps) {
  if (!Array.isArray(skills) || skills.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn(
        "not-prose flex flex-wrap gap-1.5 border-r border-l border-gray-200 px-4 py-4",
        hasProjects && "border-b",
        className,
      )}
    >
      {skills.map((skill) => (
        <li key={skill} className="flex">
          <Skill>{skill}</Skill>
        </li>
      ))}
    </ul>
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-muted/50 text-panda-text/80 inline-flex items-center rounded-lg border border-gray-200 px-1.5 py-0.5 font-mono text-xs",
        className,
      )}
      {...props}
    />
  );
}
