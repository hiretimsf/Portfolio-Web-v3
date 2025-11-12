import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { ExperienceItemType } from "@/types";
import CompanyLocation from "./company-location";
import CompanyLogo from "./company-logo";
import CompanyName from "./company-name";
import CompanyWebsite from "./company-website";

type CompanyMainProps = Pick<
  ExperienceItemType,
  | "companyLogo"
  | "companyLogoAlt"
  | "companyName"
  | "companyLocation"
  | "companyWebsite"
  | "country"
> & {};

export default function CompanyMain({
  companyLogo,
  companyLogoAlt,
  companyName,
  companyLocation,
  companyWebsite,
  country,
}: CompanyMainProps) {
  const showMeta = Boolean(companyLocation || companyWebsite);
  const variant = "default" as const;

  return (
    <div className="relative flex flex-col items-center gap-3 border-b border-gray-200 px-6 py-6 md:flex-row md:px-8 md:py-4">
      <CompanyLogo
        companyLogo={companyLogo}
        companyLogoAlt={companyLogoAlt}
        companyName={companyName}
      />
      <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
        <CompanyName companyName={companyName} />
        {showMeta && (
          <div className="text-panda-text/80 flex items-center gap-2 text-sm">
            <CompanyLocation
              companyLocation={companyLocation}
              country={country}
            />
            {companyLocation && companyWebsite && (
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4"
              />
            )}
            <CompanyWebsite companyWebsite={companyWebsite} />
          </div>
        )}
      </div>
      <svg
        className="pointer-events-none absolute inset-0 z-[-1] pt-1 text-gray-200/80"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="dots-_r_6i_"
            x="-1"
            y="-1"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <rect x="1" y="1" width="2" height="2" fill="currentColor"></rect>
          </pattern>
          <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1"></stop>
            <stop offset="75%" stopColor="white" stopOpacity="0.6"></stop>
            <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <mask
            id="fade-bottom-mask"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
          >
            <rect width="100%" height="100%" fill="url(#fade-bottom)"></rect>
          </mask>
        </defs>
        <rect
          fill="url(#dots-_r_6i_)"
          width="100%"
          height="100%"
          mask="url(#fade-bottom-mask)"
        ></rect>
      </svg>
    </div>
  );
}
