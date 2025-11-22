"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MusicIcon } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

// Logo component with avatar and brand name
const Logo = memo(({ className }: { className?: string }) => (
  <Link
    className={cn("group flex items-center gap-2", className)}
    href="/"
    aria-label="Go to homepage"
  >
    <Avatar className="size-6 group-hover:opacity-80">
      <AvatarImage alt="HireTim logo" src="/images/logo.png" />
      <AvatarFallback>
        <MusicIcon className="size-6" />
      </AvatarFallback>
    </Avatar>
    <span className="group-hover:decoration-panda-orange text-xl font-semibold text-white group-hover:underline group-hover:underline-offset-6 md:text-lg">
      HireTim
    </span>
  </Link>
));

Logo.displayName = "Logo";

export default Logo;
