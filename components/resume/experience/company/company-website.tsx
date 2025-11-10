import GlobeIcon from "@/icons/globe-icon";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type CompanyWebsiteProps = {
  className?: string;
  companyWebsite?: string | null;
};

export default function CompanyWebsite({
  className,
  companyWebsite,
}: CompanyWebsiteProps) {
  if (!companyWebsite) {
    return null;
  }

  const formattedWebsite = companyWebsite
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  if (!formattedWebsite) {
    return null;
  }

  return (
    <dl className={cn("flex items-center gap-1.5", className)}>
      <dt className="sr-only">Website</dt>
      <dd className="flex items-center gap-1.5">
        <GlobeIcon className="size-4" aria-hidden="true" />
        <a
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="group decoration-panda-orange hover:decoration-panda-text inline-flex items-center gap-1 underline underline-offset-4"
        >
          {formattedWebsite}
          <ArrowUpRight
            className="text-panda-text/70 group-hover:text-panda-orange size-3.5"
            aria-hidden="true"
          />
        </a>
      </dd>
    </dl>
  );
}
