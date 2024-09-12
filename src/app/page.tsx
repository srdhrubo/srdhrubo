import Link from "next/link";
import { MovingBorderButton } from "@/components/ui/moving-border";
import HeroSection from "./hero_section";
import { paperInformation } from "@/lib/data";
import React from "react";
import PaperCard from "@/components/landing-page-paper-card";

export default function Home() {
  return (
    <div className="scroll-smooth space-y-8 mb-16">
      <HeroSection />
      <PaperSection />
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
