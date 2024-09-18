import Link from "next/link";
import { MovingBorderButton } from "@/components/ui/moving-border";
import HeroSection from "./hero_section";
import { iframeVideos, paperInformation } from "@/lib/data";
import React from "react";
import PaperCard from "@/components/landing-page-paper-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkIcon } from "lucide-react";
import { ButtonWithLink } from "@/components/buttons";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="scroll-smooth space-y-8 mb-16">
      <HeroSection />
      <PaperSection />
      <ProjectSection />
    </div>
  );
}

const PaperSection = () => {
  const recentlyPublishedPapers = paperInformation.filter(
    (paper) => paper.publicationDate !== undefined
  );
  return (
    <section className="p-global-padding py-12">
      <div>
        <div className="w-full text-center">
          <h1 className="text-3xl font-semibold underline decoration-wavy underline-offset-8 decoration-yellow-300">
            My Latest Publications
          </h1>
        </div>
        <div className="my-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-fit mx-auto">
          {recentlyPublishedPapers.map((paper) => (
            <PaperCard key={paper.title} paper={paper} />
          ))}
        </div>
      </div>
      <div className="w-full text-center">
        <Link href="/publications">
          <MovingBorderButton className="dark:bg-white bg-slate-900 dark:text-black text-white border-neutral-200 dark:border-slate-800 px-6 font-semibold">
            KNOW ALL ABOUT MY PUBLICATIONS
          </MovingBorderButton>
        </Link>
      </div>
    </section>
  );
};

const ProjectSection = () => {
  return (
    <section className="p-global-padding space-y-16">
      <div>
        <Card className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-1 lg:col-span-3 max-lg:h-52 relative">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto">
                  <Image
                    src="/prothom-alo-feature.jpg"
                    alt="feature"
                    fill
                    className="w-full object-cover"
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-screen overflow-y-auto">
                <div className="relative">
                  <Image
                    src="/prothom-alo-feature.jpg"
                    alt="feature"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mx-auto">
                  <ButtonWithLink href="https://www.prothomalo.com/amp/story/lifestyle/%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B0%E0%A7%87-%E0%A6%B8%E0%A7%81%E0%A6%A8%E0%A6%B8%E0%A6%BE%E0%A6%A8-%E0%A6%AD%E0%A7%87%E0%A6%A4%E0%A6%B0%E0%A7%87-%E0%A6%B8%E0%A6%B0%E0%A6%AC-%E0%A6%95%E0%A7%81%E0%A7%9F%E0%A7%87%E0%A6%9F">
                    VIEW THE NEWS
                  </ButtonWithLink>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Our Project Featured in a National Daily</CardTitle>
              <CardDescription>Published: 20 Jun 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-4">KUET DURBAR</CardTitle>
              <p>
                A rover designed, fabricated and implemented by a bunch of
                undergraduate students of Khulna University of Engineering &
                Technology for the <b>Mars Rover Challenge</b>. Almost 30+
                students from various departments and majors are divided into 5
                sub teams to maintain the team for upcoming mars rover
                competition all around the world. I was involved as a mechanical
                team member at the initial stages and helped the team with
                design and fabricating parts of the rover body.
              </p>
            </CardContent>
            <CardFooter className="w-fit mx-auto">
              <ButtonWithLink href="/research_experience">
                MORE ABOUT MY PROJECTS
              </ButtonWithLink>
            </CardFooter>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-16 lg:flex-row lg:flex-wrap justify-center">
        {iframeVideos.map((link, idx) => (
          <IFrame
            key={idx}
            link={link}
            title={`Durbar Video 0${idx + 1}`}
            classname="rounded-md w-full lg:w-[45%] aspect-video flex-shrink-0"
          />
        ))}
      </div>
      <div>
        <Card className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
          <div className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                Our Team Participated in a TV Reality Show on National Media
              </CardTitle>
              <CardDescription>Published: 11 Apr 2019</CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-4">
                Esho Robot Banai - TV Reality Show
              </CardTitle>
              <p className="mb-2 text-justify">
                We created a group interested in group projects after competing
                in first competition, where we merged a number of groups who
                previously worked separately. As this group contained a large
                number of students we were able to find solution of any problem
                easier and faster than before. It was also easier to use
                components among ourselves and it was also financially
                beneficial to us. Moreover it was easier to assign different
                task to different individual whose interest were in different
                sector. I had great interest in designing so, I tried to involve
                myself on creating the design and also constructing as easily
                possible using less resources.
              </p>
              <p className="text-justify">
                Our hard work in this group were also aid off. We submitted few
                ideas to the reality show authority and three of which got
                selected among them. Where only five ideas among ours were
                selected in total from our region.
              </p>
            </CardContent>
            <CardFooter className="w-fit mx-auto">
              <ButtonWithLink href="/research_experience">
                MORE ABOUT MY PROJECTS
              </ButtonWithLink>
            </CardFooter>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <IFrame
              link="https://www.youtube.com/embed/hw8olFmFJTw?si=0MweM5iHCCtAqtbI"
              title="esho robot banai"
              classname="w-full h-full max-lg:aspect-video"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

const IFrame = ({
  link,
  title,
  classname,
}: {
  link: string;
  title: string;
  classname?: string;
}) => {
  return (
    <iframe
      src={link}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className={classname}
    ></iframe>
  );
};
