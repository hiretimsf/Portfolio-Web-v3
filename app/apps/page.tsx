"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckmarkIcon } from "@/icons/checkmark-icon";
import Image from "next/image";
import Link from "next/link";

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

export default function AppsPage() {
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
    </>
  );
}
