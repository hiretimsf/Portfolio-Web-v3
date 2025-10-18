"use client";

import { cn } from "@/lib/utils";
import Masonry from "react-masonry-css";

interface MasonryGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function MasonryGrid({ children, className }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
      className={cn("flex w-auto gap-4", className)}
      columnClassName="space-y-4"
    >
      {children}
    </Masonry>
  );
}
