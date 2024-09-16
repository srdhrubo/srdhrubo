import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AwardsAchievementsPage() {
  return (
    <section className="py-12 min-h-screen">
      <div className="p-global-padding">
        <h2 className="text-3xl font-bold text-center mb-8">
          Awards & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                International Planetary Aerial Systems Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Organized by Mars Society South Asia, May 2021</p>
              <Badge className="mt-2">Rank - 09/27</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Indian Rover Design Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Organized by Mars Society South Asia, July 2021</p>
              <Badge className="mt-2">Rank - 10/28</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>CAD (Mechanical Design), Ignition 2019</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Organized by the Department of Mechanical Engineering, KUET,
                March 2019
              </p>
              <Badge className="mt-2">Rank - 1st Runner Up</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>President's Scout Award</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Awarded by Bangladesh Scouts, May 2015</p>
              <Badge className="mt-2">Status - Awarded</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shapla Cub Award</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Awarded by Bangladesh Scouts, June 2009</p>
              <Badge className="mt-2">Status - Awarded</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
