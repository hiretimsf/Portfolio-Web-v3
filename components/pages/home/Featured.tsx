import DesktopRow from "@/components/shared/DesktopRow";
import MobileRow from "@/components/shared/MobileRow";
import Contents from "@/components/shared/sub-components/Contents";
import Description from "@/components/shared/sub-components/Description";
import Features from "@/components/shared/sub-components/Features";
import ImageHorizontal from "@/components/shared/sub-components/ImageHorizontal";
import ImageVertical from "@/components/shared/sub-components/ImageVertical";
import Label from "@/components/shared/sub-components/Label";
import MoreButton from "@/components/shared/sub-components/MoreButton";
import Title from "@/components/shared/sub-components/Title";
import { skills } from "@/constants/skills";

const Featured = () => {
  return (
    <>
      <DesktopRow>
        <FeaturedContents />
        <DesktopImage />
      </DesktopRow>
      <MobileRow>
        <MobileImage />
        <FeaturedContents className="px-6" />
      </MobileRow>
    </>
  );
};

export default Featured;

interface FeaturedContentsProps {
  className?: string;
}

const FeaturedContents = ({ className }: FeaturedContentsProps) => {
  return (
    <Contents className={className}>
      <Title>
        <span className="bg-panda-text-highlight">Sign Language</span> App
      </Title>
      <Description>
        I'm an Sign Language based in the San Francisco Bay Area. I help people
        solve real-world problems by building Android apps.
      </Description>
      <Features features={skills} />
      <MoreButton href="/about" label="Learn More" />
    </Contents>
  );
};

const DesktopImage = () => {
  return (
    <ImageVertical
      imageUrl="/images/vertical-app-placeholder.jpg"
      description="app placeholder"
    />
  );
};

const MobileImage = () => {
  return (
    <ImageHorizontal
      imageUrl="/images/horizontal-app-placeholder.jpg"
      description="app placeholder"
    />
  );
};
