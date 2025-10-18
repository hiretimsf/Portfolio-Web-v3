"use client";

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
import { CheckmarkIcon } from "@/icons/checkmark-icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Masonry from "react-masonry-css";
import { Tweet, TweetSkeleton } from "react-tweet";

// Constants
const SKILLS = [
  { name: "Fully Authorized", description: "to work in the United States" },
  { name: "Based", description: "in the San Francisco Bay Area" },
  { name: "Love", description: "working with Kotlin and Jetpack Compose" },
  { name: "Have", description: "a Computer Science degree" },
  { name: "Speak", description: "English, German, and Mongolian" },
] as const;

// Featured projects data
const projects = [
  {
    id: 1,
    title: "Mongolian Sign Language",
    href: "/projects/mongolian-sign-language",
    description: "Android app for learning Mongolian sign language.",
    imageUrlHorizontal: "/images/horizontal-app-placeholder.jpg",
    imageUrlVertical: "/images/vertical-app-placeholder.jpg",
  },
  {
    id: 2,
    title: "Don't Run Fast",
    href: "/projects/dont-run-fast",
    description: "Android app to find and share zone2 running tracks.",
    imageUrlHorizontal: "/images/horizontal-app-placeholder.jpg",
    imageUrlVertical: "/images/vertical-app-placeholder.jpg",
  },
  {
    id: 3,
    title: "Digital Nomad Advisory",
    href: "/projects/digital-nomad-advisory",
    description: "Platform providing resources for digital nomads.",
    imageUrlHorizontal: "/images/horizontal-app-placeholder.jpg",
    imageUrlVertical: "/images/vertical-app-placeholder.jpg",
  },
];

// Shoutouts data
const items = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/OHo64fiWx2k?si=SXXvnFihiE2I8l-V&start=811",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/wfL5arWfeOw?si=DtkvYb_HV8HAXLbx&start=2866",
  },
  { type: "tweet", id: "1930094628885471387" },
  { type: "tweet", id: "1916331166984245599" },
  { type: "tweet", id: "1932667733964886198" },
  { type: "tweet", id: "1937084213175456041" },
  { type: "tweet", id: "1949919177437003788" },
  { type: "tweet", id: "1930622440578732190" },
];

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

      <div className="text-panda-text mt-10 space-y-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="relative pl-9">
            <CheckmarkIcon
              aria-hidden={true}
              className="absolute left-1 size-5"
            />
            <span className="font-semibold">{skill.name}</span>{" "}
            <span>{skill.description}</span>
          </div>
        ))}
      </div>

      <Button
        className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text mt-10 rounded-md px-10 py-6 text-lg"
        asChild
      >
        <Link href="/about">Learn More</Link>
      </Button>
    </div>
  );
};

export default function HomePage() {
  return (
    <>
      {/* Main hero section with personal introduction and skills */}
      <div className="hidden grid-cols-2 items-start gap-x-8 p-8 lg:grid">
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
      <div className="mx-auto flex flex-col gap-y-5 pb-8 lg:hidden">
        <Image
          alt="Headshot of Tim"
          src="/images/horizontal-profile.jpg"
          width={1000}
          height={500}
          className="w-full"
        />
        <Content className="px-6" />
      </div>

      {/* Featured apps section separator */}
      <div className="bg-panda-light-blue mx-auto w-full px-4 py-2 text-center text-2xl font-medium text-white capitalize">
        FEATURED APPS
      </div>

      {/* Portfolio showcase with project cards */}
      <div className="bg-white py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
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

      {/* Testimonials section separator */}
      <div className="bg-panda-light-green mx-auto w-full px-4 py-2 text-center text-2xl font-medium text-white capitalize">
        WHAT PEOPLE SAY
      </div>

      {/* Social proof with tweets and videos in masonry layout */}
      <MasonryGrid className="mx-auto max-w-7xl px-6 py-8 md:py-10 lg:px-8">
        {items.map((item, index) => (
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

      {/* Testimonials section separator */}
      <div className="bg-panda-light-green mx-auto w-full px-4 py-2 text-center text-2xl font-medium text-white capitalize">
        LOOKING FOR AN ANDROID DEVELOPER?
      </div>

      <div className="mx-auto max-w-2xl p-6">
        <Button
          className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text mx-auto mb-6 w-full max-w-2xl rounded-md px-10 py-12 text-4xl"
          asChild
        >
          <Link href="mailto:hiretimsf@gmail.com">Contact Tim</Link>
        </Button>
      </div>
    </>
  );
}
