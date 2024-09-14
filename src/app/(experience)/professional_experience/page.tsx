import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import { experiences } from "@/lib/data";
import { ProfessionalExperience } from "@/lib/type";

const ProfessionalExperienceCard = ({
  experience,
}: {
  experience: ProfessionalExperience;
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">
              {experience.company}
            </CardTitle>
            {experience.formerName && (
              <CardDescription>
                (Formerly known as {experience.formerName})
              </CardDescription>
            )}
          </div>
          <Badge variant="secondary">{experience.designation}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {dayjs(experience.startDate).format("MMMM YYYY")} -{" "}
          {!experience.endDate || dayjs(experience.endDate) === dayjs()
            ? "Present"
            : dayjs(experience.endDate).format("MMMM YYYY")}
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ProfessionalExperienceSection = ({
  experiences,
}: {
  experiences: ProfessionalExperience[];
}) => {
  return (
    <div
      className="p-global-padding mx-auto my-12"
      id="professional_experience"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">
        Professional Experiences
      </h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ProfessionalExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default function ProfessionalExperiences() {
  return <ProfessionalExperienceSection experiences={experiences} />;
}
