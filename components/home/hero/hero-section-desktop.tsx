import HeroContent from "@/components/home/hero/hero-content";
import DotsBackground from "@/components/shared/dots-background";
import Image from "next/image";

type HeroSectionDesktopProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function HeroSectionDesktop({
  imageSrc,
  imageAlt,
}: HeroSectionDesktopProps) {
  return (
    <div className="relative hidden grid-cols-2 items-start gap-x-8 border-b border-gray-200 p-8 lg:grid">
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={1000}
        height={1000}
        className="w-full"
        priority
      />
      <HeroContent />
      <DotsBackground className="text-gray-200/80" />
    </div>
  );
}
