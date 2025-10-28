import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface YellowButtonProps {
  href: string;
  title: string;
  textSize?: "sm" | "md" | "lg";
  mt?: number;
}
const YellowButton = ({
  href,
  title,
  textSize = "lg",
  mt = 10,
}: YellowButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text w-full rounded-md px-10 py-6 sm:w-fit",
        `mt-${mt}`,
        textSize === "sm" && "text-sm",
        textSize === "md" && "text-md",
        textSize === "lg" && "text-lg",
      )}
      asChild
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default YellowButton;
