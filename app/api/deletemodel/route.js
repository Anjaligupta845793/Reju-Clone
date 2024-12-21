import path from "path";
import fs, { readFileSync, writeFileSync } from "fs";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    console.log(id);
    const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
    const ModelData = readFileSync(filePath, "utf-8");
    const Data = JSON.parse(ModelData);
    const updatedData = Data.filter((item) => item.id !== id);
    writeFileSync(filePath, JSON.stringify(updatedData, 2, null));
    console.log("file is deleted");
    return NextResponse.json({
      success: true,
      data: updatedData,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
    });
  }
}
