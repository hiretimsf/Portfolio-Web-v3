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
    // Handle items with only description (no name)
    if (!item.name) {
      return (
        <span className="text-panda-text" aria-label={item.description}>
          {item.description}
        </span>
      );
    }

    // Handle items with links
    if (item.href) {
      return (
        <div className="flex flex-col gap-1 text-left sm:flex-row sm:items-baseline sm:gap-x-2">
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-panda-orange hover:decoration-panda-orange/80 hover:text-panda-text/80 focus:ring-panda-orange rounded-sm font-semibold underline underline-offset-4 transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label={`${item.name}: ${item.description} (opens in new tab)`}
          >
            {item.name}
          </Link>
          <span className="text-panda-text">{item.description}</span>
        </div>
      );
    }

    // Handle items with name but no link
    return (
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-x-2">
        <span className="text-panda-text font-semibold">{item.name}</span>
        <span className="text-panda-text">{item.description}</span>
      </div>
    );
  };

  if (!list || list.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn("text-panda-text space-y-6", className)}
      role="list"
      aria-label={ariaLabel}
    >
      {list.map((item: BulletListItem, index: number) => {
        const itemId = item.name ? `${item.name}-${index}` : `item-${index}`;

        return (
          <li key={itemId} className="relative pl-9 last:mb-0" role="listitem">
            <CheckmarkIcon
              aria-hidden="true"
              className={cn(
                "text-panda-orange absolute left-1 size-5",
                getTopOffsetClass(topOffset),
              )}
            />
            {renderItem(item)}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(BulletList);
