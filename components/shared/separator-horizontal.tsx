import { cn } from "@/lib/utils";

type SeparatorHorizontalProps = {
  className?: string;
};
export default function SeparatorHorizontal({
  className,
}: SeparatorHorizontalProps) {
  return (
    <div
      className={cn(
        "relative flex h-4 w-full",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-4 before:w-[200vw]",
        "before:border-y before:border-gray-200 before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-gray-200)]/56",
        className,
      )}
    />
  );
}
