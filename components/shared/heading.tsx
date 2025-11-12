import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  textStyleClassName?: string;
  borderStyleClassName?: string;
  backgroundStyleClassName?: string;
  gridStyleClassName?: string;
  gridColorClassName?: string;
  gridId?: string;
}
export default function Heading({
  title,
  textStyleClassName = "text-3xl sm:text-4xl font-bold",
  borderStyleClassName = "border-gray-200",
  backgroundStyleClassName = "bg-panda-background",
  gridStyleClassName = "text-gray-200",
  gridId = "grid-default",
}: HeadingProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-full justify-center border-b px-6 py-8 md:py-10 lg:px-8",
        gridStyleClassName,
        borderStyleClassName,
        backgroundStyleClassName,
      )}
    >
      <svg
        className="absolute inset-0 z-0 h-full [mask-image:radial-gradient(circle_at_100%_0,black,transparent_80%)]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={gridId}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="2"
            ></path>
          </pattern>
        </defs>
        <rect fill={`url(#${gridId})`} width="100%" height="100%"></rect>
      </svg>
      <h2
        className={cn(
          "text-panda-text decoration-panda-orange relative z-10 mx-auto text-center tracking-tight underline underline-offset-8",
          textStyleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
