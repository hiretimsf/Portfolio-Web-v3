import YellowButton from "@/components/shared/yellow-button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants/skills";
import { CheckmarkIcon } from "@/icons/checkmark-icon";
import { cn } from "@/lib/utils";
import type { BulletListItem } from "@/types";

export default function HeroContent({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-2xl", className)}>
      <Badge
        variant="outline"
        className="bg-panda-highlight text-panda-text hidden rounded-md px-4 py-2 text-base font-semibold sm:block"
      >
        HELLO
      </Badge>

      <h1 className="text-panda-text mx-auto mt-0 text-center text-4xl font-semibold tracking-tight sm:mt-2 sm:text-left sm:text-5xl">
        <span className="sm:hidden">Hello, </span>
        I'm Tim
      </h1>

      <p className="text-panda-text mt-2 text-center text-lg/8 sm:mt-6 sm:text-left">
        I'm an Android Developer based in the San Francisco Bay Area. I help
        people solve real-world problems by building Android apps.
      </p>

      <ul
        className="text-panda-text mt-6 mb-8 space-y-6"
        role="list"
        aria-label="Skills and qualifications"
      >
        {skills.map((item: BulletListItem, index: number) => {
          const itemId = item.name ? `${item.name}-${index}` : `item-${index}`;

          return (
            <li
              key={itemId}
              className="relative pl-9 last:mb-0"
              role="listitem"
            >
              <CheckmarkIcon
                aria-hidden="true"
                className={cn(
                  "text-panda-orange absolute left-1 size-5",
                  "top-1/2 -translate-y-1/2",
                )}
              />
              <div className="flex flex-row gap-x-1">
                {item.name && (
                  <span className="text-panda-text font-semibold">
                    {item.name}:
                  </span>
                )}
                <span className="text-panda-text">{item.description}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <YellowButton href="/about" title="Learn More" textSize="lg" />
    </div>
  );
}
