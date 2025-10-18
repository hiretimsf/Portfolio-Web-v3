import Heading from "@/components/pages/home/Heading";
import Projects from "@/components/pages/home/Projects";
import Shoutouts from "@/components/pages/home/Shoutouts";

export default function HomePage() {
  return (
    <>
      <Heading />
      {/* Separator */}
      <div className="bg-panda-light-blue mx-auto w-full px-4 py-2 text-center text-2xl font-medium text-white capitalize">
        FEATURED APPS
      </div>
      <Projects />
      {/* Separator */}
      <div className="bg-panda-light-green mx-auto w-full px-4 py-2 text-center text-2xl font-medium text-white capitalize">
        WHAT PEOPLE SAY
      </div>
      <Shoutouts />
    </>
  );
}
