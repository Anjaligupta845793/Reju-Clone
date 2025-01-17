import { NextResponse } from "next/server";
import { Module } from "@/model/Module";
import connectDb from "@/utills/mongodb";

export async function DELETE(request, { params }) {
  try {
    await connectDb();
    const { moduleid, itemid } = params;

    if (!moduleid || !itemid) {
      return NextResponse.json(
        { message: "Module ID and Item ID are required" },
        { status: 400 }
      );
    }

    const module = await Module.findById(moduleid);

    if (!module) {
      return NextResponse.json(
        { message: "Module not found" },
        { status: 404 }
      );
    }

    const itemIndex = module.items.findIndex(
      (item) => item._id.toString() === itemid
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        {
          message: "Item not found",
        },
        { status: 404 }
      );
    }

    module.items.splice(itemIndex, 1);
    await module.save();

    return NextResponse.json(
      { message: "Deleted successfully", module },
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
