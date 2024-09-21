import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import { notFound } from "next/navigation";

export async function GET(
  req: NextRequest,
  { params }: { params: { degree_name: string } }
) {
  const filePath = `downloadables/course_outline/${params.degree_name}.pdf`;

  try {
    const { size } = await fs.stat(filePath);
    const file = await fs.readFile(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Disposition": `attachment; filename=Course Outline-${params.degree_name.toUpperCase()}.pdf`,
        "Content-Length": size.toString(),
      },
    });
  } catch (error) {
    return notFound();
  }
}
