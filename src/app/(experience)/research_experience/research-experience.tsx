import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, UsersIcon, BookOpenIcon } from "lucide-react";

export default function ResearchExperienceSection() {
  return (
    <div className="container mx-auto p-4" id="research_experience">
      <SectionHeader>Research Experience</SectionHeader>
      <div>
        {researchExperiences.map((experience, index) => (
          <ResearchExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

function ResearchExperienceCard({
  experience,
}: {
  experience: ResearchExperience;
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">
              {experience.title}
            </CardTitle>
            <CardDescription>{experience.institution}</CardDescription>
          </div>
          <Badge variant="secondary" className="capitalize">
            {experience.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <UserIcon className="mr-2 h-4 w-4" />
            <p className="text-sm">
              <span className="font-semibold">Supervisor:</span>{" "}
              {experience.supervisor}
            </p>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <p className="text-sm">
              <span className="font-semibold">Duration:</span>{" "}
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          {experience.group && (
            <div className="col-span-full flex items-center">
              <UsersIcon className="mr-2 h-4 w-4" />
              <p className="text-sm">
                <span className="font-semibold">Group:</span> {experience.group}
              </p>
            </div>
          )}
          {(experience.thesisTitle || experience.projectTitle) && (
            <div className="col-span-full flex items-start">
              <BookOpenIcon className="mr-2 h-4 w-4 mt-1" />
              <p className="text-sm">
                <span className="font-semibold">
                  {experience.thesisTitle ? "Thesis" : "Project"} Title:
                </span>
                <span className="italic">
                  {" "}
                  "{experience.thesisTitle || experience.projectTitle}"
                </span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
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

interface ResearchExperience {
  title: string;
  institution: string;
  group?: string;
  supervisor: string;
  startDate: string;
  endDate: string;
  type: "research" | "project" | "thesis";
  thesisTitle?: string;
  projectTitle?: string;
}

const researchExperiences: ResearchExperience[] = [
  {
    title: "Additive Manufacturing and Comparison of Mechanical Behaviour",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    group: "Independent Research Group",
    supervisor: "Dr. Md. Shariful Islam",
    startDate: "August 2023",
    endDate: "Present",
    type: "research",
  },
  {
    title: "Mars Rover",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    group: "KUET Mars Rover (Team Durbar)",
    supervisor: "Dr. Md. Helal-An-Nahiyan",
    startDate: "January 2019",
    endDate: "April 2023",
    type: "project",
  },
  {
    title: "Undergraduate Thesis",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    supervisor: "Dr. Md. Ashraful Islam",
    startDate: "March 2022",
    endDate: "March 2023",
    type: "thesis",
    thesisTitle:
      "A Numerical Study of Aerodynamic Performance of Corrugated Airfoil of a Dragonfly Wing Section",
  },
  {
    title: "Undergraduate Project",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    supervisor: "Dr. Md. Shariful Islam",
    startDate: "February 2020",
    endDate: "March 2022",
    type: "project",
    projectTitle:
      "Construction & Performance Test of Electromagnetic Braking System",
  },
];
