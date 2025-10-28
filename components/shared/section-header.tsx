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
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div
        className={`${colorClasses[color]} flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-white sm:h-8 sm:w-8 sm:text-sm`}
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
