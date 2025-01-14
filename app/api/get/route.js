import { NextResponse } from "next/server";
import fs, { readFileSync } from "fs";
import path from "path";
import connectDb from "@/utills/mongodb";
import User from "@/model/User";

export async function GET(request) {
  try {
    try {
      await connectDb();
    } catch (error) {
      console.log(error);
    }

    const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
    const data = readFileSync(filePath, "utf-8");
    const result = JSON.parse(data);
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
    });
  }
}
