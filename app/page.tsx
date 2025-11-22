import Banner from "@/components/home/banner";
import ContactMe from "@/components/home/contact-me";
import { FaqSection } from "@/components/home/faq";
import FeaturedApps from "@/components/home/featured-apps";
import HeroMain from "@/components/home/hero/hero-main";
import Testimonials from "@/components/home/testimonials";
import Wrapper from "@/components/layout/Wrapper";
import Heading from "@/components/shared/heading";
import SeparatorHorizontal from "@/components/shared/separator-horizontal";
import { shoutouts } from "@/constants/shoutouts";
import { getFeaturedApps } from "@/lib/get-featured-apps";

export default function HomePage() {
  // Get featured apps filtered by weight (heavier weights appear first)
  const memoizedProjects = getFeaturedApps();

  return (
    <>
      <Banner
        title="Seeking Android Developer Role (In-person or Remote)"
        tag="New"
      />
      <Wrapper>
        <HeroMain
          imageSrcDesktop="/images/vertical-profile.jpg"
          imageSrcMobile="/images/horizontal-profile.jpg"
          imageAlt="Professional headshot of Tim, an Android Developer based in San Francisco Bay Area"
        />
      </Wrapper>
      <SeparatorHorizontal />
      {/* Featured Apps Section */}
      <Wrapper>
        <Heading
          title="FEATURED APPS"
          textStyleClassName="text-2xl font-bold sm:text-3xl"
        />
      </Wrapper>
      <SeparatorHorizontal />
      <Wrapper>
        <FeaturedApps projects={memoizedProjects} />
      </Wrapper>
      <SeparatorHorizontal />
      <Wrapper>
        <Heading
          title="WHAT PEOPLE ARE SAYING"
          textStyleClassName="text-2xl font-bold sm:text-3xl"
        />
      </Wrapper>
      <SeparatorHorizontal />
      <Wrapper>
        <Testimonials shoutouts={shoutouts} />
      </Wrapper>
      <SeparatorHorizontal />
      <Wrapper>
        <Heading
          title="FAQ"
          textStyleClassName="text-2xl font-bold sm:text-3xl"
        />
      </Wrapper>
      <SeparatorHorizontal />
      <Wrapper>
        <FaqSection />
      </Wrapper>
      <SeparatorHorizontal />
      <Wrapper>
        <ContactMe />
      </Wrapper>
    </>
  );
}
