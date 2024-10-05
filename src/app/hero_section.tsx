"use client";

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
      <p className="text-xl lg:text-3xl text-center mb-4 text-gray-700">
        Hello, Meet
      </p>
      <h1 className="metallic-text text-5xl lg:text-7xl h-28 md:h-20 lg:h-28 font-bold text-center drop-shadow-lg inline-block">
        Suchinto Roy Dhrubo
      </h1>
      <p className="text-2xl lg:text-4xl text-gray-700 text-center mb-12 max-sm:h-16">
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

  const fomo = (
    <button className="p-[3.5px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="flex gap-px flex-col md:flex-row">
        <Link href="/api/view/cv.pdf" target="_blank" rel="noopener noreferrer">
          <div className="p-3 px-6 bg-black rounded-[6px] rounded-b-none md:rounded-r-none relative group transition duration-200 text-white text-base hover:bg-transparent">
            VIEW CV
          </div>
        </Link>
        <Link href="/contacts">
          <div className="flex gap-2 items-center p-3 px-4 bg-black rounded-[6px] rounded-t-none md:rounded-l-none relative group transition duration-200 text-white text-base hover:bg-transparent">
            GET IN TOUCH <Pointer className="w-5" />
          </div>
        </Link>
      </div>
    </button>
  );

  return (
    <div>
      <div className="hidden lg:block h-[150vh] mb-60" ref={ref}>
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          className="w-full"
          title={title}
          highlight={fomo}
        />
      </div>
      <div className="lg:hidden h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
        <div className="mb-10">{title}</div>
        <div className="w-full text-center">{fomo}</div>
      </div>
    </div>
  );
}
