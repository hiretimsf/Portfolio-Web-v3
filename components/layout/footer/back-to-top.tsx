import Link from "next/link";

export default function BackToTop() {
  return (
    <div className="mx-auto flex w-full">
      <div className="flex w-full">
        <div className="hidden flex-1 border-b border-gray-200 md:flex" />
        <Link
          href="#top"
          className="group bg-panda-blue hover:bg-panda-blue/95 flex w-full max-w-5xl items-center justify-center py-4 text-center transition-colors"
        >
          <p className="text-md font-semibold text-white group-hover:text-white group-hover:underline group-hover:underline-offset-4">
            Back to top
          </p>
        </Link>
        <div className="hidden flex-1 border-b border-gray-200 md:flex" />
      </div>
    </div>
  );
}
