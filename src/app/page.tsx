import Link from "next/link";
import { MovingBorderButton } from "@/components/ui/moving-border";
import HeroSection from "./hero_section";
import { paperInformation } from "@/lib/data";
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
        <div className="my-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24">
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
    <section className="p-global-padding space-y-10">
      <div>
        <Card className="space-y-10 lg:grid lg:grid-cols-4">
          <div className="lg:col-span-3 relative">
            <Link href="https://www.prothomalo.com/amp/story/lifestyle/%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B0%E0%A7%87-%E0%A6%B8%E0%A7%81%E0%A6%A8%E0%A6%B8%E0%A6%BE%E0%A6%A8-%E0%A6%AD%E0%A7%87%E0%A6%A4%E0%A6%B0%E0%A7%87-%E0%A6%B8%E0%A6%B0%E0%A6%AC-%E0%A6%95%E0%A7%81%E0%A7%9F%E0%A7%87%E0%A6%9F">
              <Image
                src="/prothom-alo-feature.jpg"
                alt="feature"
                fill
                className="w-full object-cover"
              />
            </Link>
            <div className="absolute top-4 right-6">
              <LinkIcon />
            </div>
          </div>
          <div>
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
            <CardFooter>
              <ButtonWithLink href="/projects">
                LEARN MORE ABOUT MY PROJECTS
              </ButtonWithLink>
            </CardFooter>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-fit mx-auto">
        <iframe
          src="https://www.youtube.com/embed/DxiYWCe7TLI?si=7n4Dnf4lIwZB-xKv"
          title="Durbar Video 01"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-md lg:w-[560px] lg:h-[315px]"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ML1VA-ceKm8?si=NfBBMRmDlK1_luSp"
          title="Durbar Video 02"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-md lg:w-[560px] lg:h-[315px]"
        ></iframe>
      </div>
    </section>
  );
};
