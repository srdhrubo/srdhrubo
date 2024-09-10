import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const ButtonWithLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Button asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const CVDownloadButton = () => {
  return (
    <ButtonWithLink href="/download/cv">
      CV <DownloadIcon className="w-4 ml-2" />
    </ButtonWithLink>
  );
};

export const ResumeDownloadButton = () => {
  return (
    <ButtonWithLink href="/download/resume">
      RESUME <DownloadIcon className="w-4 ml-2" />
    </ButtonWithLink>
  );
};
