import { NextResponse } from "next/server";
import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_apikey,
  api_secret: process.env.cloud_apisecret,
  secure: true,
  timeout: 600000,
});

export async function DELETE(request, { params }) {
  try {
    await connectDb();
    const { id, itemid } = await params;

    if (!id || !itemid) {
      return NextResponse.json(
        { message: "Module ID and Item ID are required" },
        { status: 400 }
      );
    }
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "Module not found" },
        { status: 404 }
      );
    }
    const item = module.items.find((item) => item._id.toString() === itemid);
    if (!item) throw new Error("Item not found");

    // ✅ Delete image from Cloudinary if it exists
    if (item.image && item.id) {
      await cloudinary.v2.uploader.destroy(item.image.id);
    }
    // ✅ Remove the item from the items array inside the Module document
    const updatedModule = await Module.findByIdAndUpdate(
      id,
      { $pull: { items: { _id: new mongoose.Types.ObjectId(itemid) } } },
      { new: true }
    );

    if (!updatedModule) {
      return NextResponse.json(
        { message: "Module not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Item deleted successfully", module: updatedModule },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDb();
    const { id, itemid } = await params;
    const { visible } = await request.json(); // ✅ Extract new visibility value

    if (!id || !itemid) {
      return NextResponse.json(
        { message: "Module ID and Item ID are required" },
        { status: 400 }
      );
    }

    if (typeof visible !== "boolean") {
      return NextResponse.json(
        { message: "Invalid visibility value" },
        { status: 400 }
      );
    }

    // ✅ Find the module
    const module = await Module.findById(id);
    if (!module) {
      return NextResponse.json(
        { message: "Module not found" },
        { status: 404 }
      );
    }

    // ✅ Find the item inside "items" array
    const item = module.items.find((item) => item._id.toString() === itemid);
    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // ✅ Update visibility
    item.visible = visible;

    // ✅ Save updated module
    const updatedModule = await module.save();

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
