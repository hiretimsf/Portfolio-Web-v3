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

const Heading = () => {
  return (
    <>
      <DesktopRow>
        <DesktopImage />
        <HeadingContents />
      </DesktopRow>
      <MobileRow>
        <MobileImage />
        <HeadingContents className="px-6" />
      </MobileRow>
    </>
  );
};

export default Heading;

interface HeadingContentsProps {
  className?: string;
}

const HeadingContents = ({ className }: HeadingContentsProps) => {
  return (
    <Contents className={className}>
      <Label label="HELLO" />
      <Title>I'm Tim</Title>
      <Description>
        I'm an{" "}
        <span className="text-panda-text-on-highlight-green bg-panda-text-highlight">
          Android Developer
        </span>{" "}
        based in the San Francisco Bay Area. I help people solve real-world
        problems by building Android apps.
      </Description>
      <Features features={skills} />
      <MoreButton href="/about" label="Learn More" />
    </Contents>
  );
};

const DesktopImage = () => {
  return (
    <ImageVertical
      imageUrl="/images/vertical-profile.jpg"
      description="Headshot of Tim"
    />
  );
};

const MobileImage = () => {
  return (
    <ImageHorizontal
      imageUrl="/images/horizontal-profile.jpg"
      description="Headshot of Tim"
    />
  );
};
