import React from "react";
import PublicationSection from "./publications";
import ResearchExperienceSection from "./research-experience";

export default function ResearchExperiencePage() {
  return (
    <div className="p-global-padding w-full">
      <header className="max-w-7xl text-center py-10 mx-auto">
        <h1 className="text-4xl font-bold">
          Research Experience and Contributions
        </h1>
        <p className="text-gray-600 mt-2 px-10">
          Discover my{" "}
          <a
            href="#research_experience"
            className="underline underline-offset-4 decoration-yellow-400 decoration-4"
          >
            research journey
          </a>
          , highlighting key contributions and{" "}
          <a
            href="#publications"
            className="underline underline-offset-4 decoration-yellow-400 decoration-4"
          >
            publications
          </a>{" "}
          that reflect my commitment to advancing knowledge and solutions in the
          field.
        </p>
      </header>
      <PublicationSection />
      <ResearchExperienceSection />
    </div>
  );
}

export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center w-full mb-10 pt-32 px-10">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-xl font-semibold text-gray-700">
        {children}
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};
