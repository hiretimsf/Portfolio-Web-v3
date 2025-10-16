import Heading from "@/components/pages/home/Heading";
import Projects from "@/components/pages/home/Projects";
import Shoutouts from "@/components/pages/home/Shoutouts";

export default function HomePage() {
  return (
    <>
      <Heading />
      {/* Separator */}
      <div className="bg-panda-light-blue mx-auto w-full px-4 py-2 text-center">
        <h2 className="text-xl font-medium text-white">Featured Projects</h2>
      </div>
      <Projects />
      {/* Separator */}
      <div className="bg-panda-light-green mx-auto w-full px-4 py-2 text-center">
        <h2 className="text-xl font-medium text-white">Shoutouts</h2>
      </div>
      <Shoutouts />
    </>
  );
}
