import connectDb from "@/utills/mongodb";
import { NextResponse } from "next/server";
import { Module } from "@/model/Module";
import mongoose from "mongoose";

export async function POST(request) {
  await connectDb();
  try {
    const { date, vanue, location, link, id } = Object.fromEntries(
      await request.formData()
    );
    if (!date || !vanue || !location || !link || !id) {
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

    // Prepare item data
    const itemData = {
      _id: new mongoose.Types.ObjectId(),
      date,
      vanue,
      location,
      link,
      visible: true,
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
