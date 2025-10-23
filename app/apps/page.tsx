"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects from "@/constants/projects/current-projects";
import { CheckmarkIcon } from "@/icons/checkmark-icon";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

// Content component for heading section
const Content = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <div className={`mx-auto max-w-2xl ${className || ""}`}>
      <Badge
        variant="outline"
        className="bg-panda-highlight text-panda-text rounded-md px-4 py-2 text-base font-semibold"
      >
        {project.type}
      </Badge>

      <p className="text-panda-text mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </p>

      <p className="text-panda-text mt-6 text-lg/8">{project.description}</p>

      <div className="text-panda-text mt-10 space-y-6">
        {project.features.map((feature) => (
          <div key={feature.feature} className="relative pl-9">
            <CheckmarkIcon
              aria-hidden={true}
              className="absolute left-1 size-5"
            />
            {feature.feature}
          </div>
        ))}
      </div>

      <Button
        className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text mt-10 rounded-md px-10 py-6 text-lg"
        asChild
      >
        <Link href={project.href}>Learn More</Link>
      </Button>
    </div>
  );
};

export default function AppsPage() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          {/* Main hero section with personal introduction and skills */}
          <div className="hidden grid-cols-2 items-start gap-x-8 p-8 lg:grid">
            <Image
              alt={project.title}
              src={project.imageUrlVertical}
              width={1000}
              height={1000}
              className="w-full"
            />
            <Content project={project} />
          </div>
          {/* Mobile Layout */}
          <div className="mx-auto flex flex-col gap-y-5 pb-8 lg:hidden">
            <Image
              alt={project.title}
              src={project.imageUrlHorizontal}
              width={1000}
              height={500}
              className="w-full"
            />
            <Content project={project} className="px-6" />
          </div>
        </div>
      ))}
    </>
  );
}
