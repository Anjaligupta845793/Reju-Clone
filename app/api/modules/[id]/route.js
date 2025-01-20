import { NextResponse } from "next/server";
import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_apikey,
  api_secret: process.env.cloud_apisecret,
  secure: true,
  timeout: 600000,
});

// Add params parameter to receive the id
export async function DELETE(request, { params }) {
  try {
    await connectDb();
    const { id } = await params; // Extract ID from params

    console.log("id", id);

    if (!id) {
      return NextResponse.json(
        { message: "Module ID is required" },
        { status: 400 }
      );
    }
    const module = await Module.findById(id);

    const deletePromises = module.items
      .map((item) => item.image?.id)
      .filter((id) => id) // Remove undefined values
      .map((id) => cloudinary.v2.uploader.destroy(id));

    await Promise.all(deletePromises);

    const deletedModule = await Module.findByIdAndDelete(id);

    if (!deletedModule) {
      return NextResponse.json(
        { message: "Module not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Module deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting module:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDb();
    const { id } = await params; // Extract module ID
    console.log(id);
    const { visible } = await request.json(); // Extract new visibility value

    if (typeof visible !== "boolean") {
      return NextResponse.json(
        { message: "Invalid visibility value" },
        { status: 400 }
      );
    }

    // Update module's visibility
    const updatedModule = await Module.findByIdAndUpdate(
      id,
      { visible },
      { new: true }
    );

    if (!updatedModule) {
      return NextResponse.json(
        { message: "Module not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Visibility updated successfully", module: updatedModule },
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
