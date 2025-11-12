import Skills from "@/components/shared/skills";

type PositionSkillsProps = {
  skills?: string[];
};

export default function PositionSkills({ skills }: PositionSkillsProps) {
  return <Skills skills={skills} />;
}
