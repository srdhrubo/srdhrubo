"use client";

import { CVDownloadButton, ResumeDownloadButton } from "@/components/buttons";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import TypewriterEffect from "@/components/ui/typewriter-effect";
import { useScroll, useTransform } from "framer-motion";
import { Pointer } from "lucide-react";
import Link from "next/link";
import React from "react";

const words = [
  "Prospective Graduate Student",
  "Prospective Research Assistant",
  "Prospective Teaching Assistant",
  "Prospective MS/PhD Student",
];

export default function HeroSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const title = (
    <div className="w-full text-center">
      <p className="text-2xl md:text-3xl text-center mb-4 text-gray-700">
        Hello, Meet
      </p>
      <h1 className="metallic-text text-5xl md:text-7xl h-28 font-bold text-center drop-shadow-lg inline-block">
        Suchinto Roy Dhrubo
      </h1>
      <p className="text-3xl md:text-4xl text-gray-700 text-center mb-12">
        <TypewriterEffect
          words={words}
          typingSpeed={80}
          deletingSpeed={40}
          delayBetweenWords={1500}
        />
      </p>
      <style jsx>{`
        .metallic-text {
          background: linear-gradient(
            to right,
            #a1a1a1 0%,
            #ffffff 10%,
            #a1a1a1 20%,
            #a1a1a1 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
  const description = (
    <div className="space-x-6 w-full text-center">
      <CVDownloadButton />
      <ResumeDownloadButton />
    </div>
  );
  return (
    <div className="h-[150vh] mb-60" ref={ref}>
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        className="hidden md:block w-full"
        title={title}
        description={description}
      />
    </div>
  );
}
