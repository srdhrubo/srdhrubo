import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename;
  const filePath = path.join(process.cwd(), "downloadables", filename);
  const ext = filename.split(".").pop();
  const formattedFilename =
    filename.split(".")[0].toUpperCase() + "-Suchinto Roy Dhrubo." + ext;
  // Basic security check
  if (!filePath.startsWith(path.join(process.cwd(), "downloadables"))) {
    return new NextResponse(JSON.stringify({ error: "Access denied" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const fileBuffer = await fs.promises.readFile(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${formattedFilename}`,
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "File not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
