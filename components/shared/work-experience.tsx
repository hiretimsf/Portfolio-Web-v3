import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { ExperienceItemType, ExperiencePositionItemType } from "@/types";
import {
  ArrowUpRight,
  BriefcaseBusinessIcon,
  CalendarIcon,
  ClockIcon,
  GraduationCapIcon,
  LinkIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceItemType[];
}) {
  return (
    <section className={className} aria-label="Work Experience">
      {experiences && experiences.length > 0 ? (
        experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))
      ) : (
        <p className="text-muted-foreground px-4 py-8 text-center text-sm">
          No work experience to display.
        </p>
      )}
    </section>
  );
}

export function ExperienceItem({
  experience,
}: {
  experience: ExperienceItemType;
}) {
  const CountryFlag = experience.country;
  return (
    <div className="border-b border-gray-200">
      <div className="not-prose border-b border-gray-200 py-4">
        <div className="flex items-center gap-3 px-6 py-2 md:px-8">
          <Image
            src={experience.companyLogo || ""}
            alt={experience.companyLogoAlt || experience.companyName}
            width={64}
            height={64}
            className="size-6 rounded-xs object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 64px"
          />

          <h3 className="text-panda-text inline-block align-middle text-lg leading-snug font-medium">
            {experience.companyName}
          </h3>

          {experience.isCurrentEmployer && (
            <span className="relative flex items-center justify-center">
              <span className="bg-info absolute inline-flex size-3 animate-ping rounded-full opacity-50" />
              <span className="bg-info relative inline-flex size-2 rounded-full" />
              <span className="sr-only">Current Employer</span>
            </span>
          )}
        </div>

        {(experience.companyLocation || experience.companyWebsite) && (
          <div className="text-panda-text/80 flex items-center gap-2 pl-8 text-sm">
            {experience.companyLocation && (
              <>
                <dl className="flex items-center gap-1.5">
                  <dt className="sr-only">Location</dt>
                  {CountryFlag && (
                    <dd className="flex items-center">
                      <CountryFlag className="size-3.5" />
                    </dd>
                  )}
                  <dd>{experience.companyLocation}</dd>
                </dl>
                {experience.companyWebsite && (
                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />
                )}
              </>
            )}
            {experience.companyWebsite && (
              <dl className="flex items-center gap-1.5">
                <dt className="sr-only">Website</dt>
                <dd className="flex items-center gap-1.5">
                  <LinkIcon className="size-3.5" />
                  <a
                    href={experience.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-panda-orange hover:decoration-panda-text underline underline-offset-4"
                  >
                    {experience.companyWebsite
                      .replace(/^https?:\/\//, "")
                      .replace(/\/$/, "")}
                  </a>
                </dd>
              </dl>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePositionItemType;
}) {
  const ExperienceIcon = position.icon ?? GraduationCapIcon;

  // Render icon component - handle both LucideIcon/IconType and ReactNode
  const renderIcon = () => {
    if (React.isValidElement(ExperienceIcon)) {
      return (
        <span className="flex size-4 items-center justify-center">
          {ExperienceIcon}
        </span>
      );
    }
    // ExperienceIcon is a component function (LucideIcon or IconType)
    const IconComponent = ExperienceIcon as React.ComponentType<{
      className?: string;
    }>;
    return <IconComponent className="size-4" />;
  };

  return (
    <div className="relative pl-6 md:pl-8">
      <div className="not-prose border-b border-l border-gray-200 py-4">
        <div className="relative z-1 mb-1 flex items-center gap-3 pl-7">
          {renderIcon()}

          <h4 className="flex-1 text-base font-medium text-balance">
            {position.title}
          </h4>
        </div>

        <div className="text-panda-text/80 relative z-1 flex items-center gap-2 pl-7 text-sm">
          {position.employmentType && (
            <>
              <dl>
                <dt className="sr-only">Employment Type</dt>
                <dd className="flex items-center gap-1.5">
                  <BriefcaseBusinessIcon className="size-3.5" />
                  {position.employmentType}
                </dd>
              </dl>

              <Separator
                className="data-[orientation=vertical]:h-4"
                orientation="vertical"
              />
            </>
          )}

          <dl>
            <dt className="sr-only">Employment Period</dt>
            <dd className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              {position.employmentPeriod}
            </dd>
          </dl>
          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />
          <dl>
            <dt className="sr-only">Employment Duration</dt>
            <dd className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5" />
              {position.employmentDuration}
            </dd>
          </dl>
        </div>
      </div>

      {position.description && (
        <Prose className="border-b border-l border-gray-200 px-7 py-4">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => {
                const { href, children, className, ...rest } = props;
                const isExternalHref =
                  typeof href === "string" && /^https?:\/\//.test(href);

                const content = (
                  <>
                    {children}
                    {isExternalHref && (
                      <ArrowUpRight
                        className="text-panda-text/70 group-hover/link:text-panda-text size-3"
                        aria-hidden="true"
                      />
                    )}
                  </>
                );

                if (typeof href === "string" && href.length > 0) {
                  return (
                    <a
                      {...rest}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        className,
                        "group/link hover:decoration-panda-text decoration-panda-orange inline-flex items-center gap-1 underline underline-offset-4",
                      )}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <span
                    {...rest}
                    className={cn(className, "inline-flex items-center gap-1")}
                  >
                    {content}
                  </span>
                );
              },
            }}
          >
            {position.description}
          </ReactMarkdown>
        </Prose>
      )}

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <ul className="not-prose flex flex-wrap gap-1.5 border-l border-gray-200 py-4 pl-7">
          {position.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Skill>{skill}</Skill>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm text-panda-text prose-invert max-w-none font-mono",
        "prose-a:font-medium prose-a:wrap-break-word prose-a:text-panda-text prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className,
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-muted/50 text-panda-text/80 inline-flex items-center rounded-lg border border-gray-200 px-1.5 py-0.5 font-mono text-xs",
        className,
      )}
      {...props}
    />
  );
}
