import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PageDescription,
  PageTitle,
} from "@/components/ui/page-header-description";
import {
  Code2Icon,
  CpuIcon,
  LayersIcon,
  SettingsIcon,
  PencilRulerIcon,
} from "lucide-react";

const techSkills = {
  analysisSoftware: {
    icon: <LayersIcon className="mr-2" />,
    title: "CAD & Analyzing Software",
    skills: [
      "SolidWorks",
      "AutoCAD",
      "KeyShot",
      "ANSYS (Fluent)",
      "Abaqus CAE",
    ],
  },
  programming: {
    icon: <Code2Icon className="mr-2" />,
    title: "Programming Languages",
    skills: ["MATLAB", "C/C++", "Python", "Arduino Programming"],
  },
  hardware: {
    icon: <CpuIcon className="mr-2" />,
    title: "Hardware Skills",
    skills: ["Arduino", "Basic Sensors"],
  },
  operation: {
    icon: <SettingsIcon className="mr-2" />,
    title: "Operating Skills",
    skills: ["3D Printer", "Lathe Machine", "Milling Machine"],
  },
  otherSoftwares: {
    icon: <PencilRulerIcon className="mr-2" />,
    title: "Other Software Skills",
    skills: [
      "MS Word",
      "MS PowerPoint",
      "MS Excel",
      "Adobe Illustrator",
      "Premiere Pro",
    ],
  },
};

export default function Skills() {
  return (
    <div className="min-h-screen">
      <div className="p-global-padding py-12 mx-auto">
        <header>
          <PageTitle>Technical Skills</PageTitle>
          <PageDescription>
            A detailed summary of core technical competencies across software,
            hardware, programming, and operational skills, highlighting
            proficiency in tools essential for engineering and design projects.
          </PageDescription>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillsCard skillSet={techSkills.analysisSoftware} />

          <SkillsCard skillSet={techSkills.programming} />

          <SkillsCard skillSet={techSkills.hardware} />

          <SkillsCard skillSet={techSkills.operation} />

          <SkillsCard
            className="md:col-span-2"
            skillSet={techSkills.otherSoftwares}
          />
        </div>
      </div>
    </div>
  );
}

const SkillsCard = ({
  className,
  skillSet,
}: {
  className?: string;
  skillSet: { icon?: React.ReactNode; title: string; skills: string[] };
}) => {
  const { icon, title, skills } = skillSet;
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 md:columns-2">
          {skills.map((skill) => (
            <li key="skill">{skill}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
