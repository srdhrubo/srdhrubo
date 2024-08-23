"use client";

import * as React from "react";
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
import logo from "../../public/logo.png";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";

const links = {
  academic: [
    { href: "/academic", title: "Academic" },
    { href: "/standardized-test-results", title: "Standardized Test Results" },
  ],
  experience: [
    { href: "/research", title: "Research" },
    { href: "/professional", title: "Professional" },
    { href: "/projects", title: "Projects" },
  ],
  affiliation: [
    { href: "/achievements", title: "Achievements" },
    { href: "/co-curriculars", title: "Co-curricular Activities" },
  ],
  more: [
    { href: "/contacts", title: "Contact Details" },
    { href: "/about", title: "About Me" },
    { href: "/references", title: "References" },
  ],
};

export default function NavigationBar() {
  return (
    <div className="p-global-padding flex items-center justify-between w-full py-4 h-[4.5rem]">
      <Link href="/" className="z-10">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Education</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[450px]">
                {links.academic.map((link) => (
                  <ListItem
                    href={link.href}
                    title={link.title}
                    key={link.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Experience</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[450px]">
                {links.experience.map((link) => (
                  <ListItem
                    href={link.href}
                    title={link.title}
                    key={link.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Affiliation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[450px]">
                {links.affiliation.map((link) => (
                  <ListItem
                    href={link.href}
                    title={link.title}
                    key={link.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/skills" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex justify-between p-6 w-[450px]">
                <div className="grid gap-3">
                  {links.more.map((link) => (
                    <ListItem
                      href={link.href}
                      title={link.title}
                      key={link.href}
                    />
                  ))}
                  <li className="flex gap-4 pl-4">
                    <Button>
                      CV <DownloadIcon className="w-4 ml-2" />
                    </Button>
                    <Button>
                      RESUME <DownloadIcon className="w-4 ml-2" />
                    </Button>
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
