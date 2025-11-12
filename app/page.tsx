"use client";

import HeroMain from "@/components/home/hero/hero-main";
import Testimonials from "@/components/home/testimonials";
import ContactMe from "@/components/shared/contact-me";
import { FaqSection } from "@/components/shared/faq";
import Heading from "@/components/shared/heading";
import ProjectCard from "@/components/shared/project-card";
import { PROJECTS } from "@/constants/projects";
import { shoutouts } from "@/constants/shoutouts";
import { cn } from "@/lib/utils";
import { CurrentProject, Shoutout } from "@/types";
import { memo, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { Tweet } from "react-tweet";

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
  const memoizedProjects = useMemo(() => {
    return PROJECTS.filter((project) => [1, 6, 7].includes(project.id)).map(
      (project) => ({
        id: project.id,
        title: project.title,
        date: project.date,
        description: project.description,
        imageUrl: project.imageUrl,
        imageAlt: project.imageAlt,
        href: project.liveDemo || "#",
        githubLink: project.github,
      }),
    );
  }, []);
  const memoizedShoutouts = useMemo(() => shoutouts, []);

  return (
    <>
      <HeroMain
        imageSrcDesktop="/images/vertical-profile.jpg"
        imageSrcMobile="/images/horizontal-profile.jpg"
        imageAlt="Professional headshot of Tim, an Android Developer based in San Francisco Bay Area"
      />
      {/* Featured Apps Section */}
      <Heading
        title="FEATURED APPS"
        textStyleClassName="text-3xl font-bold sm:text-4xl"
        backgroundStyleClassName="bg-panda-prune"
        borderStyleClassName="border-b border-panda-text/10"
        gridStyleClassName="text-panda-text/10"
      />
      <div className="bg-panda-prune mx-auto max-w-7xl px-6 py-8 md:py-10 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {memoizedProjects.map((project: CurrentProject, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <Heading
        title="WHAT PEOPLE ARE SAYING"
        textStyleClassName="text-3xl font-bold sm:text-4xl"
        borderStyleClassName="border-gray-200"
      />

      <Testimonials shoutouts={memoizedShoutouts} />

      {/* FAQ Section */}
      <Heading
        title="FAQ"
        textStyleClassName="text-3xl font-bold sm:text-4xl"
        backgroundStyleClassName="bg-panda-prune"
        borderStyleClassName="border-b border-panda-text/10"
        gridStyleClassName="text-panda-text/10"
      />
      <FaqSection />

      <ContactMe />
    </>
  );
}
