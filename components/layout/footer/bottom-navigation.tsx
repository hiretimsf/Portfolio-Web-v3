import { socialLinks } from "@/constants/social";
import type { SocialLink } from "@/types";
import Link from "next/link";

export default function BottomNavigation() {
  return (
    <div className="mx-auto flex w-full">
      <div className="flex w-full">
        <div className="hidden flex-1 border-b border-gray-200 md:flex" />
        <nav
          aria-label="Bottom navigation"
          className="bg-panda-dark-blue flex w-full max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row"
        >
          {socialLinks.map((link: SocialLink) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md gap-2 px-3 py-4 font-semibold text-white underline-offset-6 hover:underline"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden flex-1 border-b border-gray-200 md:flex" />
      </div>
    </div>
  );
}
