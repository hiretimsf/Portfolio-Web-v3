import { cn } from "@/lib/utils";

interface SeparatorProps {
  title?: string;
  className?: string;
}

const Separator = ({ title, className }: SeparatorProps) => {
  return (
    <div className={cn("mx-auto w-full px-4 py-2 text-center", className)}>
      <h2 className="text-xl font-medium text-white">{title}</h2>
    </div>
  );
};

export default Separator;
