import React from "react";
import ResearchExperienceSection from "./research-experience";

export default function ResearchExperiencePage() {
  return (
    <div className="p-global-padding w-full antialiased">
      <header className="max-w-7xl text-center py-10 mx-auto">
        <h1 className="text-4xl font-bold">
          Research Experience and Contributions
        </h1>
        <p className="text-gray-600 mt-2 px-10">
          Discover my research journey , highlighting key contributions that
          reflect my commitment to advancing knowledge and solutions in the
          field.
        </p>
      </header>
      <ResearchExperienceSection />
    </div>
  );
}
