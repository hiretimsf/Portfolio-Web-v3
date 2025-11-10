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
> & {
  className?: string;
};

export default function CompanyMain({
  className,
  companyLogo,
  companyLogoAlt,
  companyName,
  companyLocation,
  companyWebsite,
  country,
}: CompanyMainProps) {
  const showMeta = Boolean(companyLocation || companyWebsite);

  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-2 md:px-8">
        <CompanyLogo
          companyLogo={companyLogo}
          companyLogoAlt={companyLogoAlt}
          companyName={companyName}
        />
        <div className="flex flex-col gap-1">
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
      </div>
    </div>
  );
}
