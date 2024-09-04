import { Button, ButtonWithLink } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { DownloadIcon, Pointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovingBorderButton } from "@/components/ui/moving-border";
import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";
import { CVDownloadButton, ResumeDownloadButton } from "@/components/buttons";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <WavyBackground className="p-global-padding h-[calc(100vh-4.5rem)] flex justify-between items-center">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 space-y-4">
          <div>
            Hello,
            <br />
            Meet Suchinto Roy Dhrubo
            <br />
            <FlipWords words={attributes} className="font-semibold" />
          </div>
          <div className="space-y-4">
            <div className="space-x-5">
              <CVDownloadButton />
              <ResumeDownloadButton />
            </div>
            <div>
              <Link href="/contacts">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="flex gap-2 items-center px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white text-base hover:bg-transparent">
                    GET IN TOUCH <Pointer className="w-5" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/hero-image.png"
            alt="image of shuchinto roy dhrubo"
            width={400}
            height={400}
          />
        </div>
      </WavyBackground>
      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <section className="p-global-padding py-12">
          <div>
            <div className="w-full text-center">
              <h1 className="text-3xl font-semibold underline decoration-wavy underline-offset-8 decoration-yellow-300">
                My Latest Publications
              </h1>
            </div>
            <div className="my-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
              {paperInformation.map((paper) => (
                <PaperCard
                  key={paper.title}
                  title={paper.title}
                  description={paper.abstract}
                  href={paper.url}
                  date={paper.publicationDate}
                  at={paper.publisher}
                />
              ))}
            </div>
          </div>
          <div className="w-full text-center">
            <MovingBorderButton className="dark:bg-white bg-slate-900 dark:text-black text-white border-neutral-200 dark:border-slate-800 px-6 font-semibold">
              KNOW ALL ABOUT MY RESEARCH EXPERIENCE
            </MovingBorderButton>
          </div>
        </section>
      </div>
    </div>
  );
}

const PaperCard = ({
  title,
  description,
  href,
  date,
  at,
}: {
  title: string;
  description: string;
  href: string;
  date: string | Date;
  at: string;
}) => {
  return (
    <Card className="max-w-96 min-w-72">
      <CardHeader>
        <CardTitle className="line-clamp-4">{title}</CardTitle>
        <span className="flex gap-1 italic text-xs text-gray-400">
          {dayjs(date).format("MMMM D, YYYY")} | {at}
        </span>
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
        <CardContent>
          <div className="w-full h-40 flex items-center justify-center border">
            Place holder Image
          </div>
        </CardContent>
        <CardFooter className="bottom-0">
          <div className="text-center w-full">
            <Button asChild>
              <Link href={href} target="_blank">
                View this Paper
              </Link>
            </Button>
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

const attributes = [
  "Engineer",
  "Innovator",
  "Researcher",
  "Leader",
  "Problem Solver",
  "Technologist",
  "Creator",
  "Designer",
  "Analyst",
  "Visionary",
];

const paperInformation = [
  {
    publicationDate: "2024-06-10",
    publisher: "SSRN",
    title:
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    abstract:
      "The aerodynamic properties of an aircraft's wing result in the generation of both lift and drag forces as it interacts with the surrounding air. In contemporary aviation, flaps are employed in conjunction with the wing structure. A flap is an aerodynamic component installed on an aircraft that serves as a high-lift device, effectively mitigating the stalling speed of the aircraft. Additionally, they can be employed to reduce the length of takeoff and landing distances. Typically, these components are situated around the aft portion of the aircraft's wing. This study examines the lift and drag coefficients of an airfoil with a flap at different angles of attack, considering two distinct positions of the airfoil and flap. A numerical investigation is conducted to analyze the flow characteristics over a two-element airfoil, and the resulting aerodynamic parameters are documented. The study involves a numerical analysis of a steady, two-dimensional, viscous flow. The turbulence model employed for the simulation is the realizable k-ω model. The sphere of influence method is utilized for the mesh generation procedure. The selected airfoil for this study is the NACA 4412, which is accompanied by an external-airfoil flap of the same NACA 4412 configuration. The analysis examines various flap angles under different conditions and afterward conducts an optimization of the flap position. The findings demonstrate the impact of both flap position and flap deployment angle on the lift and drag coefficients and the stall point. The findings indicate disparities in the magnitudes of lift and drag characteristics, yet their fundamental nature remains comparable. The findings also demonstrate that implementing flaps alters the magnitudes of lift and drag, enabling the exploration of diverse flying conditions and specifications while considering practical considerations.",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4859496",
  },
  {
    publicationDate: "2022-02-26",
    conference:
      "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    title:
      "A Wearable Hearing Protection Device for Vehicle Drivers to Mitigate the Impact of Sound Pollution for Noisy Places in Bangladesh",
    publisher: "IEEE",
    abstract:
      "Sound pollution is being a silent killer for the human universe, especially for the on-road vehicle drivers who spend a majority of their time in traffic buzz and under the continuous influence of loud horns. It has been proved that over 85 decibels (dB) sound level is detrimental to human health and can cause a variety of complications including cardiovascular diseases. Consequently, this effect reduces the life expectancy of vehicle drivers. Therefore, this research aims to propose a wearable hearing protection device for on-road vehicle drivers to mitigate the effect of sound pollution. The proposed device will reduce the noise from the sound wave and keep the amplitude of the sound wave at a safe level of hearing without losing any important information while entering the outer ears of the driver. The sound level data have been collected from five (05) different areas of Bangladesh namely Rangpur, Dhaka, Khulna, Sylhet, and Bagerhat for this research work.",
    url: "https://ieeexplore.ieee.org/abstract/document/9775878",
  },
  {
    publicationDate: "2023-12-07",
    conference:
      "2023 6th International Conference on Electrical Information and Communication Technology (EICT)",
    title:
      "Transforming UAV Design: Coandă-Based Lift Generation for Enhanced Aerial Performance",
    publisher: "IEEE",
    abstract:
      "Unmanned Aerial Vehicles (UAVs) have grown in popularity in a variety of fields in recent years, and they serve a variety of functions. Such technologies have the capability of entering risky or inaccessible locations and acquiring crucial data without putting humans in danger. A UAV must overcome numerous obstacles to complete a task. As a result, unique platforms have been developed that deviate from traditional aircraft design to improve their capabilities. The majority of UAVs are built to use one of the two propulsion methods below. Some of them feature a design of a fixed wing similar to that of a typical airplane. To take off and land, they need a runway and they do not possess any hovering capabilities. Others use rotors in the same way that helicopters do, resulting in a better-hovering capability. This is significant because the ability to do vertical takeoff and landing (VTOL) is critical for UAVs. Nonetheless, their range is severely limited, as the vehicles are reliant on the amount of gasoline or the onboard energy accumulators. The introduction of a novel design is what we can consider which provides lift and maneuverable force more efficiently. A UAV that exploits the Coandă Effect to help propulsion is a good example of this sort of aircraft. The Coandă Effect refers to a fluid jet's tendency to remain attached to a curved surface. Romanian inventor Henri Coandă was the first person to notice the practical applicability of the phenomena in aircraft design. Although few works have been previously performed on the aspects of the Coandă Effect being used in a UAV, this paper seeks to contribute to experimenting with a certain prototype, focusing on stability and attitude control of the UAV. The prototype of the Coandă UAV resulted in performing balanced hovering in mid-flight with acceptable fluctuations in roll and pitching moments as it was controlled by a Pixhawk flight controller which was configured by custom ArduPilot firmware.",
    url: "https://ieeexplore.ieee.org/abstract/document/10427637",
  },
];
