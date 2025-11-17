"use client";

import { useEffect, useState } from "react";

export const useScrollPosition = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    updateScrollPosition();

    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [threshold]);

  return isScrolled;
};
