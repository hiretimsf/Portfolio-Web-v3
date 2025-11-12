import { cn } from "@/lib/utils";

interface DotsBackgroundProps {
  gridId?: string;
  fadeBottomMask?: boolean;
  className?: string;
}
export default function DotsBackground({
  className,
  fadeBottomMask,
}: DotsBackgroundProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 z-[-1] h-full w-full pt-1 text-gray-200/80",
        className,
      )}
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
        {fadeBottomMask && (
          <>
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
          </>
        )}
      </defs>
      <rect
        fill="url(#dots-_r_6i_)"
        width="100%"
        height="100%"
        {...(fadeBottomMask && { mask: "url(#fade-bottom-mask)" })}
      ></rect>
    </svg>
  );
}
