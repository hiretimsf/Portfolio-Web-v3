interface SectionHeaderProps {
  number: string | number;
  title: string;
  id: string;
  color?: "green" | "orange" | "light-blue";
}

const SectionHeader = ({
  number,
  title,
  id,
  color = "green",
}: SectionHeaderProps) => {
  const colorClasses = {
    green: "bg-panda-green",
    orange: "bg-panda-orange",
    "light-blue": "bg-panda-light-blue",
  };

  return (
    <div className="flex items-center gap-4">
      <div
        className={`${colorClasses[color]} flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white`}
      >
        {number}
      </div>
      <h2 id={id} className="text-panda-text text-2xl font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
