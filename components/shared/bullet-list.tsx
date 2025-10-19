import { CheckmarkIcon } from "@/icons/checkmark-icon";
import { cn } from "@/lib/utils";
import { BulletListItem } from "@/types";
import Link from "next/link";
import { memo } from "react";

interface BulletListProps {
  list: BulletListItem[];
  topOffset?: "top" | "center" | "bottom";
  className?: string;
  "aria-label"?: string;
}

const BulletList = ({
  list,
  topOffset = "center",
  className,
  "aria-label": ariaLabel = "List of items",
}: BulletListProps) => {
  const getTopOffsetClass = (offset: string) => {
    switch (offset) {
      case "top":
        return "top-1";
      case "bottom":
        return "bottom-1";
      case "center":
      default:
        return "top-1/2 -translate-y-1/2";
    }
  };

  const renderItem = (item: BulletListItem) => {
    if (item.href) {
      return (
        <span className="flex flex-col items-baseline gap-x-2 text-left sm:flex-row">
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-panda-orange hover:decoration-panda-orange/80 hover:text-panda-text/80 font-semibold underline underline-offset-4 transition-colors duration-200"
            aria-label={`${item.name}: ${item.description} (opens in new tab)`}
          >
            <span className="font-semibold">{item.name}</span>
          </Link>
          <span className="text-panda-text">{item.description}</span>
        </span>
      );
    }

    return (
      <span className="flex flex-row items-baseline gap-x-2">
        <span className="text-panda-text font-semibold">{item.name}</span>
        <span className="text-panda-text">{item.description}</span>
      </span>
    );
  };

  return (
    <ul
      className={cn("text-panda-text space-y-6", className)}
      role="list"
      aria-label={ariaLabel}
    >
      {list.map((item: BulletListItem, index: number) => (
        <li key={`${item.name}-${index}`} className="relative pl-9 last:mb-0">
          <CheckmarkIcon
            aria-hidden="true"
            className={cn(
              "text-panda-orange absolute left-1 size-5",
              getTopOffsetClass(topOffset),
            )}
          />
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default memo(BulletList);
