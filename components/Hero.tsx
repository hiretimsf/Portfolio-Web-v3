import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skills, type Skill } from "@/constants/skills";
import { CheckmarkIcon } from "@/icons/checkmark-icon";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid-section relative overflow-clip">
      <div className="max-w-grid-width relative z-0 mx-auto border-x px-6 py-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

const HeroContent = () => {
  return (
    <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
        <HeroHeader />
        <HeroDescription />
        <SkillsList />
        <LearnMoreButton />
      </div>
    </div>
  );
};

const HeroHeader = () => {
  return (
    <>
      <Badge
        variant="outline"
        className="bg-panda-highlight text-panda-text items-center gap-2 rounded-md px-4 py-2 text-base/7 font-semibold capitalize"
      >
        HELLO
      </Badge>

      <p className="text-panda-text mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        I'm Tim
      </p>
    </>
  );
};

const HeroDescription = () => {
  return (
    <p className="text-panda-text mt-6 text-lg/8">
      I'm an{" "}
      <span className="bg-panda-highlight-green text-panda-text-on-highlight-green rounded-md px-2 py-1">
        Android Developer
      </span>{" "}
      based in the{" "}
      <span className="bg-panda-highlight text-panda-text-on-highlight rounded-md px-2 py-1">
        San Francisco Bay Area.
      </span>
      {"  "}I help people solve real-world problems by building Android apps.
    </p>
  );
};

const SkillsList = () => {
  return (
    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
      {skills.map((skill) => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </dl>
  );
};

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        <CheckmarkIcon
          aria-hidden={true}
          className="absolute top-1 left-1 size-5"
        />
        {skill.name}
      </dt>{" "}
      <dd className="inline">{skill.description}</dd>
    </div>
  );
};

const LearnMoreButton = () => {
  return (
    <Button className="bg-panda-yellow hover:bg-panda-yellow-dark hover:shadow-panda-yellow-dark/60 text-panda-text text-md mt-10 rounded-md px-10 py-6 hover:shadow-md">
      Learn More
    </Button>
  );
};

const HeroImage = () => {
  return (
    <div className="sm:px-6 lg:px-0">
      <img
        alt="Product screenshot"
        src="/images/cover.jpg"
        width={1000}
        height={1000}
        className="w-full max-w-none rounded-xl"
      />
    </div>
  );
};

export default Hero;
