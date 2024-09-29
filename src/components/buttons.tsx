"use client";

import { DownloadIcon, ExternalLinkIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import Link, { LinkProps } from "next/link";
import React from "react";
import { Tooltip, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";

export const ButtonWithLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Button onClick={() => openFileInNewTab(href)}>{children}</Button>;
};

const MergedButtons = ({
  footer,
  title,
  viewLink,
  viewTooltipContent,
  downloadLink,
  downloadTooltipContent,
}: {
  footer: boolean;
  title: string;
  viewLink: string;
  viewTooltipContent: string;
  downloadLink: string;
  downloadTooltipContent: string;
}) => {
  return (
    <div
      className={`inline-flex rounded-md shadow-sm ${footer && "w-36"}`}
      role="group"
    >
      <ToolTipComponent content={viewTooltipContent}>
        <Button
          className="rounded-r-none border-r-0 flex-grow"
          variant={footer ? "secondary" : "default"}
          asChild
        >
          <Link href={viewLink} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </Button>
      </ToolTipComponent>
      <div className="w-px bg-gray-400" />
      <ToolTipComponent content={downloadTooltipContent}>
        <Button
          className="rounded-l-none"
          variant={footer ? "secondary" : "default"}
          asChild
        >
          <Link href={downloadLink} download>
            <DownloadIcon className="w-4 h-4" />
            <span className="sr-only">{downloadTooltipContent}</span>
          </Link>
        </Button>
      </ToolTipComponent>
    </div>
  );
};

export const CVDownloadButton = ({ footer = false }: { footer?: boolean }) => {
  return (
    <MergedButtons
      footer={footer}
      title="CV"
      viewLink="/api/view/cv.pdf"
      viewTooltipContent="View CV"
      downloadLink="/api/download/cv.pdf"
      downloadTooltipContent="Download CV"
    />
  );
};

export const ResumeDownloadButton = ({
  footer = false,
}: {
  footer?: boolean;
}) => {
  return (
    <MergedButtons
      footer={footer}
      title="RESUME"
      viewLink="/api/view/resume.pdf"
      viewTooltipContent="View Resume"
      downloadLink="/api/download/resume.pdf"
      downloadTooltipContent="Download Resume"
    />
  );
};

export const openFileInNewTab = (href: string) => {
  window.open(href, "_blank", "noopener,noreferrer");
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
          <p className="text-sm text-gray-800 border rounded-sm bg-white p-2 m-1">
            {content}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
