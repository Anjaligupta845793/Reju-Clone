import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(request) {
  await connectDb();
  try {
    const { url, id } = await request.json();
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "This module doesn't exist", module },
        { status: 404 }
      );
    }
    module.items.push({
      _id: new mongoose.Types.ObjectId(),
      url: url,
      visible: true,
    });
    await module.save();
    return NextResponse.json(
      {
        message: "Added successfully",
        module,
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
