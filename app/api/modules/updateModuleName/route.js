import { NextResponse } from "next/server";
import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";

export async function PATCH(request, { params }) {
  try {
    await connectDb();

    const { text, id } = await request.json(); // Extract new visibility value

    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "This module doesn't exist" },
        { status: 404 }
      );
    }
    module.name = text;
    await module.save();

    return NextResponse.json(
      { message: "Visibility updated successfully", module },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating visibility:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
