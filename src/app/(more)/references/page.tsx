import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Reference } from "@/lib/type";
import { references } from "@/lib/data";

const ReferenceCardWithImage: React.FC<{ reference: Reference }> = ({
  reference,
}) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex items-start space-x-4 p-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={reference.image} alt={reference.name} />
          <AvatarFallback>
            {reference.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{reference.name}</h3>
          <p className="text-sm text-muted-foreground">{reference.title}</p>
          <p className="text-sm text-muted-foreground">
            {reference.department}
          </p>
          <p className="text-sm text-muted-foreground">
            {reference.institution}
          </p>
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm">
              <MailIcon className="mr-2 h-4 w-4" />
              <a
                href={`mailto:${reference.email}`}
                className="text-primary hover:underline"
              >
                {reference.email}
              </a>
            </div>
            <div className="flex items-center text-sm">
              <PhoneIcon className="mr-2 h-4 w-4" />
              <a
                href={`tel:${reference.phone}`}
                className="text-primary hover:underline"
              >
                {reference.phone}
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ReferenceCardWithoutImage: React.FC<{ reference: Reference }> = ({
  reference,
}) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{reference.name}</h3>
        <p className="text-sm text-muted-foreground">{reference.title}</p>
        <p className="text-sm text-muted-foreground">{reference.department}</p>
        <p className="text-sm text-muted-foreground">{reference.institution}</p>
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-sm">
            <MailIcon className="mr-2 h-4 w-4" />
            <a
              href={`mailto:${reference.email}`}
              className="text-primary hover:underline"
            >
              {reference.email}
            </a>
          </div>
          <div className="flex items-center text-sm">
            <PhoneIcon className="mr-2 h-4 w-4" />
            <a
              href={`tel:${reference.phone}`}
              className="text-primary hover:underline"
            >
              {reference.phone}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const References: React.FC<{ references: Reference[] }> = ({ references }) => {
  return (
    <section className="py-12 bg-background" id="references">
      <div className="p-global-padding mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference, index) =>
            reference.image ? (
              <ReferenceCardWithImage key={index} reference={reference} />
            ) : (
              <ReferenceCardWithoutImage key={index} reference={reference} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default function ReferencesSection() {
  return <References references={references} />;
}
