"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navigationLinks from "@/constants/navigations";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MailIcon, Menu, MusicIcon, PlusIcon, X } from "lucide-react";
import Link from "next/link";
import { memo, useState } from "react";

interface HeaderProps {
  className?: string;
}

interface LogoProps {
  className?: string;
}

interface NavigationItem {
  href: string;
  label: string;
  icon?: string;
}

const Logo = memo(({ className }: LogoProps) => (
  <Link
    className={cn(
      "group flex items-center gap-2 transition-opacity hover:opacity-80",
      className,
    )}
    href="/"
    aria-label="Go to homepage"
  >
    <Avatar className="size-6">
      <AvatarImage alt="HireTim logo" src="/images/logo.png" />
      <AvatarFallback>
        <MusicIcon className="size-6" />
      </AvatarFallback>
    </Avatar>
    <span className="text-xl font-semibold text-white group-hover:underline md:text-lg">
      HireTim
    </span>
  </Link>
));

Logo.displayName = "Logo";

const MobileMenuButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group hover:bg-accent rounded-none md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X className="group-hover:text-accent-foreground size-6 text-white transition-colors" />
          ) : (
            <Menu className="group-hover:text-accent-foreground size-6 text-white transition-colors" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="z-50">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>
        <div className="bg-background">
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <nav aria-label="Mobile navigation">
              <ul className="divide-border divide-y">
                {navigationLinks.map((menuItem: NavigationItem) => (
                  <li key={menuItem.href} className="list-none">
                    <Link
                      href={menuItem.href}
                      className="group hover:bg-accent inline-flex w-full gap-2 px-6 py-4 transition-colors"
                      onClick={() => setIsOpen(false)}
                      aria-label={`Navigate to ${menuItem.label}`}
                    >
                      <span className="text-foreground group-hover:text-accent-foreground flex items-center gap-2 font-medium transition-colors">
                        {menuItem.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileMenuButton.displayName = "MobileMenuButton";

const DesktopNavigationMenu = memo(() => (
  <NavigationMenu className="hidden md:block">
    <NavigationMenuList className="flex gap-8">
      {navigationLinks.map((item: NavigationItem) => (
        <NavigationMenuItem key={item.href}>
          <Link
            href={item.href}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-white transition-colors hover:underline"
            aria-label={`Navigate to ${item.label}`}
          >
            <span className="font-medium">{item.label}</span>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
));

DesktopNavigationMenu.displayName = "DesktopNavigationMenu";

const ContactButtonDesktop = memo(() => (
  <Button
    className="hover:text-panda-dark-blue hidden rounded-none border border-white bg-transparent font-semibold text-white transition-all hover:bg-white md:flex"
    aria-label="Contact Tim"
  >
    <MailIcon className="size-4" />
    Contact Tim
  </Button>
));

ContactButtonDesktop.displayName = "ContactButtonDesktop";

const ContactButtonMobile = memo(() => (
  <Button
    size="icon"
    className="hover:text-panda-dark-blue rounded-none bg-transparent text-white hover:bg-white md:hidden"
    aria-label="Contact Tim"
  >
    <MailIcon className="size-6" />
  </Button>
));

ContactButtonMobile.displayName = "ContactButtonMobile";

const Header = memo(({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur",
        className,
      )}
    >
      <div className="bg-panda-dark-blue mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Logo (desktop) and Mobile menu button */}
          <div className="flex flex-1 justify-start">
            <Logo className="hidden md:flex" />
            <MobileMenuButton />
          </div>

          {/* Center section - Desktop navigation and Logo (mobile) */}
          <div className="flex items-center">
            <DesktopNavigationMenu />
            <Logo className="flex md:hidden" />
          </div>

          {/* Right section - Add button */}
          <div className="flex flex-1 justify-end gap-2">
            <ContactButtonDesktop />
            <ContactButtonMobile />
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
