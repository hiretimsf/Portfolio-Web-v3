import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CurrentProject, WebProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: WebProject | CurrentProject;
  index?: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      key={`${project.title}-${index}`}
      className="group h-full gap-0 rounded-none rounded-b-md border border-gray-200 py-0 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
      role="article"
      aria-labelledby={`project-title-${index}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          alt={project.imageAlt}
          src={project.imageUrl}
          width={1000}
          height={500}
          className="h-full w-full rounded-none object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index !== undefined && index < 3}
        />
      </div>
      <CardHeader>
        <CardTitle
          id={`project-title-${index}`}
          className="text-panda-text mt-4 text-lg/6"
        >
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-panda-text line-clamp-3 text-sm/6">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-6 mb-4 flex-col gap-2">
        {/* Handle WebProject liveDemo */}
        {"liveDemo" in project &&
          project.liveDemo &&
          project.liveDemo !== "#" && (
            <Button
              className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text text-md w-full transition-colors duration-200"
              asChild
            >
              <Link
                href={project.liveDemo}
                aria-label={`View live demo of ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
            </Button>
          )}
        {/* Handle CurrentProject downloadLink */}
        {"downloadLink" in project && project.downloadLink && (
          <Button
            className="bg-panda-green hover:bg-panda-dark-green text-md w-full text-white transition-colors duration-200"
            asChild
          >
            <Link
              href={project.downloadLink}
              aria-label={`Download ${project.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </Link>
          </Button>
        )}
        {/* Handle GitHub links for both types */}
        {("github" in project && project.github) ||
        ("githubLink" in project && project.githubLink) ? (
          <Button
            className="bg-panda-blue hover:bg-panda-blue-dark text-md w-full text-white transition-colors duration-200"
            asChild
          >
            <Link
              href={
                "github" in project && project.github
                  ? project.github
                  : "githubLink" in project && project.githubLink
                    ? project.githubLink
                    : ""
              }
              aria-label={`View ${project.title} source code on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
