import DotsBackground from "@/components/shared/dots-background";
import Image from "next/image";
import HeroContent from "./hero-content";

type HeroSectionMobileProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function HeroSectionMobile({
  imageSrc,
  imageAlt,
}: HeroSectionMobileProps) {
  return (
    <div className="relative mx-auto flex flex-col gap-y-5 border-b border-gray-200 pb-8 lg:hidden">
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={1000}
        height={500}
        className="w-full"
        priority
      />
      <HeroContent className="px-6" />
      <DotsBackground className="text-gray-200/80" />
    </div>
  );
}
