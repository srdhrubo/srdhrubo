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
import { CalendarIcon, UserIcon, UsersIcon, BookOpenIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResearchExperience } from "@/lib/type";
import { researchExperiences } from "@/lib/data";

export default function ResearchExperienceSection() {
  return (
    <div className="container mx-auto p-4" id="research_experience">
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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
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
          {experience.images && experience.images.length > 0 && (
            <div className="col-span-full mb-4">
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
                  <CarouselPrevious className="max-sm:left-1 max-sm:opacity-60 max-sm:border max-sm:border-black" />
                  <CarouselNext className="max-sm:right-1 max-sm:opacity-60 max-sm:border max-sm:border-black" />
                </Carousel>
              )}
            </div>
          )}
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
