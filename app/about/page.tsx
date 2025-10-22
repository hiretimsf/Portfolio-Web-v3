"use client";

import BulletList from "@/components/shared/bullet-list";
import CheckOut from "@/components/shared/check-out";
import ContactMe from "@/components/shared/contact-me";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import currentlyWorkingOn from "@/constants/current-work";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import "react-photo-view/dist/react-photo-view.css";

const PhotoProvider = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoProvider),
  { ssr: false },
);
const PhotoView = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoView),
  { ssr: false },
);

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

        <div className="mx-auto max-w-4xl px-6 text-center sm:mt-2 md:px-4 lg:px-6">
          <h1
            id="about-heading"
            className="text-panda-text mb-8 text-center text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hello, I'm Tim
          </h1>

          <div className="space-y-6 text-center text-lg leading-relaxed sm:space-y-6 sm:text-left">
            <p className="text-panda-text text-xl">
              I'm an Android Developer with 5 years of experience in Kotlin,
              Java, and Jetpack Compose. I help people solve real-world problems
              by building Android apps. I live in the San Francisco Bay Area
              with my wife and daughter.
            </p>
            <p className="text-panda-text">
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
              in Germany. I speak English, German, and Mongolian.
            </p>
            <section
              className="relative mx-auto my-8 flex max-w-2xl px-6 text-center align-middle sm:my-12"
              aria-label="Personal photos gallery"
            >
              <div className="relative flex w-full items-center justify-center gap-3 sm:gap-6">
                <PhotoProvider>
                  <div className="animate-fade-in-up z-2 aspect-2/3 w-28 translate-x-6 -rotate-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-[200px] sm:translate-x-12">
                    <PhotoView src="/images/about/about_me_01.jpg">
                      <Image
                        src="/images/about/about_me_01.jpg"
                        alt="Tim's wedding photo showing a special moment with his wife"
                        className="h-full w-full cursor-pointer rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                        width={200}
                        height={300}
                        loading="lazy"
                        sizes="(max-width: 640px) 112px, 200px"
                      />
                    </PhotoView>
                  </div>
                  <div className="animate-fade-in-up z-1 aspect-2/3 w-28 rotate-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-[200px]">
                    <PhotoView src="/images/about/about_me_02.jpg">
                      <Image
                        src="/images/about/about_me_02.jpg"
                        alt="Tim with his family in a warm family moment"
                        className="h-full w-full cursor-pointer rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                        width={200}
                        height={300}
                        loading="lazy"
                        sizes="(max-width: 640px) 112px, 200px"
                      />
                    </PhotoView>
                  </div>
                  <div className="animate-fade-in-up z-0 aspect-2/3 w-28 -translate-x-6 rotate-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-[200px] sm:-translate-x-12">
                    <PhotoView src="/images/about/about_me_03.jpg">
                      <Image
                        src="/images/about/about_me_03.jpg"
                        alt="Tim running, showing his active lifestyle and fitness"
                        className="h-full w-full cursor-pointer rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                        width={200}
                        height={300}
                        loading="lazy"
                        sizes="(max-width: 640px) 112px, 200px"
                      />
                    </PhotoView>
                  </div>
                </PhotoProvider>
              </div>
            </section>
            <section className="space-y-6" aria-labelledby="early-apps-heading">
              <h2
                id="early-apps-heading"
                className="text-panda-text text-2xl font-semibold"
              >
                My Early Android Journey (2011-2012)
              </h2>
              <p className="text-panda-text text-lg">
                After leaving my corporate job in 2011, I began my Android
                development journey and released my first two apps in 2012,
                built with Java, XML, Eclipse, and the Android SDK plugin.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="bg-panda-light-purple w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-panda-text text-xl">
                      Local Marketplace App
                    </CardTitle>
                    <CardDescription className="text-panda-text text-base">
                      A local marketplace app for buying and selling items in
                      your neighborhood.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/2TeqDGT7ATk?si=Uap8mn7jFlphNF31"
                        title="Tim's first Android app demonstration - Local Marketplace App"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-panda-light-orange w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-panda-text text-xl">
                      T-shirt Design App
                    </CardTitle>
                    <CardDescription className="text-panda-text text-base">
                      Custom t-shirt design app featuring Mongolian famous
                      designer{" "}
                      <Link
                        href="https://www.instagram.com/ido.dsnr/?hl=en"
                        className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ido Designer Instagram (opens in new tab)"
                      >
                        @ido.dsnr
                      </Link>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/my5CPizUXEg?si=QeXsL35jgWzEz7zH"
                        title="Tim's second Android app demonstration - T-shirt Design App"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section
              className="space-y-6"
              aria-labelledby="modern-apps-heading"
            >
              <h2
                id="modern-apps-heading"
                className="text-panda-text text-2xl font-semibold"
              >
                Modern Android Development (2018-2019)
              </h2>
              <p className="text-panda-text text-lg">
                In 2018, I started my second Android journey, learning Kotlin
                and the newly released Android Jetpack components such as MVVM
                architecture, Room, Coroutines, and WorkManager. I published two
                more apps in 2019.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-panda-text text-xl">
                      Portfolio App 1.0
                    </CardTitle>
                    <CardDescription className="text-panda-text text-base">
                      A Java-based Android portfolio app showcasing my
                      development skills, built with standard SDK APIs and MVC
                      architecture.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/j56fSGqF7Ho?si=KQSgguWxD5nPjAKv"
                        title="Portfolio App 1.0 demonstration video"
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
                    <Button type="submit" className="w-full" asChild>
                      <Link href="https://github.com/timtbdev/portfolio-app-1.0">
                        Github
                      </Link>
                    </Button>
                    <Button
                      type="submit"
                      className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
                      asChild
                    >
                      <Link href="https://play.google.com/store/apps/details?id=com.timtb.portfolioapp1">
                        Download
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-panda-text text-xl">
                      Portfolio App 2.0
                    </CardTitle>
                    <CardDescription className="text-panda-text text-base">
                      A Kotlin-based portfolio app using Jetpack Components,
                      MVVM, Room, and Coroutines for seamless offline/online
                      syncing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/YjVJyqcv5I8?si=rLGU5MlcojDpsigP"
                        title="Portfolio App 2.0 demonstration video"
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
                    <Button type="submit" className="w-full" asChild>
                      <Link href="https://github.com/timtbdev/portfolio-app-1.0">
                        Github
                      </Link>
                    </Button>
                    <Button
                      type="submit"
                      className="bg-panda-green hover:bg-panda-dark-green w-full text-white"
                      asChild
                    >
                      <Link href="https://play.google.com/store/apps/details?id=com.timtb.portfolioapp1">
                        Download
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>

            <section
              className="space-y-6"
              aria-labelledby="current-work-heading"
            >
              <h2
                id="current-work-heading"
                className="text-panda-text text-2xl font-semibold"
              >
                Current Projects
              </h2>
              <p className="text-panda-text text-lg">
                I'm currently working on the following Android apps:
              </p>
              <BulletList
                list={currentlyWorkingOn}
                topOffset="top"
                className="mt-6 text-left"
                aria-label="Currently working on projects"
              />
            </section>
          </div>
        </div>
      </section>
      <CheckOut />
      <ContactMe />
    </main>
  );
}
