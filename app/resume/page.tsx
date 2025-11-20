import EducationSection from "@/components/resume/education/education-section";
import WorkExperienceSection from "@/components/resume/experience/experience-section";
import Heading from "@/components/shared/heading";
import SeparatorHorizontal from "@/components/shared/separator-horizontal";
import HEAD from "@/constants/seo/head";
import { getBaseUrl } from "@/lib/utils";
import type { HeadType } from "@/types";
import type { Metadata } from "next";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Resume";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  applicationName: page.title,
  description: page.description,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default function ResumePage() {
  return (
    <>
      <section className="bg-panda-background relative z-10 mx-auto max-w-7xl">
        <Heading title="WORK EXPERIENCE" />
        <SeparatorHorizontal />
        <WorkExperienceSection className="w-full" />
      </section>
      <section className="bg-panda-background relative z-10 mx-auto max-w-7xl">
        <SeparatorHorizontal />
        <Heading title="EDUCATION" />
        <SeparatorHorizontal />
        <EducationSection className="w-full" />
      </section>
    </>
  );
}
