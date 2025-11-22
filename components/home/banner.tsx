type BannerProps = {
  tag: string;
  title: string;
};
export default function Banner({ tag, title }: BannerProps) {
  return (
    <div className="mx-auto flex w-full">
      <div className="flex w-full">
        <div className="hidden flex-1 border-b border-gray-200 md:flex" />
        <div className="bg-panda-blue flex w-full max-w-5xl items-center justify-center gap-2 py-2 text-center text-base text-white/90">
          <span className="bg-panda-light-green text-panda-dark-blue rounded-md px-1 py-0.5 text-sm font-semibold whitespace-nowrap">
            {tag}
          </span>
          <span className="hidden md:block">{title}</span>
        </div>
        <div className="hidden flex-1 border-b border-gray-200 md:flex" />
      </div>
    </div>
  );
}
