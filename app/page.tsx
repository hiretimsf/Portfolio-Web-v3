import HeroMain from "@/components/home/hero/hero-main";
import Testimonials from "@/components/home/testimonials";
import ContactMe from "@/components/shared/contact-me";
import DotsBackground from "@/components/shared/dots-background";
import { FaqSection } from "@/components/shared/faq";
import Heading from "@/components/shared/heading";
import ProjectCard from "@/components/shared/project-card";
import { shoutouts } from "@/constants/shoutouts";
import { projectsSource } from "@/lib/source";

export default function HomePage() {
  // Build flat list of projects from MDX source (runs on server)
  const allProjects = projectsSource
    .getPages()
    .map(({ data, slugs }, index) => {
      const d = (data ?? {}) as {
        title?: string;
        date?: string;
        description?: string;
        imageUrl?: string;
        imageAlt?: string;
        github?: string;
        liveDemo?: string;
      };
      return {
        id: index,
        slug: Array.isArray(slugs) ? slugs[slugs.length - 1] : "",
        title: d.title ?? "",
        date: d.date,
        description: d.description ?? "",
        imageUrl: d.imageUrl ?? "/images/app-placeholder.jpg",
        imageAlt: d.imageAlt ?? d.title ?? "Project",
        github: d.github,
        liveDemo: d.liveDemo,
      };
    });

  // Desired "current projects" in specific order
  const featuredSlugs = [
    "sign-language-kotlin",
    "portfolio-app-kotlin",
    "portfolio-app-java",
  ];

  // Filter and order by featuredSlugs
  const memoizedProjects = allProjects
    .filter((p) => featuredSlugs.includes(p.slug))
    .sort(
      (a, b) => featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug),
    );

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
      <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-10 lg:px-8">
        <DotsBackground gridId="featured-apps" className="text-gray-200/80" />
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {memoizedProjects.map((project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <Heading
        title="WHAT PEOPLE ARE SAYING"
        textStyleClassName="text-3xl font-bold sm:text-4xl"
        backgroundStyleClassName="bg-panda-prune"
        borderStyleClassName="border-gray-200"
        gridStyleClassName="text-panda-text/10"
      />

      <Testimonials shoutouts={shoutouts} />

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
