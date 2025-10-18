import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-5 pb-8">
      <Image
        alt="Headshot of Tim"
        src="/images/horizontal-profile-about.jpg"
        width={1000}
        height={500}
        className="h-auto max-h-96 w-full"
      />

      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-panda-text mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hello, I'm Tim
        </h2>

        <div className="space-y-4 text-lg leading-8">
          <p>
            I'm{" "}
            <span className="text-panda-text font-medium">
              Tumur Bazarragchaa
            </span>{" "}
            (Tim), an{" "}
            <span className="text-panda-text font-medium">
              Android Developer
            </span>{" "}
            with
            <span className="text-panda-text font-medium"> 5 years</span> of
            experience in
            <span className="text-panda-text font-medium">
              {" "}
              Kotlin, Java, and Jetpack Compose
            </span>
            . I live in{" "}
            <span className="text-panda-text font-medium">
              Walnut Creek, CA
            </span>{" "}
            with my family.
          </p>

          <p>
            I was born and grew up in{" "}
            <span className="text-accent-foreground font-medium">
              Mongolia.
            </span>{" "}
            I studied Computer Science at the{" "}
            <Link
              href="https://www.hs-mittweida.de/en/"
              className="text-accent-foreground hover:text-accent-foreground/80 decoration-panda-orange font-medium underline underline-offset-4"
              target="_blank"
            >
              University of Mittweida
            </Link>{" "}
            in Germany. I speak{" "}
            <span className="text-accent-foreground font-medium">English</span>,{" "}
            <span className="text-accent-foreground font-medium">German</span>,
            and{" "}
            <span className="text-accent-foreground font-medium">
              Mongolian
            </span>
            .
          </p>

          <div className="relative mx-auto my-8 flex w-full justify-center">
            <div className="relative flex gap-4">
              <div className="animate-fade-in-up z-2 aspect-2/3 w-[500px] translate-x-12 -rotate-3 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]">
                <Image
                  src="/images/about/about_me_01.jpg"
                  alt="Wedding photo"
                  className="h-full w-full cursor-pointer rounded-lg object-cover"
                  width={200}
                  height={300}
                  priority={true}
                />
              </div>
              <div className="animate-fade-in-up z-1 aspect-2/3 w-[500px] rotate-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]">
                <Image
                  src="/images/about/about_me_02.jpg"
                  alt="Family photo"
                  className="h-full w-full cursor-pointer rounded-lg object-cover"
                  width={200}
                  height={300}
                  priority={true}
                />
              </div>
              <div className="animate-fade-in-up z-0 aspect-2/3 w-[500px] -translate-x-12 rotate-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:w-[200px]">
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

          <p>
            I'm currently building{" "}
            <Link
              href="/apps"
              className="text-accent-foreground hover:text-accent-foreground/80 decoration-panda-orange font-medium underline underline-offset-4"
              target="_blank"
            >
              Android apps
            </Link>{" "}
            to find and share zone2 running tracks, and Mongolian sign language
            dictionary. I enjoy running outdoors and improving my skills by
            learning new Android development skills.
          </p>

          <p className="mb-10">
            Check out my{" "}
            <Link
              href="/apps"
              className="text-accent-foreground hover:text-accent-foreground/80 decoration-panda-orange font-medium underline underline-offset-4"
            >
              apps
            </Link>
            {", "}
            <Link
              href="/files/resume.pdf"
              className="text-accent-foreground hover:text-accent-foreground/80 decoration-panda-orange font-medium underline underline-offset-4"
              target="_blank"
            >
              resume
            </Link>
            {" and "}
            <Link
              href="https://www.youtube.com/playlist?list=PLvq-6H2J_41Nc8R570iD1r3_9JquqUe7s"
              className="text-accent-foreground hover:text-accent-foreground/80 decoration-panda-orange font-medium underline underline-offset-4"
              target="_blank"
            >
              running playlist
            </Link>
            .
          </p>
        </div>
      </div>
      <Button
        className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text mx-auto mb-6 w-full max-w-2xl rounded-md px-10 py-12 text-4xl"
        asChild
      >
        <Link href="/contact">Contact Me</Link>
      </Button>
    </div>
  );
};

export default Heading;
