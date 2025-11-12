import { cn } from "@/lib/utils";
import Tag from "./tag";

interface SkillsProps {
  skills?: string[];
}

export default function Skills({ skills }: SkillsProps) {
  if (!Array.isArray(skills) || skills.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-1.5 border-x border-gray-200 px-4 py-4",
      )}
    >
      {skills.map((skill) => (
        <li key={skill} className="flex">
          <Tag title={skill} />
        </li>
      ))}
    </ul>
  );
}
