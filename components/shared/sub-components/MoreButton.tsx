import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MoreButtonProps {
  href: string;
  label: string;
}

const MoreButton = ({ href, label }: MoreButtonProps) => {
  return (
    <Button
      className="bg-panda-yellow hover:bg-panda-yellow-dark hover:shadow-panda-yellow-dark/60 text-panda-text text-md mt-10 rounded-md px-10 py-6 hover:shadow-md"
      asChild
    >
      <Link href="/about">{label}</Link>
    </Button>
  );
};

export default MoreButton;
