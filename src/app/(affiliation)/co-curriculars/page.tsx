import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PageDescription,
  PageTitle,
} from "@/components/ui/page-header-description";

export default function CoCurricularsPage() {
  return (
    <div className="min-h-screen">
      <div className="p-global-padding py-12">
        <header>
          <PageTitle>Leadership Experience</PageTitle>
          <PageDescription>
            Highlights of key leadership roles that demonstrate my ability to
            guide teams, manage projects, and contribute to organizational
            growth.
          </PageDescription>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>KUET Mars Rover (Team Durbar)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Designation - Project Team Lead</p>
              <p>50+ Team Members, June 2021 - March 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mechanical Engineering Association, KUET</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Designation - Vice President</p>
              <p>500+ Members, March 2022 - February 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>CADers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Designation - IT Officer</p>
              <p>
                Computer Aided Designing Club of KUET, February 2019 - January
                2023
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bangladesh Scout</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Designation - President's Scout</p>
              <p>Volunteering Movement</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
