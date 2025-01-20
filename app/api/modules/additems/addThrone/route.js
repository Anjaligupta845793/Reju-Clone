import { uploadImage } from "@/utills/uploadToCloudinary";
import { NextResponse } from "next/server";
import { Module } from "@/model/Module";
import connectDb from "@/utills/mongodb";
import mongoose from "mongoose";

export async function POST(request) {
  await connectDb();

  try {
    // Get form data
    const { title, url, imageurl, id } = await request.json();
    console.log({ title, url, imageurl, id });
    if (!title || !url || !imageurl) {
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

    // Upload image

    // Prepare item data
    const itemData = {
      _id: new mongoose.Types.ObjectId(),
      image: {
        url: imageurl,
      },
      url: url,
      title: title,
      visible: true,
    };

    module.items.push(itemData);
    await module.save();

    return NextResponse.json(
      { message: "Uploaded successfully", module },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error: error.message },
      { status: 500 }
    );
  }
}
