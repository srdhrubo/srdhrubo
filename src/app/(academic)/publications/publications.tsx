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
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
            className="space-y-8 lg:px-20 mb-20 mt-40 max-sm:mt-16"
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

        {paper.images && (
          <div className="relative overflow-hidden mt-8 mb-4">
            <div
              className={`grid ${
                paper.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
              } gap-2`}
            >
              {paper.images.slice(0, 4).map((img, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="p-0 h-auto">
                      <Image
                        src={img}
                        alt={`${paper.title} design ${index + 1}`}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover rounded-md cursor-pointer"
                      />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] lg:max-w-4xl max-h-[95vh] overflow-y-auto">
                    <div className="relative">
                      <Image
                        src={img}
                        alt={`${paper.title} design ${index + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            {paper.images.length > 2 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-12 flex items-end justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="mb-2">
                      View All ({paper.images.length} images)
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] lg:max-w-4xl max-h-[95vh] overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {paper.images.map((img, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <Button variant="ghost" className="p-0 h-auto">
                              <Image
                                src={img}
                                alt={`${paper.title} design ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover rounded-md cursor-pointer"
                              />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-[95vw] lg:max-w-4xl max-h-[95vh] overflow-y-auto">
                            <div className="relative">
                              <Image
                                src={img}
                                alt={`${paper.title} design ${index + 1}`}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        )}
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
