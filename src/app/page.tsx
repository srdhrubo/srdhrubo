import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { DownloadIcon, Pointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import hero_image from "../../public/hero-image.png";
import { WavyBackground } from "@/components/ui/wavy-background";

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

export default function Home() {
  return (
    <div className="w-full">
      <WavyBackground className="h-[calc(100vh-4.5rem)] flex justify-between items-center">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 space-y-4">
          <div>
            Hello,
            <br />
            Meet Suchinto Roy Dhrubo
            <br />
            <FlipWords words={attributes} />
          </div>
          <div className="space-y-4">
            <div className="space-x-5">
              <Button>
                CV <DownloadIcon className="w-4 ml-2" />
              </Button>
              <Button>
                RESUME <DownloadIcon className="w-4 ml-2" />
              </Button>
            </div>
            <div>
              <Link href="/contact">
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
        <div>
          <Image src={hero_image} alt="image of shuchinto roy dhrubo" />
        </div>
      </WavyBackground>
    </div>
  );
}
