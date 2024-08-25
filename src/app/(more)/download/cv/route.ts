import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(req: NextRequest) {
  const filePath = "downloadables/cv.pdf";

  const { size } = await fs.stat(filePath);
  const file = await fs.readFile(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Disposition":
        "attachment; filename=Curriculam Vitae-Suchinto Roy Dhrubo.pdf",
      "Content-Length": size.toString(),
    },
  });
}
