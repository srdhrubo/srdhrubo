"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { DownloadIcon } from "lucide-react";
import { Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { CVDownloadButton, ResumeDownloadButton } from "./buttons";

export type PageLink = {
  href: string;
  title: string;
};

export interface NavItem {
  title: string;
  href?: string;
  pages?: PageLink[];
}

export const navLinks: NavItem[] = [
  {
    title: "Academic",
    pages: [
      { href: "/education", title: "Education" },
      { href: "/publications", title: "Publications" },
    ],
  },
  {
    title: "Experience",
    pages: [
      { href: "/research_experience", title: "Research" },
      { href: "/professional_experience", title: "Professional" },
    ],
  },
  {
    title: "Affiliation",
    pages: [
      { href: "/achievements", title: "Achievements" },
      { href: "/co-curriculars", title: "Co-curricular Activities" },
    ],
  },
  { title: "Skills", href: "/skills" },
];

export const moreLinks: PageLink[] = [
  { href: "/contacts", title: "Contact Details" },
  { href: "/about", title: "About Me" },
  { href: "/references", title: "References" },
];

export default function NavigationBar() {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`p-global-padding flex items-center justify-between py-4 h-[4.5rem] sticky top-0 z-50 transition-transform duration-300 ${
        lastScrollY === 0
          ? ""
          : lastScrollY > 100
          ? "bg-white shadow-xl mx-[8.5%] px-[1.5%] top-2 rounded-full border"
          : "-translate-y-full"
      }`}
    >
      <Link href="/" className="z-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="block lg:hidden"
        />
        <Image
          src="/logo_large.png"
          alt="Logo"
          width={217}
          height={40}
          className="hidden lg:block aspect-auto"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((navItem) => (
            <NavItemComponent key={navItem.title} navItem={navItem} />
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex justify-between p-6 w-[450px]">
                <div className="grid gap-3">
                  {moreLinks.map((link) => (
                    <ListItem
                      href={link.href}
                      title={link.title}
                      key={link.href}
                    />
                  ))}
                  <li className="flex gap-4 pl-4">
                    <CVDownloadButton />
                    <ResumeDownloadButton />
                  </li>
                </div>
                <div>
                  <li className="flex flex-col gap-4 pl-4 items-center h-full justify-center">
                    <ToolTipComponent content="srdhrubo97@gmail.com">
                      <a href="mailto:srdhrubo97@gmail.com" target="_blank">
                        <Mail className="w-6" />
                      </a>
                    </ToolTipComponent>
                    <ToolTipComponent content="https://www.linkedin.com/in/srdhrubo/">
                      <a
                        href="https://www.linkedin.com/in/srdhrubo/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-6" />
                      </a>
                    </ToolTipComponent>
                    <ToolTipComponent content="+8801531783368">
                      <a href="tel:+8801531783368">
                        <Phone className="w-6" />
                      </a>
                    </ToolTipComponent>
                  </li>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const NavItemComponent = ({ navItem }: { navItem: NavItem }) => {
  const { title, href, pages } = navItem;
  return (
    <NavigationMenuItem>
      {href && (
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {title}
          </NavigationMenuLink>
        </Link>
      )}
      {pages && (
        <>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[450px]">
              {pages.map((link) => (
                <ListItem href={link.href} title={link.title} key={link.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
  );
};

const ToolTipComponent = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p className="flex gap-2 items-center text-sm border rounded-sm bg-white p-2">
            {content}{" "}
            <Clipboard
              className="w-4 cursor-pointer active:w-3"
              onClick={() => navigator.clipboard.writeText(content)}
            />
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ListItem = ({
  className,
  title,
  href,
}: {
  className?: string;
  title: string;
  href: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        legacyBehavior
        passHref
      >
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </li>
  );
};
ListItem.displayName = "ListItem";
