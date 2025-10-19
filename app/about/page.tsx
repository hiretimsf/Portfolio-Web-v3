import BulletList from "@/components/shared/bullet-list";
import ContactMe from "@/components/shared/contact-me";
import currentlyWorkingOn from "@/constants/current-work";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto flex flex-col gap-y-5 pb-8">
        <Image
          alt="Headshot of Tim"
          src="/images/horizontal-profile-about.jpg"
          width={1000}
          height={500}
          className="h-auto max-h-96 w-full"
        />

        <div className="mx-auto mt-6 max-w-2xl px-6 text-center md:px-2 lg:px-2">
          <h2 className="text-panda-text mb-6 text-center text-4xl font-semibold tracking-tight sm:text-left sm:text-5xl">
            Hello, I'm Tim
          </h2>

          <div className="space-y-4 overflow-x-auto text-center text-lg leading-8 sm:text-left">
            <p className="text-panda-text">
              I'm Tumur Bazarragchaa (Tim), an Android Developer with 5 years of
              experience in Kotlin, Java, and Jetpack Compose. I live in the San
              Francisco Bay Area with my family.
            </p>

            <p>
              I was born and grew up in Mongolia. I studied Computer Science at
              the{" "}
              <Link
                href="https://www.hs-mittweida.de/en/"
                className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4"
                target="_blank"
              >
                University of Mittweida
              </Link>{" "}
              in Germany. I speak English, German, and Mongolian.
            </p>

            <div className="relative mx-auto my-8 flex max-w-2xl justify-center px-6">
              <div className="relative flex w-full gap-2 sm:gap-4">
                <div className="animate-fade-in-up z-2 aspect-2/3 w-24 translate-x-6 -rotate-3 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px] sm:translate-x-12">
                  <Image
                    src="/images/about/about_me_01.jpg"
                    alt="Wedding photo"
                    className="h-full w-full cursor-pointer rounded-lg object-cover"
                    width={200}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="animate-fade-in-up z-1 aspect-2/3 w-24 rotate-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]">
                  <Image
                    src="/images/about/about_me_02.jpg"
                    alt="Family photo"
                    className="h-full w-full cursor-pointer rounded-lg object-cover"
                    width={200}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="animate-fade-in-up z-0 aspect-2/3 w-24 -translate-x-6 rotate-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px] sm:-translate-x-12">
                  <Image
                    src="/images/about/about_me_03.jpg"
                    alt="Running photo"
                    className="h-full w-full cursor-pointer rounded-lg object-cover"
                    width={200}
                    height={300}
                    priority={true}
                  />
                </div>
              </div>
            </div>

            <div className="">
              I'm currently working on{" "}
              <Link
                href="/apps"
                className="text-panda-text hover:text-panda-text/80 font-medium"
                target="_blank"
              >
                following Android apps:
              </Link>
              <BulletList
                list={currentlyWorkingOn}
                topOffset="top"
                className="mt-4 text-left"
                aria-label="Currently working on projects"
              />
            </div>

            <p className="mb-10">
              Check out my{" "}
              <Link
                href="/apps"
                className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4"
              >
                other apps
              </Link>
              {", "}
              <Link
                href="/files/resume.pdf"
                className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4"
                target="_blank"
              >
                resume
              </Link>
              {" and "}
              <Link
                href="https://on.soundcloud.com/4d5e621n0BwRDJ1kjV"
                className="text-panda-text hover:text-panda-text/80 decoration-panda-orange font-medium underline underline-offset-4"
                target="_blank"
              >
                running playlist
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <ContactMe />
    </>
  );
}
