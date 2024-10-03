import React from "react";
import ResearchExperienceSection from "./research-experience";
import {
  PageDescription,
  PageTitle,
} from "@/components/ui/page-header-description";

export default function ResearchExperiencePage() {
  return (
    <div className="p-global-padding py-12 w-full antialiased">
      <header>
        <PageTitle>Research Experience and Contributions</PageTitle>
        <PageDescription classname="md:max-w-3xl">
          Discover my research journey, highlighting key contributions that
          reflect my commitment to advancing knowledge and solutions in the
          field.
        </PageDescription>
      </header>
      <ResearchExperienceSection />
    </div>
  );
}
