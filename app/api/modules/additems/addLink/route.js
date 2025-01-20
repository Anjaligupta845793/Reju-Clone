import { uploadImage } from "@/utills/uploadToCloudinary";
import { NextResponse } from "next/server";
import { Module } from "@/model/Module";
import connectDb from "@/utills/mongodb";
import mongoose from "mongoose";

export async function POST(request) {
  await connectDb();

  try {
    // Get form data
    const formdata = await request.formData();
    const image = formdata.get("image");
    const title = formdata.get("title");
    const url = formdata.get("url");
    const id = formdata.get("id");

    // Check if module exists
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "This module doesn't exist" },
        { status: 404 }
      );
    }

    // Upload image
    let imageData;
    try {
      imageData = await uploadImage(image, "module");
    } catch (uploadError) {
      return NextResponse.json(
        { message: "File upload failed", module },
        { status: 500 }
      );
    }

    // Prepare item data
    const itemData = {
      _id: new mongoose.Types.ObjectId(),
      image: {
        url: imageData.secure_url,
        id: imageData.public_id,
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
