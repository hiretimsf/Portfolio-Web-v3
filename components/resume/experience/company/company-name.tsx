import { cn } from "@/lib/utils";

type CompanyNameProps = {
  className?: string;
  companyName: string;
};

export default function CompanyName({
  className,
  companyName,
}: CompanyNameProps) {
  if (!companyName) {
    return null;
  }

  return (
    <h3
      className={cn(
        "text-panda-text inline-block align-middle text-lg leading-snug font-medium",
        className,
      )}
    >
      {companyName}
    </h3>
  );
}
