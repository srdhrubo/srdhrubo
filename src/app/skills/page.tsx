import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen py-16">
      <div className="p-global-padding mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h1>

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
