import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/ui/timeline";
import dayjs from "dayjs";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./page";

export default function PublicationSection() {
  const timelineData = timelineDataOrganizer();
  const inProgressData = paperInformation.filter(
    (paper) => paper.status !== "Published"
  );
  return (
    <section id="publications">
      <SectionHeader>Publications</SectionHeader>
      <div>
        <Tabs defaultValue="published">
          <div className="w-full text-center">
            <TabsList>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="in progress">In Progress</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="published">
            <Timeline data={timelineData} />
          </TabsContent>
          <TabsContent
            value="in progress"
            className="space-y-8 lg:px-20 mb-20 mt-40"
          >
            {inProgressData.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

const PaperCard = ({ paper }: { paper: Paper }) => {
  const nameFormatter = (name: string) => {
    const nameArray = name.split(" ");
    const lastName = nameArray.pop();
    const initials = nameArray.reduce(
      (acc, fn) => acc + fn[0].toUpperCase() + ".",
      ""
    );
    const formattedName = initials + " " + lastName;

    if (lastName === "Dhrubo")
      return <strong className="text-black">{formattedName}</strong>;

    return formattedName;
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{paper.title}</CardTitle>
        <CardDescription>
          {paper.authors.map((name, index) => (
            <span key={index}>
              {nameFormatter(name)}
              {index < paper.authors.length - 1 && ", "}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {paper.publicationDate && (
          <p className="text-sm text-muted-foreground mb-2">
            {paper.venue} -{" "}
            {dayjs(paper.publicationDate).format("D MMMM, YYYY")}
          </p>
        )}
        <div className="flex justify-between items-center">
          <Badge variant="secondary">{paper.type}</Badge>
          {paper.doi ? (
            <Button variant="link" asChild>
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          ) : paper.link ? (
            <Button variant="link" asChild>
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                View Paper <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Badge>{paper.status}</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const timelineDataOrganizer = () => {
  const dataForTimeline = paperInformation
    .filter((p) => p.status === "Published")
    .reduce((accumulator: { [key: string]: Paper[] }, currentPaper) => {
      const currentPaperPublishedYear = dayjs(currentPaper.publicationDate)
        .year()
        .toString();
      if (!(currentPaperPublishedYear in accumulator)) {
        accumulator = { [currentPaperPublishedYear]: [], ...accumulator };
      }
      accumulator[currentPaperPublishedYear] =
        accumulator[currentPaperPublishedYear].concat(currentPaper);
      return accumulator;
    }, {});
  const timelineData: { title: string; content: React.ReactNode }[] = [];
  Object.keys(dataForTimeline)
    .sort((a, b) => Number(b) - Number(a))
    .forEach((key) => {
      timelineData.push({
        title: key,
        content: (
          <div className="space-y-8">
            {dataForTimeline[key].map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        ),
      });
    });

  return timelineData;
};

type PaperType =
  | "Journal Article"
  | "Conference Paper"
  | "Conference Proceedings";
type PublicationStatus =
  | "Published"
  | "Under Review"
  | "Accepted"
  | "In Preparation";

interface Paper {
  id: number;
  title: string;
  authors: string[];
  type: PaperType;
  publicationDate?: string;
  status: PublicationStatus;
  venue?: string;
  doi?: string;
  link?: string;
}

const paperInformation: Paper[] = [
  {
    id: 1,
    publicationDate: "2024-06-10",
    venue: "SSRN",
    title:
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4859496",
    authors: [
      "Md Iqbal Hossain Shuvo",
      "Nazmus Sadat Mooaz",
      "Suchinto Roy Dhrubo",
      "Md Ashraful Islam",
    ],
    type: "Conference Proceedings",
    status: "Published",
  },
  {
    publicationDate: "2022-02-26",
    venue:
      "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    title:
      "A Wearable Hearing Protection Device for Vehicle Drivers to Mitigate the Impact of Sound Pollution for Noisy Places in Bangladesh",
    link: "https://ieeexplore.ieee.org/abstract/document/9775878",
    id: 2,
    authors: [
      "Joy James Costa",
      "SM Toha Al Kadir",
      "Suchinto Roy Dhrubo",
      "Md Ferdous Wahid",
      "Zubair Ahmed Ratan",
      "Dipta Roy",
    ],
    type: "Conference Proceedings",
    status: "Published",
  },
  {
    id: 3,
    publicationDate: "2023-12-07",
    venue:
      "2023 6th International Conference on Electrical Information and Communication Technology (EICT)",
    title:
      "Transforming UAV Design: Coandă-Based Lift Generation for Enhanced Aerial Performance",
    link: "https://ieeexplore.ieee.org/abstract/document/10427637",
    authors: [
      "Nazmus Sadat Mooaz",
      "Md Miraj Arefin",
      "Suchinto Roy Dhrubo",
      "Ashfaq Ahmed",
    ],
    type: "Conference Proceedings",
    status: "Published",
  },
  {
    id: 4,
    title:
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    authors: [
      "Md Iqbal Hossain Shuvo",
      "Nazmus Sadat Mooaz",
      "Suchinto Roy Dhrubo",
      "Md Ashraful Islam",
    ],
    type: "Journal Article",
    status: "Under Review",
  },
  {
    id: 5,
    title:
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    authors: [
      "Md Iqbal Hossain Shuvo",
      "Nazmus Sadat Mooaz",
      "Suchinto Roy Dhrubo",
      "Md Ashraful Islam",
    ],
    type: "Journal Article",
    status: "In Preparation",
  },
];
