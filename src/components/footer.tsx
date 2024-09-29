"use client";

import { DownloadIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks, moreLinks, PageLink, NavItem } from "./NavBar";
import { Meteors } from "./ui/meteors";
import React from "react";
import { CVDownloadButton, ResumeDownloadButton } from "./buttons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full relative overflow-hidden">
      <div className="mx-auto p-global-padding grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {navLinks.map((link) => (
          <LinkTab key={link.title} navItem={link} />
        ))}
        <div>
          <h3 className="text-white font-bold mb-4">More</h3>
          <ul>
            {moreLinks.map((link) => (
              <LinkItem key={link.title} page={link} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:items-end gap-4">
          <CVDownloadButton footer={true} />
          <ResumeDownloadButton footer={true} />
          <div className="flex items-center gap-5">
            <Link href="mailto:srdhrubo97@gmail.com" target="_blank">
              <MailIcon className="w-5" />
            </Link>
            <Link href="tel:+8801531783368" target="_blank">
              <PhoneIcon className="w-5" />
            </Link>
            <Link href="https://wa.me/+8801531783368" target="_blank">
              <MdWhatsapp className="w-5" size="20" />
            </Link>
            <Link href="https://www.linkedin.com/in/srdhrubo" target="_blank">
              <LinkedinIcon className="w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Suchinto Roy Dhrubo. All rights
          reserved.
        </p>
        <p className="mt-2">
          Designed & developed by{" "}
          <Link
            href="https://github.com/shojib116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Nazmul Hasan Shajib
          </Link>
        </p>
      </div>
      <Meteors number={50} />
    </footer>
  );
}

const LinkTab = ({ navItem }: { navItem: NavItem }) => {
  const { title, href, pages } = navItem;
  return (
    <div>
      {href && (
        <h3 className="text-white font-bold mb-4">
          <Link href={href} className="hover:text-gray-400">
            Skills
          </Link>
        </h3>
      )}
      {pages && (
        <>
          <h3 className="text-white font-bold mb-4">{navItem.title}</h3>
          <ul>
            {pages.map((page) => (
              <LinkItem key={page.href} page={page} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const LinkItem = ({ page }: { page: PageLink }) => {
  const { title, href } = page;
  return (
    <li>
      <Link href={href} className="hover:text-gray-400">
        {title}
      </Link>
    </li>
  );
};
