import { cn } from "@/lib/utils";

interface RowTwoColumnsProps {
  children: React.ReactNode;
  className?: string;
}

const RowTwoColumns = ({ children, className }: RowTwoColumnsProps) => {
  return (
    <section className={cn("grid-section relative overflow-clip", className)}>
      <div className="max-w-grid-width relative z-0 mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 px-4 md:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default RowTwoColumns;
