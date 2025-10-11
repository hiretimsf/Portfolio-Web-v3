import { cn } from "@/lib/utils";

interface ContentsProps {
  children: React.ReactNode;
  className?: string;
}

const Contents = ({ children, className }: ContentsProps) => {
  return <div className={cn("mx-auto max-w-2xl", className)}>{children}</div>;
};

export default Contents;
