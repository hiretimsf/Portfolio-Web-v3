import Featured from "@/components/pages/home/Featured";
import Heading from "@/components/pages/home/Heading";
import Separator from "@/components/shared/Separator";

export default function HomePage() {
  return (
    <>
      <Heading />

      <Separator title="Featured Project" className="bg-panda-light-blue" />
      <Featured />
    </>
  );
}
