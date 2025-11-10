import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectTitleProps {
  title: string;
  demoLink?: string;
}

export function ProjectTitle({ title, demoLink }: ProjectTitleProps) {
  return (
    <Link
      href={demoLink ?? ""}
      target={demoLink ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group text-panda-text decoration-panda-orange hover:decoration-panda-text inline-flex items-center gap-1 text-lg font-semibold tracking-tight underline underline-offset-6"
    >
      {title}
      <ArrowUpRight
        aria-hidden="true"
        className="text-panda-text/70 group-hover:text-panda-orange size-4"
      />
    </Link>
  );
}
