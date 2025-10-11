import { Badge } from "@/components/ui/badge";

const Label = ({ label }: { label: string }) => {
  return (
    <Badge
      variant="outline"
      className="bg-panda-highlight text-panda-text items-center gap-2 rounded-md px-4 py-2 text-base/7 font-semibold capitalize"
    >
      {label}
    </Badge>
  );
};

export default Label;
