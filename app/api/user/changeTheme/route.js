import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDb from "@/utills/mongodb";
import getUserData from "@/utills/getUserData";

export async function POST(request) {
  await connectDb();

  try {
    const userid = await getUserData(request);
    const { field, value } = await request.json();

    const user = await User.findById(userid).select("-password");
    if (!user) {
      return NextResponse.json(
        { message: "This user doesn't exist" },
        { status: 404 }
      );
    }

    await User.findByIdAndUpdate(
      userid,
      { $set: { [`theme.${field}`]: value } },
      { new: true }
    );
    const updatedUser = await User.findById(userid).select("-password");
    return NextResponse.json(
      { message: "Updated successfully", updatedUser },
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
