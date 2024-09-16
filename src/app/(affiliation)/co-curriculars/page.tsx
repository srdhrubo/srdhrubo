import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoCurricularsPage() {
  return (
    <section className="py-12 min-h-screen">
      <div className="p-global-padding">
        <h2 className="text-3xl font-bold text-center mb-8">
          Leadership Experience
        </h2>
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
    </section>
  );
}
