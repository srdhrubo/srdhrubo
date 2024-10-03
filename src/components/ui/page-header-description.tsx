import { cn } from "@/lib/utils";
import React from "react";

export function PageTitle({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <h1 className={cn("text-4xl font-bold text-center mb-8", classname)}>
      {children}
    </h1>
  );
}

export function PageDescription({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <p
      className={cn(
        "text-xl text-center text-muted-foreground mb-12 md:max-w-2xl mx-auto",
        classname
      )}
    >
      {children}
    </p>
  );
}
