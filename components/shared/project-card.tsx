import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectWithMedia } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectWithMedia }) => {
  const { title, description, media, links, footerText } = project;

  const renderMedia = () => {
    if (!media) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-200">
          <span className="text-gray-500">No media available</span>
        </div>
      );
    }

    if (media.type === "video") {
      return (
        <iframe
          src={media.src}
          title={media.alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full rounded-lg"
          loading="lazy"
        />
      );
    }

    return (
      <Image
        src={media.src}
        alt={media.alt}
        className="h-full w-full rounded-lg object-cover"
        width={1000}
        height={500}
        loading="lazy"
      />
    );
  };

  return (
    <Card className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-panda-text text-lg">{title}</CardTitle>
        <CardDescription className="text-panda-text text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video w-full">{renderMedia()}</div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {footerText && <p className="text-panda-text text-sm">{footerText}</p>}
        {links.github && (
          <Button type="submit" className="w-full" asChild>
            <Link href={links.github}>Github</Link>
          </Button>
        )}
        {links.download && (
          <Button
            type="submit"
            className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
            asChild
          >
            <Link href={links.download}>Download</Link>
          </Button>
        )}
        {links.demo && (
          <Button
            type="submit"
            className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
            asChild
          >
            <Link href={links.demo}>Live Demo</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
