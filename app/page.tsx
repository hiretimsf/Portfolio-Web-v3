import RowTwoColumns from "@/components/shared/Row-Two-Columns";
import Seperator from "@/components/shared/Seperator";
import Spacer from "@/components/shared/Spacer";
import Contents from "@/components/shared/sub-components/Contents";
import Description from "@/components/shared/sub-components/Description";
import Features from "@/components/shared/sub-components/Features";
import ImageOne from "@/components/shared/sub-components/ImageOne";
import Label from "@/components/shared/sub-components/Label";
import MoreButton from "@/components/shared/sub-components/MoreButton";
import Title from "@/components/shared/sub-components/Title";
import { skills } from "@/constants/skills";

export default function HomePage() {
  return (
    <>
      <Spacer />
      <RowTwoColumns>
        <ImageOne
          imageUrl="/images/horizontal-profile.jpg"
          description="Headshot of Tim"
        />
        <Contents>
          <Label label="HELLO" />
          <Title title="I'm Tim" />
          <Description description="I'm an Android Developer based in the San Francisco Bay Area. I help people solve real-world problems by building Android apps." />
          <Features features={skills} />
          <MoreButton href="/about" label="Learn More" />
        </Contents>
      </RowTwoColumns>
      <Spacer />
      <Seperator />
      <Spacer />
    </>
  );
}
