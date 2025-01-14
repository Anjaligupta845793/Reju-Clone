import connectDb from "@/utills/mongodb";
import { Module } from "@/model/Module";
import User from "@/model/User";
import { NextResponse } from "next/server";
import getUserData from "@/utills/getUserData";
import { headers } from "next/headers";

export async function POST(request) {
  try {
    // Connect to the database
    await connectDb();

    // Parse the request body
    const body = await request.json();

    const { type, FormType } = body;
    if (!type || !FormType) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const userId = await getUserData(request);

    // Create a new module
    const module = await Module.create({
      type,
      FormType: FormType,
      owner: userId,
    });

    return NextResponse.json(
      {
        message: "Module is created",
        module,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Got error while adding module:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
