import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Featured projects data - array of project objects
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

export default function Projects() {
  return (
    // Main container with white background and padding
    <div className="bg-white py-8 md:py-10">
      {/* Centered container with max width and horizontal padding */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid layout: 1 column on mobile, 3 columns on large screens */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Map through projects array to render each project card */}
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
  );
}
