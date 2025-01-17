import connectDb from "@/utills/mongodb";
import { NextResponse } from "next/server";
import { Module } from "@/model/Module";
import { uploadImage } from "@/utills/uploadToCloudinary";
import mongoose from "mongoose";

export async function POST(request) {
  await connectDb();
  try {
    const { image, url, price, currency, id, title } = Object.fromEntries(
      await request.formData()
    );
    if (!image || !url || !price || !currency) {
      return NextResponse.json(
        {
          message: "please provide all fields",
        },
        { status: 400 }
      );
    }
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "This module doesn't exist" },
        { status: 404 }
      );
    }
    let imageData;

    imageData = await uploadImage(image, "module");

    // Prepare item data
    const itemData = {
      _id: new mongoose.Types.ObjectId(),
      image: {
        url: imageData.secure_url,
        id: imageData.public_id,
      },
      producturl: url,
      title,
      currency,
      price,
    };

    module.items.push(itemData);
    await module.save();
    return NextResponse.json(
      {
        message: "Added successfully",
        module,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Got error while adding product data in database", error);
    return NextResponse.json(
      {
        message: "something went wrong",
      },
      { status: 500 }
    );
  }
}
