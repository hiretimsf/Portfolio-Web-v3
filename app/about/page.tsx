import CheckOut from "@/components/shared/check-out";
import ContactMe from "@/components/shared/contact-me";
import PhotoGallery from "@/components/shared/photo-gallery";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import personalPhotos from "@/constants/personal-photos";
import earlyProjects from "@/constants/projects/early-projects";
import webApps from "@/constants/projects/web-apps";
import {
  CurrentProject,
  EarlyProject,
  ModernProject,
  WebProject,
} from "@/types";
import Image from "next/image";
import Link from "next/link";
import "react-photo-view/dist/react-photo-view.css";
import Marathon from "@/components/shared/marathon";
import Playlist from "@/components/shared/playlist";
import currentProjects from "@/constants/projects/current-projects";
import modernProjects from "@/constants/projects/modern-projects";
import HEAD from "@/constants/seo/head";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { Metadata } from "next";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "About";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  applicationName: page.title,
  description: page.description,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex flex-col gap-y-8" role="main">
      <section aria-labelledby="about-heading" className="space-y-6">
        <div className="relative">
          <Image
            alt="Professional headshot of Tim, an Android Developer with 5 years of experience"
            src="/images/horizontal-profile-about.jpg"
            width={1000}
            height={500}
            className="h-auto max-h-96 w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1000px"
          />
        </div>

        <div className="mx-auto max-w-3xl px-6 text-center md:px-4 lg:px-6">
          <h1
            id="about-heading"
            className="text-panda-text mb-2 text-center text-4xl font-semibold tracking-tight md:mb-6 md:text-5xl"
          >
            Hello, I'm Tim
          </h1>

          <div className="space-y-6 text-center text-lg leading-relaxed sm:space-y-6 sm:text-left">
            <p className="text-panda-text text-lg leading-8 text-pretty">
              I'm an Android Developer with 5 years of experience in Kotlin and
              Jetpack Compose. I help people solve real-world problems by
              building Android apps. I live in Walnut Creek, California with my
              wife and daughter.
            </p>
            <p className="text-panda-text text-lg leading-8 text-pretty">
              I was born and grew up in Mongolia. I studied Computer Science at
              the{" "}
              <Link
                href="https://www.hs-mittweida.de/en/"
                className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="University of Mittweida (opens in new tab)"
              >
                University of Mittweida
              </Link>{" "}
              in Germany. I speak English, German, and Mongolian fluently, and a
              little Russian.
            </p>
            <PhotoGallery photos={personalPhotos} />

            {/* Early Projects */}
            <section className="space-y-6" aria-labelledby="early-apps-heading">
              <SectionHeader
                number="1"
                title="My Early Android Journey (2011-2012)"
                id="early-apps-heading"
              />
              <p className="text-panda-text text-lg">
                After leaving my corporate job in 2011, I began my Android
                development journey and released my first two apps in 2012,
                built with Java, XML, Eclipse, and the Android SDK plugin.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {earlyProjects.map((project: EarlyProject) => (
                  <Card
                    key={project.title}
                    className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <CardHeader>
                      <CardTitle className="text-panda-text text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-panda-text text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video w-full">
                        <iframe
                          src={project.video}
                          title={project.videoAlt}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      <p className="text-panda-text text-sm">
                        No download or code available
                      </p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            {/* Modern Android Development */}
            <section
              className="space-y-6"
              aria-labelledby="modern-android-development-heading"
            >
              <SectionHeader
                number="2"
                title="Modern Android Development (2018–2019)"
                id="modern-android-development-heading"
              />
              <p className="text-panda-text text-lg">
                In 2018, I learned Kotlin, Jetpack components, and MVVM
                architecture, along with Coroutines, Navigation, Material Design
                2, Room, and WorkManager. I published two more apps in 2019. One
                of them was featured by a famous Android Youtuber{" "}
                <Link
                  href="https://www.youtube.com/watch?si=Tu1ztcsj5iaNtdho&t=811&v=OHo64fiWx2k&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4 transition-colors duration-200"
                >
                  on his channel
                </Link>
                .
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {modernProjects.map((project: ModernProject) => (
                  <Card
                    key={project.title}
                    className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <CardHeader>
                      <CardTitle className="text-panda-text text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-panda-text text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video w-full">
                        <iframe
                          src={project.video}
                          title={project.videoAlt}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      {project.github && (
                        <Button type="submit" className="w-full" asChild>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </Link>
                        </Button>
                      )}
                      <Button
                        type="submit"
                        className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
                        asChild
                      >
                        <Link
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            {/* Web Development */}
            <section
              className="space-y-6"
              aria-labelledby="web-expansion-heading"
            >
              <SectionHeader
                number="3"
                title="Web Development (2022–2025)"
                id="web-expansion-heading"
              />
              <p className="text-panda-text text-lg">
                To support my Android apps with modern backends and landing
                pages, I learned Next.js, React, and TailwindCSS. I built and
                published two full-stack Next.js apps that earned over{" "}
                <Link
                  href="https://github.com/timtbdev/Next.js-Blog-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4 transition-colors duration-200"
                >
                  450 GitHub stars
                </Link>{" "}
                and{" "}
                <Link
                  href="https://x.com/hiretimsf/status/1799500139662651526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4 transition-colors duration-200"
                >
                  Vercel swag
                </Link>
                , with my portfolio featured on{" "}
                <Link
                  href="https://www.wearedevelopers.com/en/magazine/561/web-developer-portfolio-inspiration-and-examples-march-2025-561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4 transition-colors duration-200"
                >
                  WeAreDevelopers.com
                </Link>
                .
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {webApps.slice(0, 2).map((project: WebProject) => (
                  <Card
                    key={project.title}
                    className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <CardHeader>
                      <CardTitle className="text-panda-text text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-panda-text text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video w-full">
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt}
                          className="h-full w-full rounded-lg object-cover"
                          width={1000}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      {project.github && (
                        <Button type="submit" className="w-full" asChild>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </Link>
                        </Button>
                      )}
                      {project.liveDemo && (
                        <Button
                          type="submit"
                          className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
                          asChild
                        >
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            {/* Android Development Today */}
            <section
              className="space-y-6"
              aria-labelledby="android-today-heading"
            >
              <SectionHeader
                number="4"
                title="Android Development Today (2025-Present)"
                id="android-today-heading"
              />
              <p className="text-panda-text text-lg">
                After learning web development, I began exploring modern Android
                tools like Jetpack Compose, Hilt, Coroutines, Flow, Room, Ktor,
                Material 3, and more. I'm currently working on the following
                Android apps:
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {currentProjects.slice(0, 2).map((project: CurrentProject) => (
                  <Card
                    key={project.title}
                    className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <CardHeader>
                      <CardTitle className="text-panda-text text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-panda-text text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video w-full">
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt}
                          className="h-full w-full rounded-lg object-cover"
                          width={1000}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      {project.githubLink && (
                        <Button type="submit" className="w-full" asChild>
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </Link>
                        </Button>
                      )}
                      {project.downloadLink && (
                        <Button
                          type="submit"
                          className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
                          asChild
                        >
                          <Link
                            href={project.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hobby */}
            <section
              className="space-y-6"
              aria-labelledby="android-today-heading"
            >
              <SectionHeader
                number="5"
                title="Running"
                id="hobbies-heading"
                color="light-blue"
              />
              <p className="text-panda-text text-lg">
                When I'm not coding, I'm out for a run.
              </p>
              <Marathon />
              <p className="text-panda-text text-lg">
                Check out my running playlist on SoundCloud. I’ve picked these
                songs over 10 years of daily runs. Perfect for easy or recovery
                runs.
              </p>
              <Playlist />
            </section>
          </div>
        </div>
      </section>
      <CheckOut />
      <ContactMe />
    </main>
  );
}
