"use client";

import { Paper } from "@/lib/type";
import dayjs from "dayjs";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React from "react";
import Image from "next/image";

const PaperCard = ({ paper }: { paper: Paper }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const { title, publicationDate, venue, doi, link, images } = paper;
  return (
    <Card className="max-w-96 min-w-72 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="">{title}</CardTitle>
        <span className="flex gap-1 italic text-xs text-gray-400">
          {dayjs(publicationDate).format("MMMM D, YYYY")} | {venue}
        </span>
      </CardHeader>
      <div className="flex flex-col gap-8 justify-between">
        <div className="w-full aspect-video flex items-center justify-center">
          {images && (
            <Carousel
              className="w-full"
              opts={{ loop: true, align: "center" }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="aspect-video">
                {images.map((image) => (
                  <CarouselItem key={image} className="relative">
                    <Image
                      src={image}
                      alt={image}
                      fill
                      className="object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="right-4 opacity-60 border border-black" />
              <CarouselPrevious className="left-4 opacity-60 border border-black" />
            </Carousel>
          )}
        </div>
        <CardFooter className="">
          <div className="text-center w-full">
            {doi ? (
              <Button variant="link" asChild>
                <a
                  href={`https://doi.org/${doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            ) : link ? (
              <Button variant="link" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  View Paper <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PaperCard;
