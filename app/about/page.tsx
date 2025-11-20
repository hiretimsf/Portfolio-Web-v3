import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import DotsBackground from "@/components/shared/dots-background";
import Heading from "@/components/shared/heading";
import SeparatorHorizontal from "@/components/shared/separator-horizontal";
import HEAD from "@/constants/seo/head";
import { pagesSource } from "@/lib/source";
import { getBaseUrl } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";
import type { HeadType } from "@/types";
import type { TableOfContents } from "fumadocs-core/toc";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "About";

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

type MDXPageData = {
  body: ComponentType<{ code: unknown; components?: unknown }>;
  toc?: TableOfContents;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default async function AboutMePage() {
  const page = pagesSource.getPage(["about"]);
  if (!page) notFound();

  const pageData = page.data as MDXPageData;
  const MDX = pageData.body;
  const title = pageData.title;
  const imageUrl = pageData.imageUrl ?? "/images/horizontal-profile-about.jpg";
  const imageAlt =
    pageData.imageAlt ??
    "Professional headshot of Tim, an Android Developer with 5 years of experience";

  return (
    <main className="mx-auto flex flex-col">
      <div className="relative">
        <Image
          alt={imageAlt}
          src={imageUrl}
          width={1000}
          height={500}
          className="h-auto max-h-96 w-full object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1000px"
        />
      </div>
      <SeparatorHorizontal />
      <Heading
        title={title ?? "Hello, I'm Tim"}
        textStyleClassName="text-4xl font-semibold md:text-5xl"
        backgroundStyleClassName="bg-panda-prune"
        gridStyleClassName="text-panda-text/10"
        gridId="grid-about"
      />
      <SeparatorHorizontal />
      <div className="border-border relative min-h-52 max-w-full">
        <DocsLayout
          tree={pagesSource.pageTree}
          containerProps={{ className: "relative bg-transparent" }}
        >
          <DotsBackground gridId="about" className="text-gray-200/80" />
          <DocsPage toc={pageData.toc}>
            <DocsBody>
              <MDX code={MDX} components={getMDXComponents()} />
            </DocsBody>
          </DocsPage>
        </DocsLayout>
      </div>
    </main>
  );
}
