import { NextResponse } from "next/server";
import fs, { readFileSync, writeFileSync } from "fs";
import path from "path";

export async function POST(request) {
  const bodyModelData = await request.json();
  /* getting the model data */
  const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
  const modelData = readFileSync(filePath, "utf-8");
  const Data = JSON.parse(modelData);
  console.log(Data);

  /* inserting in model database */
  const newModel = {
    id: Data.length + 1,
    ...bodyModelData,
  };
  Data.push(newModel);

  writeFileSync(filePath, JSON.stringify(Data, null, 2));

  /* Sending response */
  return NextResponse.json({
    success: true,
    data: Data,
  });
}
