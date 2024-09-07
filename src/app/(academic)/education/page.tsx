"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { useState } from "react";
import dayjs from "dayjs";

export default function EducationPage() {
  return (
    <div className="p-global-padding">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Education Background</h1>
        <p className="text-gray-600 mt-2">
          Explore my academic journey, and some flashbacks of my student life.
        </p>
      </header>

      {/* Educational History */}
      <TracingBeam className="mb-20">
        <section className="lg:max-w-2xl xl:max-w-4xl mx-auto antialiased pt-4 relative">
          <div className="space-y-6">
            {academicInfo
              .sort((a, b) => {
                const dateA = new Date(a.completed).getTime();
                const dateB = new Date(b.completed).getTime();
                return dateB - dateA;
              })
              .map((info) => (
                <InstitutionCard key={info.institution} info={info} />
              ))}
          </div>
        </section>
      </TracingBeam>
    </div>
  );
}

const InstitutionCard = ({ info }: { info: AcamdemicInfo }) => {
  const [more, setMore] = useState(false);
  const reminisceLength = info.reminisce.length;
  const minLength = 370;
  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="relative w-full h-auto aspect-video">
        <Image
          src={info.cover}
          alt={info.institution}
          fill
          className="object-cover"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-white from-5% to-50%">
          <CardHeader className="absolute bottom-0 flex flex-row items-center gap-4">
            <div className="w-20 h-20 border flex items-center justify-center backdrop-blur bg-white/30 rounded-full shadow-lg">
              <Image
                src={info.logo}
                alt={info.logo + " Logo"}
                width={50}
                height={50}
              />
            </div>
            <div className="space-y-2">
              <CardTitle>{info.institution}</CardTitle>
              <CardDescription>
                {info.location.city}-{info.location.postalCode},{" "}
                {info.location.country}
              </CardDescription>
            </div>
          </CardHeader>
        </div>
      </div>
      <CardContent className=" text-sm">
        {info.degree &&
          info.degree.map((degree) => (
            <p className="font-semibold" key={degree.obtainedDegree}>
              {degree.obtainedDegree} | {degree.gradeName}:{" "}
              {degree.gradeObtained.toFixed(2)} (out of{" "}
              {degree.maxGrade.toFixed(2)}) <br />
              {degree.position &&
                degree.totalPupil &&
                `Postion: ${degree.position}/${degree.totalPupil}`}
              {degree.marksPercentage &&
                ` | Marks: ${degree.marksPercentage.toFixed(2)}%`}
            </p>
          ))}
        <p>
          {dayjs(info.started).format("MMMM YYYY")} -{" "}
          {dayjs(info.completed).format("MMMM YYYY")}
        </p>
      </CardContent>
      <CardFooter className="text-sm font-light text-justify">
        <div className="break-words">
          {reminisceLength < minLength
            ? info.reminisce
            : more
            ? info.reminisce
            : info.reminisce.slice(0, minLength) + "..."}{" "}
          {reminisceLength > minLength && (
            <button
              onClick={() => setMore(!more)}
              type="button"
              className="text-blue-400"
            >
              {more ? "show less" : "read more"}
            </button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

type AcamdemicInfo = {
  institution: string;
  location: {
    city: string;
    postalCode: string;
    country: string;
  };
  started: string;
  completed: string;
  degree?: {
    obtainedDegree: string;
    gradeObtained: number;
    maxGrade: number;
    gradeName: string;
    position?: number;
    totalPupil?: number;
    marksPercentage?: number;
  }[];
  reminisce: string;
  cover: string;
  logo: string;
};

const academicInfo: AcamdemicInfo[] = [
  {
    institution: "Khulna University of Engineering & Technology (KUET)",
    location: {
      city: "Khulna",
      postalCode: "9203",
      country: "Bangladesh",
    },
    started: "2018-01-25",
    completed: "2023-04-05",
    degree: [
      {
        obtainedDegree: "Bachelor of Science in Mechanical Engineering",
        gradeObtained: 3.36,
        maxGrade: 4,
        gradeName: "CGPA",
        position: 41,
        totalPupil: 140,
        marksPercentage: 71.2,
      },
    ],
    reminisce: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia consectetur numquam! Dolor quisquam dolorum totam, accusantium animi voluptates illo reprehenderit impedit aspernatur veritatis soluta tempora labore. Dicta, porro pariatur.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero eos illo est sunt dicta? Rerum tempora, repellendus deleniti, omnis molestias doloribus quae ipsa labore non totam recusandae, exercitationem ipsum!`,
    cover: "/kuet.jpg",
    logo: "/kuet_logo.png",
  },
  {
    institution: "Saint Joseph Higher Secondary School",
    location: {
      city: "Dhaka",
      postalCode: "1207",
      country: "Bangladesh",
    },
    started: "2015-07-01",
    completed: "2017-06-30",
    degree: [
      {
        obtainedDegree: "Higher Secondary Certificate (HSC)",
        gradeObtained: 5,
        maxGrade: 5,
        gradeName: "GPA",
      },
    ],
    reminisce: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia consectetur numquam! Dolor quisquam dolorum totam, accusantium animi voluptates illo reprehenderit impedit aspernatur veritatis soluta tempora labore. Dicta, porro pariatur.
Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    cover: "/St._Joseph_Higher_Secondary_School.jpg",
    logo: "/St._Joseph_Higher_Secondary_School_logo.png",
  },
  {
    institution: "Hasan Ali Government High School",
    location: {
      city: "Chandpur",
      postalCode: "3600",
      country: "Bangladesh",
    },
    started: "2003-01-01",
    completed: "2015-06-30",
    degree: [
      {
        obtainedDegree: "Secondary School Certificate (SSC)",
        gradeObtained: 5,
        maxGrade: 5,
        gradeName: "GPA",
      },
    ],
    reminisce: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia consectetur numquam! Dolor quisquam dolorum totam, accusantium animi voluptates illo reprehenderit impedit aspernatur veritatis soluta tempora labore. Dicta, porro pariatur.
Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    cover: "/hasan_ali_govt.jpeg",
    logo: "/hasan_ali_govt_logo.png",
  },
];
