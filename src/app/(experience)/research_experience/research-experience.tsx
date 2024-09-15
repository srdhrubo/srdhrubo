"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  UserIcon,
  UsersIcon,
  BookOpenIcon,
  TrophyIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResearchExperience } from "@/lib/type";
import { researchExperiences } from "@/lib/data";
import dayjs from "dayjs";

export default function ResearchExperienceSection() {
  const sortedExperiences = researchExperiences.sort((a, b) => {
    const dateA = a.endDate
      ? new Date(a.endDate).getTime()
      : new Date().getTime();
    const dateB = b.endDate
      ? new Date(b.endDate).getTime()
      : new Date().getTime();
    return dateB - dateA;
  });
  return (
    <div className="container mx-auto p-4 mb-8" id="research_experience">
      <div className="space-y-16">
        {sortedExperiences &&
          sortedExperiences.map((experience, index) => (
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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">
              {experience.title}
            </CardTitle>
            {(experience.institution || experience.group) && (
              <CardDescription>
                {experience.institution || experience.group}
              </CardDescription>
            )}
          </div>
          <Badge variant="secondary" className="capitalize">
            {experience.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {experience.images && experience.images.length > 0 && (
              <div className="mb-4">
                {experience.images.length === 1 ? (
                  <Image
                    src={experience.images[0]}
                    alt={`Image for ${experience.title}`}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <Carousel
                    className="w-full max-w-2xl mx-auto"
                    opts={{ loop: true, align: "center" }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {experience.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={image}
                            alt={`Image ${index + 1} for ${experience.title}`}
                            width={800}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="max-lg:left-1 max-lg:opacity-60 max-lg:border max-lg:border-black" />
                    <CarouselNext className="max-lg:right-1 max-lg:opacity-60 max-lg:border max-lg:border-black" />
                  </Carousel>
                )}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <p className="text-sm">
                <span className="font-semibold">Duration:</span>{" "}
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            {experience.supervisor && (
              <div className="flex items-center">
                <UserIcon className="mr-2 h-4 w-4" />
                <p className="text-sm">
                  <span className="font-semibold">Supervisor:</span>{" "}
                  {experience.supervisor}
                </p>
              </div>
            )}
            {experience.group && (
              <div className="flex items-center">
                <UsersIcon className="mr-2 h-4 w-4" />
                <p className="text-sm">
                  <span className="font-semibold">Group:</span>{" "}
                  {experience.group}
                </p>
              </div>
            )}
            {(experience.thesisTitle || experience.projectTitle) && (
              <div className="flex items-start">
                <BookOpenIcon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
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
            {experience.competition && (
              <div className="flex items-center">
                <TrophyIcon className="mr-2 h-4 w-4 text-yellow-500" />
                <p className="text-sm">
                  <span className="font-semibold">Competition:</span>{" "}
                  {experience.competition}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 mt-2">
          <ul className="space-y-2 list-disc">
            {experience.description &&
              experience.description.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
