import navigationLinks from "@/constants/navigations";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-b bg-white">
      {/* Back to top */}
      <Link href="#top" className="group block">
        <div className="bg-panda-blue mx-auto max-w-5xl border-x px-4 py-4 text-center transition-colors group-hover:bg-[#485769] sm:px-6 lg:px-8">
          <p className="text-sm text-white">Back to top</p>
        </div>
      </Link>

      {/* Navigation */}
      <div className="bg-panda-dark-blue mx-auto max-w-5xl border-x px-4 py-6 sm:px-6 lg:px-8">
        <nav
          aria-label="Bottom navigation"
          className="flex justify-center gap-8"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-md gap-2 px-3 py-2 font-semibold text-white transition-colors hover:text-gray-300"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="bg-panda-dark mx-auto max-w-5xl border-x px-4 py-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
