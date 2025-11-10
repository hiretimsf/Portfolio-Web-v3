import { Separator } from "@/components/ui/separator";
import BriefcaseIcon from "@/icons/briefcase-icon";
import CalendarIcon from "@/icons/calendar-icon";
import ClockIcon from "@/icons/clock-icon";
import React from "react";

type IconComponent = React.ComponentType<{
  className?: string;
}>;

type PositionHeaderProps = {
  icon: React.ReactNode | IconComponent;
  title: string;
  employmentType: string;
  employmentPeriod: string;
  employmentDuration: string;
};

export default function PositionHeader({
  icon,
  title,
  employmentType,
  employmentPeriod,
  employmentDuration,
}: PositionHeaderProps) {
  const iconNode = React.isValidElement(icon)
    ? icon
    : typeof icon === "function"
      ? React.createElement(icon, { className: "size-4" })
      : null;

  const details = [
    {
      label: "Employment Period",
      value: employmentPeriod,
      Icon: CalendarIcon,
    },
    {
      label: "Employment Duration",
      value: employmentDuration,
      Icon: ClockIcon,
    },
  ];

  if (employmentType) {
    details.unshift({
      label: "Employment Type",
      value: employmentType,
      Icon: BriefcaseIcon,
    });
  }

  return (
    <div className="flex flex-col gap-2 border-r border-b border-l border-gray-200 px-4 py-2">
      <div className="relative z-1 flex items-center gap-3">
        {iconNode && (
          <span className="flex size-6 items-center justify-center rounded-md border border-gray-200 bg-white">
            {iconNode}
          </span>
        )}

        <h4 className="flex-1 text-base font-medium text-balance">{title}</h4>
      </div>

      <div className="text-panda-text/80 relative z-1 flex items-center gap-2 text-sm">
        {details.map(({ label, value, Icon }, index) => (
          <React.Fragment key={label}>
            {index > 0 && (
              <Separator
                className="data-[orientation=vertical]:h-4"
                orientation="vertical"
              />
            )}

            <dl>
              <dt className="sr-only">{label}</dt>
              <dd className="flex items-center gap-1.5">
                <Icon className="size-3.5" />
                {value}
              </dd>
            </dl>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
