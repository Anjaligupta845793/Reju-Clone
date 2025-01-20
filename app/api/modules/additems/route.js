import { Module } from "@/model/Module";
import connectDb from "@/utills/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDb();
    const { id, url } = await request.json();

    if (!id || !url) {
      return NextResponse.json(
        {
          message: "please provide all fields",
        },
        { status: 400 }
      );
    }

    // Check if module exists
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "This module doesn't exist", module },
        { status: 404 }
      );
    }
    const itemData = {
      _id: new mongoose.Types.ObjectId(),

      url: url,
    };

    module.items.push(itemData);
    await module.save();
  } catch (error) {
    console.log("got the error while adding items in module", error);
    NextResponse.json(
      {
        message: "something went wrong",
      },
      { status: 500 }
    );
  }
}
