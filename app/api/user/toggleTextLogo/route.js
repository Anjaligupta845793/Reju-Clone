import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDb from "@/utills/mongodb";
import getUserData from "@/utills/getUserData";

export async function POST(request) {
  await connectDb();

  try {
    const userid = await getUserData(request);
    const { type } = await request.json();

    const user = await User.findById(userid).select("-password");
    if (!user) {
      return NextResponse.json(
        { message: "This user doesn't exist" },
        { status: 404 }
      );
    }
    if (type == "text") {
      user.displayName = true;
      user.displayLogo = false;
    } else if (type == "logo") {
      user.displayName = false;
      user.displayLogo = true;
    } else {
      return NextResponse.json({ message: "bad request" }, { status: 400 });
    }
    await user.save();

    return NextResponse.json(
      { message: "Updated successfully", user },
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
