import Skills from "@/components/shared/skills";

type ProjectSkillsProps = {
  skills: string[];
};

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  return <Skills skills={skills} />;
}
