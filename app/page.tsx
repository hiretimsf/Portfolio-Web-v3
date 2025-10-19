"use client";

import BulletList from "@/components/shared/bullet-list";
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
import projects from "@/constants/projects";
import { shoutouts } from "@/constants/shoutouts";
import { skills } from "@/constants/skills";
import { cn } from "@/lib/utils";
import { Project, Shoutout } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Masonry from "react-masonry-css";
import { Tweet, TweetSkeleton } from "react-tweet";

// MasonryGrid component
interface MasonryGridProps {
  children: React.ReactNode;
  className?: string;
}

function MasonryGrid({ children, className }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
      className={cn("flex w-auto gap-4", className)}
      columnClassName="space-y-4"
    >
      {children}
    </Masonry>
  );
}

// Content component for heading section
const Content = ({ className }: { className?: string }) => {
  return (
    <div className={`mx-auto max-w-2xl ${className || ""}`}>
      <Badge
        variant="outline"
        className="bg-panda-highlight text-panda-text rounded-md px-4 py-2 text-base font-semibold"
      >
        HELLO
      </Badge>

      <p className="text-panda-text mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        I'm Tim
      </p>

      <p className="text-panda-text mt-6 text-lg/8">
        I'm an Android Developer based in the San Francisco Bay Area. I help
        people solve real-world problems by building Android apps.
      </p>

      <BulletList
        list={skills}
        aria-label="Skills and qualifications"
        className="mt-10"
      />
      <YellowButton href="/about" title="Learn More" textSize="lg" />
    </div>
  );
};

export default function HomePage() {
  return (
    <>
      {/* Main hero section with personal introduction and skills */}
      <div className="hidden grid-cols-2 items-start gap-x-8 border-b border-gray-200 p-8 lg:grid">
        <Image
          alt="Headshot of Tim"
          src="/images/vertical-profile.jpg"
          width={1000}
          height={1000}
          className="w-full"
        />
        <Content />
      </div>

      {/* Mobile Layout */}
      <div className="mx-auto flex flex-col gap-y-5 border-b border-gray-200 pb-8 lg:hidden">
        <Image
          alt="Headshot of Tim"
          src="/images/horizontal-profile.jpg"
          width={1000}
          height={500}
          className="w-full"
        />
        <Content className="px-6" />
      </div>

      {/* Portfolio showcase with project cards */}
      <div className="border-b border-gray-200 bg-white py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline decoration-wavy underline-offset-6 sm:text-4xl">
            FEATURED APPS
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project: Project) => (
              <Card
                key={project.id}
                className="h-full gap-2 rounded-none border border-gray-200"
              >
                <div className="relative w-full">
                  <Image
                    width={500}
                    height={500}
                    alt={project.title}
                    src={project.imageUrlVertical}
                    className="hidden w-full rounded-none lg:block"
                  />
                  <Image
                    alt={project.title}
                    src={project.imageUrlHorizontal}
                    width={1000}
                    height={500}
                    className="block w-full rounded-none lg:hidden"
                  />
                </div>
                <CardHeader className="mt-4">
                  <CardTitle className="text-panda-text text-lg/6">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-panda-text line-clamp-3 text-sm/6">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-4 flex-col gap-2">
                  <Button
                    type="submit"
                    className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text text-md w-full"
                    asChild
                  >
                    <Link href={project.href}>Github</Link>
                  </Button>
                  <Button
                    type="submit"
                    className="bg-panda-green hover:bg-panda-dark-green text-md w-full text-white"
                    asChild
                  >
                    <Link href={project.href}>Download</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <h2 className="text-panda-text decoration-panda-orange mt-6 mb-4 text-center text-3xl font-bold tracking-tight underline decoration-wavy underline-offset-6 sm:text-4xl">
          WHAT PEOPLE ARE SAYING
        </h2>
      </div>
      {/* Social proof with tweets and videos in masonry layout */}
      <MasonryGrid className="mx-auto max-w-7xl border-b border-gray-200 px-6 py-8 lg:px-8">
        {shoutouts.map((item: Shoutout, index: number) => (
          <div key={`${item.type}-${index}`} className="rounded-xl">
            {item.type === "tweet" ? (
              <Suspense fallback={<TweetSkeleton />}>
                <Tweet id={item.id!} />
              </Suspense>
            ) : (
              <iframe
                src={item.url}
                className="aspect-video w-full rounded-xl"
                allowFullScreen
                title="YouTube video"
              />
            )}
          </div>
        ))}
      </MasonryGrid>

      <ContactMe />
    </>
  );
}
