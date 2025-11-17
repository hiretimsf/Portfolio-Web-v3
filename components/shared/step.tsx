import Link from "next/link";
import { type ReactNode } from "react";

interface StepProps {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
  isLast: boolean;
}

export default function Step({
  id,
  number,
  title,
  children,
  isLast,
}: StepProps) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gray-300" />
      )}
      <div className="not-prose">
        <Link
          href={`#${id}`}
          className="group relative flex items-center gap-4 py-0 transition-colors"
        >
          <div className="flex size-8 flex-none items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all group-hover:shadow-md">
            <span className="font-display text-panda-text text-lg font-bold">
              {number}
            </span>
          </div>
          <h2
            className="font-display !m-0 scroll-mt-20 text-xl font-medium text-neutral-800"
            id={id}
          >
            {title}
          </h2>
        </Link>
      </div>
      <div className="ml-12 pt-2 pb-4">{children}</div>
    </div>
  );
}
