import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";
import { NextResponse } from "next/server";
export async function POST(request) {
  await connectDb();
  try {
    const { url, id } = await request.json();
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "This module doesn't exist" },
        { status: 404 }
      );
    }
    module.items.push({
      url: url,
    });
    await module.save();
    return NextResponse.json(
      {
        message: "Added successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("got the error while adding video data in database", error);
    return NextResponse.json(
      {
        message: "something went wrong",
      },
      { status: 500 }
    );
  }
}
