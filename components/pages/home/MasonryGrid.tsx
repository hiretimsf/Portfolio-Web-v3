"use client";

import Masonry from "react-masonry-css";

interface MasonryGridProps {
  children: React.ReactNode;
}

export default function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
      className="flex w-auto gap-4"
      columnClassName="space-y-4"
    >
      {children}
    </Masonry>
  );
}
