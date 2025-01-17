import { Module } from "@/model/Module";
import getUserData from "@/utills/getUserData";
import connectDb from "@/utills/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDb();
  try {
    const id = await getUserData(request);
    const modules = await Module.find({ owner: id }).sort({ createdAt: -1 });
    if (!modules) {
      return NextResponse.json(
        {
          message: "no modules yet",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "success",
        modules,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error while fetching modules in", error);
    return NextResponse.json({
      message: "something went wrong",
    });
  }
}
