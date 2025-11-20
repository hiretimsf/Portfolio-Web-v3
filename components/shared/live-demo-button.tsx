import { Button } from "@/components/ui/button";
import BrowserIcon from "@/icons/browser-icon";
import Link from "next/link";

interface LiveDemoButtonProps {
  href: string;
}

export function LiveDemoButton({ href }: LiveDemoButtonProps) {
  return (
    <Button
      className="bg-panda-yellow hover:bg-panda-yellow-dark text-panda-text text-md w-full rounded-md px-6 py-3 transition-colors duration-200"
      asChild
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <BrowserIcon className="text-panda-text size-4" />
        Live Demo
      </Link>
    </Button>
  );
}
