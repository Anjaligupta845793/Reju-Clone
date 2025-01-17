import { NextResponse } from "next/server";
import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";

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
