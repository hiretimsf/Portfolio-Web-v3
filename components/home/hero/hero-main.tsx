import HeroSectionDesktop from "./hero-section-desktop";
import HeroSectionMobile from "./hero-section-mobile";

type HeroMainProps = {
  imageSrcDesktop: string;
  imageSrcMobile: string;
  imageAlt: string;
};

export default function HeroMain({
  imageSrcDesktop,
  imageSrcMobile,
  imageAlt,
}: HeroMainProps) {
  return (
    <>
      <HeroSectionDesktop imageSrc={imageSrcDesktop} imageAlt={imageAlt} />
      <HeroSectionMobile imageSrc={imageSrcMobile} imageAlt={imageAlt} />
    </>
  );
}
