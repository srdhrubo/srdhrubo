import { DownloadIcon } from "lucide-react";
import { ButtonWithLink } from "./ui/button";

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
