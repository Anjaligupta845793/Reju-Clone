import { NextResponse } from "next/server";
import fs, { readFileSync } from "fs";
import path from "path";

export async function GET(request) {
  const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
  const data = readFileSync(filePath, "utf-8");
  const result = JSON.parse(data);

  return NextResponse.json({
    success: true,
    data: result,
  });
}
