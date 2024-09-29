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
import { academicInfo } from "@/lib/data";
import { AcamdemicInfo } from "@/lib/type";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpenTextIcon } from "lucide-react";

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
      <CardContent className="text-sm">
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
        {info.courseOutline && (
          <Button variant="link" className="p-0 h-auto my-2 underline" asChild>
            <Link href={`/api/view/${info.courseOutline}`} target="_blank">
              <BookOpenTextIcon className="h-4 w-4 mr-2" />
              Course Outline
            </Link>
          </Button>
        )}
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
