import Contents from "@/components/shared/row-sub-components/Contents";
import Description from "@/components/shared/row-sub-components/Description";
import Features from "@/components/shared/row-sub-components/Features";
import ImageOne from "@/components/shared/row-sub-components/ImageVertical";
import ImageVertical from "@/components/shared/row-sub-components/ImageVertical";
import Label from "@/components/shared/row-sub-components/Label";
import MoreButton from "@/components/shared/row-sub-components/MoreButton";
import Title from "@/components/shared/row-sub-components/Title";
import RowTwoColumns from "@/components/shared/Row-Two-Columns";
import { skills } from "@/constants/skills";

export default function HomePage() {
  return (
    <>
      <RowTwoColumns className="border-b bg-transparent py-4 md:py-6 lg:py-8">
        <ImageOne
          imageUrl="/images/horizontal-profile.jpg"
          description="Headshot of Tim"
        />
        <Contents>
          <Label label="HELLO" />
          <Title title="I'm Tim" />
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
      </RowTwoColumns>
      <RowTwoColumns className="bg-panda-sega-green py-4 md:py-6 lg:py-8">
        <Contents>
          <Title title="Sign Language App" />
          <Description>
            I'm an based in the San Francisco Bay Area. I help people solve
            real-world problems by building Android apps.
          </Description>
          <Features features={skills} />
          <MoreButton href="/about" label="Learn More" />
        </Contents>
        <ImageVertical
          imageUrl="/images/horizontal-profile.jpg"
          description="Headshot of Tim"
        />
      </RowTwoColumns>
    </>
  );
}
