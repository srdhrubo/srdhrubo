"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/ui/timeline";
import dayjs from "dayjs";
import { ExternalLink } from "lucide-react";
import { paperInformation } from "@/lib/data";
import { Paper } from "@/lib/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function PublicationSection() {
  const timelineData = timelineDataOrganizer();
  const inProgressData = paperInformation.filter(
    (paper) => paper.status !== "Published"
  );
  return (
    <section id="publications">
      <div>
        <Tabs defaultValue="published">
          <div className="w-full text-center">
            <TabsList>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="in progress">In Progress</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="published">
            <Timeline data={timelineData} />
          </TabsContent>
          <TabsContent
            value="in progress"
            className="space-y-8 lg:px-20 mb-20 mt-40"
          >
            {inProgressData.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

const PaperCard = ({ paper }: { paper: Paper }) => {
  const nameFormatter = (name: string) => {
    const nameArray = name.split(" ");
    const lastName = nameArray.pop();
    const initials = nameArray.reduce(
      (acc, fn) => acc + fn[0].toUpperCase() + ".",
      ""
    );
    const formattedName = initials + " " + lastName;

    if (lastName === "Dhrubo")
      return <strong className="text-black">{formattedName}</strong>;

    return formattedName;
  };

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{paper.title}</CardTitle>
        <CardDescription>
          {paper.authors.map((name, index) => (
            <span key={index}>
              {nameFormatter(name)}
              {index < paper.authors.length - 1 && ", "}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {paper.publicationDate && (
          <p className="text-sm text-muted-foreground mb-2">
            {paper.venue} -{" "}
            {dayjs(paper.publicationDate).format("D MMMM, YYYY")}
          </p>
        )}
        <div className="flex justify-between items-center">
          <Badge variant="secondary">{paper.type}</Badge>
          {paper.doi ? (
            <Button variant="link" asChild>
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          ) : paper.link ? (
            <Button variant="link" asChild>
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                View Paper <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Badge>{paper.status}</Badge>
          )}
        </div>
        <div className="mt-8 mb-4">
          {paper.images && paper.images.length > 0 && (
            <div>
              {paper.images.length === 1 ? (
                <Image
                  src={paper.images[0]}
                  alt={`Image for ${paper.title}`}
                  fill
                  className="w-full h-auto rounded-lg object-contain"
                />
              ) : (
                <Carousel
                  className="w-full aspect-video max-w-2xl mx-auto"
                  opts={{ loop: true, align: "center" }}
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {paper.images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="relative aspect-video"
                      >
                        <Image
                          src={image}
                          alt={`Image ${index + 1} for ${paper.title}`}
                          fill
                          className="w-full h-auto rounded-lg object-contain pr-4"
                          unoptimized={image.split(".").pop() === "gif"}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-1 opacity-60 border border-black" />
                  <CarouselNext className="right-5 opacity-60 border border-black" />
                </Carousel>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const timelineDataOrganizer = () => {
  const dataForTimeline = paperInformation
    .filter((p) => p.status === "Published")
    .reduce((accumulator: { [key: string]: Paper[] }, currentPaper) => {
      const currentPaperPublishedYear = dayjs(currentPaper.publicationDate)
        .year()
        .toString();
      if (!(currentPaperPublishedYear in accumulator)) {
        accumulator = { [currentPaperPublishedYear]: [], ...accumulator };
      }
      accumulator[currentPaperPublishedYear] =
        accumulator[currentPaperPublishedYear].concat(currentPaper);
      return accumulator;
    }, {});
  const timelineData: { title: string; content: React.ReactNode }[] = [];
  Object.keys(dataForTimeline)
    .sort((a, b) => Number(b) - Number(a))
    .forEach((key) => {
      timelineData.push({
        title: key,
        content: (
          <div className="space-y-8">
            {dataForTimeline[key].map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        ),
      });
    });

  return timelineData;
};
