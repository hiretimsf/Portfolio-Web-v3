"use client";

import ContactMe from "@/components/shared/contact-me";
import YellowButton from "@/components/shared/yellow-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import currentProjects from "@/constants/projects/current-projects";
import { shoutouts } from "@/constants/shoutouts";
import { skills } from "@/constants/skills";
import { CheckmarkIcon } from "@/icons/checkmark-icon";
import { cn } from "@/lib/utils";
import { CurrentProject, Shoutout } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { memo, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { Tweet } from "react-tweet";

interface BulletListItem {
  name?: string;
  description: string;
  href?: string;
}

// Type guard for Shoutout
function isTweetShoutout(
  item: Shoutout,
): item is Shoutout & { type: "tweet"; id: string } {
  return item.type === "tweet" && typeof item.id === "string";
}

// Masonry Grid Component
const MasonryGrid = memo(function MasonryGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1200: 2, 768: 1 }}
      className={cn("flex w-auto gap-4", className)}
      columnClassName="space-y-4"
    >
      {children}
    </Masonry>
  );
});

// Hero Content Component
function HeroContent({ className }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-2xl ${className || ""}`}>
      <Badge
        variant="outline"
        className="bg-panda-highlight text-panda-text hidden rounded-md px-4 py-2 text-base font-semibold sm:block"
      >
        HELLO
      </Badge>

      <h1 className="text-panda-text mx-auto mt-0 text-center text-4xl font-semibold tracking-tight sm:mt-2 sm:text-left sm:text-5xl">
        <span className="sm:hidden">Hello, </span>
        I'm Tim
      </h1>

      <p className="text-panda-text mt-2 text-center text-lg/8 sm:mt-6 sm:text-left">
        I'm an Android Developer based in the San Francisco Bay Area. I help
        people solve real-world problems by building Android apps.
      </p>

      <ul
        className={cn("text-panda-text mt-6 mb-8 space-y-6", className)}
        role="list"
        aria-label="Skills and qualifications"
      >
        {skills.map((item: BulletListItem, index: number) => {
          const itemId = item.name ? `${item.name}-${index}` : `item-${index}`;

          return (
            <li
              key={itemId}
              className="relative pl-9 last:mb-0"
              role="listitem"
            >
              <CheckmarkIcon
                aria-hidden="true"
                className={cn(
                  "text-panda-orange absolute left-1 size-5",
                  "top-1/2 -translate-y-1/2",
                )}
              />
              <div className="flex flex-row gap-x-1">
                <span className="text-panda-text font-semibold">
                  {item.name ?? ""}:
                </span>
                <span className="text-panda-text">{item.description}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <YellowButton href="/about" title="Learn More" textSize="lg" />
    </div>
  );
}
// Project Card Component
const ProjectCard = memo(function ProjectCard({
  project,
}: {
  project: CurrentProject;
}) {
  return (
    <Card className="h-full gap-0 rounded-none rounded-b-md border border-gray-200 py-0 transition-shadow duration-300 hover:shadow-lg">
      <div className="relative w-full">
        <Image
          alt={project.imageAlt}
          src={project.imageUrl}
          width={1000}
          height={500}
          className="w-full rounded-none"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-panda-text mt-4 text-lg/6">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-panda-text line-clamp-3 text-sm/6">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-6 mb-4 flex-col gap-2">
        {project.githubLink && (
          <Button
            className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text text-md w-full"
            asChild
          >
            <Link href={project.githubLink}>Github</Link>
          </Button>
        )}
        {project.downloadLink && (
          <Button
            className="bg-panda-green hover:bg-panda-dark-green text-md w-full text-white"
            asChild
          >
            <Link href={project.downloadLink}>Download</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});

// Shoutout Item Component
const ShoutoutItem = memo(function ShoutoutItem({
  item,
  index,
}: {
  item: Shoutout;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-panda-text">Content unavailable</p>
      </div>
    );
  }

  return (
    <div key={`${item.type}-${index}`} className="rounded-xl">
      {isTweetShoutout(item) ? (
        <Tweet id={item.id} onError={() => setHasError(true)} />
      ) : (
        <iframe
          src={item.url}
          className="aspect-video w-full rounded-xl"
          allowFullScreen
          title="YouTube video"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
});

export default function HomePage() {
  // Memoize expensive computations
  const memoizedProjects = useMemo(() => currentProjects, []);
  const memoizedShoutouts = useMemo(() => shoutouts, []);

  return (
    <>
      {/* Hero Section - Desktop */}
      <div className="hidden grid-cols-2 items-start gap-x-8 border-b border-gray-200 p-8 lg:grid">
        <Image
          alt="Professional headshot of Tim, an Android Developer based in San Francisco Bay Area"
          src="/images/vertical-profile.jpg"
          width={1000}
          height={1000}
          className="w-full"
          priority
        />
        <HeroContent />
      </div>

      {/* Hero Section - Mobile */}
      <div className="mx-auto flex flex-col gap-y-5 border-b border-gray-200 pb-8 lg:hidden">
        <Image
          alt="Professional headshot of Tim, an Android Developer based in San Francisco Bay Area"
          src="/images/horizontal-profile.jpg"
          width={1000}
          height={500}
          className="w-full"
          priority
        />
        <HeroContent className="px-6" />
      </div>

      {/* Featured Apps Section */}
      <div className="bg-panda-prune border-b border-gray-200 py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline underline-offset-6 sm:text-4xl">
            FEATURED APPS
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {memoizedProjects.map((project: CurrentProject) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="mx-auto max-w-5xl bg-white"
        role="region"
        aria-labelledby="testimonials-heading"
      >
        <h2
          id="testimonials-heading"
          className="text-panda-text decoration-panda-orange py-6 text-center text-3xl font-bold tracking-tight underline underline-offset-6 sm:text-4xl"
        >
          WHAT PEOPLE ARE SAYING
        </h2>
      </div>

      <MasonryGrid className="mx-auto max-w-7xl border-b border-gray-200 bg-white px-6 py-8 lg:px-8">
        {memoizedShoutouts.map((item: Shoutout, index: number) => (
          <ShoutoutItem
            key={`${item.type}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </MasonryGrid>

      <ContactMe />
    </>
  );
}
